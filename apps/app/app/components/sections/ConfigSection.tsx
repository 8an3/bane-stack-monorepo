


export const ConfigSection = ({ title, items, className = "" }) => (
    <div className="w-[75%]">
        <h4 className={`text-xl font-medium mb-4 text-foreground ${className}`}>{title}</h4>
        <ul className="text-muted-foreground space-y-1 text-sm">
            {items.map((item, index) => (
                <li key={index}>
                    <span className="mr-2">-</span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

export function ConfigDemo() {
    return (
          <ConfigSection title="Global snippets file location" items={["AppData/Roaming/Code - Insiders/User/globalStorage/skyler.ocrmnav/ocrmnavigator.code-snippets"]} />
    )
}