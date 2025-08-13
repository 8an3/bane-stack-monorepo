import { React, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ActionArgs, defer, json, redirect, type ActionArgs, type LoaderArgs } from "@remix-run/node";
import { Label } from "~/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { CategoryFiltersSection } from "~/components/ecommerceSections/CategoryFilters";
import { CategoryPage } from "~/components/ecommerceSections/CategoryPage";
import { CategoryPreviewsSection } from "~/components/ecommerceSections/CategoryPreviews";
import { CheckoutForm } from "~/components/ecommerceSections/CheckoutForm";
import { CheckoutPage } from "~/components/ecommerceSections/CheckoutPage";
import { DetailsScreen } from "~/components/ecommerceSections/DetailsScreen";
import { FeedsDemo } from "~/components/ecommerceSections/FeedComponents";
import { GridLists, GridListwithAvatars, GridListwithStatusIndicators } from "~/components/ecommerceSections/GridLists";
import { HomePageSection } from "~/components/ecommerceSections/HomeScreen";
import { IncentiveDemo } from "~/components/ecommerceSections/IncentiveSection";
import { OrderDetailsPage } from "~/components/ecommerceSections/OrderDetailsPage";
import { OrderHistory } from "~/components/ecommerceSections/OrderHistory";
import { OrderSummaries } from "~/components/ecommerceSections/OrderSummaries";
import { PageHeadingsSection } from "~/components/ecommerceSections/PageHeadings";
import { PricingPage } from "~/components/ecommerceSections/PricingPage";
import { ProductListPage } from "~/components/ecommerceSections/ProductLists";
import { ProductOverviews } from "~/components/ecommerceSections/ProductOverviews";
import { LandingPageSection } from "~/components/ecommerceSections/LandingPage";
import { ProductQuickviewsSection } from "~/components/ecommerceSections/ProductQuickviews";
import { ProductsFeaturesSection } from "~/components/ecommerceSections/ProductsFeatures";
import { PromoSection } from "~/components/ecommerceSections/PromoSection";
import { ReviewsSection } from "~/components/ecommerceSections/ReviewsSection";
import { SectionHeadings } from "~/components/ecommerceSections/SectionHeadings";
import { SettingsScreen } from "~/components/ecommerceSections/SettingsScreen";
import { ShoppingCartSection } from "~/components/ecommerceSections/ShoppingCart";
import { ShoppingCartPage } from "~/components/ecommerceSections/ShoppingCartPage";
import { StackedLayoutsSection } from "~/components/ecommerceSections/StackedLayouts";
import { StackedListsSection } from "~/components/ecommerceSections/StackedLists";
import { StorefrontPage } from "~/components/ecommerceSections/StorefrontPages";
import { StoreNavSection } from "~/components/ecommerceSections/StoreNav";
import { ProductPage } from "~/components/ecommerceSections/ProductPages";
import MonacoEditor from "../editor/components2";

