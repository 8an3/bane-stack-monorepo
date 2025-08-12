// app/routes/settings.tsx
import { ChevronLeft, Settings, User, Mail, Lock, Bell, CreditCard, Database, Globe, HelpCircle } from "lucide-react";
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "~/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

export   function SettingsScreen() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <Link to="/dashboard" className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back
          </Link>
          <h1 className="text-2xl font-bold flex items-center">
            <Settings className="h-6 w-6 mr-2" />
            Settings
          </h1>
        </div>
        <Button>Save changes</Button>
      </div>

      {/* Main content */}
      <Tabs defaultValue="account" className="w-full">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar navigation */}
          <div className="w-full md:w-48">
            <TabsList className="flex flex-col h-auto p-2 bg-transparent">
              <TabsTrigger value="account" className="justify-start">
                <User className="h-4 w-4 mr-2" />
                Account
              </TabsTrigger>
              <TabsTrigger value="notifications" className="justify-start">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="billing" className="justify-start">
                <CreditCard className="h-4 w-4 mr-2" />
                Billing
              </TabsTrigger>
              <TabsTrigger value="data" className="justify-start">
                <Database className="h-4 w-4 mr-2" />
                Data
              </TabsTrigger>
              <TabsTrigger value="language" className="justify-start">
                <Globe className="h-4 w-4 mr-2" />
                Language
              </TabsTrigger>
              <TabsTrigger value="support" className="justify-start">
                <HelpCircle className="h-4 w-4 mr-2" />
                Support
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Content area */}
          <div className="flex-1">
            {/* Account settings */}
            <TabsContent value="account">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src="" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <Button variant="outline">Change</Button>
                        <p className="text-sm text-gray-500">JPG, GIF or PNG. Max size of 2MB</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="john@example.com" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Security</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm new password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter className="border-t px-6 py-4">
                    <Button>
                      <Lock className="h-4 w-4 mr-2" />
                      Update password
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Notification settings */}
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between space-x-4">
                    <div>
                      <Label htmlFor="email-notifications">Email notifications</Label>
                      <p className="text-sm text-gray-500">Receive emails about your account activity</p>
                    </div>
                    <Switch id="email-notifications" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between space-x-4">
                    <div>
                      <Label htmlFor="push-notifications">Push notifications</Label>
                      <p className="text-sm text-gray-500">Receive push notifications on your device</p>
                    </div>
                    <Switch id="push-notifications" />
                  </div>

                  <div className="flex items-center justify-between space-x-4">
                    <div>
                      <Label htmlFor="marketing-emails">Marketing emails</Label>
                      <p className="text-sm text-gray-500">Receive emails about new products and features</p>
                    </div>
                    <Switch id="marketing-emails" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between space-x-4">
                    <div>
                      <Label htmlFor="security-alerts">Security alerts</Label>
                      <p className="text-sm text-gray-500">Receive emails about security changes</p>
                    </div>
                    <Switch id="security-alerts" defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Billing settings */}
            <TabsContent value="billing">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <Card className="border-2 border-blue-500">
                        <CardHeader>
                          <CardTitle className="text-lg">Pro</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-3xl font-bold">$15</p>
                          <p className="text-sm text-gray-500">per month</p>
                          <Button className="w-full mt-4">Current plan</Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Free</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-3xl font-bold">$0</p>
                          <p className="text-sm text-gray-500">forever</p>
                          <Button variant="outline" className="w-full mt-4">
                            Downgrade
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Enterprise</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-3xl font-bold">$30</p>
                          <p className="text-sm text-gray-500">per month</p>
                          <Button variant="outline" className="w-full mt-4">
                            Upgrade
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Payment method</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <CreditCard className="h-6 w-6" />
                        <div>
                          <p className="font-medium">Visa ending in 4242</p>
                          <p className="text-sm text-gray-500">Expires 12/2024</p>
                        </div>
                      </div>
                      <Button variant="ghost">Edit</Button>
                    </div>
                    <Button variant="outline" className="w-full">
                      Add new payment method
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Language settings */}
            <TabsContent value="language">
              <Card>
                <CardHeader>
                  <CardTitle>Language</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Display language</Label>
                    <Select defaultValue="english">
                      <SelectTrigger>
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="spanish">Spanish</SelectItem>
                        <SelectItem value="french">French</SelectItem>
                        <SelectItem value="german">German</SelectItem>
                        <SelectItem value="japanese">Japanese</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button>Save preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
}