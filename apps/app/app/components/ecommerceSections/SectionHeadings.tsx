// app/routes/section-headings.tsx
import { ChevronRight, Home } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "~/components/ui/breadcrumb";
import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Home } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "~/components/ui/breadcrumb";

export function SectionHeadings() {
	return (
		<div className="p-8 max-w-7xl mx-auto space-y-12">
			{/* Basic Section Heading */}
			<div>
				<h2 className="text-lg font-semibold text-gray-900">Team Members</h2>
				<p className="mt-1 text-sm text-gray-500">Manage your team members and their account permissions here.</p>
			</div>

			{/* Section Heading with Actions */}
			<div className="flex items-center justify-between">
				<div>
					<h2 className="text-lg font-semibold text-gray-900">Team Members</h2>
					<p className="mt-1 text-sm text-gray-500">Manage your team members and their account permissions here.</p>
				</div>
				<div className="flex space-x-3">
					<Button variant="outline">Invite</Button>
					<Button>New member</Button>
				</div>
			</div>

			{/* Section Heading with Tabs */}
			<div className="space-y-6">
				<div className="flex items-center justify-between">
					<div>
						<h2 className="text-lg font-semibold text-gray-900">Team Members</h2>
						<p className="mt-1 text-sm text-gray-500">Manage your team members and their account permissions here.</p>
					</div>
					<Button>New member</Button>
				</div>
				<Tabs defaultValue="active" className="w-full">
					<TabsList>
						<TabsTrigger value="active">Active</TabsTrigger>
						<TabsTrigger value="inactive">Inactive</TabsTrigger>
						<TabsTrigger value="pending">Pending</TabsTrigger>
					</TabsList>
				</Tabs>
			</div>

			{/* Section Heading with Meta Information */}
			<div className="flex items-center justify-between">
				<div>
					<div className="flex items-center space-x-3">
						<h2 className="text-lg font-semibold text-gray-900">Team Members</h2>
						<span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">12 members</span>
					</div>
					<p className="mt-1 text-sm text-gray-500">Manage your team members and their account permissions here.</p>
				</div>
				<Button variant="outline" className="flex items-center">
					View all
					<ChevronRight className="ml-1 h-4 w-4" />
				</Button>
			</div>

			{/* Section Heading with Breadcrumbs */}
			<div className="space-y-6">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href="#" className="flex items-center">
								<Home className="h-4 w-4 mr-2" />
								Home
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink href="#">Team</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink href="#">Members</BreadcrumbLink>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>

				<div className="flex items-center justify-between">
					<div>
						<h2 className="text-lg font-semibold text-gray-900">Team Members</h2>
						<p className="mt-1 text-sm text-gray-500">Manage your team members and their account permissions here.</p>
					</div>
					<Button>New member</Button>
				</div>
			</div>
		</div>
	);
}

export function BasicSectionHeading() {
	return (
		<div className="p-8 max-w-7xl mx-auto space-y-12">
			{/* Basic Section Heading */}
			<div>
				<h2 className="text-lg font-semibold text-gray-900">Team Members</h2>
				<p className="mt-1 text-sm text-gray-500">Manage your team members and their account permissions here.</p>
			</div>
		</div>
	);
}

export function SectionHeadingwithActions() {
	return (
		<div className="flex items-center justify-between">
			<div>
				<h2 className="text-lg font-semibold text-gray-900">Team Members</h2>
				<p className="mt-1 text-sm text-gray-500">Manage your team members and their account permissions here.</p>
			</div>
			<div className="flex space-x-3">
				<Button variant="outline">Invite</Button>
				<Button>New member</Button>
			</div>
		</div>
	);
}

export function SectionHeadingwithTabs() {
	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h2 className="text-lg font-semibold text-gray-900">Team Members</h2>
					<p className="mt-1 text-sm text-gray-500">Manage your team members and their account permissions here.</p>
				</div>
				<Button>New member</Button>
			</div>
			<Tabs defaultValue="active" className="w-full">
				<TabsList>
					<TabsTrigger value="active">Active</TabsTrigger>
					<TabsTrigger value="inactive">Inactive</TabsTrigger>
					<TabsTrigger value="pending">Pending</TabsTrigger>
				</TabsList>
			</Tabs>
		</div>
	);
}

export function SectionHeadingwithMetaInformation() {
	return (
		<div className="flex items-center justify-between">
			<div>
				<div className="flex items-center space-x-3">
					<h2 className="text-lg font-semibold text-gray-900">Team Members</h2>
					<span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">12 members</span>
				</div>
				<p className="mt-1 text-sm text-gray-500">Manage your team members and their account permissions here.</p>
			</div>
			<Button variant="outline" className="flex items-center">
				View all
				<ChevronRight className="ml-1 h-4 w-4" />
			</Button>
		</div>
	);
}

export function SectionHeadingwithBreadcrumbs() {
	return (
		<div className="space-y-6">
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="#" className="flex items-center">
							<Home className="h-4 w-4 mr-2" />
							Home
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink href="#">Team</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink href="#">Members</BreadcrumbLink>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="flex items-center justify-between">
				<div>
					<h2 className="text-lg font-semibold text-gray-900">Team Members</h2>
					<p className="mt-1 text-sm text-gray-500">Manage your team members and their account permissions here.</p>
				</div>
				<Button>New member</Button>
			</div>
		</div>
	);
}
