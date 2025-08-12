import { useNavigate } from "@remix-run/react";
import { AlertCircle } from "lucide-react";
import { Button } from "../ui/button";


export function LoadErrorPage({ text = 'Failed to Load Page...', size = 12, loadError }) {
    const nav = useNavigate()
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center max-w-md">
                <AlertCircle className={`h-${size} w-${size} text-red-500 mx-auto mb-4`} />
                <div className="text-lg font-medium text-foreground mb-2">{text}</div>
                <div className="text-sm text-muted-foreground mb-4">{loadError}</div>
                <Button
                    onClick={() => nav(0)}
                    className="px-4 py-2 bg-primary hover:bg-primary/20 text-foreground rounded-lg transition-colors"
                >
                    Retry
                </Button>
            </div>
        </div>
    );
}