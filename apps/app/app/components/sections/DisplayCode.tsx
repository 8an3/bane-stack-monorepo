import { Badge, Button, Card, CardContent, CardHeader, CardTitle, Label, Separator, Switch } from "~/components/ui";
import { ArrowRight, Check, ChevronDown, Code, Copy, Download, Info, MessageCircleWarning, Rocket, Settings } from "lucide-react";
import { useEffect, useRef, useState } from 'react';


export function DisplayCode({ title, code, note = null }) {
    const [copied, setCopied] = useState(false);
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className='w-full grid justify-center gap-3'>
            <p className="text-foreground max-w-3xl leading-relaxed ">
                {title}
            </p>
            <div className="relative w-full">
                <Button
                    size="sm"
                    variant="outline"
                    className="absolute top-2 right-2 z-10"
                    onClick={() => copyToClipboard(code)}
                >
                    <Copy className="w-4 h-4" />
                    {copied ? 'Copied!' : 'Copy'}
                </Button>
                <pre className="bg-black text-[#fafafa] p-4 rounded-lg overflow-x-auto text-sm">
                    <code>
                        {code}
                    </code>
                </pre>
                {note && (
                    <NoteSection
                        icon={<Info />}
                        items={[
                            `${note}`,
                        ]}
                    />
                )}
            </div>
        </div>
    )
}

export function DisplayCodeDemo() {
        const openWorkspace = {
        "label": "CRM",
        "path": "code-insiders -n f:/workspace",
        "type": "powershellCommand"
    };
    return (
      <DisplayCode
                        title='Open workspace in new window'
                        code={openWorkspace}
                    />    
    )
}