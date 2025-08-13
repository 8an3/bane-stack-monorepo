import { React, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { NavLink, Outlet, useActionData, useFetcher, useLoaderData, useLocation, useNavigate, useNavigation, useParams, useRouteLoaderData, useSearchParams, useSubmit } from "@remix-run/react";
import { eP } from "~/utils/ext";
import { authSessionStorage } from "~/sessions/session";
import { axios } from "axios";
import { ActionArgs, defer, json, redirect, type ActionArgs, type LoaderArgs } from "@remix-run/node";
import { PageHeaderFunction } from "~/components/customUi/page-header";
import { NotificationDemo } from "~/components/sections/Alerts";
import { BannerSection } from "~/components/sections/Banner";
import { BentoDemo } from "~/components/sections/BentoGrid";
import { BlogSection } from "~/components/sections/Blog";
import { ChangelogDemo } from "~/components/sections/Changelog";
import { ConfigDemo } from "~/components/sections/ConfigSection";
import { ContactSection } from "~/components/sections/Contact";
import { CTASection } from "~/components/sections/CTA";
import { DescriptionList } from "~/components/sections/DescriptionList";
import { DisplayCodeDemo } from "~/components/sections/DisplayCode";
import { DisplayGithubInstall } from "~/components/sections/DisplayGithubInstall";
import { DisplayInstallCode } from "~/components/sections/DisplayInstallCode";
import { DisplayInstallCodeArray } from "~/components/sections/DisplayInstallCodeArray";
import { FeatureSectionDemo, FeaturesGridSection, FeaturesSection2 } from "~/components/sections/FeatureSection";
import { FlyoutMenu } from "~/components/sections/FlyoutMenu";
import { HeadersSection } from "~/components/sections/Headers";
import { HeroCTASection, HeroSection, HeroStatsSection } from "~/components/sections/HeroSection";
import { ImageSection } from "~/components/sections/ImageSection";
import { JsonSectionDemo } from "~/components/sections/JsonSection";
import { NewsletterSection } from "~/components/sections/Newsletter";
import { NoteSectionDemo } from "~/components/sections/NoteSection";
import { UseHeader } from "~/components/sections/PageHeader";
import { PageNavDemo } from "~/components/sections/PageNav";
import { PricingSection2Cards, PricingSection1Card, PricingSection3Cards } from "~/components/sections/Pricing";
import { SectionTitle } from "~/components/sections/SectionTitle";
import { StatsCardSection, StatsSection } from "~/components/sections/Stats";
import { TeamSection } from "~/components/sections/Team";
import { TestimonialSection, TestimonialsGridSection } from "~/components/sections/Testimonial";
import { TsxFunctionDemo } from "~/components/sections/TsxSection";
import { UseSectionDemo } from "~/components/sections/UsageSection";
import { StackedLayoutsSection } from "~/components/ecommerceSections/StackedLayouts";
import { LoFi } from "~/components/lo-fi";
import { UseageSectionNoDashDemo } from "~/components/sections/UsageSectionNoDash";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "~/components/ui/command";
import MonacoEditor from "../editor/components2";

export default function Dashboard() {
	const [sel, setSel] = useState("NotificationDemo");
	const [selectedCode, setSelectedCode] = useState("");
		const [name, setName] = useState("AccountForm");
	const sections = [
		{ name: "Alerts", value: "Alerts", path: "/exmaples/sections/Alerts.tsx.txt" },
		{ name: "Lofi", value: "Lofi", path: "/exmaples/lo-fi/index.tsx.txt" },
		{ name: "Lofi - Alert", value: "Lofi - Alert", path: "/exmaples/lo-fi/index.tsx.txt" },
		{ name: "Lofi - Accordian", value: "Lofi - Accordian", path: "/exmaples/lo-fi/index.tsx.txt" },
		{ name: "Lofi - Atom", value: "Lofi - Atom", path: "/exmaples/lo-fi/index.tsx.txt" },
		{ name: "Lofi - Component", value: "Lofi - Component", path: "/exmaples/lo-fi/index.tsx.txt" },
		{ name: "Banner", value: "Banner", path: "/exmaples/sections/Banner.tsx.txt" },
		{ name: "BentoGrid", value: "BentoGrid", path: "/exmaples/sections/BentoGrid.tsx.txt" },
		{ name: "Blog", value: "Blog", path: "/exmaples/sections/Blog.tsx.txt" },
		{ name: "Changelog", value: "Changelog", path: "/exmaples/sections/Changelog.tsx.txt" },
		{ name: "ConfigSection", value: "ConfigSection", path: "/exmaples/sections/ConfigSection.tsx.txt" },
		{ name: "Contact", value: "Contact", path: "/exmaples/sections/Contact.tsx.txt" },
		{ name: "Content", value: "Content", path: "/exmaples/sections/Content.tsx.txt" },
		{ name: "CTA", value: "CTA", path: "/exmaples/sections/CTA.tsx.txt" },
		{ name: "DescriptionList", value: "DescriptionList", path: "/exmaples/sections/DescriptionList.tsx.txt" },
		{ name: "DisplayCode", value: "DisplayCode", path: "/exmaples/sections/DisplayCode.tsx.txt" },
		{ name: "DisplayGithubInstall", value: "DisplayGithubInstall", path: "/exmaples/sections/DisplayGithubInstall.tsx.txt" },
		{ name: "DisplayInstallCode", value: "DisplayInstallCode", path: "/exmaples/sections/DisplayInstallCode.tsx.txt" },
		{ name: "DisplayInstallCodeArray", value: "DisplayInstallCodeArray", path: "/exmaples/sections/DisplayInstallCodeArray.tsx.txt" },
		{ name: "FeatureSection", value: "FeatureSection", path: "/exmaples/sections/FeatureSection.tsx.txt" },
		{ name: "FeatureSection2", value: "FeatureSection2", path: "/exmaples/sections/FeatureSection.tsx.txt" },
		{ name: "FeatureSection3", value: "FeatureSection3", path: "/exmaples/sections/FeatureSection.tsx.txt" },
		{ name: "FlyoutMenu", value: "FlyoutMenu", path: "/exmaples/sections/FlyoutMenu.tsx.txt" },
		{ name: "Headers", value: "Headers", path: "/exmaples/sections/Headers.tsx.txt" },
		{ name: "HeroSection", value: "HeroSection", path: "/exmaples/sections/HeroSection.tsx.txt" },
		{ name: "HeroSection2", value: "HeroSection2", path: "/exmaples/sections/HeroSection.tsx.txt" },
		{ name: "HeroSection3", value: "HeroSection3", path: "/exmaples/sections/HeroSection.tsx.txt" },
		{ name: "ImageSection", value: "ImageSection", path: "/exmaples/sections/ImageSection.tsx.txt" },
		{ name: "JsonSection", value: "JsonSection", path: "/exmaples/sections/JsonSection.tsx.txt" },
		{ name: "Newsletter", value: "Newsletter", path: "/exmaples/sections/Newsletter.tsx.txt" },
		{ name: "NoteSection", value: "NoteSection", path: "/exmaples/sections/NoteSection.tsx.txt" },
		{ name: "PageHeader", value: "PageHeader", path: "/exmaples/sections/PageHeader.tsx.txt" },
		{ name: "PageNav", value: "PageNav", path: "/exmaples/sections/PageNav.tsx.txt" },
		{ name: "PageHeaderFunction", value: "PageHeaderFunction", path: "/exmaples/sections/" },
		{ name: "Pricing", value: "Pricing", path: "/exmaples/sections/Pricing.tsx.txt" },
		{ name: "Pricing2", value: "Pricing2", path: "/exmaples/sections/Pricing.tsx.txt" },
		{ name: "Pricing3", value: "Pricing3", path: "/exmaples/sections/Pricing.tsx.txt" },
		{ name: "SectionTitle", value: "SectionTitle", path: "/exmaples/sections/SectionTitle.tsx.txt" },
		{ name: "StackedLayouts", value: "StackedLayouts", path: "/exmaples/sections/StackedLayouts.tsx.txt" },
		{ name: "Stats", value: "Stats", path: "/exmaples/sections/Stats.tsx.txt" },
		{ name: "Stats2", value: "Stats2", path: "/exmaples/sections/Stats.tsx.txt" },
		{ name: "Team", value: "Team", path: "/exmaples/sections/Team.tsx.txt" },
		{ name: "Testimonial", value: "Testimonial", path: "/exmaples/sections/Testimonial.tsx.txt" },
		{ name: "Testimonial2", value: "Testimonial2", path: "/exmaples/sections/Testimonial.tsx.txt" },
		{ name: "TsxSection", value: "TsxSection", path: "/exmaples/sections/TsxSection.tsx.txt" },
		{ name: "UsageSection", value: "UsageSection", path: "/exmaples/sections/UsageSection.tsx.txt" },
		{ name: "UsageSectionNoDash", value: "UsageSectionNoDash", path: "/exmaples/sections/UsageSectionNoDash.tsx.txt" },
	];
	let viewSelected;
	switch (name) {
		case "Alerts":
			viewSelected = <NotificationDemo />;
			break;
		case "NotificationDemo":
			viewSelected = <NotificationDemo />;
			break;
		case "Lofi":
			viewSelected = <LoFi />;
			break;
		case "Banner":
			viewSelected = <BannerSection />;
			break;
		case "BentoGrid":
			viewSelected = <BentoDemo />;
			break;
		case "Blog":
			viewSelected = <BlogSection />;
			break;
		case "Changelog":
			viewSelected = <ChangelogDemo />;
			break;
		case "ConfigSection":
			viewSelected = <ConfigDemo />;
			break;
		case "Contact":
			viewSelected = <ContactSection />;
			break;
		case "CTA":
			viewSelected = <CTASection />;
			break;
		case "DescriptionList":
			viewSelected = <DescriptionList />;
			break;
		case "DisplayCode":
			viewSelected = <DisplayCodeDemo />;
			break;
		case "DisplayGithubInstall":
			viewSelected = <DisplayGithubInstall />;
			break;
		case "DisplayInstallCode":
			viewSelected = <DisplayInstallCode />;
			break;
		case "DisplayInstallCodeArray":
			viewSelected = <DisplayInstallCodeArray />;
			break;
		case "FeatureSection":
			viewSelected = <FeatureSectionDemo />;
			break;
		case "FeatureSection2":
			viewSelected = <FeaturesSection2 />;
			break;
		case "FeatureSection3":
			viewSelected = <FeaturesGridSection />;
			break;
		case "FlyoutMenu":
			viewSelected = <FlyoutMenu />;
			break;
		case "Headers":
			viewSelected = <HeadersSection />;
			break;
		case "StackedLayouts":
			viewSelected = <StackedLayoutsSection />;
			break;
		case "Stats":
			viewSelected = <StatsSection />;
			break;
		case "Stats2":
			viewSelected = <StatsCardSection />;
			break;
		case "Team":
			viewSelected = <TeamSection />;
			break;
		case "Testimonial":
			viewSelected = <TestimonialSection />;
			break;
		case "Testimonial2":
			viewSelected = <TestimonialsGridSection />;
			break;
		case "TsxSection":
			viewSelected = <TsxFunctionDemo />;
			break;
		case "UsageSection":
			viewSelected = <UseSectionDemo />;
			break;
		case "UsageSectionNoDash":
			viewSelected = <UseageSectionNoDashDemo />;
			break;
		case "PageHeaderFunction":
			viewSelected = <PageHeaderFunction />;
			break;
		case "HeroSection":
			viewSelected = <HeroSection />;
			break;
		case "HeroSection2":
			viewSelected = <HeroStatsSection />;
			break;
		case "HeroSection3":
			viewSelected = <HeroCTASection />;
			break;
		case "ImageSection":
			viewSelected = <ImageSection />;
			break;
		case "JsonSection":
			viewSelected = <JsonSectionDemo />;
			break;
		case "Newsletter":
			viewSelected = <NewsletterSection />;
			break;
		case "NoteSection":
			viewSelected = <NoteSectionDemo />;
			break;
		case "PageHeader":
			viewSelected = <UseHeader />;
			break;
		case "PageNav":
			viewSelected = <PageNavDemo />;
			break;
		case "Pricing":
			viewSelected = <PricingSection1Card />;
			break;
		case "Pricing2":
			viewSelected = <PricingSection2Cards />;
			break;
		case "Pricing3":
			viewSelected = <PricingSection3Cards />;
			break;
		case "SectionTitle":
			viewSelected = <SectionTitle />;
			break;
		default:
			viewSelected = <NotificationDemo />;
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
		<MonacoEditor viewSelected={viewSelected} code={selectedCode} sections={sections} setName={setName} name={name} />
		</div>
	);
}

function Page({ setSel, setSelectedCode, sections, viewSelected }) {
	return (
		<div className="flex flex-col justify-center gap-3 w-full">
			<div className="grid w-full max-w-sm items-center gap-1.5 mt-[25px] mx-auto">
				<Command className="rounded-lg border shadow-md md:min-w-[450px]">
					<CommandInput placeholder="Search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading="Sections">
							{sections.map((item, index) => {
								return (
									<CommandItem
										key={index}
										onSelect={() => {
											setSelectedCode(item.path);
											setSel(item.value);
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
			<section className="overflow-hidden rounded-[0.5rem] border bg-background shadow">{viewSelected}</section>
		</div>
	);
}

export async function loader({ request }: LoaderArgs) {
	return null;
}

export const meta: MetaFunction = () => {
	return [{ title: "Sections - 8an3/Bane" }, { name: "description", content: "8an3/Bane Remix Stack" }];
};
