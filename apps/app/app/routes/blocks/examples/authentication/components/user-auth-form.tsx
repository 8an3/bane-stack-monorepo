import OTPLogin from "~/components/auth/otp/login";
import OTPSignUp from "~/components/auth/otp/signup";
import OTPVerify from "~/components/auth/otp/verify";
import MonacoEditor from "../../editor/components2";
import { Scaffolding } from "~/components/customUi/scaffolding";
import { useEffect, useState } from "react";

export function UserAuthForm() {
	const [selectedCode, setSelectedCode] = useState("");
	const [name, setName] = useState("OTPLogin");

	const sections = [
		{ name: "OTPLogin", value: "OTPLogin", path: "/examples/otp/login.tsx.txt" },
		{ name: "OTPSignUp", value: "OTPSignUp", path: "/examples/otp/signup.tsx.txt" },
		{ name: "OTPVerify", value: "OTPVerify", path: "/examples/otp/verify.tsx.txt" },
		{ name: "auth-session", value: "auth-session", path: "/examples/otp/auth-session.ts.txt" },
		{ name: "client-auth", value: "client-auth", path: "/examples/otp/client-auth.tsx.txt" },
		{ name: "email", value: "email", path: "/examples/otp/email.tsx.txt" },
		{ name: "logout", value: "logout", path: "/examples/otp/logout.tsx.txt" },
		{ name: "magic-link", value: "magic-link", path: "/examples/otp/magic-link.tsx.txt" },
	];

	let viewSelected;
	switch (name) {
		case "OTPLogin":
			viewSelected = <OTPLogin />;
			break;
		case "OTPSignUp":
			viewSelected = <OTPSignUp />;
			break;
		case "OTPVerify":
			viewSelected = <OTPVerify />;
			break;
		case "auth-session":
			viewSelected = <Scaffolding title={"auth-session"} />;
			break;
		case "client-auth":
			viewSelected = <Scaffolding title={"client-auth"} />;
			break;
		case "email":
			viewSelected = <Scaffolding title={"email"} />;
			break;
		case "magic-link":
			viewSelected = <Scaffolding title={"magic-link"} />;
			break;
		case "logout":
			viewSelected = <Scaffolding title={"logout"} />;
			break;
		default:
			viewSelected = <OTPLogin />;
			break;
	}
	useEffect(() => {
		if (!selectedCode) return;

		const loadHookCode = async (url) => {
			try {
				const response = await fetch(url);
				if (!response.ok) throw new Error(`HTTP ${response.status}`);
				const codeContent = await response.text();
				setSelectedCode(codeContent);
			} catch (error) {
				console.error(`Failed to load ${url}:`, error);
				setSelectedCode(`// Failed to load ${url}\n// Error: ${error.message}`);
			}
		};

		loadHookCode(selectedCode);
	}, [selectedCode]);

	return (
		<div className="flex flex-col justify-center gap-4">
			<MonacoEditor code={selectedCode} sections={sections} setName={setName} name={name} viewSelected={viewSelected} />
		</div>
	);
}
