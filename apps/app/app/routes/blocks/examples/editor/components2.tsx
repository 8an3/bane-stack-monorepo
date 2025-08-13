import React, { useState, useEffect, useRef, useCallback, lazy, Suspense } from "react";
import { Save, FileText, Eye,Code as CodeLucide,EyeOff, Settings, Download, Upload, Moon, Sun, Split, Maximize2, Code, Component, Boxes, Puzzle, Monitor, X } from "lucide-react";
import { LoadingPage } from "~/components/customUi/loadingPage";

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "~/components/ui/command";
import { Button } from "~/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { CopyText } from "~/components/customUi/copyText";
import { ExportFile } from "~/components/customUi/exportFile";

// Lazy load Monaco Editor to avoid SSR issues
const Editor = lazy(() => import("@monaco-editor/react"));

export default function MonacoEditor({ code, sections, name = null, setName, viewSelected = null }) {
	const [isClient, setIsClient] = useState(false);
	const [selectedCode, setSelectedCode] = useState(null);
	const [content, setContent] = useState(code);
	const [language, setLanguage] = useState("markdown");
	const [theme, setTheme] = useState("vs-dark");
	const [isPreview, setIsPreview] = useState(true);
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
							<code className="text-sm">{content}</code>
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

	const EditorLoading = () => <LoadingPage text="Loading editor..." />;

	const renderEditor = () => {
		if (!isClient) {
			return <EditorLoading />;
		}

		return (
			<Suspense fallback={<EditorLoading />}>
				<Editor
					height="100%"
					language={language}
					value={content}
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

	const [showCommand, setShowCommand] = useState(true);
	const [selectedItem, setSelectedItem] = useState(null);
	const resetSelection = () => {
		setShowCommand(true);
		setSelectedItem(null);
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
					{isPreview ? <CodeLucide className="h-4 w-4 mr-1" /> : <Monitor className="h-4 w-4 mr-1" />}
					{isPreview ? "Code" : "View Page Section"}
				</Button>

				<ExportFile code={code} filename={`${name}.tsx`} />
				<CopyText code={code} />

				<Button variant="outline" size="icon" onClick={toggleFullscreen}>
					<Maximize2 className="h-4 w-4" />
				</Button>
				<Button variant="ghost" size="icon" onClick={resetSelection} className="text-muted-foreground hover:text-foreground">
					<X className="h-4 w-4   text-red-500" />
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

	useEffect(() => {
		if (!selectedCode) return;

		const loadHookCode = async (url) => {
			try {
				const response = await fetch(url);
				if (!response.ok) throw new Error(`HTTP ${response.status}`);
				const codeContent = await response.text();
				setContent(codeContent);
			} catch (error) {
				console.error(`Failed to load ${url}:`, error);
				setContent(`// Failed to load ${url}\n// Error: ${error.message}`);
			}
		};

		loadHookCode(selectedCode);
	}, [selectedCode]);

	useEffect(() => {
		if (name && viewSelected) {
			setShowCommand(false);
		}
	}, []);

	return (
		<div className="flex flex-col justify-center gap-4">
			{showCommand && (
				<div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
					<div className="relative">
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
													setShowCommand(false);
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
				</div>
			)}

			<div className={`h-screen flex flex-col bg-background `}>
				{/* Header */}
				{!showCommand && (
					<div className={`bg-background border-border  border-b px-4 py-2 flex items-center justify-between rounded-[15px]`}>
						<div className="flex items-center space-x-4">
							<FileText className={`h-6 w-6 text-muted-foreground `} />
							<span className={`font-medium text-foreground `}>Catalyst Editor</span>
							{isDirty && <span className="text-sm text-destructive">● Unsaved changes</span>}
							{isSaving && <span className="text-sm text-primary/80">Saving...</span>}
							{lastSaved && !isDirty && <span className="text-sm text-primary/80">Saved {lastSaved.toLocaleTimeString()}</span>}
						</div>

						<ButtonBar />
					</div>
				)}

				{!showCommand && (
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
								<div className="  mx-auto p-6 prose prose-lg">{viewSelected}</div>
							</div>
						)}
					</div>
				)}

				{/* Status Bar */}
				{!showCommand && (
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
				)}
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
