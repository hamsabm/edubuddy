"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Edit,
  LineChart,
  ListTodo,
  PlusCircle,
  Save,
  Target,
  Trash2,
  TrendingUp,
} from "lucide-react"
import { motion } from "framer-motion"
import { PageTransition } from "@/components/page-transition"

export default function GoalsPage() {
  const [dreamJobs, setDreamJobs] = useState([
    {
      title: "Full Stack Developer",
      company: "Tech Giants Inc.",
      priority: "High",
      match: 72,
      timeline: "1-2 years",
      skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
      missingSkills: ["Docker", "GraphQL", "AWS"],
    },
    {
      title: "Machine Learning Engineer",
      company: "AI Innovations",
      priority: "Medium",
      match: 58,
      timeline: "2-3 years",
      skills: ["Python", "TensorFlow", "Data Analysis", "Statistics"],
      missingSkills: ["PyTorch", "Computer Vision", "NLP", "MLOps"],
    },
  ])

  const [shortTermGoals, setShortTermGoals] = useState([
    {
      title: "Complete AWS Certification",
      deadline: "August 15, 2025",
      progress: 45,
      priority: "High",
      status: "In Progress",
    },
    {
      title: "Build 3 Full Stack Projects",
      deadline: "October 30, 2025",
      progress: 33,
      priority: "Medium",
      status: "In Progress",
    },
    {
      title: "Contribute to Open Source",
      deadline: "December 20, 2025",
      progress: 10,
      priority: "Low",
      status: "Not Started",
    },
  ])

  const [longTermGoals, setLongTermGoals] = useState([
    {
      title: "Become a Senior Developer",
      timeline: "3-5 years",
      milestones: [
        "Master advanced JavaScript patterns",
        "Lead a team project",
        "Mentor junior developers",
        "Contribute to architecture decisions",
      ],
      progress: 25,
    },
    {
      title: "Start a Tech Startup",
      timeline: "5-7 years",
      milestones: ["Develop unique product idea", "Build MVP", "Secure initial funding", "Grow customer base"],
      progress: 15,
    },
  ])

  const [showAddDreamJob, setShowAddDreamJob] = useState(false)
  const [showAddShortTermGoal, setShowAddShortTermGoal] = useState(false)
  const [showAddLongTermGoal, setShowAddLongTermGoal] = useState(false)

  return (
    <PageTransition>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight gradient-text">Career Goals</h1>
          <p className="text-muted-foreground">Define your dream jobs and set career goals to track your progress</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card hover>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Dream Jobs</CardTitle>
              <Target className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dreamJobs.length}</div>
              <p className="text-xs text-muted-foreground mt-2">Career paths you're aiming for</p>
            </CardContent>
          </Card>
          <Card hover>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Short-term Goals</CardTitle>
              <ListTodo className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{shortTermGoals.length}</div>
              <div className="flex items-center gap-1 mt-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <p className="text-xs">2 in progress</p>
                <div className="h-2 w-2 rounded-full bg-yellow-500 ml-2"></div>
                <p className="text-xs">1 not started</p>
              </div>
            </CardContent>
          </Card>
          <Card hover>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Long-term Goals</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{longTermGoals.length}</div>
              <Progress value={20} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">20% overall progress</p>
            </CardContent>
          </Card>
          <Card hover>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Skills Gap</CardTitle>
              <Award className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground mt-2">Skills to acquire for your dream jobs</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="dreamJobs" className="space-y-4">
          <TabsList className="grid grid-cols-3 w-full md:w-[400px]">
            <TabsTrigger value="dreamJobs">Dream Jobs</TabsTrigger>
            <TabsTrigger value="shortTerm">Short-term Goals</TabsTrigger>
            <TabsTrigger value="longTerm">Long-term Goals</TabsTrigger>
          </TabsList>

          <TabsContent value="dreamJobs" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">My Dream Jobs</h2>
              <Button onClick={() => setShowAddDreamJob(!showAddDreamJob)}>
                {showAddDreamJob ? (
                  "Cancel"
                ) : (
                  <>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Dream Job
                  </>
                )}
              </Button>
            </div>

            {showAddDreamJob && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="mb-4">
                  <CardHeader>
                    <CardTitle>Add New Dream Job</CardTitle>
                    <CardDescription>Define a new career path you want to pursue</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="job-title">Job Title</Label>
                        <Input id="job-title" placeholder="e.g. Senior Software Engineer" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company-type">Company/Industry</Label>
                        <Input id="company-type" placeholder="e.g. Tech Startup, FAANG" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="priority">Priority</Label>
                        <Select defaultValue="medium">
                          <SelectTrigger id="priority">
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="low">Low</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Timeline</Label>
                        <Select defaultValue="1-2">
                          <SelectTrigger id="timeline">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-1">0-1 years</SelectItem>
                            <SelectItem value="1-2">1-2 years</SelectItem>
                            <SelectItem value="2-3">2-3 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="5+">5+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="required-skills">Required Skills (comma separated)</Label>
                      <Textarea id="required-skills" placeholder="e.g. React, Node.js, AWS, Leadership" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="job-description">Why This Job?</Label>
                      <Textarea
                        id="job-description"
                        placeholder="Describe why this job aligns with your career aspirations"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setShowAddDreamJob(false)}>
                      Cancel
                    </Button>
                    <Button
                      onClick={() => {
                        setDreamJobs([
                          ...dreamJobs,
                          {
                            title: "New Dream Job",
                            company: "Example Company",
                            priority: "Medium",
                            match: 50,
                            timeline: "1-2 years",
                            skills: ["Skill 1", "Skill 2"],
                            missingSkills: ["Missing Skill 1", "Missing Skill 2"],
                          },
                        ])
                        setShowAddDreamJob(false)
                      }}
                    >
                      <Save className="mr-2 h-4 w-4" />
                      Save Dream Job
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )}

            <div className="grid gap-4">
              {dreamJobs.map((job, index) => (
                <Card key={index} hover>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-semibold">{job.title}</h3>
                          <Badge variant={job.priority === "High" ? "default" : "outline"}>
                            {job.priority} Priority
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{job.company}</p>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>Timeline: {job.timeline}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="relative h-20 w-20">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-bold">{job.match}%</span>
                          </div>
                          <svg className="h-20 w-20 transform -rotate-90">
                            <circle
                              cx="40"
                              cy="40"
                              r="36"
                              stroke="currentColor"
                              strokeWidth="8"
                              fill="transparent"
                              className="text-muted"
                            />
                            <circle
                              cx="40"
                              cy="40"
                              r="36"
                              stroke="currentColor"
                              strokeWidth="8"
                              fill="transparent"
                              strokeDasharray={2 * Math.PI * 36}
                              strokeDashoffset={2 * Math.PI * 36 * (1 - job.match / 100)}
                              className="text-primary"
                            />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">Match Score</span>
                      </div>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Required Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, i) => (
                            <Badge key={i} variant="secondary" className="badge-pop">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Skills to Acquire</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.missingSkills.map((skill, i) => (
                            <Badge key={i} variant="outline" className="border-dashed badge-pop">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end mt-4 gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Remove
                      </Button>
                      <Button size="sm">
                        View Roadmap
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="shortTerm" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Short-term Goals</h2>
              <Button onClick={() => setShowAddShortTermGoal(!showAddShortTermGoal)}>
                {showAddShortTermGoal ? (
                  "Cancel"
                ) : (
                  <>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Goal
                  </>
                )}
              </Button>
            </div>

            {showAddShortTermGoal && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="mb-4">
                  <CardHeader>
                    <CardTitle>Add Short-term Goal</CardTitle>
                    <CardDescription>Define a goal you want to achieve in the next 3-12 months</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="goal-title">Goal Title</Label>
                      <Input id="goal-title" placeholder="e.g. Complete AWS Certification" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="deadline">Deadline</Label>
                        <Input id="deadline" type="date" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="goal-priority">Priority</Label>
                        <Select defaultValue="medium">
                          <SelectTrigger id="goal-priority">
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="low">Low</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="goal-description">Description</Label>
                      <Textarea id="goal-description" placeholder="Describe your goal and why it's important" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="goal-progress">Initial Progress</Label>
                        <span className="text-sm">0%</span>
                      </div>
                      <Slider defaultValue={[0]} max={100} step={5} />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="auto-track" />
                      <Label htmlFor="auto-track">Enable automatic progress tracking</Label>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setShowAddShortTermGoal(false)}>
                      Cancel
                    </Button>
                    <Button
                      onClick={() => {
                        setShortTermGoals([
                          ...shortTermGoals,
                          {
                            title: "New Short-term Goal",
                            deadline: "December 31, 2025",
                            progress: 0,
                            priority: "Medium",
                            status: "Not Started",
                          },
                        ])
                        setShowAddShortTermGoal(false)
                      }}
                    >
                      <Save className="mr-2 h-4 w-4" />
                      Save Goal
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )}

            <div className="grid gap-4">
              {shortTermGoals.map((goal, index) => (
                <Card key={index} hover>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-semibold">{goal.title}</h3>
                          <Badge
                            variant={
                              goal.priority === "High"
                                ? "default"
                                : goal.priority === "Medium"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {goal.priority}
                          </Badge>
                          <Badge
                            variant={
                              goal.status === "Completed"
                                ? "default"
                                : goal.status === "In Progress"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {goal.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>Deadline: {goal.deadline}</span>
                        </div>
                        <div className="space-y-1 mt-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Progress</span>
                            <span className="text-sm">{goal.progress}%</span>
                          </div>
                          <Progress value={goal.progress} className="progress-bar-animate" />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="mr-2 h-4 w-4" />
                          Update
                        </Button>
                        {goal.status !== "Completed" ? (
                          <Button size="sm" variant="outline" className="text-green-600">
                            <CheckCircle2 className="mr-2 h-4 w-4" />
                            Mark Complete
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Remove
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="longTerm" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Long-term Goals</h2>
              <Button onClick={() => setShowAddLongTermGoal(!showAddLongTermGoal)}>
                {showAddLongTermGoal ? (
                  "Cancel"
                ) : (
                  <>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Long-term Goal
                  </>
                )}
              </Button>
            </div>

            {showAddLongTermGoal && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="mb-4">
                  <CardHeader>
                    <CardTitle>Add Long-term Goal</CardTitle>
                    <CardDescription>Define a major career goal for the next several years</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="longterm-title">Goal Title</Label>
                      <Input id="longterm-title" placeholder="e.g. Become a Technical Director" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="longterm-timeline">Timeline</Label>
                      <Select defaultValue="3-5">
                        <SelectTrigger id="longterm-timeline">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2">1-2 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="5-7">5-7 years</SelectItem>
                          <SelectItem value="7-10">7-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="longterm-description">Description</Label>
                      <Textarea id="longterm-description" placeholder="Describe your long-term career goal" />
                    </div>
                    <div className="space-y-2">
                      <Label>Key Milestones (add at least 3)</Label>
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <Input placeholder="Milestone 1" />
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex gap-2">
                          <Input placeholder="Milestone 2" />
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex gap-2">
                          <Input placeholder="Milestone 3" />
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-2">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Milestone
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setShowAddLongTermGoal(false)}>
                      Cancel
                    </Button>
                    <Button
                      onClick={() => {
                        setLongTermGoals([
                          ...longTermGoals,
                          {
                            title: "New Long-term Goal",
                            timeline: "3-5 years",
                            milestones: ["Milestone 1", "Milestone 2", "Milestone 3"],
                            progress: 0,
                          },
                        ])
                        setShowAddLongTermGoal(false)
                      }}
                    >
                      <Save className="mr-2 h-4 w-4" />
                      Save Goal
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )}

            <div className="grid gap-4">
              {longTermGoals.map((goal, index) => (
                <Card key={index} hover>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-semibold">{goal.title}</h3>
                          <Badge variant="outline">{goal.timeline}</Badge>
                        </div>
                        <div className="space-y-1 mt-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Overall Progress</span>
                            <span className="text-sm">{goal.progress}%</span>
                          </div>
                          <Progress value={goal.progress} className="progress-bar-animate" />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                        <Button size="sm">
                          View Details
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">Key Milestones</h4>
                      <div className="space-y-2">
                        {goal.milestones.map((milestone, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="h-5 w-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs">{i + 1}</span>
                            </div>
                            <p className="text-sm">{milestone}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Card hover>
          <CardHeader>
            <CardTitle>Career Roadmap</CardTitle>
            <CardDescription>Your personalized path to achieving your dream job</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted"></div>
              <div className="space-y-8 relative ml-10">
                {[
                  {
                    title: "Build Foundation",
                    description: "Master core skills and complete essential certifications",
                    timeline: "Now - 6 months",
                    icon: BookOpen,
                    status: "In Progress",
                    items: [
                      { name: "Complete AWS Certification", status: "In Progress" },
                      { name: "Build 3 Full Stack Projects", status: "In Progress" },
                      { name: "Learn Docker & Containerization", status: "Not Started" },
                    ],
                  },
                  {
                    title: "Gain Experience",
                    description: "Apply skills in real-world projects and expand network",
                    timeline: "6 - 18 months",
                    icon: BriefcaseBusiness,
                    status: "Upcoming",
                    items: [
                      { name: "Contribute to Open Source", status: "Not Started" },
                      { name: "Complete Internship or Contract Work", status: "Not Started" },
                      { name: "Build Professional Portfolio", status: "Not Started" },
                    ],
                  },
                  {
                    title: "Specialize & Grow",
                    description: "Develop expertise in specific areas and take on leadership roles",
                    timeline: "18 - 36 months",
                    icon: Target,
                    status: "Upcoming",
                    items: [
                      { name: "Master Advanced System Design", status: "Not Started" },
                      { name: "Lead a Team Project", status: "Not Started" },
                      { name: "Mentor Junior Developers", status: "Not Started" },
                    ],
                  },
                  {
                    title: "Achieve Dream Role",
                    description: "Secure position as Full Stack Developer at Tech Giants Inc.",
                    timeline: "36+ months",
                    icon: Award,
                    status: "Goal",
                    items: [
                      { name: "Apply to Target Companies", status: "Not Started" },
                      { name: "Negotiate Compensation Package", status: "Not Started" },
                      { name: "Establish Career Growth Plan", status: "Not Started" },
                    ],
                  },
                ].map((stage, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-14 top-0 flex items-center justify-center">
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center ${
                          stage.status === "In Progress" ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <stage.icon className="h-4 w-4" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">{stage.title}</h3>
                        <Badge
                          variant={
                            stage.status === "In Progress"
                              ? "default"
                              : stage.status === "Completed"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {stage.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{stage.description}</p>
                      <p className="text-sm font-medium mt-1">{stage.timeline}</p>
                      <div className="mt-3 space-y-2">
                        {stage.items.map((item, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <div
                              className={`h-2 w-2 rounded-full ${
                                item.status === "Completed"
                                  ? "bg-green-500"
                                  : item.status === "In Progress"
                                    ? "bg-primary"
                                    : "bg-muted"
                              }`}
                            ></div>
                            <span className="text-sm">{item.name}</span>
                            <Badge variant="outline" className="ml-auto text-xs">
                              {item.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>
              <LineChart className="mr-2 h-4 w-4" />
              View Detailed Roadmap
            </Button>
          </CardFooter>
        </Card>
      </div>
    </PageTransition>
  )
}
