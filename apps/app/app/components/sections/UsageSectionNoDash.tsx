

export const UsageSectionNoDash = ({ title, items, className = "" }) => (
    <div className={`w-[100%] mx-auto ${className}`}>
        <h3 className="text-xl font-medium mb-4 text-foreground ">{title}</h3>
        <ul className="text-muted-foreground space-y-1 text-sm">
            {items.map((item, index) => (
                <li key={index}>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

export function UseageSectionNoDashDemo() {
    return (
        <UsageSectionNoDash
                            title="VSCode / UI"
                            items={[
                                "Now merged with DevStack — includes its own UI in VSCode, while retaining full CLI functionality",
                                "Under DevStack’s title bar, click 'Viewers', then under 'Master Apps' select 'Setup and Configure'",
                                "Here, you’ll be able to select whether your project is a Monorepo or Single App configuration",
                                "Once the configurator is complete, a tree view will appear — any item or command clicked will execute immediately",
                                "To create or edit commands or chains, go to 'Viewers' and select either 'STR Commands' or 'Tasks'",
                                "- When opening the UI with your list of commands, you’ll see a search bar at the top and buttons at the bottom for various actions — e.g., Build Projects for Deployment, Edit Build Deployment, Create Concurrent, and Create Command",
                            ]}
                        />
    )
}