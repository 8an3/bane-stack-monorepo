import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "~/components/customUi/page-header";



export function Scaffolding({ title }) {
	return (
		<div className="bg-background rounded-[15px] m-[15px] overflow-hidden h-[calc(20vh-54px)] flex flex-col w-full justify-center items-center">
			<div className="flex  py-[100px]  ">
				<PageHeader>
					<PageHeaderHeading className="max-w-4xl">Scaffolding - {title}</PageHeaderHeading>
					<PageHeaderDescription>The remaining or part of the code in order to make it work.</PageHeaderDescription>
				</PageHeader>
			</div>
		</div>
	);
}