export default function Dashboard() {
	const [sel, setSel] = useState("LandingPage");
	const [selectedCode, setSelectedCode] = useState("");
	const [name, setName] = useState("CategoryFilters");

	const sections = [
		{ name: "CategoryFilters", value: "CategoryFilters", path: "/examples/ecommerceSections/CategoryFilters.tsx.txt" },
		{ name: "CategoryPage", value: "CategoryPage", path: "/examples/ecommerceSections/CategoryPage.tsx.txt" },
		{ name: "CategoryPreviews", value: "CategoryPreviews", path: "/examples/ecommerceSections/CategoryPreviews.tsx.txt" },
		{ name: "CheckoutForm", value: "CheckoutForm", path: "/examples/ecommerceSections/CheckoutForm.tsx.txt" },
		{ name: "CheckoutPage", value: "CheckoutPage", path: "/examples/ecommerceSections/CheckoutPage.tsx.txt" },
		{ name: "DetailsScreen", value: "DetailsScreen", path: "/examples/ecommerceSections/DetailsScreen.tsx.txt" },
		{ name: "FeedComponents", value: "FeedComponents", path: "/examples/ecommerceSections/FeedComponents.tsx.txt" },
		{ name: "GridLists", value: "GridLists", path: "/examples/ecommerceSections/GridLists.tsx.txt" },
		{ name: "GridListwithAvatars", value: "GridListwithAvatars", path: "/examples/ecommerceSections/GridLists.tsx.txt" },
		{ name: "GridListwithStatusIndicators", value: "GridListwithStatusIndicators", path: "/examples/ecommerceSections/GridLists.tsx.txt" },
		{ name: "HomeScreen", value: "HomeScreen", path: "/examples/ecommerceSections/HomeScreen.tsx.txt" },
		{ name: "IncentiveSection", value: "IncentiveSection", path: "/examples/ecommerceSections/IncentiveSection.tsx.txt" },
		{ name: "LandingPage", value: "LandingPage", path: "/examples/ecommerceSections/LandingPage.tsx.txt" },
		{ name: "OrderDetailsPage", value: "OrderDetailsPage", path: "/examples/ecommerceSections/OrderDetailsPage.tsx.txt" },
		{ name: "OrderHistory", value: "OrderHistory", path: "/examples/ecommerceSections/OrderHistory.tsx.txt" },
		{ name: "OrderSummaries", value: "OrderSummaries", path: "/examples/ecommerceSections/OrderSummaries.tsx.txt" },
		{ name: "PageHeadings", value: "PageHeadings", path: "/examples/ecommerceSections/PageHeadings.tsx.txt" },
		{ name: "PricingPage", value: "PricingPage", path: "/examples/ecommerceSections/PricingPage.tsx.txt" },
		{ name: "ProductLists", value: "ProductLists", path: "/examples/ecommerceSections/ProductLists.tsx.txt" },
		{ name: "ProductOverviews", value: "ProductOverviews", path: "/examples/ecommerceSections/ProductOverviews.tsx.txt" },
		{ name: "ProductPages", value: "ProductPages", path: "/examples/ecommerceSections/ProductPages.tsx.txt" },
		{ name: "ProductQuickviews", value: "ProductQuickviews", path: "/examples/ecommerceSections/ProductQuickviews.tsx.txt" },
		{ name: "ProductsFeatures", value: "ProductsFeatures", path: "/examples/ecommerceSections/ProductsFeatures.tsx.txt" },
		{ name: "PromoSection", value: "PromoSection", path: "/examples/ecommerceSections/PromoSection.tsx.txt" },
		{ name: "ReviewsSection", value: "ReviewsSection", path: "/examples/ecommerceSections/ReviewsSection.tsx.txt" },
		{ name: "SectionHeadings", value: "SectionHeadings", path: "/examples/ecommerceSections/SectionHeadings.tsx.txt" },
		{ name: "SettingsScreen", value: "SettingsScreen", path: "/examples/ecommerceSections/SettingsScreen.tsx.txt" },
		{ name: "ShoppingCart", value: "ShoppingCart", path: "/examples/ecommerceSections/ShoppingCart.tsx.txt" },
		{ name: "ShoppingCartPage", value: "ShoppingCartPage", path: "/examples/ecommerceSections/ShoppingCartPage.tsx.txt" },
		{ name: "StackedLayouts", value: "StackedLayouts", path: "/examples/ecommerceSections/StackedLayouts.tsx.txt" },
		{ name: "StackedLists", value: "StackedLists", path: "/examples/ecommerceSections/StackedLists.tsx.txt" },
		{ name: "StorefrontPages", value: "StorefrontPages", path: "/examples/ecommerceSections/StorefrontPages.tsx.txt" },
		{ name: "StoreNav", value: "StoreNav", path: "/examples/ecommerceSections/StoreNav.tsx.txt" },
	];

	let viewSelected;
	switch (name) {
		case "CategoryFilters":
			viewSelected = <CategoryFiltersSection />;
			break;
		case "CategoryPage":
			viewSelected = <CategoryPage />;
			break;
		case "CategoryPreviews":
			viewSelected = <CategoryPreviewsSection />;
			break;
		case "CheckoutForm":
			viewSelected = <CheckoutForm />;
			break;
		case "CheckoutPage":
			viewSelected = <CheckoutPage />;
			break;
		case "DetailsScreen":
			viewSelected = <DetailsScreen />;
			break;
		case "FeedComponents":
			viewSelected = <FeedsDemo />;
			break;
		case "GridLists":
			viewSelected = <GridLists />;
			break;
		case "GridListwithAvatars":
			viewSelected = <GridListwithAvatars />;
			break;
		case "GridListwithStatusIndicators":
			viewSelected = <GridListwithStatusIndicators />;
			break;
		case "HomeScreen":
			viewSelected = <HomePageSection />;
			break;
		case "IncentiveSection":
			viewSelected = <IncentiveDemo />;
			break;
		case "LandingPage":
			viewSelected = <LandingPageSection />;
			break;
		case "OrderDetailsPage":
			viewSelected = <OrderDetailsPage />;
			break;
		case "OrderHistory":
			viewSelected = <OrderHistory />;
			break;
		case "OrdersSummaries":
			viewSelected = <OrderSummaries />;
			break;
		case "PageHeadings":
			viewSelected = <PageHeadingsSection />;
			break;
		case "PricingPage":
			viewSelected = <PricingPage />;
			break;
		case "ProductLists":
			viewSelected = <ProductListPage />;
			break;
		case "ProductOverviews":
			viewSelected = <ProductOverviews />;
			break;
		case "ProductPages":
			viewSelected = <ProductPage />;
			break;
		case "ProductQuickviews":
			viewSelected = <ProductQuickviewsSection />;
			break;
		case "ProductsFeatures":
			viewSelected = <ProductsFeaturesSection />;
			break;
		case "PromoSection":
			viewSelected = <PromoSection />;
			break;
		case "ReviewsSection":
			viewSelected = <ReviewsSection />;
			break;
		case "SectionHeadings":
			viewSelected = <SectionHeadings />;
			break;
		case "SettingsScreen":
			viewSelected = <SettingsScreen />;
			break;
		case "ShoppingCart":
			viewSelected = <ShoppingCartSection />;
			break;
		case "ShoppingCartPage":
			viewSelected = <ShoppingCartPage />;
			break;
		case "StackedLayouts":
			viewSelected = <StackedLayoutsSection />;
			break;
		case "StackedLists":
			viewSelected = <StackedListsSection />;
			break;
		case "StorefrontPages":
			viewSelected = <StorefrontPage />;
			break;
		case "StoreNav":
			viewSelected = <StoreNavSection />;
			break;
		default:
			viewSelected = <LandingPage />;
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
			<MonacoEditor viewSelected={viewSelected} code={selectedCode} sections={sections}  setName={setName} name={name}/>
		</div>
	);
}

function Page({ sel, setSel, sections, viewSelected }) {
	return (
		<div className="flex flex-col justify-center gap-3 w-full">
			<div className="grid w-full max-w-sm items-center gap-1.5 mt-[25px] mx-auto">
				<Label>E-Commerce Sections</Label>
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
	return [{ title: "E-Commerce - 8an3/Bane" }, { name: "description", content: "8an3/Bane Remix Stack" }];
};
