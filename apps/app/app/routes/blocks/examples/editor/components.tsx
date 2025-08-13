import React, { useState, useEffect, useRef, useCallback, lazy, Suspense } from "react";
import { Save, FileText, Eye, Code as CodeLucide, EyeOff, Settings, Download, Upload, Moon, Sun, Split, Maximize2, Code, Component, Boxes, Puzzle, Monitor } from "lucide-react";
import { LoadingPage } from "~/components/customUi/loadingPage";

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "~/components/ui/command";
import { Button } from "~/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { CopyText } from "~/components/customUi/copyText";
import { ExportFile } from "~/components/customUi/exportFile";

// Lazy load Monaco Editor to avoid SSR issues
const Editor = lazy(() => import("@monaco-editor/react"));

export default function MonacoEditor() {
	const [isClient, setIsClient] = useState(false);
	const [selectedCode, setSelectedCode] = useState(null);
	const [name, setName] = useState(null);
	const [code, setCode] = useState("");
	const [content, setContent] = useState(code);
	const [language, setLanguage] = useState("markdown");
	const [theme, setTheme] = useState("vs-dark");
	const [isPreview, setIsPreview] = useState(false);
	const [isSplitView, setIsSplitView] = useState(false);
	const [isSaving, setIsSaving] = useState(false);
	const [lastSaved, setLastSaved] = useState(null);
	const [isDirty, setIsDirty] = useState(false);
	const [isFullscreen, setIsFullscreen] = useState(false);

	const editorRef = useRef(null);
	const saveTimeoutRef = useRef(null);

	const languages = [
		{ value: "markdown", label: "Markdown" },
		{ value: "javascript", label: "JavaScript" },
		{ value: "typescript", label: "TypeScript" },
		{ value: "html", label: "HTML" },
		{ value: "css", label: "CSS" },
		{ value: "json", label: "JSON" },
		{ value: "python", label: "Python" },
		{ value: "sql", label: "SQL" },
	];

	// Ensure this only runs on the client
	useEffect(() => {
		setIsClient(true);
	}, []);

	const handleEditorChange = (value) => {
		setContent(value || "");
		setIsDirty(true);
	};

	const handleManualSave = () => {
		clearTimeout(saveTimeoutRef.current);
		autoSave(content);
	};

	const toggleFullscreen = () => {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen();
			setIsFullscreen(true);
		} else {
			document.exitFullscreen();
			setIsFullscreen(false);
		}
	};

	// Handle Monaco editor mount
	const handleEditorDidMount = (editor, monaco) => {
		editorRef.current = editor;

		// Custom keyboard shortcuts
		editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
			handleManualSave();
		});

		editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyP, () => {
			setIsPreview(!isPreview);
		});

		// Focus the editor
		editor.focus();
	};

	// Simple markdown-like preview renderer
	const renderPreview = (text) => {
		const lines = text.split("\n");
		let inCodeBlock = false;
		let codeBlockContent = [];

		return lines.map((line, index) => {
			// Handle code blocks
			if (line.startsWith("```")) {
				if (inCodeBlock) {
					inCodeBlock = false;
					const code = codeBlockContent.join("\n");
					codeBlockContent = [];
					return (
						<pre key={index} className=" bg-background text-foreground p-4 rounded-md overflow-x-auto mb-4">
							<code className="text-sm">{code}</code>
						</pre>
					);
				} else {
					inCodeBlock = true;
					return null;
				}
			}

			if (inCodeBlock) {
				codeBlockContent.push(line);
				return null;
			}

			// Handle headings
			if (line.startsWith("# ")) {
				return (
					<h1 key={index} className="text-4xl font-bold mb-6 mt-8">
						{line.slice(2)}
					</h1>
				);
			}
			if (line.startsWith("## ")) {
				return (
					<h2 key={index} className="text-3xl font-semibold mb-4 mt-6">
						{line.slice(3)}
					</h2>
				);
			}
			if (line.startsWith("### ")) {
				return (
					<h3 key={index} className="text-2xl font-medium mb-3 mt-4">
						{line.slice(4)}
					</h3>
				);
			}

			// Handle lists
			if (line.startsWith("- ")) {
				return (
					<li key={index} className="ml-4 mb-1">
						{line.slice(2)}
					</li>
				);
			}

			// Handle inline code
			const codeRegex = /`([^`]+)`/g;
			if (codeRegex.test(line)) {
				const parts = line.split(codeRegex);
				return (
					<p key={index} className="mb-3 leading-relaxed">
						{parts.map((part, i) =>
							i % 2 === 1 ? (
								<code key={i} className="bg-gray-100 px-1 py-0.5 rounded text-sm">
									{part}
								</code>
							) : (
								part
							)
						)}
					</p>
				);
			}

			if (line.trim() === "") {
				return <div key={index} className="h-4" />;
			}

			return (
				<p key={index} className="mb-3 leading-relaxed">
					{line}
				</p>
			);
		});
	};

	// Loading component for Monaco Editor
	const EditorLoading = () => <LoadingPage text="Loading editor..." />;

	// Render Monaco Editor with Suspense
	const renderEditor = () => {
		if (!isClient) {
			return <EditorLoading />;
		}

		return (
			<Suspense fallback={<EditorLoading />}>
				<Editor
					height="100%"
					language={language}
					value={code}
					theme={theme}
					onChange={handleEditorChange}
					onMount={handleEditorDidMount}
					options={{
						minimap: { enabled: true },
						fontSize: 14,
						lineNumbers: "on",
						wordWrap: "on",
						automaticLayout: true,
						scrollBeyondLastLine: false,
						folding: true,
						bracketMatching: "always",
						renderWhitespace: "selection",
						multiCursorModifier: "alt",
						formatOnPaste: true,
						formatOnType: true,
						suggest: {
							showKeywords: true,
							showSnippets: true,
						},
					}}
				/>
			</Suspense>
		);
	};
	const ButtonBar = () => {
		return (
			<div className="flex items-center space-x-2">
				<Select value={language} onValueChange={setLanguage}>
					<SelectTrigger className="w-32">
						<SelectValue placeholder="Select language" />
					</SelectTrigger>
					<SelectContent>
						{languages.map((lang) => (
							<SelectItem key={lang.value} value={lang.value}>
								{lang.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>

				<Button variant="outline" size="sm" onClick={() => setIsSplitView(!isSplitView)}>
					<Split className="h-4 w-4 mr-1" />
					Split
				</Button>

				<Button variant="outline" size="sm" onClick={() => setIsPreview(!isPreview)}>
					{isPreview ? <EyeOff className="h-4 w-4 mr-1" /> : <Eye className="h-4 w-4 mr-1" />}
					{isPreview ? "Edit" : "Preview"}
				</Button>

				<Button size="sm" onClick={handleManualSave} disabled={!isDirty}>
					<Save className="h-4 w-4 mr-1" />
					Save
				</Button>

				<Button variant="outline" size="sm" onClick={toggleFullscreen}>
					<Maximize2 className="h-4 w-4" />
				</Button>
			</div>
		);
	};
	const ButtonBar2 = () => {
		return (
			<div className="flex items-center space-x-4">
				<ExportFile code={code} filename={`${name}.tsx`} />
				<CopyText code={code} />
			</div>
		);
	};
	const sections = [
		{ name: "Hooks - use Copy To Clipboard", value: "useCopyToClipboardCode", path: "/examples/hooks/use-copy-to-clipboard.ts.txt" },
		{ name: "Hooks - use Is Mobile", value: "useIsMobileCode", path: "/examples/hooks/use-mobile.ts.txt" },
		{ name: "Hooks - use Mounted", value: "useMountedCode", path: "/examples/hooks/use-mounted.ts.txt" },
		{ name: "Hooks - use Mutation Observer", value: "useMutationObserverCode", path: "/examples/hooks/use-mutation-observer.ts.txt" },
		{ name: "Hooks - use Fuzzy Search", value: "useFuzzySearchCode", path: "/examples/hooks/useFuzzySearch.tsx.txt" },
		{ name: "Hooks - use Media Query", value: "useMediaQueryCode", path: "/examples/hooks/useMediaQuery.tsx.txt" },
		{ name: "Hooks - use Export Markdown", value: "useExportMarkdown", path: "/examples/hooks/useExportMarkdown.tsx.txt" },
		{ name: "Hooks - use Export Tsx", value: "useExportTsx", path: "/examples/hooks/useExportTsx.tsx.txt" },

		{ name: "Custom UI - announcement", value: "announcement", path: "/examples/customUi/announcement" },
		{ name: "Custom UI - app-sidebar", value: "app-sidebar", path: "/examples/customUi/app-sidebar" },
		{ name: "Custom UI - ButtonStyled", value: "ButtonStyled", path: "/examples/customUi/ButtonStyled" },
		{ name: "Custom UI - callout", value: "callout", path: "/examples/customUi/callout" },
		{ name: "Custom UI - copyText", value: "copyText", path: "/examples/customUi/copyText" },
		{ name: "Custom UI - data", value: "data", path: "/examples/customUi/data" },
		{ name: "Custom UI - debouncedInput", value: "debouncedInput", path: "/examples/customUi/debouncedInput" },
		{ name: "Custom UI - exportFile", value: "exportFile", path: "/examples/customUi/exportFile" },
		{ name: "Custom UI - filter", value: "filter", path: "/examples/customUi/filter" },
		{ name: "Custom UI - fuzzyFilter", value: "fuzzyFilter", path: "/examples/customUi/fuzzyFilter" },
		{ name: "Custom UI - fuzzySort", value: "fuzzySort", path: "/examples/customUi/fuzzySort" },
		{ name: "Custom UI - incId", value: "incId", path: "/examples/customUi/incId" },
		{ name: "Custom UI - loadErrorPage", value: "loadErrorPage", path: "/examples/customUi/loadErrorPage" },
		{ name: "Custom UI - loading", value: "loading", path: "/examples/customUi/loading" },
		{ name: "Custom UI - loadingPage", value: "loadingPage", path: "/examples/customUi/loadingPage" },
		{ name: "Custom UI - nav-main", value: "nav-main", path: "/examples/customUi/nav-main" },
		{ name: "Custom UI - nav-projects", value: "nav-projects", path: "/examples/customUi/nav-projects" },
		{ name: "Custom UI - nav-user", value: "nav-user", path: "/examples/customUi/nav-user" },
		{ name: "Custom UI - NavButton", value: "NavButton", path: "/examples/customUi/NavButton" },
		{ name: "Custom UI - NavButtonStyled", value: "NavButtonStyled", path: "/examples/customUi/NavButtonStyled" },
		{ name: "Custom UI - option", value: "option", path: "/examples/customUi/option" },
		{ name: "Custom UI - page-header", value: "page-header", path: "/examples/customUi/page-header" },
		{ name: "Custom UI - PaginationButton", value: "PaginationButton", path: "/examples/customUi/PaginationButton" },
		{ name: "Custom UI - smallTable", value: "smallTable", path: "/examples/customUi/smallTable" },
		{ name: "Custom UI - team-switcher", value: "team-switcher", path: "/examples/customUi/team-switcher" },
		{ name: "Custom UI - theme-selector", value: "theme-selector", path: "/examples/customUi/theme-selector" },
		{ name: "Custom UI - tooltipButton", value: "tooltipButton", path: "/examples/customUi/tooltipButton" },
		{ name: "Custom UI - Scaffolding Section", value: "scaffolding", path: "/examples/customUi/scaffolding.tsx.txt" },
		{ name: "Custom UI - Custom Scrollbar Tailwind Themed", value: "customScrollBarTWThemed", path: "/examples/other/customScrollBarTWThemed.css.txt" },

		{ name: "Card - Demo Cookie Settings", value: "DemoCookieSettings", path: "/examples/card/cookie-settings.tsx.txt" },
		{ name: "Card - Demo Create Account", value: "DemoCreateAccount", path: "/examples/card/create-account.tsx.txt" },
		{ name: "Card - Demo Date Picker", value: "DemoDatePicker", path: "/examples/card/date-picker.tsx.txt" },
		{ name: "Card - Demo Github", value: "DemoGithub", path: "/examples/card/github-card.tsx.txt" },
		{ name: "Card - Demo Notifications", value: "DemoNotifications", path: "/examples/card/notifications.tsx.txt" },
		{ name: "Card - Demo PaymentMethod", value: "DemoPaymentMethod", path: "/examples/card/payment-method.tsx.txt" },
		{ name: "Card - Demo Report An Issue", value: "DemoReportAnIssue", path: "/examples/card/report-an-issue.tsx.txt" },
		{ name: "Card - Demo Share Document", value: "DemoShareDocument", path: "/examples/card/share-document.tsx.txt" },
		{ name: "Card - Demo Team Members", value: "DemoTeamMembers", path: "/examples/card/team-members.tsx.txt" },
		{ name: "Card - cookie-settings", value: "cookie-settings", path: "/examples/card/cookie-settings.tsx.txt" },
		{ name: "Card - create-account", value: "create-account", path: "/examples/card/create-account.tsx.txt" },
		{ name: "Card - date-picker", value: "date-picker", path: "/examples/card/date-picker.tsx.txt" },
		{ name: "Card - github-card", value: "github-card", path: "/examples/card/github-card.tsx.txt" },
		{ name: "Card - notifications", value: "notifications", path: "/examples/card/notifications.tsx.txt" },
		{ name: "Card - payment-method", value: "payment-method", path: "/examples/card/payment-method.tsx.txt" },
		{ name: "Card - report-an-issue", value: "report-an-issue", path: "/examples/card/report-an-issue.tsx.txt" },
		{ name: "Card - share-document", value: "share-document", path: "/examples/card/share-document.tsx.txt" },
		{ name: "Card - team-members", value: "team-members", path: "/examples/card/team-members.tsx.txt" },

		{ name: "Login - auth Session Storage", value: "authSessionStorage", path: "/examples/other/auth_session.ts.txt" },
		{ name: "Login - authenticator", value: "authenticator", path: "/examples/other/auth.ts.txt" },
		{ name: "Login - Login Page", value: "LoginPageCode", path: "/examples/pages/login.tsx.txt" },
		{ name: "Login - Logout Page", value: "logout", path: "/examples/pages/logout.tsx.txt" },

		{ name: "lofi - accordian", value: "lofiAccordian", path: "/examples/lo-fi/accordion.tsx.txt" },
		{ name: "lofi - alert", value: "lofialert", path: "/examples/lo-fi/alert.tsx.txt" },
		{ name: "lofi - atom", value: "lofiatom", path: "/examples/lo-fi/atom.tsx.txt" },
		{ name: "lofi - component", value: "loficomponent", path: "/examples/lo-fi/component.tsx.txt" },
		{ name: "lofi - index", value: "lofiindex", path: "/examples/lo-fi/index.tsx.txt" },

		{ name: "Tasks - columns", value: "lofiindex", path: "/examples/tasks/columns.tsx.txt" },
		{ name: "Tasks - data-table-column-header", value: "data-table-column-header", path: "/examples/tasks/data-table-column-header.tsx.txt" },
		{ name: "Tasks - data-table-faceted-filter", value: "data-table-faceted-filter", path: "/examples/tasks/data-table-faceted-filter.tsx.txt" },
		{ name: "Tasks - data-table-pagination", value: "data-table-pagination", path: "/examples/tasks/data-table-pagination.tsx.txt" },
		{ name: "Tasks - data-table-row-actions", value: "data-table-row-actions", path: "/examples/tasks/data-table-row-actions.tsx.txt" },
		{ name: "Tasks - data-table-toolbar", value: "data-table-toolbar", path: "/examples/tasks/data-table-toolbar.tsx.txt" },
		{ name: "Tasks - data-table-view-options", value: "data-table-view-options", path: "/examples/tasks/data-table-view-options.tsx.txt" },
		{ name: "Tasks - data-table", value: "data-table", path: "/examples/tasks/data-table.tsx.txt" },
		{ name: "Tasks - data", value: "data", path: "/examples/tasks/data.tsx.txt" },
		{ name: "Tasks - TaskPage", value: "TaskPage", path: "/examples/tasks/TaskPage.tsx.txt" },
		{ name: "Tasks - user-nav", value: "user-nav", path: "/examples/tasks/user-nav.tsx.txt" },

		{ name: "Forms - sidebar nav", value: "sidebarnav", path: "/examples/other/sidebar-nav.tsx.txt" },
		{ name: "Forms - Layout", value: "formsLayout", path: "/examples/pages/formsLayout.tsx.txt" },
		{ name: "Forms - accout/account-form", value: "accout/account-form", path: "/examples/forms/account/account-form.tsx.txt" },
		{ name: "Forms - accout/index", value: "accout/index", path: "/examples/forms/account/index.tsx.txt" },
		{ name: "Forms - appearance/appearance-form", value: "appearance/appearance-form", path: "/examples/forms/appearance/appearance-form.tsx.txt" },
		{ name: "Forms - appearance/index", value: "appearance/index", path: "/examples/forms/appearance/index.tsx.txt" },
		{ name: "Forms - components/sidebar-nav", value: "components/sidebar-nav", path: "/examples/forms/components/sidebar-nav.tsx.txt" },
		{ name: "Forms - display/display-form", value: "display/display-form", path: "/examples/forms/display/display-form.tsx.txt" },
		{ name: "Forms - display/index", value: "display/index", path: "/examples/forms/display/index.tsx.txt" },
		{ name: "Forms - notifications/index", value: "notifications/index", path: "/examples/forms/notifications/index.tsx.txt" },
		{ name: "Forms - notifications/notifications-form", value: "notifications/notifications-form", path: "/examples/forms/notifications/notifications-form.tsx.txt" },
		{ name: "Forms - profile", value: "profile", path: "/examples/forms/profile.tsx.txt" },

		{ name: "Editor - Sections Editor", value: "SectionsEditor", path: "/examples/editor/SectionsEditor.tsx.txt" },
		{ name: "Editor - Comp Editor (the one currently on page)", value: "componentEditor", path: "/examples/editor/componentEditor.tsx.txt" },
		{ name: "Editor - On Route Scaffolding", value: "editorOnRouteScaffolding", path: "/examples/editor/editorOnRouteScaffolding.tsx.txt" },
		{ name: "Editor - md Editor from DevStack - Index", value: "componentEditor", path: "/examples/editor/editor.index.tsx" },
		{ name: "Editor - codemirror-editor", value: "componentEditor", path: "/examples/editor/codemirror-editor.tsx" },
		{ name: "Editor - lexical-editor", value: "componentEditor", path: "/examples/editor/lexical-editor.tsx" },

		{ name: "Portal - Provider Route", value: "ProviderRoute", path: "/examples/pages/providorRoute.tsx.txt" },

		{ name: "Other - Prisma", value: "prisma", path: "/examples/other/prisma.ts.txt" },
		{ name: "Other - Prisma Client Extension", value: "Prisma Client Extension", path: "/examples/other/prismaExtends.ts.txt" },
		{ name: "Other - Icons", value: "Icons", path: "/examples/other/icons.tsx.txt" },
		{ name: "Other - Site Header", value: "SiteHeader", path: "/examples/other/site-header.tsx.txt" },
		{ name: "Other - tailwind", value: "tailwindCode", path: "/examples/css/tailwind.css.txt" },

		{ name: "Utils - client-only", value: "client-only", path: "/examples/utils/client-only.tsx.txt" },
		{ name: "Utils - use-hydrated", value: "use-hydrated", path: "/examples/utils/use-hydrated.ts.txt" },
	];
	useEffect(() => {
		if (!selectedCode) return;

		const loadHookCode = async (url) => {
			try {
				const response = await fetch(url);
				if (!response.ok) throw new Error(`HTTP ${response.status}`);
				const codeContent = await response.text();
				setCode(codeContent);
			} catch (error) {
				console.error(`Failed to load ${url}:`, error);
				setCode(`// Failed to load ${url}\n// Error: ${error.message}`);
			}
		};

		loadHookCode(selectedCode);
	}, [selectedCode]);
	return (
		<div className="flex flex-col justify-center gap-4">
			<div className="grid w-full max-w-sm items-center gap-1.5 mt-[25px] mx-auto">
				<Command className="rounded-lg border shadow-md md:min-w-[450px]">
					<CommandInput placeholder="Search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading="Components">
							{sections.map((item, index) => {
								return (
									<CommandItem
										key={index}
										onSelect={() => {
											setName(item.value);
											setSelectedCode(item.path);
										}}
									>
										{item.name}
									</CommandItem>
								);
							})}
						</CommandGroup>
					</CommandList>
				</Command>
			</div>
			<div className={`h-screen flex flex-col bg-background `}>
				{/* Header */}
				<div className={`bg-background border-border  border-b px-4 py-2 flex items-center justify-between rounded-[15px]`}>
					<div className="flex items-center space-x-4">
						<FileText className={`h-6 w-6 text-muted-foreground `} />
						<span className={`font-medium text-foreground `}>Catalyst Editor</span>
						{isDirty && <span className="text-sm text-destructive">● Unsaved changes</span>}
						{isSaving && <span className="text-sm text-primary/80">Saving...</span>}
						{lastSaved && !isDirty && <span className="text-sm text-primary/80">Saved {lastSaved.toLocaleTimeString()}</span>}
					</div>

					<ButtonBar2 />
				</div>

				<div className="flex-1 flex">
					{isSplitView ? (
						// Split View
						<>
							<div className="flex-1 border-r border-border">{renderEditor()}</div>
							<div className={`flex-1 overflow-auto  bg-background text-foreground `}>
								<div className="max-w-4xl mx-auto p-6 prose prose-lg">{renderPreview(content)}</div>
							</div>
						</>
					) : !isPreview ? (
						// Editor Only
						<div className="flex-1">{renderEditor()}</div>
					) : (
						// Preview Only
						<div className={`flex-1 overflow-auto bg-background text-foreground`}>
							<div className="max-w-4xl mx-auto p-6 prose prose-lg">{renderPreview(content)}</div>
						</div>
					)}
				</div>

				{/* Status Bar */}
				<div className={` bg-background/80 text-foreground px-4 py-1 flex items-center justify-between text-sm`}>
					<div className="flex items-center space-x-4">
						<span>Lines: {content.split("\n").length}</span>
						<span>Characters: {content.length}</span>
						<span>Words: {content.split(/\s+/).filter((word) => word.length > 0).length}</span>
						<span>Language: {language}</span>
					</div>

					<div className="flex items-center space-x-2">
						<span>UTF-8</span>
						<span>•</span>
						<span>Ctrl+S to save</span>
						<span>•</span>
						<span>Ctrl+H to find & replace</span>
					</div>
				</div>
			</div>
		</div>
	);
}

