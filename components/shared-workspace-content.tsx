"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Share2, BarChart, Grid, Target, Clock } from "lucide-react"

const sharedItems = [
  {
    id: 1,
    type: "report",
    name: "Sales Performance Report",
    owner: { name: "Armin A.", initials: "AA" },
    sharedDate: "2 days ago",
    access: "Editor",
  },
  {
    id: 2,
    type: "dashboard",
    name: "Marketing Dashboard",
    owner: { name: "Mikasa A.", initials: "MA" },
    sharedDate: "1 week ago",
    access: "Viewer",
  },
  {
    id: 3,
    type: "goal",
    name: "Team Quarterly Goals",
    owner: { name: "Eren Y.", initials: "EY" },
    sharedDate: "3 days ago",
    access: "Editor",
  },
]

export default function SharedWorkspaceContent() {
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
            <Share2 className="w-8 h-8 text-primary" />
            Shared With Me
          </h1>
          <p className="text-sm text-muted-foreground mt-1">Items shared with you by other team members</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Shared Items</div>
            <div className="text-2xl font-bold">{sharedItems.length}</div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Can Edit</div>
            <div className="text-2xl font-bold">{sharedItems.filter((i) => i.access === "Editor").length}</div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">View Only</div>
            <div className="text-2xl font-bold">{sharedItems.filter((i) => i.access === "Viewer").length}</div>
          </div>
        </Card>
      </div>

      <div className="space-y-3">
        {sharedItems.map((item) => {
          const Icon = typeIcons[item.type as keyof typeof typeIcons]
          return (
            <Card key={item.id} className="p-5 cursor-pointer hover:shadow-lg hover:border-primary transition-all">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-lg ${typeColors[item.type as keyof typeof typeColors]} flex items-center justify-center shrink-0`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{item.name}</h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Avatar className="w-5 h-5">
                        <AvatarFallback className="text-[8px] bg-gradient-to-br from-blue-400 to-purple-500 text-white">
                          {item.owner.initials}
                        </AvatarFallback>
                      </Avatar>
                      <span>{item.owner.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.sharedDate}
                    </div>
                  </div>
                </div>
                <Badge variant={item.access === "Editor" ? "default" : "secondary"}>{item.access}</Badge>
                <Button variant="outline" size="sm">
                  Open
                </Button>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
