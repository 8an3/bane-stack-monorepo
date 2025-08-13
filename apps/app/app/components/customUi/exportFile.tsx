import {  Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "~/components/ui/button";
import { useExport } from "~/modules/hooks/useExportTsx";


export function ExportFile({ code = null, filename='MyComponent.tsx' }) {
const exportFile = useExport();

const handleClick = () => {
	if (!code || !filename) return null;
  exportFile(code, filename);
};
	return (
		<Button variant="ghost" size="icon" className="h-8 w-8 cursor-pointer  hover:bg-background/80" onClick={() => handleClick()}>
			<Download className="h-4 w-4 hover:text-primary" /> 
		</Button>
	);
}