/**	const sections = [
		{ name: "useCopyToClipboardCode", value: "useCopyToClipboardCode" },
		{ name: "useIsMobileCode", value: "useIsMobileCode" },
		{ name: "useMountedCode", value: "useMountedCode" },
		{ name: "useMutationObserverCode", value: "useMutationObserverCode" },
		{ name: "useFuzzySearchCode", value: "useFuzzySearchCode" },
		{ name: "useMediaQueryCode", value: "useMediaQueryCode" },
		{ name: "LoginPageCode", value: "LoginPageCode" },
		{ name: "action", value: "action" },
		{ name: "tailwindCode", value: "tailwindCode" },
		{ name: "ProviderRoute", value: "ProviderRoute" },
		// need to add below,
		// what about lofi
		{ name: "DemoCookieSettings", value: "DemoCookieSettings" },
		{ name: "DemoCreateAccount", value: "DemoCreateAccount" },
		{ name: "DemoDatePicker", value: "DemoDatePicker" },
		{ name: "DemoGithub", value: "DemoGithub" },
		{ name: "DemoNotifications", value: "DemoNotifications" },
		{ name: "DemoPaymentMethod", value: "DemoPaymentMethod" },
		{ name: "DemoReportAnIssue", value: "DemoReportAnIssue" },
		{ name: "DemoShareDocument", value: "DemoShareDocument" },
		{ name: "DemoTeamMembers", value: "DemoTeamMembers" },
		{ name: "prisma", value: "prisma" },
		{ name: "authSessionStorage", value: "authSessionStorage" },
		{ name: "authenticator", value: "authenticator" },
		{ name: "Icons", value: "Icons" },
		{ name: "SiteHeader", value: "SiteHeader" },
	];

	switch (sel) {
		case "useIsMobileCode":
			setSelectedCode(`/examples/hooks/use-mobile.ts.txt`);
			break;
		case "useMountedCode":
			setSelectedCode(`/examples/hooks/use-mounted.ts.txt`);
			break;
		case "useMutationObserverCode":
			setSelectedCode(`/examples/hooks/use-mutation-observer.ts.txt`);
			break;
		case "useFuzzySearchCode":
			setSelectedCode(`/examples/hooks/useFuzzySearch.tsx.txt`);
			break;
		case "useMediaQueryCode":
			setSelectedCode(`/examples/hooks/useMediaQuery.tsx.txt`);
			break;
		case "LoginPageCode":
			setSelectedCode(`/examples/pages/login.tsx.txt`);
		case "useCopyToClipboardCode":
			setSelectedCode(`/examples/hooks/use-copy-to-clipboard.ts.txt`);
			break;
		case "tailwindCode":
			setSelectedCode(`/examples/css/tailwind.css.txt`);
			break;
		case "logoutCode":
			setSelectedCode(`/examples/pages/use-mobile.ts.txt`);
			break;
		default:
			break;
	} */
