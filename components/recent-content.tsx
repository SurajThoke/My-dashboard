"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight, PieChart, Users, Target, FileText, Calendar } from "lucide-react"

const recentActivities = [
  { id: 1, type: "viewed", title: "Revenue Dashboard", time: "2 minutes ago", user: "Suraj", category: "Dashboard" },
  { id: 2, type: "edited", title: "Q4 Goals", time: "45 minutes ago", user: "Suraj", category: "Planning" },
  { id: 3, type: "shared", title: "Client Report - Rolf Inc.", time: "2 hours ago", user: "Admin", category: "Client" },
  {
    id: 4,
    type: "created",
    title: "New Analytics Workspace",
    time: "Yesterday at 4:30 PM",
    user: "Suraj",
    category: "Workspace",
  },
  {
    id: 5,
    type: "viewed",
    title: "Team Performance",
    time: "Yesterday at 11:15 AM",
    user: "Eren Y.",
    category: "Team",
  },
  { id: 6, type: "deleted", title: "Old Draft Report", time: "2 days ago", user: "Suraj", category: "Archive" },
]

export default function RecentContent() {
  const [filterType, setFilterType] = useState<string>("all")

  const getActionBadge = (type: string) => {
    switch (type) {
      case "viewed":
        return (
          <Badge variant="outline" className="bg-blue-500/10 text-blue-600 border-none text-[10px]">
            Viewed
          </Badge>
        )
      case "edited":
        return (
          <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-none text-[10px]">
            Edited
          </Badge>
        )
      case "shared":
        return (
          <Badge variant="outline" className="bg-purple-500/10 text-purple-600 border-none text-[10px]">
            Shared
          </Badge>
        )
      case "created":
        return (
          <Badge variant="outline" className="bg-green-500/10 text-green-600 border-none text-[10px]">
            Created
          </Badge>
        )
      case "deleted":
        return (
          <Badge variant="outline" className="bg-red-500/10 text-red-600 border-none text-[10px]">
            Deleted
          </Badge>
        )
      default:
        return (
          <Badge variant="outline" className="text-[10px]">
            Activity
          </Badge>
        )
    }
  }

  const getIcon = (category: string) => {
    if (category === "Dashboard") return <PieChart className="w-4 h-4" />
    if (category === "Workspace") return <Users className="w-4 h-4" />
    if (category === "Planning") return <Target className="w-4 h-4" />
    return <FileText className="w-4 h-4" />
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold flex items-center gap-3">
          <Clock className="w-8 h-8 text-primary" />
          Recent Activity
        </h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Calendar className="w-4 h-4" />
            Last 7 days
          </Button>
          <Button variant="secondary" size="sm">
            Clear history
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2 pb-2 overflow-x-auto">
        {["all", "viewed", "edited", "shared", "created"].map((type) => (
          <Button
            key={type}
            variant={filterType === type ? "default" : "ghost"}
            size="sm"
            onClick={() => setFilterType(type)}
            className="capitalize"
          >
            {type}
          </Button>
        ))}
      </div>

      <Card className="divide-y divide-border overflow-hidden">
        {recentActivities
          .filter((a) => filterType === "all" || a.type === filterType)
          .map((activity) => (
            <div
              key={activity.id}
              className="p-4 flex items-center gap-4 hover:bg-secondary/30 transition-colors group cursor-pointer"
            >
              <Avatar className="w-10 h-10 border-2 border-background">
                <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white text-xs">
                  {activity.user[0]}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm truncate">{activity.user}</span>
                  {getActionBadge(activity.type)}
                  <span className="text-xs font-medium text-foreground/80">{activity.title}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    {getIcon(activity.category)}
                    <span>{activity.category}</span>
                  </div>
                  <span>•</span>
                  <span>{activity.time}</span>
                </div>
              </div>

              <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
      </Card>

      <div className="flex justify-center pt-4">
        <Button variant="link" className="text-muted-foreground">
          Load older activity
        </Button>
      </div>
    </div>
  )
}
