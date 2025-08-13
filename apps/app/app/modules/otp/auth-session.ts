import { createCookieSessionStorage } from "@remix-run/node";

export type { User } from "@prisma/client";

export const authSessionStorage = createCookieSessionStorage({
	cookie: {
		name: "__auth-session",
		httpOnly: true,
		path: "/",
		sameSite: "lax",
		secrets: ["s3cr3tqwe45"],
		secure: process.env.NODE_ENV === "production",
	},
});
