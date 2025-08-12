import { createCookieSessionStorage } from "@remix-run/node";

const sessionSecret = import.meta.env.VITE_SESSION_SECRET;
if (!sessionSecret) { throw new Error("VITE_SESSION_SECRET must be set"); }

export const authSessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_auth_session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: [sessionSecret],
    secure: process.env.NODE_ENV === "production",
  },
});

export async function getAuthSession(request: Request) {
  const session = await authSessionStorage.getSession(request.headers.get("Cookie"));
  return {
    session,
    headers: {
      "Set-Cookie": await authSessionStorage.commitSession(session),
    },
  };
}

export const clientSession = createCookieSessionStorage({
  cookie: {
    name: '_client_auth',
    path: '/',
    sameSite: 'lax',
    httpOnly: true,
    secrets: [process.env.SESSION_SECRET],
    secure: process.env.NODE_ENV === 'production',
  },
})