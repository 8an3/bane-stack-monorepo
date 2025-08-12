// app/routes/details/$id.tsx
import { ChevronLeft, Star, MoreVertical, Clock, CheckCircle2, AlertCircle, User, Mail, Phone, MapPin, Link as LinkIcon } from "lucide-react";
import { Link, useParams } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "~/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "~/components/ui/dropdown-menu";

export   function DetailsScreen() {
  const { id } = useParams();

  // Mock data - replace with your actual data fetching
  const project = {
    id: id || "1",
    title: "Website Redesign",
    description: "Complete overhaul of the company website including new UI components and improved UX.",
    status: "in-progress",
    dueDate: "2023-12-15",
    owner: {
      name: "Alex Johnson",
      avatar: "",
      role: "Project Lead"
    },
    team: [
      { name: "Maria Garcia", role: "Designer", avatar: "" },
      { name: "Sam Wilson", role: "Developer", avatar: "" },
      { name: "Taylor Smith", role: "QA", avatar: "" }
    ],
    stats: {
      tasksCompleted: 24,
      totalTasks: 36,
      budgetUsed: "$12,450",
      totalBudget: "$20,000"
    },
    details: {
      client: "Acme Inc.",
      priority: "High",
      startDate: "2023-10-01"
    }
  };

  const statusIcon = {
    completed: <CheckCircle2 className="h-5 w-5 text-green-500" />,
    "in-progress": <Clock className="h-5 w-5 text-blue-500" />,
    overdue: <AlertCircle className="h-5 w-5 text-red-500" />
  }[project.status];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header with back button and actions */}
      <div className="flex items-center justify-between mb-6">
        <Link to="/projects" className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to projects
        </Link>
        <div className="flex space-x-3">
          <Button variant="outline">Edit</Button>
          <Button>Share</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Archive</DropdownMenuItem>
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Project header */}
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold text-gray-900">{project.title}</h1>
                <Badge variant={project.status === "completed" ? "default" : project.status === "in-progress" ? "secondary" : "destructive"}>
                  {project.status.split('-').join(' ')}
                </Badge>
              </div>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
            <div className="flex items-center space-x-2">
              {statusIcon}
              <span className="text-sm font-medium text-gray-700">
                Due {new Date(project.dueDate).toLocaleDateString()}
              </span>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
              <TabsTrigger value="files">Files</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="pt-6">
              {/* Overview content */}
              <div className="space-y-6">
                {/* Progress cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Progress</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {Math.round((project.stats.tasksCompleted / project.stats.totalTasks) * 100)}%
                      </div>
                      <div className="mt-2 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500" 
                          style={{ width: `${Math.round((project.stats.tasksCompleted / project.stats.totalTasks) * 100)}%` }}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        {project.stats.tasksCompleted} of {project.stats.totalTasks} tasks completed
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Budget</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{project.stats.budgetUsed}</div>
                      <p className="mt-2 text-sm text-gray-500">
                        of {project.stats.totalBudget} total
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Description card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Project Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">Client</h3>
                          <p className="mt-1 text-sm text-gray-900">{project.details.client}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">Priority</h3>
                          <p className="mt-1 text-sm text-gray-900">{project.details.priority}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">Start Date</h3>
                          <p className="mt-1 text-sm text-gray-900">
                            {new Date(project.details.startDate).toLocaleDateString()}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">Due Date</h3>
                          <p className="mt-1 text-sm text-gray-900">
                            {new Date(project.dueDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Project owner */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Project Owner</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={project.owner.avatar} />
                  <AvatarFallback>{project.owner.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">{project.owner.name}</h3>
                  <p className="text-sm text-gray-500">{project.owner.role}</p>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="h-4 w-4 mr-2" />
                  Send message
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <User className="h-4 w-4 mr-2" />
                  View profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Team members */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Team Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {project.team.map((member) => (
                  <div key={member.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-sm font-medium">{member.name}</h3>
                        <p className="text-sm text-gray-500">{member.role}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                Add team member
              </Button>
            </CardContent>
          </Card>

          {/* Client details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Client Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-gray-500 mr-3" />
                  <span className="text-sm">contact@acme.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-gray-500 mr-3" />
                  <span className="text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-gray-500 mr-3" />
                  <span className="text-sm">123 Business Ave, San Francisco</span>
                </div>
                <div className="flex items-center">
                  <LinkIcon className="h-4 w-4 text-gray-500 mr-3" />
                  <a href="#" className="text-sm text-blue-600 hover:underline">acme.com</a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}