import { useEffect, useState } from "react";
import MonacoEditor from "../editor/components2";
import MusicPage from "./MusicPage";
import { AlbumArtwork } from "./components/album-artwork";
import { Sidebar } from "./components/sidebar";
import { PodcastEmptyPlaceholder } from "./components/podcast-empty-placeholder";
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "~/components/customUi/page-header";
import { Scaffolding } from "~/components/customUi/scaffolding";

export async function loader({ request }: LoaderArgs) {
	return null;
}

export default function UserAuthForm() {
	const [selectedCode, setSelectedCode] = useState("");
	const [name, setName] = useState("MusicPage");

	const sections = [
		{ name: "components/album-artwork", value: "components/album-artwork", path: "/examples/music/components/album-artwork.tsx.txt" },
		{ name: "components/menu", value: "components/menu", path: "/examples/music/components/menu.tsx.txt" },
		{ name: "components/podcast-empty-placeholder", value: "components/podcast-empty-placeholder", path: "/examples/music/components/podcast-empty-placeholder.tsx.txt" },
		{ name: "components/sidebar", value: "components/sidebar", path: "/examples/music/components/sidebar.tsx.txt" },
		{ name: "data/albums", value: "data/albums", path: "/examples/music/data/albums.ts.txt" },
		{ name: "data/playlists", value: "data/playlists", path: "/examples/music/data/playlists.ts.txt" },
		{ name: "MusicPage", value: "MusicPage", path: "/examples/music/MusicPage.tsx.txt" },
	];

	let viewSelected;
	switch (name) {
		case "MusicPage":
			viewSelected = <MusicPage />;
			break;
		case "data/playlists":
			viewSelected = <Scaffolding title={"data/playlists"} />;
			break;
		case "data/albums":
			viewSelected = <Scaffolding title={"data/albums"} />;
			break;
		case "components/sidebar":
			viewSelected = <Scaffolding title={"components/sidebar"} />;
			break;
		case "components/podcast-empty-placeholder":
			viewSelected = <Scaffolding title={"components/podcast-empty-placeholder"} />;
			break;
		case "components/menu":
			viewSelected = <Scaffolding title={"components/menu"} />;
			break;
		case "components/album-artwork":
			viewSelected = <Scaffolding title={"components/album-artwork"} />;
			break;
		default:
			viewSelected = <MusicPage />;
			break;
	}
	useEffect(() => {
		if (!selectedCode) return;

		const loadHookCode = async (url) => {
			try {
				const response = await fetch(url);
				if (!response.ok) throw new Error(`HTTP ${response.status}`);
				const codeContent = await response.text();
				setSelectedCode(codeContent);
			} catch (error) {
				console.error(`Failed to load ${url}:`, error);
				setSelectedCode(`// Failed to load ${url}\n// Error: ${error.message}`);
			}
		};

		loadHookCode(selectedCode);
	}, [selectedCode]);

	return (
		<div className="flex flex-col justify-center gap-4">
			<MonacoEditor code={selectedCode} sections={sections} setName={setName} name={name} viewSelected={viewSelected} />
		</div>
	);
}


