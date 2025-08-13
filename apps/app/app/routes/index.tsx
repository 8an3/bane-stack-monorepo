import { ActionArgs, defer, json, redirect, type ActionArgs, type LoaderArgs } from '@remix-run/node';
import { PageHeaderFunction } from '~/components/customUi/page-header';
import { HeroSection } from '~/components/sections/HeroSection';

export default function Dashboard() {
    return (
        <div className="bg-background rounded-[15px] m-[15px] overflow-hidden h-[calc(100vh-54px)] flex flex-col w-full justify-center items-center">
            <PageHeaderFunction />
        </div>
    )
}

export async function loader({ request }: LoaderArgs) {
  return null
}

export const meta: MetaFunction = () => {
	return [
		{ title: "8an3/Bane" },
		{ name: "description", content: "8an3/Bane Remix Stack" },
	];
};