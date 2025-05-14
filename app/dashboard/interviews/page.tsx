import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Calendar, CheckCircle2, Clock, MessageSquare, Play, PlayCircle, User, Video } from "lucide-react"

export default function InterviewsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Mock Interviews</h1>
        <p className="text-muted-foreground">Practice with AI-driven interviews and get real-time feedback</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Interview Score</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">82/100</div>
            <Progress value={82} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">+12 points from last attempt</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Sessions</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <div className="flex items-center gap-1 mt-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <p className="text-xs">5 technical</p>
              <div className="h-2 w-2 rounded-full bg-blue-500 ml-2"></div>
              <p className="text-xs">3 behavioral</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Communication</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">88%</div>
            <Progress value={88} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">Strong verbal communication skills</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Session</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-medium">Tomorrow</div>
            <p className="text-sm">2:00 PM - System Design</p>
            <Button variant="outline" size="sm" className="mt-2 w-full">
              Reschedule
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="practice" className="space-y-4">
        <TabsList>
          <TabsTrigger value="practice">Practice Interviews</TabsTrigger>
          <TabsTrigger value="feedback">Feedback & Analysis</TabsTrigger>
          <TabsTrigger value="history">Interview History</TabsTrigger>
        </TabsList>

        <TabsContent value="practice" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Technical Interview",
                description: "Practice coding problems and system design questions",
                duration: "30-45 min",
                categories: ["Algorithms", "Data Structures", "System Design"],
                level: "Intermediate",
                icon: Video,
              },
              {
                title: "Behavioral Interview",
                description: "Practice answering common behavioral questions",
                duration: "20-30 min",
                categories: ["Leadership", "Teamwork", "Problem Solving"],
                level: "All Levels",
                icon: User,
              },
              {
                title: "Company-Specific",
                description: "Practice for interviews at specific companies",
                duration: "45-60 min",
                categories: ["FAANG", "Startups", "Enterprise"],
                level: "Advanced",
                icon: Video,
              },
            ].map((interview, i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>{interview.title}</CardTitle>
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <interview.icon className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <CardDescription>{interview.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{interview.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Level:</span>
                      <span className="font-medium">{interview.level}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm text-muted-foreground">Categories:</span>
                      <div className="flex flex-wrap gap-2">
                        {interview.categories.map((category, j) => (
                          <Badge key={j} variant="outline">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button className="w-full">
                    <Play className="mr-2 h-4 w-4" />
                    Start Interview
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Scheduled Sessions</CardTitle>
              <CardDescription>Your planned interview practice sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "System Design Interview",
                    date: "Tomorrow, 2:00 PM",
                    duration: "45 min",
                    type: "Technical",
                  },
                  {
                    title: "Leadership Experience Interview",
                    date: "May 18, 2025, 10:00 AM",
                    duration: "30 min",
                    type: "Behavioral",
                  },
                  {
                    title: "Google-style Coding Interview",
                    date: "May 22, 2025, 3:00 PM",
                    duration: "60 min",
                    type: "Technical",
                  },
                ].map((session, i) => (
                  <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{session.title}</p>
                        <div className="flex items-center gap-2">
                          <p className="text-sm text-muted-foreground">{session.date}</p>
                          <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground"></div>
                          <p className="text-sm text-muted-foreground">{session.duration}</p>
                          <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground"></div>
                          <Badge variant="outline">{session.type}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Reschedule
                      </Button>
                      <Button size="sm">Join</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Analysis</CardTitle>
              <CardDescription>Detailed feedback on your interview performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-medium">Communication Skills</h3>
                  <Progress value={88} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Score: 88/100</span>
                    <span className="font-medium text-green-600">Excellent</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    You communicate clearly and concisely. Your explanations are well-structured.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Technical Knowledge</h3>
                  <Progress value={75} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Score: 75/100</span>
                    <span className="font-medium text-yellow-600">Good</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    You have solid fundamentals but could improve on system design concepts.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Problem Solving</h3>
                  <Progress value={82} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Score: 82/100</span>
                    <span className="font-medium text-green-600">Very Good</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    You approach problems methodically and consider edge cases well.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Behavioral Responses</h3>
                  <Progress value={90} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Score: 90/100</span>
                    <span className="font-medium text-green-600">Excellent</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your STAR method responses are detailed and showcase your achievements well.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Areas for Improvement</h3>
                <div className="space-y-3">
                  {[
                    {
                      area: "System Design Knowledge",
                      description: "Deepen understanding of distributed systems and scalability concepts.",
                      resources: ["System Design Interview Book", "Grokking System Design Course"],
                    },
                    {
                      area: "Algorithm Optimization",
                      description: "Work on optimizing solutions for time and space complexity.",
                      resources: ["LeetCode Medium/Hard Problems", "Algorithm Specialization Course"],
                    },
                    {
                      area: "Conciseness",
                      description: "Practice providing more concise answers without losing important details.",
                      resources: ["Mock Interviews with Feedback", "Communication Workshop"],
                    },
                  ].map((item, i) => (
                    <div key={i} className="border rounded-lg p-4">
                      <h4 className="font-medium">{item.area}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      <div className="mt-2">
                        <p className="text-sm font-medium">Recommended Resources:</p>
                        <ul className="text-sm text-muted-foreground list-disc list-inside">
                          {item.resources.map((resource, j) => (
                            <li key={j}>{resource}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Interview History</CardTitle>
              <CardDescription>Review your past interview sessions and progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    title: "Technical Interview - Algorithms",
                    date: "May 10, 2025",
                    duration: "45 min",
                    score: 85,
                    status: "Completed",
                  },
                  {
                    title: "Behavioral Interview - Leadership",
                    date: "May 5, 2025",
                    duration: "30 min",
                    score: 92,
                    status: "Completed",
                  },
                  {
                    title: "System Design Interview",
                    date: "April 28, 2025",
                    duration: "60 min",
                    score: 78,
                    status: "Completed",
                  },
                  {
                    title: "Google-style Coding Interview",
                    date: "April 20, 2025",
                    duration: "60 min",
                    score: 80,
                    status: "Completed",
                  },
                  {
                    title: "Behavioral Interview - Problem Solving",
                    date: "April 15, 2025",
                    duration: "30 min",
                    score: 88,
                    status: "Completed",
                  },
                ].map((interview, i) => (
                  <div key={i} className="border rounded-lg p-4">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{interview.title}</h3>
                          <Badge variant={interview.score >= 85 ? "default" : "outline"}>{interview.score}/100</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <Clock className="h-3 w-3" />
                          <span>{interview.date}</span>
                          <span>•</span>
                          <span>{interview.duration}</span>
                          <span>•</span>
                          <span>{interview.status}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <PlayCircle className="mr-2 h-4 w-4" />
                          Replay
                        </Button>
                        <Button size="sm">
                          <ArrowUpRight className="mr-2 h-4 w-4" />
                          View Feedback
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-6">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-primary/10">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
