import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BriefcaseBusiness, CheckCircle2, Clock, ExternalLink, Filter, Search, Star } from "lucide-react"

export default function JobsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Smart Job Matcher</h1>
        <p className="text-muted-foreground">Find and apply to jobs that match your skills and career goals</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Jobs Matched</CardTitle>
            <BriefcaseBusiness className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground mt-2">Based on your profile and preferences</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Applications</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <div className="flex items-center gap-1 mt-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <p className="text-xs">3 in review</p>
              <div className="h-2 w-2 rounded-full bg-yellow-500 ml-2"></div>
              <p className="text-xs">4 pending</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Skill Match</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <Progress value={85} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">Average match rate with recommended jobs</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saved Jobs</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-2">Jobs you've saved for later</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-64 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="job-type">Job Type</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="job-type">
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Experience Level</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="experience">
                    <SelectValue placeholder="Select experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="entry">Entry Level</SelectItem>
                    <SelectItem value="mid">Mid Level</SelectItem>
                    <SelectItem value="senior">Senior Level</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                    <SelectItem value="onsite">On-site</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Skill Match</Label>
                <div className="flex items-center gap-2">
                  <span className="text-sm">50%</span>
                  <Progress value={75} className="flex-1" />
                  <span className="text-sm">100%</span>
                </div>
              </div>

              <Button className="w-full">
                <Filter className="mr-2 h-4 w-4" />
                Apply Filters
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="flex-1">
          <Card className="h-full">
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                  <CardTitle>Recommended Jobs</CardTitle>
                  <CardDescription>Jobs that match your skills and preferences</CardDescription>
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search jobs..." className="pl-8 w-full md:w-[200px]" />
                  </div>
                  <Select defaultValue="relevance">
                    <SelectTrigger className="w-[130px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="recent">Most Recent</SelectItem>
                      <SelectItem value="match">Highest Match</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "Full Stack Developer",
                  company: "TechCorp Inc.",
                  location: "San Francisco, CA (Remote)",
                  posted: "2 days ago",
                  match: 95,
                  skills: ["React", "Node.js", "TypeScript", "MongoDB"],
                  type: "Full-time",
                },
                {
                  title: "Frontend Engineer",
                  company: "InnovateTech",
                  location: "New York, NY (Hybrid)",
                  posted: "1 week ago",
                  match: 88,
                  skills: ["React", "JavaScript", "CSS", "UI/UX"],
                  type: "Full-time",
                },
                {
                  title: "Software Engineer Intern",
                  company: "StartupXYZ",
                  location: "Remote",
                  posted: "3 days ago",
                  match: 82,
                  skills: ["JavaScript", "React", "Git", "REST API"],
                  type: "Internship",
                },
                {
                  title: "Backend Developer",
                  company: "DataSystems Co.",
                  location: "Austin, TX (On-site)",
                  posted: "5 days ago",
                  match: 78,
                  skills: ["Node.js", "Express", "MongoDB", "AWS"],
                  type: "Full-time",
                },
                {
                  title: "Web Developer (Contract)",
                  company: "DesignStudio",
                  location: "Remote",
                  posted: "1 day ago",
                  match: 75,
                  skills: ["HTML/CSS", "JavaScript", "WordPress", "UI Design"],
                  type: "Contract",
                },
              ].map((job, i) => (
                <div key={i} className="border rounded-lg p-4">
                  <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-lg">{job.title}</h3>
                        <Badge variant={job.match >= 90 ? "default" : "outline"} className="ml-2">
                          {job.match}% Match
                        </Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-x-2 text-sm text-muted-foreground mt-1">
                        <span>{job.company}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{job.location}</span>
                        <span className="hidden sm:inline">•</span>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{job.posted}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <Badge variant="secondary">{job.type}</Badge>
                        {job.skills.map((skill, j) => (
                          <Badge key={j} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 self-end md:self-start">
                      <Button variant="outline" size="sm">
                        <Star className="mr-2 h-4 w-4" />
                        Save
                      </Button>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </div>
                  <div className="flex justify-end mt-2">
                    <Button variant="ghost" size="sm" className="text-xs">
                      View Details
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
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
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
