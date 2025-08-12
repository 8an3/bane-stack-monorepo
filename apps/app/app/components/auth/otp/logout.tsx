import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/modules/otp/client-auth";

export async function loader({ request }: LoaderFunctionArgs) {
	return await authenticator.logout(request, { redirectTo: "/client/auth/login" });
}

export async function action({ request }: ActionFunctionArgs) {
	return await authenticator.logout(request, { redirectTo: "/client/auth/login" });
}

export const meta: MetaFunction = () => {
	return [
		{ title: "8an3/Bane" },
		{ name: "description", content: "8an3/Bane Remix Stack" },
	];
};