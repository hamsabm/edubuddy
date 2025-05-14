import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, CheckCircle2, Download, FileText, PlusCircle, Upload, XCircle } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Resume Builder</h1>
        <p className="text-muted-foreground">Create, analyze, and optimize your resume with AI assistance</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resume Score</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78/100</div>
            <Progress value={78} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">+5 points from last analysis</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ATS Compatibility</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <Progress value={92} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">Highly compatible with most ATS systems</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Keyword Optimization</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <Progress value={85} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">8 key industry terms detected</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="builder" className="space-y-4">
        <TabsList>
          <TabsTrigger value="builder">Resume Builder</TabsTrigger>
          <TabsTrigger value="analyzer">Resume Analyzer</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="builder" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Resumes</CardTitle>
              <CardDescription>Create and manage your customized resumes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Create New Resume
                  </Button>
                  <Button variant="outline">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Existing
                  </Button>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                {[
                  {
                    title: "Software Developer Resume",
                    lastUpdated: "Updated 2 days ago",
                    targetRole: "Full Stack Developer",
                    status: "Active",
                  },
                  {
                    title: "Data Science Resume",
                    lastUpdated: "Updated 1 week ago",
                    targetRole: "Data Analyst",
                    status: "Draft",
                  },
                  {
                    title: "Product Management Resume",
                    lastUpdated: "Updated 3 weeks ago",
                    targetRole: "Product Manager",
                    status: "Active",
                  },
                ].map((resume, i) => (
                  <div key={i} className="flex items-center justify-between border rounded-lg p-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{resume.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{resume.lastUpdated}</span>
                          <div className="h-1 w-1 rounded-full bg-muted-foreground"></div>
                          <span>Target: {resume.targetRole}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={resume.status === "Active" ? "default" : "outline"}>{resume.status}</Badge>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Resume Enhancement</CardTitle>
              <CardDescription>Let AI help you improve your resume</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="rounded-lg border p-4">
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                    <div>
                      <h3 className="font-semibold text-lg">AI Resume Analysis</h3>
                      <p className="text-muted-foreground">
                        Get detailed feedback on your resume's strengths and weaknesses
                      </p>
                    </div>
                    <Button>Analyze My Resume</Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                    <div>
                      <h3 className="font-semibold text-lg">AI Resume Generator</h3>
                      <p className="text-muted-foreground">
                        Generate a tailored resume based on your profile and target job
                      </p>
                    </div>
                    <Button>Generate Resume</Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                    <div>
                      <h3 className="font-semibold text-lg">Job Description Matcher</h3>
                      <p className="text-muted-foreground">Optimize your resume for specific job descriptions</p>
                    </div>
                    <Button>Match to Job</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analyzer" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Resume Analysis</CardTitle>
              <CardDescription>Get detailed feedback on your resume</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-1/2 border rounded-lg p-4 bg-muted/30">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Software Developer Resume</h3>
                    <Badge>Analyzed</Badge>
                  </div>
                  <div className="aspect-[8.5/11] bg-background rounded-md border flex items-center justify-center">
                    <FileText className="h-16 w-16 text-muted-foreground/60" />
                  </div>
                  <div className="flex justify-between mt-4">
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="outline" size="sm">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload New
                    </Button>
                  </div>
                </div>

                <div className="w-full md:w-1/2 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Overall Score</h3>
                    <div className="flex items-center gap-2">
                      <Progress value={78} className="flex-1" />
                      <span className="font-bold">78/100</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-medium">Strengths</h3>
                    <div className="space-y-2">
                      {[
                        "Strong technical skills section",
                        "Good quantifiable achievements",
                        "Clear and concise formatting",
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-medium">Areas for Improvement</h3>
                    <div className="space-y-2">
                      {[
                        "Add more specific project outcomes",
                        "Include relevant certifications",
                        "Tailor skills to target job description",
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full">Get Detailed Analysis</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Resume Templates</CardTitle>
              <CardDescription>Choose from professionally designed templates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    name: "Modern Professional",
                    category: "Professional",
                    popular: true,
                  },
                  {
                    name: "Clean Minimal",
                    category: "Minimal",
                    popular: false,
                  },
                  {
                    name: "Creative Design",
                    category: "Creative",
                    popular: false,
                  },
                  {
                    name: "Executive",
                    category: "Professional",
                    popular: true,
                  },
                  {
                    name: "Technical Specialist",
                    category: "Technical",
                    popular: true,
                  },
                  {
                    name: "Academic",
                    category: "Academic",
                    popular: false,
                  },
                ].map((template, i) => (
                  <div key={i} className="border rounded-lg overflow-hidden group">
                    <div className="aspect-[8.5/11] bg-muted relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FileText className="h-12 w-12 text-muted-foreground/60" />
                      </div>
                      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button variant="secondary" size="sm">
                          Use Template
                        </Button>
                      </div>
                      {template.popular && (
                        <div className="absolute top-2 right-2">
                          <Badge>Popular</Badge>
                        </div>
                      )}
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium">{template.name}</h3>
                      <p className="text-sm text-muted-foreground">{template.category}</p>
                    </div>
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
