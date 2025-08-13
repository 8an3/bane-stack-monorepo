import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { Link, useSubmit, useNavigate, useLoaderData, useNavigation, Form, NavLink } from "@remix-run/react";
import { json } from "@remix-run/node";
import { authenticator } from "~/modules/otp/client-auth";
import { getSession, commitSession } from "~/modules/otp/auth-session";
import { Input } from "~/components/ui/input";
import { ButtonLoading, Label } from "~/components/ui";
import { GalleryVerticalEnd, Zap } from "lucide-react";
import { prisma } from "~/modules/libs/prisma";
import { cn } from "~/components/ui/utils";
import { redirectSessionStorage } from "~/modules/otp/auth-session";
import { ButtonStyled } from "~/components/customUi/ButtonStyled";

/**export async function loader({ request }: LoaderFunctionArgs) {
	const redirectCookie = await redirectSessionStorage.getSession(request.headers.get("cookie"));
	const redirectTo = redirectCookie.get("redirectTo") || "/client/portal/dashboard";
	await authenticator.isAuthenticated(request, { successRedirect: redirectTo });

	const cookie = await getSession(request.headers.get("cookie"));
	const authEmail = cookie.get("auth:email");
	const authError = cookie.get(authenticator.sessionErrorKey);
	const d = await prisma.dealer.findUnique({
		where: { id: 1 },
		select: {
			dealerName: true,
			metaDesc: true,
		},
	});
	// Commit session to clear any  error message.
	return json({ authEmail, authError, d } as const, {
		headers: {
			"set-cookie": await commitSession(cookie),
		},
	});
}
export async function action({ request }: ActionFunctionArgs) {
	const url = new URL(request.url);
	const currentPath = url.pathname;

	await authenticator.authenticate("TOTP", request, {
		// The successRedirect route will be used to verify the OTP code.
		// This could be the current pathname or any other route that renders the verification form.
		successRedirect: "/client/auth/verify",

		// The failureRedirect route will be used to render any possible error.
		// This could be the current pathname or any other route that renders the login form.
		failureRedirect: currentPath,
	});
} */

export const meta: MetaFunction = () => {
	return [
		{ title: "8an3/Bane" },
		{ name: "description", content: "8an3/Bane Remix Stack" },
	];
};

export default function OTPSignUp() {
	return (
		<div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
			<div className="w-full max-w-sm">
				<div className={cn("flex flex-col gap-6")}>
					<Form method="post" autoComplete="off">
						<div className="flex flex-col gap-6">
							<div className="flex flex-col items-center gap-2">
								<NavLink to="/dealer/home" className="flex flex-col items-center gap-2 font-medium">
									<div className="flex h-8 w-8 items-center justify-center rounded-md">
										<Zap className="size-6  text-primary" />
									</div>
									<span className="sr-only">Catalyst Software</span>
								</NavLink>
								<h1 className="text-xl font-bold">Catalyst Software</h1>
								<div className="text-center text-sm">OTP Sign Up</div>
							</div>
							<div className="flex flex-col gap-6">
								<div className="grid gap-2 mx-auto w-[95%]">
									<Label htmlFor="email">Email</Label>
									<Input id="email" type="email" placeholder="m@example.com" className="rounded-none " required />
								</div>
								 
								<ButtonStyled loadingText="Signing up...">Sign Up</ButtonStyled>
							</div>
						</div>
					</Form>
					<div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  ">No account? Once your a client you account will already be set up for you.</div>
					<p className="text-center text-xs leading-relaxed text-gray-400">
						By continuing, you agree to our <span className="clickable underline">Terms of Service</span>
					</p>
				</div>
			</div>
		</div>
	);
}
