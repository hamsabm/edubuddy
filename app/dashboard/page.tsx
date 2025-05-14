import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Calendar,
  ChevronRight,
  FileText,
  GraduationCap,
  LineChart,
  Target,
  Users,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, John! Here's an overview of your career journey.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resume Score</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78/100</div>
            <Progress value={78} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">+5 points from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Skills Matched</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24/32</div>
            <Progress value={75} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">3 new skills recommended</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Job Applications</CardTitle>
            <BriefcaseBusiness className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <div className="flex items-center gap-1 mt-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <p className="text-xs">3 in review</p>
              <div className="h-2 w-2 rounded-full bg-yellow-500 ml-2"></div>
              <p className="text-xs">4 pending</p>
            </div>
            <p className="text-xs text-muted-foreground mt-2">2 new matches available</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Interview Score</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">82/100</div>
            <Progress value={82} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">+12 points from last attempt</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Career Progress</CardTitle>
                <CardDescription>Your journey towards your dream job</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[200px] flex items-center justify-center">
                  <LineChart className="h-16 w-16 text-muted-foreground/60" />
                  <p className="text-sm text-muted-foreground ml-2">Progress chart will appear here</p>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Dream Job Match</CardTitle>
                <CardDescription>How close you are to your target role</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Full Stack Developer</p>
                      <p className="text-sm text-muted-foreground">Tech Industry</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold">72%</span>
                      <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <Target className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Missing Skills</span>
                      <span className="text-muted-foreground">3 skills</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="rounded-full px-2 py-1 bg-muted text-xs">Docker</div>
                      <div className="rounded-full px-2 py-1 bg-muted text-xs">AWS</div>
                      <div className="rounded-full px-2 py-1 bg-muted text-xs">GraphQL</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Career Roadmap
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="recommendations" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Skill Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      skill: "Docker Containerization",
                      relevance: "High",
                      icon: BookOpen,
                    },
                    {
                      skill: "AWS Cloud Services",
                      relevance: "Medium",
                      icon: BookOpen,
                    },
                    {
                      skill: "GraphQL API Development",
                      relevance: "Medium",
                      icon: BookOpen,
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <item.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{item.skill}</p>
                          <p className="text-xs text-muted-foreground">Relevance: {item.relevance}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ArrowUpRight className="h-4 w-4" />
                        <span className="sr-only">Learn more</span>
                      </Button>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full">
                    View All Recommendations
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Resume Improvements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      tip: "Add quantifiable achievements",
                      section: "Work Experience",
                      icon: FileText,
                    },
                    {
                      tip: "Include relevant projects",
                      section: "Projects",
                      icon: FileText,
                    },
                    {
                      tip: "Highlight leadership experience",
                      section: "Activities",
                      icon: FileText,
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <item.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{item.tip}</p>
                          <p className="text-xs text-muted-foreground">Section: {item.section}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ArrowUpRight className="h-4 w-4" />
                        <span className="sr-only">Apply</span>
                      </Button>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full">
                    Improve Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Your scheduled interviews and deadlines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Mock Interview Practice",
                    date: "Tomorrow, 2:00 PM",
                    type: "Interview",
                    icon: Users,
                  },
                  {
                    title: "TechCorp Application Deadline",
                    date: "May 20, 2025",
                    type: "Deadline",
                    icon: Calendar,
                  },
                  {
                    title: "Resume Review Session",
                    date: "May 22, 2025, 10:00 AM",
                    type: "Meeting",
                    icon: FileText,
                  },
                  {
                    title: "Web Development Workshop",
                    date: "May 25, 2025, 3:00 PM",
                    type: "Workshop",
                    icon: GraduationCap,
                  },
                ].map((event, i) => (
                  <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <event.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{event.title}</p>
                        <div className="flex items-center gap-2">
                          <p className="text-sm text-muted-foreground">{event.date}</p>
                          <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground"></div>
                          <p className="text-sm text-muted-foreground">{event.type}</p>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <span>Details</span>
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
