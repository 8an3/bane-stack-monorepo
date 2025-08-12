import ProductsPage from "~/components/blocks/products/products-01/page";

export default function Page() {
    return (
        <ProductsPage />
    )
}

export const meta: MetaFunction = () => {
	return [
		{ title: "Products - 8an3/Bane" },
		{ name: "description", content: "8an3/Bane Remix Stack" },
	];
};

export async function loader({ request }: LoaderArgs) {
  return null
}