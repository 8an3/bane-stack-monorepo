import { useEffect, useState } from "react";
import { useLoaderData } from "@remix-run/react";
import eP from "~/utils/ext";
import { authSessionStorage } from "~/modules/auth/auth_session";
import { ActionArgs, json, redirect, type ActionArgs, type LoaderArgs } from "@remix-run/node";
import { prisma } from "~/modules/libs/prisma";
import { LoadingPage } from "~/components/customUi/loadingPage";
import { LoadErrorPage } from "~/components/customUi/loadErrorPage";
import { ChartAreaInteractive, data, DataTable, SectionCards } from "../blocks/sidebar/one";
import { PageHeaderFunction } from "~/components/customUi/page-header";

export default function Dashboard() {
	const { user } = useLoaderData();
	const [isLoading, setIsLoading] = useState(false);
	const [loadError, setLoadError] = useState(null);

	useEffect(() => {
		try {
			if (!user) {
				setLoadError("No user found. Please log in.");
				setIsLoading(false);
				return;
			}
			setIsLoading(false);
		} catch (error) {
			setLoadError(error.message || "An error occurred");
			setIsLoading(false);
		}
	}, [user]);

	if (isLoading) {
		return <LoadingPage />;
	}
	if (loadError) {
		return <LoadErrorPage />;
	}
	return (
		<div className="flex flex-col justify-center gap-3">
			<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
				<PageHeaderFunction description="Dashboard" />
			</div>
		</div>
	);
}

export async function action({ request }: ActionArgs) {
	const session = await authSessionStorage.getSession(request.headers.get("Cookie"));
	const email = session.get("email");
	const user = await eP.user.simple(email);
	if (!user) {
		return redirect(process.env.LOGIN);
	}

	const d = Object.fromEntries(await request.formData());
	const intent = d.intent;

	try {
		if (intent === "createFunction") {
			const result = await prisma.Function.create({
				data: {
					...data,
				},
			});
			return json({ success: true, result });
		} else if (intent === "updateFunction") {
			const result = await prisma.Function.update({
				where: { id: String(id) },
				data,
			});
			return json({ success: true, result });
		} else if (intent === "deleteFunction") {
			const result = await prisma.Function.delete({
				where: { id: String(id) },
			});
			return json({ success: true, result });
		} else {
			return json({ success: false, error: "Invalid intent" }, { status: 400 });
		}
	} catch (error) {
		return json(
			{
				success: false,
				error: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 }
		);
	}
}

export async function loader({ request }: LoaderArgs) {
	const session = await authSessionStorage.getSession(request.headers.get("Cookie"));
	const email = session.get("email");
	console.log(email, "email");
	const user = await eP.user.all(email);
	if (!user) {
		return redirect(import.meta.env.VITE_LOGIN);
	}
	return json({ user });
}

export const meta: MetaFunction = () => {
	return [{ title: "Dashboard - Bane" }, { name: "description", content: "" }];
};
