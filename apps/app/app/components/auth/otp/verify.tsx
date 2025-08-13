import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { Form, NavLink, useLoaderData, useNavigation } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import { authenticator } from "~/modules/otp/client-auth";
import { Card, Separator, Input, Label, CardHeader, CardTitle, CardDescription, CardContent, ButtonLoading, ButtonStyled } from "~/components/ui";
import { redirectSessionStorage, getSession, commitSession } from "~/modules/otp/auth-session";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "~/components/ui/input-otp";
import { cn } from "~/components/ui/utils";
import { CarFront, Zap } from "lucide-react";
import { prisma } from "~/modules/libs/prisma";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

/**
 * 
 * commented to display without loading in a second user on render
 * 
 * 
 * 
 * export async function loader({ request }: LoaderFunctionArgs) {
	await authenticator.isAuthenticated(request, {
		successRedirect: "/dealer/home",
	});

	const cookie = await getSession(request.headers.get("cookie"));
	const authEmail = cookie.get("auth:email");
	const authError = cookie.get(authenticator.sessionErrorKey);

	if (!authEmail) return redirect("/client/auth/login");
	const d = await prisma.dealer.findUnique({
		where: { id: 1 },
		select: {
			dealerName: true,
			metaDesc: true,
		},
	});
	// Commit session to clear any error message.
	return json({ authEmail, authError, d } as const, {
		headers: {
			"set-cookie": await commitSession(cookie),
		},
	});
}

export async function action({ request }: ActionFunctionArgs) {
	const url = new URL(request.url);
	let currentPath = url.pathname;

	const redirectCookie = await redirectSessionStorage.getSession(request.headers.get("cookie"));
	const cookieUrl = redirectCookie.get("redirectTo");

	if (cookieUrl) {
		currentPath = cookieUrl;
	}
	try {
		return await authenticator.authenticate("TOTP", request, {
			successRedirect: currentPath,
			failureRedirect: currentPath,
		});
	} finally {
		await redirectSessionStorage.destroySession(redirectCookie);
	}
}
 */

export default function OTPVerify() {
	//const { authEmail, authError, d } = useLoaderData<typeof loader>();
	return (
		<div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
			<div className="w-full max-w-sm">
				<div className={cn("flex flex-col gap-6")}>
					<div className="flex flex-col gap-6">
						<div className="flex flex-col items-center gap-2">
							<NavLink to="/dealer/home" className="flex flex-col items-center gap-2 font-medium">
								<div className="flex h-8 w-8 items-center justify-center rounded-md">
									<Zap className="size-6 text-primary" />
								</div>
								<span className="sr-only">Catalyst Software</span>
							</NavLink>
							<h1 className="text-xl font-bold">Catalyst Software</h1>
							<div className="text-center text-sm">Verify OTP</div>
							<p className="text-muted-foreground">Please check your inbox.</p>
							<p className="text-muted-foreground">We've sent you a OTP link email.</p>
						</div>

						<div className="grid gap-4">
							<Form method="post" autoComplete="off" className="flex w-full flex-col gap-4  justify-center">
								<div className="grid w-full  justify-center gap-1.5">
									<Label htmlFor="code" className="sr-only">
										Code
									</Label>
									<InputOTP maxLength={6} name="code" className="mx-auto mb-3">
										<InputOTPGroup>
											<InputOTPSlot index={0} />
											<InputOTPSlot index={1} />
											<InputOTPSlot index={2} />
										</InputOTPGroup>
										<InputOTPSeparator />
										<InputOTPGroup>
											<InputOTPSlot index={3} />
											<InputOTPSlot index={4} />
											<InputOTPSlot index={5} />
										</InputOTPGroup>
									</InputOTP>
								</div>
								{/**   <Input
													type="text"
													name="code"
													placeholder="Enter code..."
													required
													className=" w-full text-foreground bg-background border border-border mb-3"
													/>  */}
								<ButtonStyled loadingText="Verfiying code...">
									<p className="">Verify Code</p>
								</ButtonStyled>
							</Form>
							<Form method="POST" autoComplete="off" className="flex w-full flex-col gap-2">
								<ButtonStyled loadingText="Requesting new code..." primary={false}>
									<span className="text-sm  ">Request New Code</span>
								</ButtonStyled>
							</Form>
							{/* Errors Handling. 
							{authEmail && authError && <span className="font-semibold text-red-400">{authError?.message}</span>} */}
						</div>
					</div>
					<p className="text-center text-xs leading-relaxed text-gray-400">
						By continuing, you agree to our <span className="clickable underline">Terms of Service</span>
					</p>
				</div>
			</div>
		</div>
	);
}

/**
 * 
 * user other loader
 * 
 * export async function loader({ request }: LoaderFunctionArgs) {
									const redirectCookie = await redirectSessionStorage.getSession(request.headers.get('cookie'))
									const redirectTo = redirectCookie.get('redirectTo') || '/client/portal/dashboard'

										const session = await getSession(request.headers.get('Cookie'))
									const user = session.get('user')
									if (user) return redirect(redirectTo)

									// Get token from the URL.
									const url = new URL(request.url)
									const token = url.searchParams.get('t')

									if (token) {
										try {
										return await authenticator.authenticate('TOTP', request)
										} catch (error) {
										if (error instanceof Response) return error
										if (error instanceof Error) {
											console.error(error)
											return { authError: error.message }
										}
										return { authError: 'Invalid TOTP' }
										}
									}
										// Get the TOTP cookie and the token from the URL.
									const cookie = new Cookie(request.headers.get('Cookie') || '')
									const totpCookieValue = cookie.get('_totp')

									if (totpCookieValue) {
										const params = new URLSearchParams(totpCookieValue)
										return {
										authEmail: params.get('email'),
										authError: params.get('error'),
										}
									}

									throw redirect('/client/auth/login')
									}
									*/

/**
 * 
 * 
 * use other action
 * 
 * export async function action({ request }: Route.ActionArgs) {
									try {
										return await authenticator.authenticate('TOTP', request)
									} catch (error) {
										if (error instanceof Response) {
										const cookie = new Cookie(error.headers.get('Set-Cookie') || '')
										const totpCookieValue = cookie.get('_totp')

										if (totpCookieValue) {
											const params = new URLSearchParams(totpCookieValue)
											return {
											authEmail: params.get('email'),
											authError: params.get('error'),
											}
										}

										// If no error is found, throw the error.
										throw error
										}

										return { error: 'Invalid TOTP' }
									}
									}
									*/
