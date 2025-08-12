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
import { CategoryFiltersSection } from "~/components/ecommerceSections/CategoryFilters";
import { CategoryPage } from "~/components/ecommerceSections/CategoryPage";
import { CategoryPreviewsSection } from "~/components/ecommerceSections/CategoryPreviews";
import { CheckoutForm } from "~/components/ecommerceSections/CheckoutForm";
import { CheckoutPage } from "~/components/ecommerceSections/CheckoutPage";
import { DetailsScreen } from "~/components/ecommerceSections/DetailsScreen";
import { FeedsDemo } from "~/components/ecommerceSections/FeedComponents";
import { GridLists } from "~/components/ecommerceSections/GridLists";
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

export default function Dashboard() {
	const [sel, setSel] = useState("LandingPage");
	const sections = [
		{ name: "CategoryFilters", value: "CategoryFilters" },
		{ name: "CategoryPage", value: "CategoryPage" },
		{ name: "CategoryPreviews", value: "CategoryPreviews" },
		{ name: "CheckoutForm", value: "CheckoutForm" },
		{ name: "CheckoutPage", value: "CheckoutPage" },
		{ name: "DetailsScreen", value: "DetailsScreen" },
		{ name: "FeedComponents", value: "FeedComponents" },
		{ name: "GridLists", value: "GridLists" },
		{ name: "HomeScreen", value: "HomeScreen" },
		{ name: "IncentiveSection", value: "IncentiveSection" },
		{ name: "LandingPage", value: "LandingPage" },
		{ name: "OrderDetailsPage", value: "OrderDetailsPage" },
		{ name: "OrderHistory", value: "OrderHistory" },
		{ name: "OrdersSummaries", value: "OrdersSummaries" },
		{ name: "PageHeadings", value: "PageHeadings" },
		{ name: "PricingPage", value: "PricingPage" },
		{ name: "ProductLists", value: "ProductLists" },
		{ name: "ProductOverviews", value: "ProductOverviews" },
		{ name: "ProductPages", value: "ProductPages" },
		{ name: "ProductQuickviews", value: "ProductQuickviews" },
		{ name: "ProductsFeatures", value: "ProductsFeatures" },
		{ name: "PromoSection", value: "PromoSection" },
		{ name: "ReviewsSection", value: "ReviewsSection" },
		{ name: "SectionHeadings", value: "SectionHeadings" },
		{ name: "SettingsScreen", value: "SettingsScreen" },
		{ name: "ShoppingCart", value: "ShoppingCart" },
		{ name: "ShoppingCartPage", value: "ShoppingCartPage" },
		{ name: "StackedLayouts", value: "StackedLayouts" },
		{ name: "StackedLists", value: "StackedLists" },
		{ name: "StorefrontPages", value: "StorefrontPages" },
		{ name: "StoreNav", value: "StoreNav" },
	];
	let viewSelected;
	switch (sel) {
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
