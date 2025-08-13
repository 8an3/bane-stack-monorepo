import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "~/components/ui/button";

export function CopyText({ code }) {
	const [copiedText, setCopiedText] = useState(null);
	const timerRef = useRef(0);
	const copyText = (text) => {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				setCopiedText(text);
				timerRef.current = setTimeout(() => setCopiedText(""), 3000);
			})
			.catch((error) => {
				console.error("Failed to copy text: ", error);
			});
	};

	useEffect(() => {
		return () => clearTimeout(timerRef.current);
	}, []);
	return (
		<Button variant="ghost" size="icon" className="h-8 w-8 cursor-pointer  hover:bg-background/80" onClick={() => copyText(code)}>
			{copiedText !== code ? <Copy className="h-4 w-4 hover:text-primary" /> : <Check className="h-4 w-4 text-green-500" />}
		</Button>
	);
}
