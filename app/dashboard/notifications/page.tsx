"use client"

import { useState } from "react"
import { BriefcaseBusiness } from "lucide-react"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New job match found",
      description: "A new Full Stack Developer position at TechCorp matches your profile",
      time: "10 minutes ago",
      category: "jobs",
      read: false,
      action: "/dashboard/jobs",
      icon: BriefcaseBusiness,
    },
    {
      id: 2,
      title: "Resume feedback available",
      description: "AI analysis of your latest resume is ready to view",
      time: "1 hour ago",
      category: "resume",
      read: false,\
      action: "/dashboar
