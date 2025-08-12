import type { LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/modules/otp/client-auth";
import { redirectSessionStorage } from "~/modules/otp/auth-session";

export async function loader({ request }: LoaderFunctionArgs) {
	const redirectCookie = await redirectSessionStorage.getSession(request.headers.get("cookie"));
	const redirectTo = redirectCookie.get("redirectTo") || "/client/portal/dashboard";
	await authenticator.authenticate("TOTP", request, {
		successRedirect: redirectTo,
		failureRedirect: "/client/auth/login",
	});
}
