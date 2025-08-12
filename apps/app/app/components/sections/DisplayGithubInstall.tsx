import { Badge, Button, Card, CardContent, CardHeader, CardTitle, Label, Separator, Switch } from "~/components/ui";
import { ArrowRight, Check, ChevronDown, Code, Copy, Download, Info, MessageCircleWarning, Rocket, Settings } from "lucide-react";
import { useEffect, useRef, useState } from 'react';




export function DisplayGithubInstall({ title = 'Clone', libModule = 'NTRSync-Mobile', owner = '8an3', desc = null }) {
    const httpscmd = `git clone https://github.com/${owner}/${libModule}.git`
    const sshcmd = `git@github.com:${owner}/${libModule}.git`
    const clicmd = `gh repo clone ${owner}/${libModule}`
    const [codeText, setCodeText] = useState(httpscmd);

    const timerRef = useRef(0);
    const copyText = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedText(text);
            setTimeout(() => setCopiedText(""), 3000);
        });
    };
    const [copiedText, setCopiedText] = useState();
    useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);

    return (
        <div className="border border-border bg-background/70 grid rounded-[5px] w-full md:min-w-[500px]">
            <div className='flex justify-between items-center gap-3 p-3'>
                <div className="flex items-center gap-3">
                    <Download />
                    <Separator
                        orientation="vertical"
                        className="mx-2 data-[orientation=vertical]:h-4"
                    />
                    {title}

                </div>
                <div className='flex items-center gap-3'>
                    <Button
                        size="sm"
                        variant="outline"
                        className="text-muted-foregroup"
                        onMouseOver={() => setCodeText(httpscmd)}
                        onClick={() => copyText(httpscmd)}
                    >
                        {copiedText === httpscmd ? <Check className="w-4 h-4 text-[#16a34a]" /> : 'https'}
                    </Button>
                    <Button
                        size="sm"
                        variant="outline"
                        className="text-muted-foregroup"
                        onMouseOver={() => setCodeText(sshcmd)}
                        onClick={() => copyText(sshcmd)}
                    >
                        {copiedText === sshcmd ? <Check className="w-4 h-4 text-[#16a34a]" /> : 'ssh'}
                    </Button>
                    <Button
                        size="sm"
                        onMouseOver={() => setCodeText(clicmd)}
                        variant="outline"
                        className="text-muted-foregroup"
                        onClick={() => copyText(clicmd)}
                    >
                        {copiedText === clicmd ? <Check className="w-4 h-4 text-[#16a34a]" /> : 'cli'}
                    </Button>
                </div>
            </div>
            <div className="border-t border-border bg-background/70 grid rounded-[0px] gap-3 p-3 w-full">
                <pre className="p-4 text-sm text-left">
                    <code>
                        {codeText}
                    </code>
                </pre>
            </div>
            {desc && (
                <div className="border-t border-border bg-background/70 grid rounded-[0px] gap-3 p-3 w-full">
                    <div className='flex items-center gap-1 mt-3 ml-[35px] mb-3' >
                        <div className="flex-shrink-0">
                            <Info />
                        </div>
                        <p className="text-sm text-foreground mt-1">{desc}</p>
                    </div>
                </div>
            )}
        </div>
    );
}


