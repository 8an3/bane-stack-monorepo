


export const Changelog = ({ version, fixed = null, changed = null, added = null, issue = null, deleted = null,className, stack='DevStack' }) => (
    <div className={`w-[100%] mx-auto ${className}`}>
        <h3 className="text-xl font-medium mb-4 text-foreground ">{stack}: {version}</h3>
        {added && (
            <>
                <p>Added</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                    {added.map((item, index) => (
                        <li key={index} className='flex items-center gap-3'>
                            <span>-</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </>
        )}
        {fixed && (
            <>
                <p>Fixed</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                    {fixed.map((item, index) => (
                        <li key={index} className='flex items-center gap-3'>
                            <span>-</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </>
        )}
        {deleted && (
            <>
                <p>Removed</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                    {deleted.map((item, index) => (
                        <li key={index} className='flex items-center gap-3'>
                            <span>-</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </>
        )}
        {changed && (
            <>
                <p>Changed</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                    {changed.map((item, index) => (
                        <li key={index} className='flex items-center gap-3'>
                            <span>-</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </>
        )}
        {issue && (
            <>
                <p>Issue</p>
                <ul className="text-muted-foreground space-y-1 text-sm">
                    {issue.map((item, index) => (
                        <li key={index} className='flex items-center gap-3'>
                            <span>-</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </>
        )}
    </div>
);

export function ChangelogDemo() {
    return (
        <Changelog 
         version="2.0.0"
         added={[
        "Hopefully I can remember everything lol:",
        "new web based ui system that includes",
        "Formatter with real time viewer goal is to cover all file types",
        "rich text md editor incldues inline and split renderers, reference sheet, readme builder and more",
        "new snippets build packed with features to help create snippets faster and easier.... way easier and faster",
        "color wheels",
        "lucide icons",
        "md ref sheet",
        "vscode ref sheet",
        "new str ui both in vscode and web based",
        "convert v2 to v1 routing for remix",
        "new remix builder via npx create-remixv2",
        "install shadcn",
        "shadcn components on editor context",
        "add eslint and prettier configs",
        "install remix auth with scaffolding",
        "install remix otp with scaffolding",
        "custom remix stack",
        "react-router folder routing to mimic remix routing v1",
        "create mono repo",
        "create single app project",
        "convert single app project to mono repo",
        "build and deply configurator ui used to only be hard coded and not available to anyone",
        "str init",
        "str setup and build",
        "update prisma scripts through str",
        "through new ui create devstack cmds and chains, str cmds and chains, mds, snippets",
        "configure missing imports && add missing imports",
        "configure default apps ",
        "vs code theme configurator that saves workspace, globally, clipboard and also converts to tailwind v3 and v4 if you love your theme that much you can even put it on your site with no extra effort",
        "in editor context menu:",
        "context snippets",
        "import snippets",
        "all of shadcns components inserted at cursor",
        "various remix functions and things inserted at cursor",
        "auto remix action builder",
        "open route in browser",
        "insert route files",
        "open object in schema",
        "open github repo in browser",
        "various github functions",
        "various formatters",
        "various devstack functionality",
        "theres more... but you get the point",
      ]}
          changed={["Superuser Task Runner ( name was changed at this time ), was merged into DevStack keeping all of the original functionality while at the same time building upon to make it easier for users with a new ui, instead of always editing config files with a cli based system"]} 
         
            />
    )
}