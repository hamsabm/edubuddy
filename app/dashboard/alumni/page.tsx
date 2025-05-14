"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowRight,
  BriefcaseBusiness,
  Calendar,
  Clock,
  Filter,
  GraduationCap,
  Mail,
  MessageCircle,
  Search,
  Star,
  Users,
} from "lucide-react"
import { PageTransition } from "@/components/page-transition"

export default function AlumniPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const alumni = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Software Engineer",
      company: "Google",
      graduationYear: 2020,
      location: "San Francisco, CA",
      skills: ["React", "Node.js", "AWS", "System Design"],
      available: true,
      lastActive: "2 days ago",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Data Scientist",
      company: "Microsoft",
      graduationYear: 2019,
      location: "Seattle, WA",
      skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],
      available: true,
      lastActive: "1 day ago",
    },
    {
      id: 3,
      name: "Jessica Williams",
      role: "Product Manager",
      company: "Amazon",
      graduationYear: 2018,
      location: "New York, NY",
      skills: ["Product Strategy", "User Research", "Agile", "Roadmapping"],
      available: false,
      lastActive: "1 week ago",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Frontend Developer",
      company: "Netflix",
      graduationYear: 2021,
      location: "Los Angeles, CA",
      skills: ["React", "TypeScript", "CSS", "UI/UX"],
      available: true,
      lastActive: "Just now",
    },
    {
      id: 5,
      name: "Emily Rodriguez",
      role: "DevOps Engineer",
      company: "Salesforce",
      graduationYear: 2020,
      location: "Chicago, IL",
      skills: ["Docker", "Kubernetes", "CI/CD", "Cloud Infrastructure"],
      available: false,
      lastActive: "3 days ago",
    },
  ]

  const events = [
    {
      id: 1,
      title: "Tech Career Panel",
      date: "May 25, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Virtual",
      attendees: 45,
      description: "Join alumni from top tech companies for insights on career paths and industry trends.",
      speakers: ["Sarah Johnson (Google)", "Michael Chen (Microsoft)", "Jessica Williams (Amazon)"],
    },
    {
      id: 2,
      title: "Resume Workshop",
      date: "June 5, 2025",
      time: "5:30 PM - 7:00 PM",
      location: "Virtual",
      attendees: 30,
      description: "Get personalized feedback on your resume from industry professionals.",
      speakers: ["David Kim (Netflix)", "Career Services Team"],
    },
    {
      id: 3,
      title: "Annual Alumni Networking Mixer",
      date: "June 15, 2025",
      time: "7:00 PM - 10:00 PM",
      location: "Grand Hotel, Downtown",
      attendees: 120,
      description: "Connect with fellow alumni and industry professionals at our biggest networking event of the year.",
      speakers: ["Various Alumni", "Industry Guests"],
    },
  ]

  const mentors = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Software Engineer at Google",
      expertise: ["Career Transitions", "Technical Interviews", "Frontend Development"],
      rating: 4.9,
      reviews: 24,
      availability: "2-3 hours/week",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Data Scientist at Microsoft",
      expertise: ["Data Science Career", "Machine Learning", "Technical Interviews"],
      rating: 4.8,
      reviews: 18,
      availability: "1-2 hours/week",
    },
    {
      id: 3,
      name: "Jessica Williams",
      role: "Product Manager at Amazon",
      expertise: ["Product Management", "Career Switching", "Leadership"],
      rating: 4.7,
      reviews: 15,
      availability: "1 hour/week",
    },
  ]

  const filteredAlumni = alumni.filter(
    (person) =>
      searchQuery === "" ||
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.role.toLowerCase().includes ||
      person.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <PageTransition>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight gradient-text">Alumni Network</h1>
          <p className="text-muted-foreground">Connect with alumni, find mentors, and attend networking events</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card hover>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Alumni Network</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,250+</div>
              <p className="text-xs text-muted-foreground mt-2">Professionals in various industries</p>
            </CardContent>
          </Card>
          <Card hover>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Available Mentors</CardTitle>
              <GraduationCap className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <p className="text-xs text-muted-foreground mt-2">Ready to guide your career journey</p>
            </CardContent>
          </Card>
          <Card hover>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground mt-2">Next: Tech Career Panel (May 25)</p>
            </CardContent>
          </Card>
          <Card hover>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Your Connections</CardTitle>
              <BriefcaseBusiness className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground mt-2">Grow your professional network</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="alumni" className="space-y-4">
          <TabsList className="grid grid-cols-3 w-full md:w-[400px]">
            <TabsTrigger value="alumni">Alumni Directory</TabsTrigger>
            <TabsTrigger value="mentors">Find Mentors</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="alumni" className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search alumni by name, role, company, or skills..."
                  className="pl-8 w-full md:w-[350px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[130px]">
                    <SelectValue placeholder="Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Industries</SelectItem>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[130px]">
                    <SelectValue placeholder="Graduation Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    <SelectItem value="2020">2020</SelectItem>
                    <SelectItem value="older">2019 & Earlier</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {filteredAlumni.length > 0 ? (
                filteredAlumni.map((person) => (
                  <Card key={person.id} hover>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-semibold">{person.name}</h3>
                            {person.available && (
                              <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">
                                Available for mentoring
                              </Badge>
                            )}
                          </div>
                          <div className="text-muted-foreground">
                            <p>
                              {person.role} at {person.company}
                            </p>
                            <div className="flex items-center gap-4 text-sm mt-1">
                              <div className="flex items-center gap-1">
                                <GraduationCap className="h-4 w-4 text-muted-foreground" />
                                <span>Class of {person.graduationYear}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span>Active {person.lastActive}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {person.skills.map((skill, i) => (
                              <Badge key={i} variant="outline" className="badge-pop">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline">
                            <Mail className="mr-2 h-4 w-4" />
                            Connect
                          </Button>
                          {person.available && (
                            <Button>
                              <MessageCircle className="mr-2 h-4 w-4" />
                              Request Mentoring
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-8">
                  <Users className="h-12 w-12 mx-auto text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">No alumni found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filters</p>
                </div>
              )}
            </div>

            <div className="flex justify-center">
              <Button variant="outline">Load More Alumni</Button>
            </div>
          </TabsContent>

          <TabsContent value="mentors" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Available Mentors</h2>
              <Button>Become a Mentor</Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {mentors.map((mentor) => (
                <Card key={mentor.id} hover>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                        <span className="text-xl font-bold text-primary">{mentor.name.charAt(0)}</span>
                      </div>
                      <h3 className="font-semibold">{mentor.name}</h3>
                      <p className="text-sm text-muted-foreground">{mentor.role}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">
                          {mentor.rating} ({mentor.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium mb-1">Areas of Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {mentor.expertise.map((area, i) => (
                            <Badge key={i} variant="secondary" className="badge-pop">
                              {area}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-1">Availability</h4>
                        <p className="text-sm text-muted-foreground">{mentor.availability}</p>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Request Mentorship</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>How Mentorship Works</CardTitle>
                <CardDescription>Connect with experienced professionals for career guidance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      step: 1,
                      title: "Find a Mentor",
                      description:
                        "Browse our directory of alumni mentors and find someone whose experience aligns with your career goals.",
                    },
                    {
                      step: 2,
                      title: "Send a Request",
                      description:
                        "Reach out with a personalized message explaining what you're looking for in a mentorship.",
                    },
                    {
                      step: 3,
                      title: "Schedule Sessions",
                      description:
                        "Once connected, schedule regular meetings to discuss your career goals and challenges.",
                    },
                    {
                      step: 4,
                      title: "Grow Together",
                      description: "Build a lasting professional relationship that benefits both mentor and mentee.",
                    },
                  ].map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-white">{step.step}</span>
                      </div>
                      <div>
                        <h3 className="font-medium">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More About Mentorship
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Upcoming Events</h2>
              <Button>View Calendar</Button>
            </div>

            <div className="grid gap-4">
              {events.map((event) => (
                <Card key={event.id} hover>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-semibold">{event.title}</h3>
                          <Badge>Upcoming</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{event.description}</p>
                        <div>
                          <h4 className="text-sm font-medium mb-1">Speakers</h4>
                          <ul className="text-sm text-muted-foreground">
                            {event.speakers.map((speaker, i) => (
                              <li key={i}>{speaker}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-end">
                        <div className="flex items-center gap-1 text-sm">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{event.attendees} attending</span>
                        </div>
                        <Button>
                          Register
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Past Events</CardTitle>
                <CardDescription>Recordings and resources from previous events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Job Search Strategies Panel",
                      date: "April 15, 2025",
                      resources: ["Video Recording", "Presentation Slides", "Q&A Summary"],
                    },
                    {
                      title: "Tech Industry Insights Webinar",
                      date: "March 20, 2025",
                      resources: ["Video Recording", "Industry Report", "Speaker Notes"],
                    },
                    {
                      title: "Interview Preparation Workshop",
                      date: "February 10, 2025",
                      resources: ["Video Recording", "Practice Questions", "Feedback Templates"],
                    },
                  ].map((event, i) => (
                    <div key={i} className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View Resources
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Past Events
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <Card hover>
          <CardHeader>
            <CardTitle>Success Stories</CardTitle>
            <CardDescription>How alumni connections have helped our students</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  quote:
                    "Connecting with Sarah from Google through the alumni network helped me prepare for my technical interviews. Her insights were invaluable, and I landed a job at a top tech company!",
                  name: "Alex Johnson",
                  role: "Software Engineer",
                  company: "Airbnb",
                  year: 2022,
                },
                {
                  quote:
                    "The mentorship program connected me with Michael, who guided me through my career transition from marketing to data science. His advice on building the right skills made all the difference.",
                  name: "Jennifer Lee",
                  role: "Data Analyst",
                  company: "Spotify",
                  year: 2023,
                },
                {
                  quote:
                    "Attending the alumni networking events helped me build connections that led directly to job opportunities. I'm now working at my dream company thanks to a referral from a fellow alumnus.",
                  name: "Carlos Rodriguez",
                  role: "Product Manager",
                  company: "Meta",
                  year: 2021,
                },
              ].map((story, i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <p className="italic mb-3">"{story.quote}"</p>
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">{story.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium">{story.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {story.role} at {story.company}, Class of {story.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button>Share Your Success Story</Button>
          </CardFooter>
        </Card>
      </div>
    </PageTransition>
  )
}
