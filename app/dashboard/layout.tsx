"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  AlertCircle,
  BarChart3,
  Bell,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  FileText,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Search,
  Settings,
  Target,
  User,
  Users,
} from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Suspense } from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [mounted, setMounted] = useState(false)
  const [notifications, setNotifications] = useState(3)
  const [searchOpen, setSearchOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b flex items-center px-4 sticky top-0 bg-background z-10 shadow-sm">
            <div className="flex w-full justify-between items-center">
              <div className="flex items-center">
                <SidebarTrigger />
                <div className="ml-4 text-lg font-semibold gradient-text">Edubuddy</div>
              </div>
              <div className="flex items-center gap-3">
                {searchOpen ? (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "240px", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                  >
                    <Input placeholder="Search..." className="pr-8" autoFocus onBlur={() => setSearchOpen(false)} />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0"
                      onClick={() => setSearchOpen(false)}
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </motion.div>
                ) : (
                  <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)}>
                    <Search className="h-5 w-5" />
                  </Button>
                )}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="h-5 w-5" />
                      {notifications > 0 && (
                        <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 badge-pop">
                          {notifications}
                        </Badge>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80">
                    <DropdownMenuLabel className="flex items-center justify-between">
                      <span>Notifications</span>
                      <Button variant="ghost" size="sm" onClick={() => setNotifications(0)} className="text-xs h-7">
                        Mark all as read
                      </Button>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {[
                      {
                        title: "New job match found",
                        description: "A new Full Stack Developer position matches your profile",
                        time: "10 minutes ago",
                        icon: BriefcaseBusiness,
                        action: () => router.push("/dashboard/jobs"),
                      },
                      {
                        title: "Resume feedback available",
                        description: "AI analysis of your latest resume is ready to view",
                        time: "1 hour ago",
                        icon: FileText,
                        action: () => router.push("/dashboard/resume"),
                      },
                      {
                        title: "Upcoming mock interview",
                        description: "Your scheduled interview is tomorrow at 2:00 PM",
                        time: "3 hours ago",
                        icon: MessageSquare,
                        action: () => router.push("/dashboard/interviews"),
                      },
                    ].map((notification, i) => (
                      <DropdownMenuItem
                        key={i}
                        className="flex items-start gap-3 p-3 cursor-pointer"
                        onClick={notification.action}
                      >
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <notification.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{notification.title}</p>
                          <p className="text-xs text-muted-foreground mt-1">{notification.description}</p>
                          <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                        </div>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="justify-center" asChild>
                      <Link href="/dashboard/notifications">View all notifications</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">John Doe</p>
                        <p className="text-xs leading-none text-muted-foreground">john.doe@example.com</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => router.push("/dashboard/profile")}>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push("/dashboard/settings")}>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => router.push("/login")}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>
          <main className="flex-1 p-4 md:p-6 overflow-auto">
            <Suspense>
              <AnimatePresence mode="wait">
                <motion.div
                  key={pathname}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  {children}
                </motion.div>
              </AnimatePresence>
            </Suspense>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

function AppSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const routes = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
    },
    {
      title: "Profile",
      icon: User,
      href: "/dashboard/profile",
    },
    {
      title: "Resume Builder",
      icon: FileText,
      href: "/dashboard/resume",
    },
    {
      title: "Career Goals",
      icon: Target,
      href: "/dashboard/goals",
    },
    {
      title: "Job Matcher",
      icon: BriefcaseBusiness,
      href: "/dashboard/jobs",
    },
    {
      title: "Mock Interviews",
      icon: MessageSquare,
      href: "/dashboard/interviews",
    },
    {
      title: "Learning Hub",
      icon: BookOpen,
      href: "/dashboard/learning",
    },
    {
      title: "Coding Practice",
      icon: Code2,
      href: "/dashboard/coding",
    },
    {
      title: "Alumni Network",
      icon: Users,
      href: "/dashboard/alumni",
    },
    {
      title: "Analytics",
      icon: BarChart3,
      href: "/dashboard/analytics",
    },
  ]

  return (
    <Sidebar className="sidebar-glow">
      <SidebarHeader className="border-b p-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-white rounded-md p-1">
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
          <span className="font-bold text-white">Edubuddy</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {routes.map((route) => (
            <SidebarMenuItem key={route.href} className="sidebar-item" data-active={pathname === route.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === route.href}
                tooltip={route.title}
                className="transition-all duration-300"
              >
                <Link href={route.href}>
                  <route.icon className="h-5 w-5" />
                  <span>{route.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <SidebarMenu>
          <SidebarMenuItem className="sidebar-item" data-active={pathname === "/dashboard/settings"}>
            <SidebarMenuButton
              asChild
              isActive={pathname === "/dashboard/settings"}
              className="transition-all duration-300"
            >
              <Link href="/dashboard/settings">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem className="sidebar-item" data-active={pathname === "/dashboard/help"}>
            <SidebarMenuButton
              asChild
              isActive={pathname === "/dashboard/help"}
              className="transition-all duration-300"
            >
              <Link href="/dashboard/help">
                <AlertCircle className="h-5 w-5" />
                <span>Help & Support</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
