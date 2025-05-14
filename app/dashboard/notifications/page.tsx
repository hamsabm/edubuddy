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
      read: false,
      action: "/dashboard/resume",
      icon: BriefcaseBusiness,
    }
  ])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Notifications</h1>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg border ${
              notification.read ? "bg-background" : "bg-muted"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-primary/10">
                <notification.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{notification.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {notification.time}
                  </span>
                  <a
                    href={notification.action}
                    className="text-xs text-primary hover:underline"
                  >
                    View details
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
