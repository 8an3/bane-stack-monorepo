import { Badge, Button, Card, CardContent, CardHeader, CardTitle, Label, Separator, Switch } from "~/components/ui";
import { ArrowRight, Check, ChevronDown, Code, Copy, Download, Info, MessageCircleWarning, Rocket, Settings } from "lucide-react";
import { useEffect, useRef, useState } from 'react';




export function DisplayInstallCode({ title = 'Install', libModule = 'devstack', desc = null }) {
    const [copied, setCopied] = useState(false);
    const [lib, setLib] = useState('npm');
    const [globalValue, setGlobalValue] = useState(false);
    const [codeText, setCodeText] = useState('');

    const copyToClipboard = (library) => {
        let fullCmd = '';
        switch (library) {
            case 'npm':
                fullCmd = `npm install ${globalValue ? '-g' : ''} ${libModule}`.replace(/\s+/g, ' ').trim();
                break;
            case 'pnpm':
                fullCmd = `pnpm install ${globalValue ? '-g' : ''} ${libModule}`.replace(/\s+/g, ' ').trim();
                break;
            case 'yarn':
                fullCmd = `yarn ${globalValue ? 'global ' : ''}add ${libModule}`.replace(/\s+/g, ' ').trim();
                break;
            case 'bun':
                fullCmd = `bun install ${globalValue ? '-g' : ''} ${libModule}`.replace(/\s+/g, ' ').trim();
                break;
            default:
                fullCmd = `npm install ${globalValue ? '-g' : ''} ${libModule}`.replace(/\s+/g, ' ').trim();
        }
        navigator.clipboard.writeText(fullCmd);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    useEffect(() => {
        let cmdText;
        switch (lib) {
            case 'npm':
                cmdText = `npm install ${globalValue ? '-g' : ''} ${libModule}`;
                break;
            case 'pnpm':
                cmdText = `pnpm install ${globalValue ? '-g' : ''} ${libModule}`;
                break;
            case 'yarn':
                cmdText = `yarn ${globalValue ? 'global ' : ''}add ${libModule}`;
                break;
            case 'bun':
                cmdText = `bun install ${globalValue ? '-g' : ''} ${libModule}`;
                break;
            default:
                cmdText = `npm install ${globalValue ? '-g' : ''} ${libModule}`;
        }
        setCodeText(cmdText.replace(/\s+/g, ' ').trim());
    }, [lib, globalValue, libModule]);

    return (
        <div className="border border-border bg-background/70 grid rounded-[5px] w-full min-w-[500px]">
            <div className='flex justify-between items-center gap-3 p-3'>
                <div className="flex items-center gap-3">
                    <Code />
                    <Separator
                        orientation="vertical"
                        className="mx-2 data-[orientation=vertical]:h-4"
                    />
                    {title}

                </div>
                <div className='flex items-center gap-3'>
                    <div className="flex items-center gap-3">
                        <Label className="text-muted-foreground">Global</Label>
                        <Switch
                            checked={globalValue}
                            onCheckedChange={setGlobalValue}
                        />
                    </div>
                    <Separator
                        orientation="vertical"
                        className="mx-2 data-[orientation=vertical]:h-4"
                    />
                    <Button
                        size="sm"
                        variant="outline"
                        className="text-muted-foregroup"
                        onMouseOver={() => setLib('npm')}
                        onClick={() => copyToClipboard('npm')}
                    >
                        {copied && lib === 'npm' ? <Check className="w-4 h-4 text-[#16a34a]" /> : 'npm'}
                    </Button>
                    <Button
                        size="sm"
                        variant="outline"
                        className="text-muted-foregroup"
                        onMouseOver={() => setLib('pnpm')}
                        onClick={() => copyToClipboard('pnpm')}
                    >
                        {copied && lib === 'pnpm' ? <Check className="w-4 h-4 text-[#16a34a]" /> : 'pnpm'}
                    </Button>
                    <Button
                        size="sm"
                        variant="outline"
                        className="text-muted-foregroup"
                        onMouseOver={() => setLib('yarn')}
                        onClick={() => copyToClipboard('yarn')}
                    >
                        {copied && lib === 'yarn' ? <Check className="w-4 h-4 text-[#16a34a]" /> : 'yarn'}
                    </Button>
                    <Button
                        size="sm"
                        onMouseOver={() => setLib('bun')}
                        variant="outline"
                        className="text-muted-foregroup"
                        onClick={() => copyToClipboard('bun')}
                    >
                        {copied && lib === 'bun' ? <Check className="w-4 h-4 text-[#16a34a]" /> : 'bun'}
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