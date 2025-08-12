

export const UsageSection = ({ title, items, className = "" }) => (
    <div className={`w-[100%] mx-auto ${className}`}>
        <h3 className="text-xl font-medium mb-4 text-foreground">{title}</h3>
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

export function UseSectionDemo() {
    return (
        <UsageSection
                                        title="Getting Started"
                                        items={[
                                            "Download and install Catalyst Editor from the official website",
                                            "Open your first project using File > Open Folder or drag and drop",
                                            "Configure your preferred settings through the Settings panel",
                                            "Install language extensions from the Extension Marketplace",
                                        ]}
                                    />
    )
}