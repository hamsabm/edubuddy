"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowUp,
  BookOpen,
  BriefcaseBusiness,
  Calendar,
  Download,
  FileText,
  GraduationCap,
  LineChart,
  MessageSquare,
  Target,
  TrendingUp,
  Users,
} from "lucide-react"
import { PageTransition } from "@/components/page-transition"

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("month")

  return (
    <PageTransition>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight gradient-text">Career Analytics</h1>
          <p className="text-muted-foreground">Track your progress and gain insights into your career development</p>
        </div>

        <div className="flex justify-between items-center">
          <Tabs defaultValue="overview" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="learning">Learning</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex items-center gap-2">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Last 7 days</SelectItem>
                <SelectItem value="month">Last 30 days</SelectItem>
                <SelectItem value="quarter">Last 3 months</SelectItem>
                <SelectItem value="year">Last 12 months</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card hover>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profile Strength</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <Progress value={78} className="mt-2" />
              <div className="flex items-center gap-1 mt-2">
                <ArrowUp className="h-3 w-3 text-green-500" />
                <p className="text-xs text-green-500">+5% from last month</p>
              </div>
            </CardContent>
          </Card>
          <Card hover>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Job Applications</CardTitle>
              <BriefcaseBusiness className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <div className="flex items-center gap-1 mt-2">
                <ArrowUp className="h-3 w-3 text-green-500" />
                <p className="text-xs text-green-500">+3 from last month</p>
              </div>
            </CardContent>
          </Card>
          <Card hover>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Interview Score</CardTitle>
              <MessageSquare className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">82/100</div>
              <Progress value={82} className="mt-2" />
              <div className="flex items-center gap-1 mt-2">
                <ArrowUp className="h-3 w-3 text-green-500" />
                <p className="text-xs text-green-500">+7 points from last attempt</p>
              </div>
            </CardContent>
          </Card>
          <Card hover>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Skills Added</CardTitle>
              <Target className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <div className="flex items-center gap-1 mt-2">
                <ArrowUp className="h-3 w-3 text-green-500" />
                <p className="text-xs text-green-500">+2 from last month</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card hover>
            <CardHeader>
              <CardTitle>Career Progress</CardTitle>
              <CardDescription>Your journey towards your dream job</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex flex-col justify-center">
                <div className="space-y-4">
                  {[
                    { name: "Profile Completion", value: 90 },
                    { name: "Skills Acquisition", value: 65 },
                    { name: "Interview Readiness", value: 75 },
                    { name: "Job Application Strategy", value: 50 },
                    { name: "Network Building", value: 40 },
                  ].map((item, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{item.name}</span>
                        <span className="font-medium">{item.value}%</span>
                      </div>
                      <Progress value={item.value} className="h-2" />
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <div className="text-2xl font-bold">64%</div>
                  <p className="text-sm text-muted-foreground">Overall Career Readiness</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card hover>
            <CardHeader>
              <CardTitle>Application Status</CardTitle>
              <CardDescription>Status of your job applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { status: "Applied", count: 12, color: "bg-primary" },
                    { status: "Screening", count: 5, color: "bg-purple-400" },
                    { status: "Interview", count: 3, color: "bg-purple-500" },
                    { status: "Offer", count: 1, color: "bg-green-500" },
                    { status: "Rejected", count: 2, color: "bg-red-500" },
                    { status: "Withdrawn", count: 1, color: "bg-gray-400" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`h-4 w-4 rounded-full ${item.color}`}></div>
                      <div>
                        <div className="font-medium">{item.status}</div>
                        <div className="text-2xl font-bold">{item.count}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-6 gap-1">
                  {[
                    { width: "col-span-2", color: "bg-primary" },
                    { width: "col-span-1", color: "bg-purple-400" },
                    { width: "col-span-1", color: "bg-purple-500" },
                    { width: "col-span-1", color: "bg-green-500" },
                    { width: "col-span-1", color: "bg-red-500/80" },
                  ].map((bar, i) => (
                    <div key={i} className={`h-2 rounded-full ${bar.width} ${bar.color}`}></div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card hover>
            <CardHeader>
              <CardTitle>Skills Growth</CardTitle>
              <CardDescription>Your skill development over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { category: "Technical Skills", count: 18, growth: "+4", icon: FileText },
                  { category: "Soft Skills", count: 12, growth: "+2", icon: Users },
                  { category: "Industry Knowledge", count: 8, growth: "+1", icon: BriefcaseBusiness },
                  { category: "Certifications", count: 3, growth: "+1", icon: GraduationCap },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{item.category}</div>
                        <div className="text-sm text-muted-foreground">{item.count} skills</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-green-500/10 text-green-600">
                      {item.growth}
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Top Skills by Demand</span>
                </div>
                <div className="space-y-2">
                  {[
                    { skill: "React.js", demand: 95 },
                    { skill: "TypeScript", demand: 90 },
                    { skill: "Node.js", demand: 85 },
                    { skill: "AWS", demand: 80 },
                    { skill: "System Design", demand: 75 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-full flex-1">
                        <div className="flex justify-between text-sm mb-1">
                          <span>{item.skill}</span>
                          <span>{item.demand}%</span>
                        </div>
                        <Progress value={item.demand} className="h-1.5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card hover>
            <CardHeader>
              <CardTitle>Learning Activity</CardTitle>
              <CardDescription>Your educational progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-bold">42 hours</div>
                    <div className="text-sm text-muted-foreground">Total learning time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">7 days</div>
                    <div className="text-sm text-muted-foreground">Current streak</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Weekly Activity</div>
                  <div className="grid grid-cols-7 gap-1">
                    {[5, 2, 3, 4, 1, 6, 3].map((hours, i) => (
                      <div key={i} className="space-y-1 text-center">
                        <div className="h-16 w-full bg-muted rounded-md relative overflow-hidden">
                          <div
                            className="absolute bottom-0 w-full bg-primary transition-all duration-500"
                            style={{ height: `${(hours / 6) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-muted-foreground">{["M", "T", "W", "T", "F", "S", "S"][i]}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Recent Courses</div>
                  <div className="space-y-3">
                    {[
                      {
                        title: "AWS Certified Developer",
                        progress: 45,
                        lastActive: "2 days ago",
                        icon: BookOpen,
                      },
                      {
                        title: "System Design Interview",
                        progress: 20,
                        lastActive: "Yesterday",
                        icon: BookOpen,
                      },
                      {
                        title: "Advanced React Patterns",
                        progress: 75,
                        lastActive: "Today",
                        icon: BookOpen,
                      },
                    ].map((course, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <course.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium truncate">{course.title}</span>
                            <span className="text-xs text-muted-foreground">{course.lastActive}</span>
                          </div>
                          <Progress value={course.progress} className="h-1.5 mt-1" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card hover>
            <CardHeader>
              <CardTitle>Interview Performance</CardTitle>
              <CardDescription>Your performance in mock interviews</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-bold">82/100</div>
                    <div className="text-sm text-muted-foreground">Average score</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">8</div>
                    <div className="text-sm text-muted-foreground">Interviews completed</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Performance by Category</div>
                  <div className="space-y-3">
                    {[
                      { category: "Technical Knowledge", score: 75 },
                      { category: "Problem Solving", score: 82 },
                      { category: "Communication", score: 88 },
                      { category: "Behavioral Responses", score: 90 },
                    ].map((item, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{item.category}</span>
                          <span className="font-medium">{item.score}/100</span>
                        </div>
                        <Progress value={item.score} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Recent Interviews</div>
                  <div className="space-y-3">
                    {[
                      {
                        title: "System Design Interview",
                        date: "May 10, 2025",
                        score: 78,
                        icon: MessageSquare,
                      },
                      {
                        title: "Behavioral Interview",
                        date: "May 5, 2025",
                        score: 92,
                        icon: MessageSquare,
                      },
                      {
                        title: "Coding Interview",
                        date: "April 28, 2025",
                        score: 80,
                        icon: MessageSquare,
                      },
                    ].map((interview, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <interview.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium truncate">{interview.title}</span>
                            <Badge
                              variant={interview.score >= 85 ? "default" : "outline"}
                              className={interview.score >= 85 ? "" : "bg-yellow-500/10 text-yellow-600"}
                            >
                              {interview.score}/100
                            </Badge>
                          </div>
                          <div className="text-xs text-muted-foreground">{interview.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card hover>
          <CardHeader>
            <CardTitle>Career Insights</CardTitle>
            <CardDescription>Personalized recommendations based on your analytics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Improve Your Technical Skills",
                  description:
                    "Your technical interview scores are lower than your behavioral scores. Focus on strengthening your coding and system design skills.",
                  recommendation: "Complete the System Design course and practice more coding challenges.",
                  icon: LineChart,
                },
                {
                  title: "Expand Your Network",
                  description:
                    "Your network building score is at 40%. A stronger professional network can lead to more job opportunities.",
                  recommendation: "Connect with 5 more professionals in your target industry this month.",
                  icon: Users,
                },
                {
                  title: "Optimize Your Resume",
                  description: "Your resume has a 78% match rate with job descriptions. There's room for improvement.",
                  recommendation:
                    "Add more quantifiable achievements and tailor your resume to specific job descriptions.",
                  icon: FileText,
                },
                {
                  title: "Apply More Strategically",
                  description: "You've applied to 12 jobs, but your application strategy score is only 50%.",
                  recommendation: "Focus on quality over quantity. Apply to jobs with at least 80% skill match.",
                  icon: Target,
                },
              ].map((insight, i) => (
                <div key={i} className="flex gap-4 p-4 border rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <insight.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{insight.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{insight.description}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Badge variant="outline" className="bg-primary/10">
                        Recommendation
                      </Badge>
                      <span className="text-sm font-medium">{insight.recommendation}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Career Coaching
            </Button>
            <Button>
              <TrendingUp className="mr-2 h-4 w-4" />
              View Detailed Analytics
            </Button>
          </CardFooter>
        </Card>
      </div>
    </PageTransition>
  )
}
