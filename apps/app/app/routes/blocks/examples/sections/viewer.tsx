import { React, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { NavLink, Outlet, useActionData, useFetcher, useLoaderData, useLocation, useNavigate, useNavigation, useParams, useRouteLoaderData, useSearchParams, useSubmit } from "@remix-run/react";
import { eP } from "~/utils/ext";
import { authSessionStorage } from "~/sessions/session";
import { axios } from "axios";
import { ActionArgs, defer, json, redirect, type ActionArgs, type LoaderArgs } from "@remix-run/node";
import { prisma } from "~/modules/libs/prisma";
import { CarFront, Link } from "lucide-react";
import { ButtonStyled } from "~/components/ui/button-loading";
import { Label } from "~/components/ui/label";
import { PageHeaderFunction } from "~/components/customUi/page-header";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
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
import { HeroCTASection, HeroSection } from "~/components/sections/HeroSection";
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

export default function Dashboard() {
	const [sel, setSel] = useState("Alerts");
	const sections = [
		{ name: "Alerts", value: "Alerts" },
		{ name: "Lofi", value: "Lofi" },
		{ name: "Banner", value: "Banner" },
		{ name: "BentoGrid", value: "BentoGrid" },
		{ name: "Blog", value: "Blog" },
		{ name: "Changelog", value: "Changelog" },
		{ name: "ConfigSection", value: "ConfigSection" },
		{ name: "Contact", value: "Contact" },
		{ name: "Content", value: "Content" },
		{ name: "CTA", value: "CTA" },
		{ name: "DescriptionList", value: "DescriptionList" },
		{ name: "DisplayCode", value: "DisplayCode" },
		{ name: "DisplayGithubInstall", value: "DisplayGithubInstall" },
		{ name: "DisplayInstallCode", value: "DisplayInstallCode" },
		{ name: "DisplayInstallCodeArray", value: "DisplayInstallCodeArray" },
		{ name: "FeatureSection", value: "FeatureSection" },
		{ name: "FeatureSection2", value: "FeatureSection2" },
		{ name: "FeatureSection3", value: "FeatureSection3" },
		{ name: "FlyoutMenu", value: "FlyoutMenu" },
		{ name: "Headers", value: "Headers" },
		{ name: "HeroSection", value: "HeroSection" },
		{ name: "HeroSection2", value: "HeroSection2" },
		{ name: "HeroSection3", value: "HeroSection3" },
		{ name: "ImageSection", value: "ImageSection" },
		{ name: "JsonSection", value: "JsonSection" },
		{ name: "Newsletter", value: "Newsletter" },
		{ name: "NoteSection", value: "NoteSection" },
		{ name: "PageHeader", value: "PageHeader" },
		{ name: "PageNav", value: "PageNav" },
		{ name: "Pricing", value: "Pricing" },
		{ name: "Pricing2", value: "Pricing2" },
		{ name: "Pricing3", value: "Pricing3" },
		{ name: "SectionTitle", value: "SectionTitle" },
		{ name: "StackedLayouts", value: "StackedLayouts" },
		{ name: "Stats", value: "Stats" },
		{ name: "Stats2", value: "Stats2" },
		{ name: "Team", value: "Team" },
		{ name: "Testimonial", value: "Testimonial" },
		{ name: "Testimonial2", value: "Testimonial2" },
		{ name: "TsxSection", value: "TsxSection" },
		{ name: "UsageSection", value: "UsageSection" },
		{ name: "UsageSectionNoDash", value: "UsageSectionNoDash" },
	];
	let viewSelected;
	switch (sel) {
		case "Alerts":
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
			viewSelected = <UsageSectionNoDash />;
			break;
		default:
			viewSelected = <Alerts />;
			break;
	}
	return (
		<div className="flex flex-col justify-center gap-3 w-full">
			<div className="grid w-full max-w-sm items-center gap-1.5 mt-[25px] mx-auto">
				<Label>Sections</Label>
				<Select
					value={sel}
					onValueChange={(value) => {
						setSel(value);
					}}
				>
					<SelectTrigger>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						{sections.map((item, index) => {
							return (
								<SelectItem key={index} value={item.value}>
									{item.name}
								</SelectItem>
							);
						})}
					</SelectContent>
				</Select>
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
