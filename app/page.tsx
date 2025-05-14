import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle,
  FileText,
  GraduationCap,
  MessageSquare,
  Target,
  Users,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-primary rounded-md p-1">
              <GraduationCap className="text-primary-foreground h-6 w-6" />
            </div>
            <span className="text-xl font-bold">Edubuddy</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                  Launch Your Career Journey with Edubuddy
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Your AI-powered career companion that helps you build skills, craft perfect resumes, ace interviews,
                  and land your dream job. Edubuddy provides personalized guidance at every step of your career journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/signup">
                    <Button size="lg" className="w-full sm:w-auto">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/features">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Explore Features
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-purple-100">
                <h2 className="text-2xl font-bold mb-4 text-center">Why Students Choose Us</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">AI-Powered Career Guidance</p>
                      <p className="text-sm text-muted-foreground">
                        Personalized recommendations based on your skills and goals
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Resume Builder & Analyzer</p>
                      <p className="text-sm text-muted-foreground">
                        Create ATS-friendly resumes with real-time feedback
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Mock Interview Practice</p>
                      <p className="text-sm text-muted-foreground">
                        Prepare with AI-driven interviews tailored to your target roles
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Job Matching & Application</p>
                      <p className="text-sm text-muted-foreground">Find and apply to jobs that match your profile</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Supercharge Your Career Journey</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Resume Builder",
                  description:
                    "Get personalized resume feedback and auto-generate tailored resumes for your dream jobs. Our AI analyzes your skills and experience to create optimized resumes that pass ATS systems and impress recruiters.",
                  icon: FileText,
                },
                {
                  title: "Smart Job Matcher",
                  description:
                    "Automatically find and apply to jobs that match your skills and career goals. Our algorithm analyzes thousands of job postings to find the perfect matches for your unique profile and career aspirations.",
                  icon: BriefcaseBusiness,
                },
                {
                  title: "AI Mock Interviews",
                  description:
                    "Practice with AI-driven interviews and get real-time feedback on your performance. Prepare for technical, behavioral, and company-specific interviews with personalized questions and detailed feedback.",
                  icon: MessageSquare,
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-purple-100"
                >
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Comprehensive Career Development</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  title: "Career Roadmap",
                  description: "Personalized path to achieve your dream job with milestone tracking",
                  icon: Target,
                },
                {
                  title: "Learning Hub",
                  description: "Curated courses and resources to build in-demand skills",
                  icon: BookOpen,
                },
                {
                  title: "Coding Practice",
                  description: "Interactive coding challenges and company-specific practice",
                  icon: FileText,
                },
                {
                  title: "Alumni Network",
                  description: "Connect with professionals and mentors in your field",
                  icon: Users,
                },
                {
                  title: "Placement Prediction",
                  description: "AI-powered insights on your chances at target companies",
                  icon: Target,
                },
                {
                  title: "HR Insights",
                  description: "Understand what recruiters look for in candidates",
                  icon: Users,
                },
                {
                  title: "Group Discussions",
                  description: "Practice and improve your communication skills",
                  icon: MessageSquare,
                },
                {
                  title: "Career Analytics",
                  description: "Track your progress and identify improvement areas",
                  icon: Target,
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow border border-purple-100"
                >
                  <feature.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6 gradient-text">Success Stories</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
              Join thousands of students who have transformed their careers with Edubuddy
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Edubuddy helped me land my dream job at Google. The mock interviews and resume feedback were invaluable in my preparation.",
                  name: "Sarah Johnson",
                  role: "Software Engineer at Google",
                },
                {
                  quote:
                    "The personalized career roadmap guided me through every step of my job search. I improved my skills and found a great position in just 2 months.",
                  name: "Michael Chen",
                  role: "Data Scientist at Microsoft",
                },
                {
                  quote:
                    "As a career changer, I was lost until I found Edubuddy. The AI recommendations and learning resources helped me transition to tech successfully.",
                  name: "Jessica Williams",
                  role: "Product Manager at Amazon",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-purple-50 rounded-lg p-6 border border-purple-100">
                  <p className="italic mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Career?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Join Edubuddy today and take the first step towards your dream job. Our AI-powered platform will guide you
              every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Get Started for Free
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  Request a Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="bg-primary rounded-md p-1">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold">Edubuddy</span>
            </div>
            <div className="flex flex-col md:flex-row gap-8 mb-4 md:mb-0">
              <div>
                <h4 className="font-semibold mb-2">Features</h4>
                <ul className="text-sm space-y-1">
                  <li>Resume Builder</li>
                  <li>Mock Interviews</li>
                  <li>Job Matcher</li>
                  <li>Career Roadmap</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Resources</h4>
                <ul className="text-sm space-y-1">
                  <li>Career Blog</li>
                  <li>Interview Tips</li>
                  <li>Resume Templates</li>
                  <li>Skill Assessments</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Company</h4>
                <ul className="text-sm space-y-1">
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t mt-6 pt-6 text-center md:text-left">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Edubuddy. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
