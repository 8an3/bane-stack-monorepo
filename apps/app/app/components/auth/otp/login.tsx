import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { Link, useSubmit, useNavigate, useLoaderData, useNavigation, Form, NavLink, useFetcher } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import { authenticator } from "~/modules/otp/client-auth";
import { getSession, commitSession, sessionStorage } from "~/modules/otp/auth-session";
import { Input } from "~/components/ui/input";
import {  Label } from "~/components/ui";
import { OptiInput } from "~/components/shared/shared";
import { CarFront, GalleryVerticalEnd, Zap } from "lucide-react";
import { prisma } from "~/modules/libs/prisma";
import { cn } from "~/components/ui/utils";
import { redirectSessionStorage } from "~/modules/otp/auth-session";
import { ButtonStyled } from "~/components/customUi/ButtonStyled";

/**export async function loader({ request }: LoaderFunctionArgs) {
	const redirectCookie = await redirectSessionStorage.getSession(request.headers.get("cookie"));
	let redirectTo = redirectCookie.get("redirectTo");
	redirectTo = redirectTo ? redirectTo : "/client/portal/dashboard";
	await authenticator.isAuthenticated(request, { successRedirect: redirectTo });

	const session = await sessionStorage.getSession(request.headers.get("Cookie"));
	const user = session.get("user");
	const authEmail = session.get("auth:email");
	const authError = session.get(authenticator.sessionErrorKey);
	if (user) return redirect(redirectTo);
	const d = await prisma.dealer.findUnique({
		where: { id: 1 },
		select: {
			dealerName: true,
			metaDesc: true,
		},
	});
	return json({ d, redirectTo, authError, authEmail } as const, {
		headers: {
			"set-cookie": await sessionStorage.commitSession(session),
		},
	});
}
export async function action({ request }: ActionFunctionArgs) {
	await authenticator.authenticate("TOTP", request, {
		successRedirect: "/client/auth/verify",
		failureRedirect: "/client/auth/login",
	});
} */
export const meta: MetaFunction = () => {
	return [
		{ title: "8an3/Bane" },
		{ name: "description", content: "8an3/Bane Remix Stack" },
	];
};



export default function OTPLogin() {
//	const {   authError,  } = useLoaderData<typeof loader>();
const authError = false
	const fetcher = useFetcher();
	return (
		<div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
			<div className="w-full max-w-sm">
				<div className={cn("flex flex-col gap-6")}>
					<Form method="post">
						<div className="flex flex-col gap-6">
							<div className="flex flex-col items-center gap-2">
								<NavLink to="/dealer/home" className="flex flex-col items-center gap-2 font-medium">
									<div className="flex h-8 w-8 items-center justify-center rounded-md">
										<Zap className="size-6  text-primary" />
									</div>
									<span className="sr-only">Catalyst Software</span>
								</NavLink>
								<h1 className="text-xl font-bold">Catalyst Software</h1>
								<div className="text-center text-sm">OTP Login</div>
							</div>
							<div className="flex flex-col gap-6">
								<div className="grid gap-2 mx-auto w-[95%]">
									<Label htmlFor="email">Email</Label>
									<Input id="email" name="email" placeholder="johnwick@thecontinental.com" className="rounded-none" required />
								</div>
								<ButtonStyled loadingText="Logging in...">Login</ButtonStyled>
								{authError && <span className="font-semibold text-red-400">{authError?.message}</span>}
								{fetcher.data && fetcher.data.success === false && <span className="font-semibold text-red-400">{fetcher?.data?.message}</span>}
							</div>
						</div>
					</Form>
					<div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary space-x-2">
						<span>No account?</span>
						<NavLink to="client/auth/signup">Sign Up</NavLink>
					</div>
					<p className="text-center text-xs leading-relaxed text-gray-400">
						By continuing, you agree to our <span className="clickable underline">Terms of Service</span>
					</p>
				</div>
			</div>
		</div>
	);
}
