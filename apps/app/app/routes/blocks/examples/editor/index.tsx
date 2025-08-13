import React, { useState, useEffect, useRef, useCallback, lazy, Suspense } from "react";
import { Save, FileText, Eye, Code as CodeLucide, EyeOff, Settings, Download, Upload, Moon, Sun, Split, Maximize2, Code, Component, Boxes, Puzzle, Monitor } from "lucide-react";
import { LoadingPage } from "~/components/customUi/loadingPage";

import { Button } from "~/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { CopyText } from "~/components/customUi/copyText";

// Lazy load Monaco Editor to avoid SSR issues
const Editor = lazy(() => import("@monaco-editor/react"));

const MonacoEditor = ({
	code = '# Welcome to the Editor\n\nStart typing your content here...\n\n## Features\n- Auto-save\n- Syntax highlighting\n- Find & Replace (Ctrl+H)\n- Command palette (Ctrl+Shift+P)\n- Multi-cursor support (Alt+Click)\n\n```javascript\nconst example = () => {\n  console.log("Monaco Editor is awesome!");\n};\n```',
  renderComp= null,
  showComponent = true
}) => {
	const [isClient, setIsClient] = useState(false);
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

	// Auto-save functionality with debouncing
	const autoSave = useCallback(
		async (content) => {
			if (!isDirty) return;

			setIsSaving(true);
			try {
				// Simulate API call - replace with your Remix action
				await new Promise((resolve) => setTimeout(resolve, 500));

				// In Remix:
				// const formData = new FormData();
				// formData.append('content', content);
				// formData.append('language', language);
				// submit(formData, { method: 'post', action: '/api/save-document' });

				setLastSaved(new Date());
				setIsDirty(false);
			} catch (error) {
				console.error("Save failed:", error);
			} finally {
				setIsSaving(false);
			}
		},
		[isDirty]
	);

	// Debounced auto-save
	useEffect(() => {
		if (isDirty) {
			clearTimeout(saveTimeoutRef.current);
			saveTimeoutRef.current = setTimeout(() => {
				autoSave(content);
			}, 2000);
		}

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

		return () => clearTimeout(saveTimeoutRef.current);
	}, [content, isDirty, autoSave]);

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
					Toggle Renderer
				</Button>

				<Button variant="outline" size="sm" onClick={() => setIsPreview(!isPreview)}>
					{isPreview ? <CodeLucide className="h-4 w-4 mr-1" /> : <Monitor className="h-4 w-4 mr-1" />}
					{isPreview ? "Code" : "View Page Section"}
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
const [renderer, setRenderer] = useState('component') // editor
	const ButtonBar2 = () => {
		return (
			<div className="flex items-center space-x-2">
        {renderer === 'component' ? (<>
        <Button size='icon' variant='ghost' onClick={() => {setRenderer('editor')}}>
          <Code />
          </Button> 
           </>): (<>
           <Button size='icon' variant='ghost' onClick={() => {setRenderer('component')}}>
          <Monitor />
          </Button> 
          </>)}
				<CopyText code={code} />
			</div>
		);
	};
	return (
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

{renderComp&& showComponent && renderer === 'component' ? (<>
     			<div className="flex-1 overflow-auto p-4">
					{renderComp}
				</div>
      </>)
      : (<>
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
      </>)}
		

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
	);
};

export default MonacoEditor;
