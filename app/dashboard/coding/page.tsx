"use client"

import { Calendar } from "@/components/ui/calendar"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Code,
  FileCode,
  Filter,
  Github,
  Laptop,
  LineChart,
  ListChecks,
  MessageSquare,
  Play,
  Search,
  Timer,
  Trophy,
  Users,
} from "lucide-react"

export default function CodingPage() {
  const [activeTab, setActiveTab] = useState("challenges")
  const [searchQuery, setSearchQuery] = useState("")

  const challenges = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      category: "Arrays",
      companies: ["Amazon", "Google", "Microsoft"],
      solved: true,
      attempts: 2,
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
      tags: ["Hash Table", "Array"],
    },
    {
      id: 2,
      title: "Valid Parentheses",
      difficulty: "Easy",
      category: "Stacks",
      companies: ["Facebook", "Amazon", "Bloomberg"],
      solved: true,
      attempts: 1,
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
      tags: ["Stack", "String"],
    },
    {
      id: 3,
      title: "Merge Two Sorted Lists",
      difficulty: "Easy",
      category: "Linked Lists",
      companies: ["Microsoft", "Apple", "Google"],
      solved: false,
      attempts: 0,
      tags: ["Linked List", "Recursion"],
    },
    {
      id: 4,
      title: "Maximum Subarray",
      difficulty: "Medium",
      category: "Dynamic Programming",
      companies: ["Amazon", "Microsoft", "Apple"],
      solved: false,
      attempts: 3,
      tags: ["Array", "Divide and Conquer", "Dynamic Programming"],
    },
    {
      id: 5,
      title: "LRU Cache",
      difficulty: "Medium",
      category: "Design",
      companies: ["Google", "Facebook", "Amazon", "Microsoft"],
      solved: false,
      attempts: 0,
      tags: ["Hash Table", "Linked List", "Design"],
    },
  ]

  const contests = [
    {
      id: 1,
      title: "Weekly Coding Contest #45",
      date: "May 20, 2025",
      time: "10:00 AM - 12:00 PM",
      difficulty: "Medium",
      participants: 245,
      status: "Upcoming",
    },
    {
      id: 2,
      title: "Frontend Challenge #12",
      date: "May 25, 2025",
      time: "2:00 PM - 4:00 PM",
      difficulty: "Easy",
      participants: 178,
      status: "Upcoming",
    },
    {
      id: 3,
      title: "System Design Competition",
      date: "June 5, 2025",
      time: "9:00 AM - 12:00 PM",
      difficulty: "Hard",
      participants: 120,
      status: "Registration Open",
    },
  ]

  const companyRounds = [
    {
      company: "Google",
      rounds: [
        {
          title: "Online Assessment",
          problems: 2,
          timeLimit: "90 minutes",
          difficulty: "Medium",
        },
        {
          title: "Technical Phone Screen",
          problems: 1,
          timeLimit: "45 minutes",
          difficulty: "Medium",
        },
        {
          title: "Onsite - Coding",
          problems: 2,
          timeLimit: "60 minutes",
          difficulty: "Hard",
        },
        {
          title: "Onsite - System Design",
          problems: 1,
          timeLimit: "45 minutes",
          difficulty: "Hard",
        },
      ]
    },
    {
      company: "Amazon",
      rounds: [
        {
          title: "Online Assessment",
          problems: 2,
          timeLimit: "120 minutes",
          difficulty: "Medium",
        },
        {
          title: "Phone Interview",
          problems: 1,
          timeLimit: "60 minutes",
          difficulty: "Medium",
        },
        {
          title: "Onsite Loop",
          problems: 4,
          timeLimit: "240 minutes",
          difficulty: "Medium-Hard",
        },
      ]
    },
  ]

  const leaderboard = [
    {
      rank: 1,
      name: "Alex Johnson",
      score: 1250,
      solved: 85,
      streak: 42,
      isCurrentUser: false,
    },
    {
      rank: 2,
      name: "Sarah Williams",
      score: 1180,
      solved: 78,
      streak: 35,
      isCurrentUser: false,
    },
    {
      rank: 3,
      name: "Michael Chen",
      score: 1120,
      solved: 72,
      streak: 28,
      isCurrentUser: false,
    },
    {
      rank: 4,
      name: "Emily Rodriguez",
      score: 1050,
      solved: 65,
      streak: 21,
      isCurrentUser: false,
    },
    {
      rank: 5,
      name: "David Kim",
      score: 980,
      solved: 60,
      streak: 14,
      isCurrentUser: false,
    },
    {
      rank: 12,
      name: "John Doe",
      score: 720,
      solved: 42,
      streak: 7,
      isCurrentUser: true,
    },
  ]

  const filteredChallenges = challenges.filter(challenge => 
    searchQuery === "" || 
    challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    challenge.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
    challenge.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight gradient-text">Coding Practice</h1>
        <p className="text-muted-foreground">
          Practice coding challenges, participate in contests, and prepare for technical interviews.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card hover>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Problems Solved</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42 / 500</div>
            <Progress value={8.4} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">+5 problems this week</p>
          </CardContent>
        </Card>
        <Card hover>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Rank</CardTitle>
            <Trophy className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#12</div>
            <div className="flex items-center gap-1 mt-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <p className="text-xs">Improved 3 positions this week</p>
            </div>
          </CardContent>
        </Card>
        <Card hover>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Coding Streak</CardTitle>
            <LineChart className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7 days</div>
            <div className="flex mt-2 gap-1">
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <div 
                  key={day} 
                  className="h-2 flex-1 rounded-full bg-primary"
                ></div>
              ))}
              {[8, 9, 10].map((day) => (
                <div 
                  key={day} 
                  className="h-2 flex-1 rounded-full bg-muted"
                ></div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2">Keep going for a new record!</p>
          </CardContent>
        </Card>
        <Card hover>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Contests</CardTitle>
            <Award className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-2">Next: Weekly Coding Contest #45</p>
            <Button variant="outline" size="sm" className="mt-2 w-full">
              Register Now
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="challenges" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 w-full md:w-[600px]">
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
          <TabsTrigger value="contests">Contests</TabsTrigger>
          <TabsTrigger value="company">Company Rounds</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
        </TabsList>

        <TabsContent value="challenges" className="space-y-4">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search challenges..." 
                className="pl-8 w-full md:w-[300px]" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[130px]">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[130px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="arrays">Arrays</SelectItem>
                  <SelectItem value="strings">Strings</SelectItem>
                  <SelectItem value="dp">Dynamic Programming</SelectItem>
                  <SelectItem value="graphs">Graphs</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {filteredChallenges.length > 0 ? (
              filteredChallenges.map((challenge) => (
                <Card key={challenge.id} hover>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-semibold">{challenge.title}</h3>
                          <Badge variant={
                            challenge.difficulty === "Easy" ? "outline" : 
                            challenge.difficulty === "Medium" ? "secondary" : "default"
                          }>
                            {challenge.difficulty}
                          </Badge>
                          {challenge.solved && (
                            <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">
                              Solved
                            </Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">{challenge.category}</Badge>
                          {challenge.tags.map((tag, i) => (
                            <Badge key={i} variant="outline" className="badge-pop">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        {challenge.solved && (
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span>Time: {challenge.timeComplexity}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Laptop className="h-4 w-4 text-muted-foreground" />
                              <span>Space: {challenge.spaceComplexity}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <ListChecks className="h-4 w-4 text-muted-foreground" />
                              <span>Attempts: {challenge.attempts}</span>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col md:flex-row gap-2">
                        <div className="flex flex-col items-center justify-center px-4 py-2 bg-muted rounded-md">
                          <div className="flex">
                            {challenge.companies.slice(0, 3).map((company, i) => (
                              <div 
                                key={i} 
                                className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium border-2 border-background"
                                style={{ marginLeft: i > 0 ? "-8px" : "0" }}
                                title={company}
                              >
                                {company[0]}
                              </div>
                            ))}
                            {challenge.companies.length > 3 && (
                              <div 
                                className="h-6 w-6 rounded-full bg-muted-foreground/20 flex items-center justify-center text-xs font-medium border-2 border-background"
                                style={{ marginLeft: "-8px" }}
                              >
                                +{challenge.companies.length - 3}
                              </div>
                            )}
                          </div>
                          <span className="text-xs mt-1">Asked by</span>
                        </div>
                        <Button>
                          {challenge.solved ? "Review Solution" : "Solve Challenge"}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-8">
                <FileCode className="h-12 w-12 mx-auto text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No challenges found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <Button variant="outline">
              Load More Challenges
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="contests" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Upcoming Contests</h2>
            <Button>
              View Past Contests
            </Button>
          </div>

          <div className="grid gap-4">
            {contests.map((contest) => (
              <Card key={contest.id} hover>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">{contest.title}</h3>
                        <Badge variant={
                          contest.status === "Live" ? "default" : 
                          contest.status === "Upcoming" ? "secondary" : "outline"
                        }>
                          {contest.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{contest.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{contest.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <Badge variant={
                          contest.difficulty === "Easy" ? "outline" : 
                          contest.difficulty === "Medium" ? "secondary" : "default"
                        }>
                          {contest.difficulty}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{contest.participants} participants</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline">
                        <Calendar className="mr-2 h-4 w-4" />
                        Add to Calendar
                      </Button>
                      <Button>
                        {contest.status === "Live" ? (
                          <>
                            <Play className="mr-2 h-4 w-4" />
                            Join Now
                          </>
                        ) : (
                          <>
                            Register
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Weekly Challenges</CardTitle>
              <CardDescription>Solve these weekly challenges to earn bonus points</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "String Manipulation Challenge",
                    description: "Implement an algorithm to perform basic string compression.",
                    difficulty: "Medium",
                    points: 50,
                    daysLeft: 3,
                  },
                  {
                    title: "Array Rotation Problem",
                    description: "Rotate an array of n elements to the right by k steps.",
                    difficulty: "Easy",
                    points: 30,
                    daysLeft: 3,
                  },
                  {
                    title: "Graph Traversal Challenge",
                    description: "Find the shortest path in an undirected graph.",
                    difficulty: "Hard",
                    points: 100,
                    daysLeft: 3,
                  },
                ].map((challenge, i) => (
                  <div key={i} className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{challenge.title}</h3>
                        <Badge variant={
                          challenge.difficulty === "Easy" ? "outline" : 
                          challenge.difficulty === "Medium" ? "secondary" : "default"
                        }>
                          {challenge.difficulty}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{challenge.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className="bg-primary/10">
                          {challenge.points} points
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {challenge.daysLeft} days left
                        </span>
                      </div>
                    </div>
                    <Button size="sm">
                      Solve
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="company" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Company-Specific Practice</h2>
            <Select defaultValue="google">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select company" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="google">Google</SelectItem>
                <SelectItem value="amazon">Amazon</SelectItem>
                <SelectItem value="microsoft">Microsoft</SelectItem>
                <SelectItem value="facebook">Facebook</SelectItem>
                <SelectItem value="apple">Apple</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-6">
            {companyRounds.map((company, i) => (
              <Card key={i} hover>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      {company.company === "Google" ? (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                      ) : (
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14.0229 5.0229L12.0001 1L9.97719 5.0229L5.5 5.50386L8.5 8.69614L7.5 13.1L12.0001 11L16.5 13.1L15.5 8.69614L18.5 5.50386L14.0229 5.0229Z" fill="#FF9900"/>
                          <path d="M3.5 21C6.5 17 12.0001 17 12.0001 17C12.0001 17 17.5 17 20.5 21M12.0001 13V17" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <CardTitle>{company.company} Interview Preparation</CardTitle>
                  </div>
                  <CardDescription>Practice the typical interview rounds for {company.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {company.rounds.map((round, j) => (
                      <div key={j} className="border rounded-lg p-4">
                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                          <div>
                            <h3 className="font-medium">{round.title}</h3>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm">
                              <div className="flex items-center gap-1">
                                <Code className="h-4 w-4 text-muted-foreground" />
                                <span>{round.problems} problem{round.problems > 1 ? 's' : ''}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Timer className="h-4 w-4 text-muted-foreground" />
                                <span>{round.timeLimit}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Badge variant={
                                  round.difficulty.includes("Easy") ? "outline" : 
                                  round.difficulty.includes("Medium") ? "secondary" : "default"
                                }>
                                  {round.difficulty}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <Button>
                            Start Practice
                            <Play className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Github className="mr-2 h-4 w-4" />
                    View All {company.company} Interview Questions
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Interview Tips</CardTitle>
              <CardDescription>Advice for technical interviews at top companies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Communicate Your Thought Process",
                    description: "Explain your approach before coding. Discuss trade-offs and alternatives.",
                    icon: MessageSquare,
                  },
                  {
                    title: "Test Your Code",
                    description: "Always test your solution with examples, edge cases, and corner cases.",
                    icon: CheckCircle2,
                  },
                  {
                    title: "Optimize Your Solution",
                    description: "Start with a working solution, then improve time and space complexity.",
                    icon: LineChart,
                  },
                ].map((tip, i) => (
                  <div key={i} className="flex gap-4 p-4 border rounded-lg">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <tip.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{tip.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="leaderboard" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Global Leaderboard</CardTitle>
              <CardDescription>Top performers in the coding community</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden border">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="px-4 py-3 text-left font-medium text-sm">Rank</th>
                        <th className="px-4 py-3 text-left font-medium text-sm">User</th>
                        <th className="px-4 py-3 text-left font-medium text-sm">Score</th>
                        <th className="px-4 py-3 text-left font-medium text-sm">Problems</th>
                        <th className="px-4 py-3 text-left font-medium text-sm">Streak</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {leaderboard.map((user, i) => (
                        <tr key={i}>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">{user.rank}</td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">{user.name}</td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">{user.score}</td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">{user.solved}</td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">{user.streak} days</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
