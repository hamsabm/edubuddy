"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  Clock,
  ExternalLink,
  FileText,
  GraduationCap,
  Lightbulb,
  Play,
  PlayCircle,
  Search,
  Star,
  Trophy,
  Youtube,
} from "lucide-react"
import { PageTransition } from "@/components/page-transition"

export default function LearningPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("recommended")

  const courses = [
    {
      id: 1,
      title: "AWS Certified Developer - Associate",
      provider: "Amazon Web Services",
      level: "Intermediate",
      duration: "40 hours",
      rating: 4.8,
      reviews: 1245,
      progress: 45,
      match: 95,
      image: "/placeholder.svg",
      tags: ["Cloud", "AWS", "Certification"],
      category: "recommended",
    },
    {
      id: 2,
      title: "Docker and Kubernetes: The Complete Guide",
      provider: "Udemy",
      level: "Intermediate",
      duration: "22 hours",
      rating: 4.7,
      reviews: 987,
      progress: 0,
      match: 92,
      image: "/placeholder.svg",
      tags: ["Docker", "Kubernetes", "DevOps"],
      category: "recommended",
    },
    {
      id: 3,
      title: "Advanced React Patterns",
      provider: "Frontend Masters",
      level: "Advanced",
      duration: "12 hours",
      rating: 4.9,
      reviews: 756,
      progress: 0,
      match: 88,
      image: "/placeholder.svg",
      tags: ["React", "JavaScript", "Frontend"],
      category: "recommended",
    },
    {
      id: 4,
      title: "GraphQL Masterclass",
      provider: "Udemy",
      level: "Intermediate",
      duration: "15 hours",
      rating: 4.6,
      reviews: 543,
      progress: 0,
      match: 85,
      image: "/placeholder.svg",
      tags: ["GraphQL", "API", "Backend"],
      category: "recommended",
    },
    {
      id: 5,
      title: "System Design Interview Preparation",
      provider: "Educative",
      level: "Advanced",
      duration: "25 hours",
      rating: 4.8,
      reviews: 876,
      progress: 20,
      match: 90,
      image: "/placeholder.svg",
      tags: ["System Design", "Architecture", "Interviews"],
      category: "in-progress",
    },
    {
      id: 6,
      title: "Machine Learning Fundamentals",
      provider: "Coursera",
      level: "Beginner",
      duration: "30 hours",
      rating: 4.7,
      reviews: 1532,
      progress: 0,
      match: 75,
      image: "/placeholder.svg",
      tags: ["Machine Learning", "AI", "Python"],
      category: "bookmarked",
    },
  ]

  const resources = [
    {
      title: "Building Microservices with Node.js",
      type: "Article",
      source: "Medium",
      duration: "15 min read",
      match: 92,
      link: "#",
    },
    {
      title: "Advanced TypeScript Techniques",
      type: "Video",
      source: "YouTube",
      duration: "45 min",
      match: 88,
      link: "#",
    },
    {
      title: "React Performance Optimization",
      type: "Documentation",
      source: "React.dev",
      duration: "20 min read",
      match: 85,
      link: "#",
    },
    {
      title: "AWS Lambda Best Practices",
      type: "Guide",
      source: "AWS",
      duration: "30 min read",
      match: 90,
      link: "#",
    },
  ]

  const pathways = [
    {
      title: "Full Stack Developer",
      description: "Master frontend, backend, and DevOps skills",
      progress: 35,
      courses: 12,
      duration: "6 months",
      match: 95,
    },
    {
      title: "Cloud Solutions Architect",
      description: "Learn cloud architecture, security, and deployment",
      progress: 15,
      courses: 10,
      duration: "5 months",
      match: 82,
    },
    {
      title: "Machine Learning Engineer",
      description: "From data science fundamentals to advanced ML models",
      progress: 0,
      courses: 15,
      duration: "8 months",
      match: 70,
    },
  ]

  const filteredCourses = courses
    .filter((course) => activeTab === "all" || course.category === activeTab)
    .filter(
      (course) =>
        searchQuery === "" ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
    )

  return (
    <PageTransition>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight gradient-text">Learning Hub</h1>
          <p className="text-muted-foreground">Personalized learning resources to help you achieve your career goals</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card hover>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Courses in Progress</CardTitle>
              <BookOpen className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <Progress value={30} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">30% average completion</p>
            </CardContent>
          </Card>
          <Card hover>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Courses</CardTitle>
              <GraduationCap className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <div className="flex items-center gap-1 mt-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <p className="text-xs">3 certificates earned</p>
              </div>
            </CardContent>
          </Card>
          <Card hover>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
              <Trophy className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7 days</div>
              <Progress value={70} className="mt-2" indicatorColor="bg-yellow-500" />
              <p className="text-xs text-muted-foreground mt-2">3 more days to reach your goal</p>
            </CardContent>
          </Card>
          <Card hover>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Skill Progress</CardTitle>
              <Lightbulb className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+3 skills</div>
              <p className="text-xs text-muted-foreground mt-2">Added to your profile this month</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-64 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Learning Paths</CardTitle>
                <CardDescription>Structured learning journeys</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {pathways.map((path, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-sm">{path.title}</h3>
                      <Badge variant="outline">{path.match}% match</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{path.description}</p>
                    <div className="flex justify-between text-xs">
                      <span>{path.progress > 0 ? `${path.progress}% complete` : "Not started"}</span>
                      <span>{path.courses} courses</span>
                    </div>
                    <Progress value={path.progress} />
                    <Button variant="outline" size="sm" className="w-full">
                      {path.progress > 0 ? "Continue" : "Start"} Path
                    </Button>
                  </div>
                ))}
                <Button className="w-full">View All Learning Paths</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Resources</CardTitle>
                <CardDescription>Recommended for your skills</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {resources.map((resource, i) => (
                  <div key={i} className="flex justify-between items-start border-b last:border-0 pb-3 last:pb-0">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-sm">{resource.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {resource.match}%
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {resource.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{resource.duration}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  View All Resources
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="flex-1">
            <Card className="h-full">
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div>
                    <CardTitle>Courses & Tutorials</CardTitle>
                    <CardDescription>Personalized learning recommendations</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search courses..."
                        className="pl-8 w-full md:w-[200px]"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Tabs defaultValue="recommended" className="w-full" onValueChange={setActiveTab}>
                  <div className="px-6">
                    <TabsList className="grid grid-cols-4 w-full">
                      <TabsTrigger value="recommended">Recommended</TabsTrigger>
                      <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                      <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
                      <TabsTrigger value="all">All Courses</TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="recommended" className="m-0">
                    <div className="px-6 py-4 space-y-4">
                      {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => <CourseCard key={course.id} course={course} />)
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-muted-foreground">No courses found matching your search.</p>
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="in-progress" className="m-0">
                    <div className="px-6 py-4 space-y-4">
                      {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => <CourseCard key={course.id} course={course} />)
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-muted-foreground">No courses in progress.</p>
                          <Button className="mt-4" variant="outline">
                            Browse Recommended Courses
                          </Button>
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="bookmarked" className="m-0">
                    <div className="px-6 py-4 space-y-4">
                      {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => <CourseCard key={course.id} course={course} />)
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-muted-foreground">No bookmarked courses.</p>
                          <Button className="mt-4" variant="outline">
                            Browse Recommended Courses
                          </Button>
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="all" className="m-0">
                    <div className="px-6 py-4 space-y-4">
                      {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => <CourseCard key={course.id} course={course} />)
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-muted-foreground">No courses found matching your search.</p>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-center border-t pt-6">
                <Button>
                  Explore All Learning Resources
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <Card hover>
          <CardHeader>
            <CardTitle>Current Course: AWS Certified Developer - Associate</CardTitle>
            <CardDescription>Continue where you left off</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="aspect-video bg-muted rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <PlayCircle className="h-16 w-16 mx-auto text-primary opacity-80" />
                      <p className="mt-2 font-medium">Module 5: AWS Lambda and Serverless</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">Course Progress</h3>
                    <span className="text-sm">45% Complete</span>
                  </div>
                  <Progress value={45} className="h-2 progress-bar-animate" />
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((module) => (
                      <div
                        key={module}
                        className={`h-1.5 rounded-full ${
                          module <= 4 ? "bg-primary" : module === 5 ? "bg-primary/50" : "bg-muted"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex gap-2">
                  <Button className="flex-1">
                    <Play className="mr-2 h-4 w-4" />
                    Continue Learning
                  </Button>
                  <Button variant="outline">View Course Details</Button>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-3">Up Next</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "Creating Your First Lambda Function",
                      duration: "15 min",
                      type: "Video",
                      current: true,
                    },
                    {
                      title: "API Gateway Integration",
                      duration: "20 min",
                      type: "Video",
                      current: false,
                    },
                    {
                      title: "Serverless Framework Basics",
                      duration: "25 min",
                      type: "Video",
                      current: false,
                    },
                    {
                      title: "Module 5 Quiz",
                      duration: "10 min",
                      type: "Quiz",
                      current: false,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 p-3 rounded-md ${
                        item.current ? "bg-primary/10 border border-primary/20" : ""
                      }`}
                    >
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          item.current ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        {item.type === "Video" ? <Youtube className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
                      </div>
                      <div>
                        <p className={`text-sm ${item.current ? "font-medium" : ""}`}>{item.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{item.duration}</span>
                        </div>
                      </div>
                      {item.current && <Badge className="ml-auto">Current</Badge>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  )
}

function CourseCard({ course }) {
  return (
    <Card hover className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-48 h-32 md:h-auto bg-muted relative flex-shrink-0">
          <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-full object-cover" />
          {course.progress > 0 && (
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-muted">
              <div className="h-full bg-primary" style={{ width: `${course.progress}%` }}></div>
            </div>
          )}
        </div>
        <div className="flex-1 p-4">
          <div className="flex flex-col md:flex-row justify-between md:items-start gap-2">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{course.title}</h3>
                <Badge variant="outline">{course.match}% match</Badge>
              </div>
              <p className="text-sm text-muted-foreground">By {course.provider}</p>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span>{course.rating}</span>
                  <span className="text-muted-foreground ml-1">({course.reviews})</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                  <span>{course.duration}</span>
                </div>
                <Badge variant="secondary">{course.level}</Badge>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {course.tags.map((tag, i) => (
                  <Badge key={i} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex gap-2 mt-2 md:mt-0">
              {course.progress > 0 ? (
                <Button>
                  Continue
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button>
                  Start Course
                  <Play className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
          {course.progress > 0 && (
            <div className="mt-3">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-2" />
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
