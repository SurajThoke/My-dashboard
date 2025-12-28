"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Folder, BarChart, Target, Plus, Grid, List, Star, Users, TrendingUp } from "lucide-react"

interface WorkspaceContentProps {
  workspaceName: string
}

const workspaceData = {
  Suraj: {
    members: [
      { name: "Suraj Thoke", initials: "ST", role: "Owner" },
      { name: "Armin A.", initials: "AA", role: "Editor" },
      { name: "Mikasa A.", initials: "MA", role: "Viewer" },
    ],
    items: [
      { id: 1, type: "report", name: "Q4 Performance Review", modified: "2 hours ago", shared: true },
      { id: 2, type: "dashboard", name: "Personal Sales Dashboard", modified: "1 day ago", shared: false },
      { id: 3, type: "goal", name: "2024 Annual Targets", modified: "3 days ago", shared: true },
      { id: 4, type: "report", name: "Client Meeting Notes", modified: "1 week ago", shared: false },
    ],
  },
  Dashboard: {
    members: [
      { name: "Suraj Thoke", initials: "ST", role: "Admin" },
      { name: "Armin A.", initials: "AA", role: "Member" },
      { name: "Eren Y.", initials: "EY", role: "Member" },
      { name: "Mikasa A.", initials: "MA", role: "Member" },
    ],
    items: [
      { id: 1, type: "report", name: "Company Revenue Report", modified: "1 hour ago", shared: true },
      { id: 2, type: "dashboard", name: "Team Dashboard", modified: "5 hours ago", shared: true },
      { id: 3, type: "report", name: "Sales Analytics", modified: "2 days ago", shared: true },
      { id: 4, type: "goal", name: "Q1 Company Goals", modified: "1 week ago", shared: true },
    ],
  },
}

export default function WorkspaceContent({ workspaceName }: WorkspaceContentProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const workspace = workspaceData[workspaceName as keyof typeof workspaceData]

  const typeIcons = {
    report: BarChart,
    dashboard: Grid,
    goal: Target,
  }

  const typeColors = {
    report: "bg-blue-100 text-blue-700",
    dashboard: "bg-purple-100 text-purple-700",
    goal: "bg-green-100 text-green-700",
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground flex items-center gap-3">
            <Folder className="w-8 h-8 text-primary" />
            {workspaceName} Workspace
          </h1>
          <p className="text-sm text-muted-foreground mt-1">Collaborate and manage your workspace files</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Users className="w-4 h-4 mr-2" />
            Invite
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Item
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Total Items</div>
            <div className="text-2xl font-bold">{workspace.items.length}</div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Members</div>
            <div className="text-2xl font-bold">{workspace.members.length}</div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Shared Items</div>
            <div className="text-2xl font-bold">{workspace.items.filter((i) => i.shared).length}</div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Activity</div>
            <div className="text-2xl font-bold flex items-center gap-1">
              <TrendingUp className="w-5 h-5 text-green-600" />
              High
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Team Members</h3>
        <div className="flex items-center gap-3">
          {workspace.members.map((member, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 p-3 rounded-lg border border-border hover:bg-secondary transition-colors cursor-pointer"
            >
              <Avatar className="w-8 h-8">
                <AvatarFallback className="text-xs bg-gradient-to-br from-orange-400 to-pink-500 text-white">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-medium">{member.name}</div>
                <div className="text-xs text-muted-foreground">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Workspace Items</h3>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setViewMode("grid")}
            className={viewMode === "grid" ? "bg-secondary" : ""}
          >
            <Grid className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setViewMode("list")}
            className={viewMode === "list" ? "bg-secondary" : ""}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-4 gap-4">
          {workspace.items.map((item) => {
            const Icon = typeIcons[item.type as keyof typeof typeIcons]
            return (
              <Card key={item.id} className="p-4 cursor-pointer hover:shadow-lg hover:border-primary transition-all">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-12 h-12 rounded-lg ${typeColors[item.type as keyof typeof typeColors]} flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <Star className="w-4 h-4 text-muted-foreground hover:text-yellow-500 transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">{item.modified}</p>
                  </div>
                  {item.shared && (
                    <Badge variant="secondary" className="text-xs">
                      Shared
                    </Badge>
                  )}
                </div>
              </Card>
            )
          })}
        </div>
      ) : (
        <div className="space-y-2">
          {workspace.items.map((item) => {
            const Icon = typeIcons[item.type as keyof typeof typeIcons]
            return (
              <Card key={item.id} className="p-4 cursor-pointer hover:shadow-md hover:border-primary transition-all">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg ${typeColors[item.type as keyof typeof typeColors]} flex items-center justify-center shrink-0`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">{item.modified}</p>
                  </div>
                  {item.shared && (
                    <Badge variant="secondary" className="text-xs">
                      Shared
                    </Badge>
                  )}
                  <Star className="w-4 h-4 text-muted-foreground hover:text-yellow-500 transition-colors shrink-0" />
                </div>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
