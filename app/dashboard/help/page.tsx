"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  ChevronUp,
  FileText,
  HelpCircle,
  Mail,
  MessageCircle,
  Search,
  Video,
  Briefcase,
} from "lucide-react"
import { PageTransition } from "@/components/page-transition"

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      id: 1,
      question: "How do I update my resume?",
      answer:
        "You can update your resume by navigating to the Resume Builder section from the sidebar. Click on the resume you want to edit, or create a new one using the 'Create New Resume' button. Use our AI-powered editor to make changes, and don't forget to save your updates.",
      category: "resume",
    },
    {
      id: 2,
      question: "How does the job matching algorithm work?",
      answer:
        "Our job matching algorithm analyzes your skills, experience, and preferences to find suitable job opportunities. It compares your profile with job requirements to calculate a match percentage. The higher the percentage, the better the match. You can improve your matches by keeping your profile updated and adding relevant skills.",
      category: "jobs",
    },
    {
      id: 3,
      question: "Can I schedule mock interviews with real people?",
      answer:
        "Yes, in addition to our AI-powered mock interviews, you can schedule sessions with industry professionals through our Alumni Network. Navigate to the Alumni Network section, filter for mentors in your field, and request a mock interview session based on their availability.",
      category: "interviews",
    },
    {
      id: 4,
      question: "How do I track my learning progress?",
      answer:
        "Your learning progress is automatically tracked in the Learning Hub. You can view detailed analytics including courses completed, time spent learning, and skill development. The Analytics section also provides insights into your overall career readiness and areas for improvement.",
      category: "learning",
    },
    {
      id: 5,
      question: "What should I do if I forgot my password?",
      answer:
        "If you forgot your password, click on the 'Forgot password?' link on the login page. Enter your registered email address, and we'll send you a password reset link. Follow the instructions in the email to create a new password. For security reasons, the link expires after 24 hours.",
      category: "account",
    },
    {
      id: 6,
      question: "How can I connect with alumni?",
      answer:
        "You can connect with alumni through the Alumni Network section. Browse profiles, filter by industry or company, and send connection requests. You can also participate in alumni events and webinars listed in the Events tab to network with graduates working in your field of interest.",
      category: "network",
    },
    {
      id: 7,
      question: "Is my data secure on Edubuddy?",
      answer:
        "Yes, we take data security seriously. All personal information is encrypted and stored securely. We never share your data with third parties without your consent. You can review and adjust your privacy settings in the Settings section under Privacy & Security.",
      category: "account",
    },
    {
      id: 8,
      question: "How do I cancel my subscription?",
      answer:
        "To cancel your subscription, go to Settings > Account > Subscription Management. Click on 'Cancel Subscription' and follow the prompts. You'll continue to have access until the end of your current billing period. If you have any issues, please contact our support team.",
      category: "account",
    },
  ]

  const resources = [
    {
      title: "Getting Started Guide",
      description: "A comprehensive guide to help you make the most of Edubuddy",
      type: "Guide",
      icon: FileText,
      link: "#",
    },
    {
      title: "Resume Building Tutorial",
      description: "Learn how to create an ATS-friendly resume that stands out",
      type: "Video",
      icon: Video,
      link: "#",
    },
    {
      title: "Interview Preparation Handbook",
      description: "Tips and strategies for acing technical and behavioral interviews",
      type: "Guide",
      icon: FileText,
      link: "#",
    },
    {
      title: "Job Search Strategy Webinar",
      description: "Expert advice on finding and applying to the right opportunities",
      type: "Video",
      icon: Video,
      link: "#",
    },
    {
      title: "Networking Best Practices",
      description: "How to build and leverage your professional network effectively",
      type: "Guide",
      icon: FileText,
      link: "#",
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <PageTransition>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight gradient-text">Help & Support</h1>
          <p className="text-muted-foreground">Find answers to common questions and get assistance</p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search for help topics..."
            className="pl-10 py-6 text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Tabs defaultValue="faq" className="space-y-4">
          <TabsList className="grid grid-cols-3 w-full md:w-[400px]">
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
          </TabsList>

          <TabsContent value="faq" className="space-y-4">
            {filteredFaqs.length > 0 ? (
              <div className="grid gap-4">
                {filteredFaqs.map((faq) => (
                  <Card key={faq.id} hover>
                    <CardHeader
                      className="cursor-pointer"
                      onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                    >
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">{faq.question}</CardTitle>
                        {expandedFaq === faq.id ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </CardHeader>
                    {expandedFaq === faq.id && (
                      <CardContent>
                        <p>{faq.answer}</p>
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Was this helpful?</span>
                            <Button variant="outline" size="sm">
                              Yes
                            </Button>
                            <Button variant="outline" size="sm">
                              No
                            </Button>
                          </div>
                          <Button variant="ghost" size="sm">
                            Related Articles
                          </Button>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <HelpCircle className="h-12 w-12 mx-auto text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No results found</h3>
                <p className="text-muted-foreground">Try adjusting your search query</p>
              </div>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Browse by Category</CardTitle>
                <CardDescription>Find answers by topic</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: "Account", icon: HelpCircle, count: 3 },
                    { name: "Resume", icon: FileText, count: 5 },
                    { name: "Jobs", icon: Briefcase, count: 4 },
                    { name: "Interviews", icon: MessageCircle, count: 6 },
                    { name: "Learning", icon: BookOpen, count: 4 },
                    { name: "Network", icon: Mail, count: 3 },
                    { name: "Billing", icon: HelpCircle, count: 2 },
                    { name: "Technical", icon: HelpCircle, count: 5 },
                  ].map((category) => (
                    <Button key={category.name} variant="outline" className="h-auto py-4 flex flex-col gap-2">
                      <category.icon className="h-5 w-5" />
                      <span>{category.name}</span>
                      <span className="text-xs text-muted-foreground">{category.count} articles</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              {resources.map((resource, i) => (
                <Card key={i} hover>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <resource.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{resource.type}</Badge>
                          <Button variant="ghost" size="sm">
                            View Resource
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Video Tutorials</CardTitle>
                <CardDescription>Step-by-step guides to help you navigate Edubuddy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Getting Started with Edubuddy",
                      duration: "5:32",
                      views: "1.2K",
                    },
                    {
                      title: "How to Use the Resume Builder",
                      duration: "8:45",
                      views: "3.5K",
                    },
                    {
                      title: "Preparing for Mock Interviews",
                      duration: "12:18",
                      views: "2.8K",
                    },
                    {
                      title: "Optimizing Your Job Search",
                      duration: "10:05",
                      views: "1.9K",
                    },
                  ].map((video, i) => (
                    <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                          <Video className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{video.title}</h3>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{video.duration}</span>
                            <span>•</span>
                            <span>{video.views} views</span>
                          </div>
                        </div>
                      </div>
                      <Button size="sm">Watch</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Tutorials
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="contact" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>Get help from our support team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Enter the subject of your inquiry" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select defaultValue="technical">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="account">Account Issues</SelectItem>
                      <SelectItem value="technical">Technical Problems</SelectItem>
                      <SelectItem value="billing">Billing & Subscription</SelectItem>
                      <SelectItem value="feature">Feature Request</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Describe your issue in detail" className="min-h-[150px]" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="attachments">Attachments (optional)</Label>
                  <Input id="attachments" type="file" />
                  <p className="text-xs text-muted-foreground">
                    Max file size: 10MB. Supported formats: JPG, PNG, PDF.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>
                  <Mail className="mr-2 h-4 w-4" />
                  Submit Ticket
                </Button>
              </CardFooter>
            </Card>

            <div className="grid gap-4 md:grid-cols-3">
              <Card hover>
                <CardContent className="p-6 text-center">
                  <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Email Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Send us an email and we'll get back to you within 24 hours.
                  </p>
                  <p className="font-medium">support@edubuddy.com</p>
                </CardContent>
              </Card>
              <Card hover>
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Chat with our support team in real-time during business hours.
                  </p>
                  <Button>Start Chat</Button>
                </CardContent>
              </Card>
              <Card hover>
                <CardContent className="p-6 text-center">
                  <HelpCircle className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Community Forum</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Connect with other users and find solutions to common issues.
                  </p>
                  <Button variant="outline">Visit Forum</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageTransition>
  )
}

function Label({ htmlFor, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {children}
    </label>
  )
}

function Badge({ variant = "default", className, children, ...props }) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variant === "default" && "border-transparent bg-primary text-primary-foreground",
        variant === "secondary" && "border-transparent bg-secondary text-secondary-foreground",
        variant === "outline" && "text-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function Select({ children, defaultValue }) {
  return (
    <div className="relative">
      <select
        defaultValue={defaultValue}
        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {children}
      </select>
    </div>
  )
}

function SelectTrigger({ children }) {
  return <>{children}</>
}

function SelectValue({ placeholder }) {
  return <span>{placeholder}</span>
}

function SelectContent({ children }) {
  return <>{children}</>
}

function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>
}

function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}
