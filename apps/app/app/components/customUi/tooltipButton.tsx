import { Tooltip, TooltipContent, TooltipTrigger, } from "~/components/ui/tooltip"


export function TooltipButton({ icon, content, onClick = null }) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <button
                    className='toolbar-button format-active'
                    onClick={onClick}
                >
                    {icon}
                </button>
            </TooltipTrigger>
            <TooltipContent>
                <p>{content}</p>
            </TooltipContent>
        </Tooltip>
    );
}