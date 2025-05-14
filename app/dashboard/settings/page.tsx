"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Bell,
  Globe,
  Key,
  Lock,
  LogOut,
  Mail,
  Save,
  Shield,
  Smartphone,
  Trash2,
  User,
  BriefcaseBusiness,
} from "lucide-react"
import { PageTransition } from "@/components/page-transition"

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState({
    jobAlerts: true,
    interviewReminders: true,
    courseUpdates: true,
    networkActivity: false,
    marketingEmails: false,
  })

  const [pushNotifications, setPushNotifications] = useState({
    jobAlerts: true,
    interviewReminders: true,
    courseUpdates: false,
    networkActivity: true,
    marketingEmails: false,
  })

  return (
    <PageTransition>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight gradient-text">Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>

        <Tabs defaultValue="account" className="space-y-4">
          <TabsList className="grid grid-cols-4 w-full md:w-[600px]">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy & Security</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Update your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="San Francisco, CA" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>Update your password to keep your account secure</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm new password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>
                  <Key className="mr-2 h-4 w-4" />
                  Update Password
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Danger Zone</CardTitle>
                <CardDescription>Irreversible account actions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 p-4 border border-destructive/20 rounded-lg">
                  <div>
                    <h3 className="font-medium">Delete Account</h3>
                    <p className="text-sm text-muted-foreground">
                      Permanently delete your account and all associated data. This action cannot be undone.
                    </p>
                  </div>
                  <Button variant="destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete Account
                  </Button>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Log Out of All Devices</h3>
                    <p className="text-sm text-muted-foreground">
                      Sign out from all devices where you're currently logged in.
                    </p>
                  </div>
                  <Button variant="outline">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log Out Everywhere
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Email Notifications</CardTitle>
                <CardDescription>Manage the emails you receive from us</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    id: "jobAlerts",
                    title: "Job Alerts",
                    description: "Receive notifications about new job matches",
                  },
                  {
                    id: "interviewReminders",
                    title: "Interview Reminders",
                    description: "Get reminders about upcoming mock interviews",
                  },
                  {
                    id: "courseUpdates",
                    title: "Course Updates",
                    description: "Updates about courses you're enrolled in",
                  },
                  {
                    id: "networkActivity",
                    title: "Network Activity",
                    description: "Notifications about alumni network events and connections",
                  },
                  {
                    id: "marketingEmails",
                    title: "Marketing Emails",
                    description: "Promotional content and special offers",
                  },
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor={`email-${item.id}`}>{item.title}</Label>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <Switch
                      id={`email-${item.id}`}
                      checked={emailNotifications[item.id]}
                      onCheckedChange={(checked) => setEmailNotifications((prev) => ({ ...prev, [item.id]: checked }))}
                    />
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Unsubscribe from All</Button>
                <Button>
                  <Mail className="mr-2 h-4 w-4" />
                  Save Preferences
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Push Notifications</CardTitle>
                <CardDescription>Manage notifications on your devices</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    id: "jobAlerts",
                    title: "Job Alerts",
                    description: "Receive notifications about new job matches",
                  },
                  {
                    id: "interviewReminders",
                    title: "Interview Reminders",
                    description: "Get reminders about upcoming mock interviews",
                  },
                  {
                    id: "courseUpdates",
                    title: "Course Updates",
                    description: "Updates about courses you're enrolled in",
                  },
                  {
                    id: "networkActivity",
                    title: "Network Activity",
                    description: "Notifications about alumni network events and connections",
                  },
                  {
                    id: "marketingEmails",
                    title: "Marketing Emails",
                    description: "Promotional content and special offers",
                  },
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor={`push-${item.id}`}>{item.title}</Label>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <Switch
                      id={`push-${item.id}`}
                      checked={pushNotifications[item.id]}
                      onCheckedChange={(checked) => setPushNotifications((prev) => ({ ...prev, [item.id]: checked }))}
                    />
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Disable All</Button>
                <Button>
                  <Bell className="mr-2 h-4 w-4" />
                  Save Preferences
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>Control who can see your information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    id: "profileVisibility",
                    title: "Profile Visibility",
                    description: "Who can view your profile",
                    options: [
                      { value: "public", label: "Public" },
                      { value: "alumni", label: "Alumni Only" },
                      { value: "connections", label: "My Connections" },
                      { value: "private", label: "Private" },
                    ],
                    defaultValue: "alumni",
                  },
                  {
                    id: "contactInfo",
                    title: "Contact Information",
                    description: "Who can see your email and phone number",
                    options: [
                      { value: "public", label: "Public" },
                      { value: "alumni", label: "Alumni Only" },
                      { value: "connections", label: "My Connections" },
                      { value: "private", label: "Private" },
                    ],
                    defaultValue: "connections",
                  },
                  {
                    id: "jobHistory",
                    title: "Job History",
                    description: "Who can see your employment history",
                    options: [
                      { value: "public", label: "Public" },
                      { value: "alumni", label: "Alumni Only" },
                      { value: "connections", label: "My Connections" },
                      { value: "private", label: "Private" },
                    ],
                    defaultValue: "alumni",
                  },
                  {
                    id: "skills",
                    title: "Skills & Expertise",
                    description: "Who can see your skills and expertise",
                    options: [
                      { value: "public", label: "Public" },
                      { value: "alumni", label: "Alumni Only" },
                      { value: "connections", label: "My Connections" },
                      { value: "private", label: "Private" },
                    ],
                    defaultValue: "public",
                  },
                ].map((setting) => (
                  <div key={setting.id} className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                    <div className="space-y-0.5">
                      <Label htmlFor={setting.id}>{setting.title}</Label>
                      <p className="text-sm text-muted-foreground">{setting.description}</p>
                    </div>
                    <Select defaultValue={setting.defaultValue}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select visibility" />
                      </SelectTrigger>
                      <SelectContent>
                        {setting.options.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>
                  <User className="mr-2 h-4 w-4" />
                  Save Privacy Settings
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Enhance the security of your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Two-Factor Authentication</h3>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account by requiring a verification code in addition to
                      your password.
                    </p>
                  </div>
                  <Button>
                    <Shield className="mr-2 h-4 w-4" />
                    Enable 2FA
                  </Button>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Login Devices</h3>
                    <p className="text-sm text-muted-foreground">
                      View and manage devices that are currently logged into your account.
                    </p>
                  </div>
                  <Button variant="outline">
                    <Smartphone className="mr-2 h-4 w-4" />
                    Manage Devices
                  </Button>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Login History</h3>
                    <p className="text-sm text-muted-foreground">
                      Review recent login activity to ensure your account hasn't been compromised.
                    </p>
                  </div>
                  <Button variant="outline">
                    <Lock className="mr-2 h-4 w-4" />
                    View History
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data & Privacy</CardTitle>
                <CardDescription>Manage your personal data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Download Your Data</h3>
                    <p className="text-sm text-muted-foreground">
                      Get a copy of all the data we have stored about you, including your profile, activity, and
                      preferences.
                    </p>
                  </div>
                  <Button variant="outline">Request Data</Button>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Data Sharing</h3>
                    <p className="text-sm text-muted-foreground">
                      Control how your data is used for personalization and improvement of our services.
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Application Preferences</CardTitle>
                <CardDescription>Customize your experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                  <div className="space-y-0.5">
                    <Label htmlFor="language">Language</Label>
                    <p className="text-sm text-muted-foreground">Select your preferred language</p>
                  </div>
                  <Select defaultValue="en">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="zh">Chinese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                  <div className="space-y-0.5">
                    <Label htmlFor="timezone">Timezone</Label>
                    <p className="text-sm text-muted-foreground">Set your local timezone for accurate scheduling</p>
                  </div>
                  <Select defaultValue="america_los_angeles">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="america_los_angeles">Pacific Time (PT)</SelectItem>
                      <SelectItem value="america_denver">Mountain Time (MT)</SelectItem>
                      <SelectItem value="america_chicago">Central Time (CT)</SelectItem>
                      <SelectItem value="america_new_york">Eastern Time (ET)</SelectItem>
                      <SelectItem value="europe_london">London (GMT)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="autoplay">Autoplay Videos</Label>
                    <p className="text-sm text-muted-foreground">Automatically play videos in courses</p>
                  </div>
                  <Switch id="autoplay" defaultChecked />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>
                  <Globe className="mr-2 h-4 w-4" />
                  Save Preferences
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Job Preferences</CardTitle>
                <CardDescription>Customize your job search experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="jobTypes">Job Types</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Full-time",
                      "Part-time",
                      "Contract",
                      "Internship",
                      "Remote",
                      "Hybrid",
                      "On-site",
                      "Entry-level",
                    ].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Switch
                          id={`job-type-${type.toLowerCase()}`}
                          defaultChecked={["Full-time", "Remote", "Hybrid"].includes(type)}
                        />
                        <Label htmlFor={`job-type-${type.toLowerCase()}`}>{type}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="locations">Preferred Locations</Label>
                  <Textarea
                    id="locations"
                    placeholder="Enter locations separated by commas"
                    defaultValue="San Francisco, CA; New York, NY; Remote"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salary">Salary Range</Label>
                  <Select defaultValue="100k_150k">
                    <SelectTrigger>
                      <SelectValue placeholder="Select salary range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50k_100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="100k_150k">$100,000 - $150,000</SelectItem>
                      <SelectItem value="150k_200k">$150,000 - $200,000</SelectItem>
                      <SelectItem value="200k_plus">$200,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>
                  <BriefcaseBusiness className="mr-2 h-4 w-4" />
                  Save Job Preferences
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageTransition>
  )
}
