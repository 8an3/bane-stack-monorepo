


export function TsxSection({ code, title = "TypeScript Code", note = null, noteItems = null, icon = null, language = "tsx" }) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="border border-border bg-background/70 grid rounded-[5px] w-full min-w-[500px] max-w-[100%] overflow-x-auto">
            <div className='flex justify-between items-center gap-3 p-3'>
                <div className="flex items-center gap-3">
                    <Terminal />
                    <Separator
                        orientation="vertical"
                        className="mx-2 data-[orientation=vertical]:h-4"
                    />
                    {title}
                </div>
                <div className='flex items-center gap-3'>
                    <Badge variant="secondary" className="text-xs">
                        {language.toUpperCase()}
                    </Badge>
                    <Separator
                        orientation="vertical"
                        className="mx-2 data-[orientation=vertical]:h-4"
                    />
                    <Button
                        size="icon"
                        variant="ghost"
                        className="text-muted-foregroup"
                        onClick={() => copyToClipboard(code)}
                    >
                        {copied === true ? <Check className="w-4 h-4 text-[#16a34a]" /> : <Copy className="w-4 h-4 " />}
                    </Button>
                </div>
            </div>
            <div className="border-t border-border bg-background/70 grid rounded-[0px] gap-3 p-3 w-full">
                <pre className="p-4 text-sm text-left overflow-x-auto bg-slate-950 text-slate-50 rounded-md">
                    <code className="language-tsx">
                        {code}
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
                    <div className='flex items-center gap-1 mt-3 ml-[35px] mb-3' >
                        <div className="flex-shrink-0">
                            {icon ? icon : <Info />}
                        </div>
                        <h4 className="text-sm font-medium text-foreground ">{title ? title : 'NOTE'}</h4>
                    </div>
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

export function TsxFunctionDemo() {
    return (
        <TsxSection
                        code={`import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from 'finance-calculator-auto-dealers/calculator-slice';

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    // your other reducers...
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;`}
                        title="Add the Calculator Slice to Your Store"
                        language="tsx"
                    />
    )
}