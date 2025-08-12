import { Badge, Button, Card, CardContent, CardHeader, CardTitle, Label, Separator, Switch } from "~/components/ui";
import { ArrowRight, Check, ChevronDown, Code, Copy, Download, Info, MessageCircleWarning, Rocket, Settings } from "lucide-react";
import { useEffect, useRef, useState } from 'react';




export function JsonSection({ items, title = "Configuration", note = null, noteItems = null, icon = null }) {
    const [copied, setCopied] = useState(false);


    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Safely convert items to JSON string - ensure it ALWAYS returns a string
    const formatItems = (data) => {
        try {
            if (Array.isArray(data)) {
                return JSON.stringify(data, null, 2);
            } else if (typeof data === 'object' && data !== null) {
                return JSON.stringify(data, null, 2);
            } else {
                return String(data);
            }
        } catch (error) {
            return 'Invalid JSON data';
        }
    };

    const jsonString = formatItems(items);

    // Extra safety check to ensure jsonString is always a string
    const safeJsonString = typeof jsonString === 'string' ? jsonString : JSON.stringify(jsonString, null, 2);

    return (

        <div className="border border-border bg-background/70 grid rounded-[5px] w-full min-w-[500px] max-w-[100%] overflow-x-auto">
            <div className='flex justify-between items-center gap-3 p-3'>
                <div className="flex items-center gap-3">
                    <Settings />
                    <Separator
                        orientation="vertical"
                        className="mx-2 data-[orientation=vertical]:h-4"
                    />
                    {title}

                </div>
                <div className='flex items-center gap-3'>
                    <Separator
                        orientation="vertical"
                        className="mx-2 data-[orientation=vertical]:h-4"
                    />
                    <Button
                        size="icon"
                        variant="ghost"
                        className="text-muted-foregroup"
                        onClick={() => copyToClipboard(safeJsonString)}
                    >
                        {copied === true ? <Check className="w-4 h-4 text-[#16a34a]" /> : <Copy className="w-4 h-4 " />}
                    </Button>
                </div>
            </div>
            <div className="border-t border-border bg-background/70 grid rounded-[0px] gap-3 p-3 w-full">
                <pre className="p-4 text-sm text-left">
                    <code>
                        {safeJsonString}
                    </code>
                </pre>
            </div>
            {note && (
                <div className="border-t border-border bg-background/70 grid rounded-[0px] gap-3 p-3 w-full">
                    <div className='flex items-center gap-1 mt-3 ml-[35px] mb-3' >
                        <div className="flex-shrink-0">
                            {icon ? icon : <Info />}
                        </div>
                        <h4 className="text-sm font-medium text-foreground ">{title ? title : 'NOTE'}</h4>
                    </div>
                    <div className="grid gap-3 items-start">
                        <div className="ml-3">
                            <p className="text-sm text-foreground mt-1">{note}</p>
                        </div>
                    </div>
                </div>
            )}
            {noteItems && (
                <div className="border-t border-border bg-background/70 grid rounded-[0px] gap-3 p-3 w-full">
                   
                    <div className="grid gap-3 items-start">
                        {noteItems.map((item, index) => (
                            <div key={index} className="ml-3">
                                <p className="text-sm text-foreground mt-1">{item}</p>
                            </div>
                        ))}

                    </div>
                </div>
            )}
        </div>
    );
}

export function JsonSectionDemo() {
   const sequencerConfig = {
    "label": "Auto Push",
    "path": "add, commit, push",
    "type": "chain"
};
    return (
        <JsonSection items={sequencerConfig} title='Chain Cmds' />
    )
}