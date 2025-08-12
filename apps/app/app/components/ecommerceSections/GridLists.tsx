// app/routes/grid-lists.tsx
import { Link } from "@remix-run/react";
import { Star, MoreVertical } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Circle, CheckCircle2, Clock, AlertCircle } from "lucide-react";

export function GridLists() {
	const items = [
		{ id: 1, name: "Project Alpha", category: "Development", stars: 85, url: "#" },
		{ id: 2, name: "Marketing Campaign", category: "Marketing", stars: 42, url: "#" },
		{ id: 3, name: "User Research", category: "Research", stars: 30, url: "#" },
		{ id: 4, name: "Q3 Roadmap", category: "Planning", stars: 64, url: "#" },
		{ id: 5, name: "Website Redesign", category: "Design", stars: 93, url: "#" },
		{ id: 6, name: "Customer Feedback", category: "Research", stars: 27, url: "#" },
	];

	return (
		<div className="p-8 max-w-7xl mx-auto">
			<h2 className="text-2xl font-bold text-gray-900 mb-6">Projects</h2>

			{/* Basic Grid List */}
			<div className="mb-12">
				<h3 className="text-lg font-medium text-gray-900 mb-4">Basic Grid</h3>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{items.map((item) => (
						<Card key={item.id}>
							<CardHeader className="pb-0">
								<div className="flex justify-between items-start">
									<div>
										<h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
										<p className="text-sm text-gray-500">{item.category}</p>
									</div>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button variant="ghost" size="sm" className="h-8 w-8 p-0">
												<MoreVertical className="h-4 w-4" />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end">
											<DropdownMenuItem>View</DropdownMenuItem>
											<DropdownMenuItem>Edit</DropdownMenuItem>
											<DropdownMenuItem>Delete</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</div>
							</CardHeader>
							<CardContent className="mt-4">
								<div className="flex items-center">
									<Star className="h-5 w-5 text-yellow-400" />
									<span className="ml-2 text-sm text-gray-700">{item.stars}</span>
								</div>
							</CardContent>
							<CardFooter>
								<Button asChild variant="outline" className="w-full">
									<Link to={item.url}>View project</Link>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}

export function GridListwithAvatars() {
	const teamMembers = [
		{ id: 1, name: "Alex Johnson", role: "Frontend Developer", avatar: "", status: "active" },
		{ id: 2, name: "Maria Garcia", role: "UX Designer", avatar: "", status: "active" },
		{ id: 3, name: "Sam Wilson", role: "Backend Developer", avatar: "", status: "away" },
		{ id: 4, name: "Taylor Smith", role: "Product Manager", avatar: "", status: "active" },
		{ id: 5, name: "Jordan Lee", role: "QA Engineer", avatar: "", status: "offline" },
		{ id: 6, name: "Casey Kim", role: "DevOps Engineer", avatar: "", status: "active" },
	];

	return (
		<div className="mb-12">
			<h3 className="text-lg font-medium text-gray-900 mb-4">Team Members with Avatars</h3>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{teamMembers.map((member) => (
					<Card key={member.id}>
						<CardContent className="pt-6">
							<div className="flex items-center space-x-4">
								<Avatar>
									<AvatarImage src={member.avatar} />
									<AvatarFallback>
										{member.name
											.split(" ")
											.map((n) => n[0])
											.join("")}
									</AvatarFallback>
								</Avatar>
								<div className="space-y-1">
									<h4 className="text-sm font-semibold">{member.name}</h4>
									<p className="text-sm text-gray-500">{member.role}</p>
									<div className="flex items-center">
										<span className={`inline-block h-2 w-2 rounded-full mr-2 ${member.status === "active" ? "bg-green-500" : member.status === "away" ? "bg-yellow-500" : "bg-gray-500"}`} />
										<span className="text-xs text-gray-500 capitalize">{member.status}</span>
									</div>
								</div>
							</div>
						</CardContent>
						<CardFooter className="flex justify-between">
							<Button variant="outline" size="sm">
								Message
							</Button>
							<Button variant="ghost" size="sm">
								Profile
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
}

export function GridListwithStatusIndicators() {
	const tasks = [
		{ id: 1, title: "Implement user authentication", project: "Project Alpha", status: "completed", due: "2023-06-15" },
		{ id: 2, title: "Design dashboard UI", project: "Website Redesign", status: "in-progress", due: "2023-06-20" },
		{ id: 3, title: "Write API documentation", project: "Project Alpha", status: "pending", due: "2023-06-18" },
		{ id: 4, title: "Fix mobile layout issues", project: "Website Redesign", status: "in-progress", due: "2023-06-16" },
		{ id: 5, title: "Conduct user testing", project: "User Research", status: "overdue", due: "2023-06-10" },
		{ id: 6, title: "Deploy to production", project: "Project Alpha", status: "pending", due: "2023-06-25" },
	];

	return (
		// Add this section to your return statement
		<div className="mb-12">
			<h3 className="text-lg font-medium text-gray-900 mb-4">Tasks with Status Indicators</h3>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{tasks.map((task) => {
					const statusIcon = {
						completed: <CheckCircle2 className="h-5 w-5 text-green-500" />,
						"in-progress": <Circle className="h-5 w-5 text-blue-500" />,
						pending: <Clock className="h-5 w-5 text-yellow-500" />,
						overdue: <AlertCircle className="h-5 w-5 text-red-500" />,
					}[task.status];

					return (
						<Card key={task.id}>
							<CardHeader>
								<div className="flex justify-between items-start">
									<h3 className="text-lg font-medium text-gray-900">{task.title}</h3>
									<div className="flex items-center">{statusIcon}</div>
								</div>
								<p className="text-sm text-gray-500">{task.project}</p>
							</CardHeader>
							<CardContent>
								<div className="flex justify-between text-sm">
									<span className="text-gray-500">Due date</span>
									<span className={`font-medium ${task.status === "overdue" ? "text-red-500" : "text-gray-700"}`}>{new Date(task.due).toLocaleDateString()}</span>
								</div>
							</CardContent>
							<CardFooter className="flex justify-between">
								<Button variant="ghost" size="sm">
									Details
								</Button>
								<Button size="sm">{task.status === "completed" ? "View" : "Update"}</Button>
							</CardFooter>
						</Card>
					);
				})}
			</div>
		</div>
	);
}
