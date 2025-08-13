import type { User } from "@prisma/client";
import { Authenticator } from "remix-auth";
import { authSessionStorage } from "./auth_session";
import { FormStrategy } from "remix-auth-form";
import { prisma } from "~/modules/libs/prisma";
import bcrypt from "bcryptjs";

export const authenticator = new Authenticator<User>(authSessionStorage);

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new Error("Invalid email or password"); 
    }

    const isValidPassword = await bcrypt.compare(password, user.passwordHash);
    if (!isValidPassword) {
      throw new Error("Invalid email or password");
    }

    return {
      id: user.id,
      email: user.email,
    }; 
  }),
  "user-pass" 
);