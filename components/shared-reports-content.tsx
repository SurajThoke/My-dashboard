"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Share2, FileText, Clock, Eye } from "lucide-react"

const sharedReports = [
  {
    id: 1,
    name: "Q3 Revenue Analysis",
    owner: { name: "Armin A.", initials: "AA" },
    sharedDate: "1 day ago",
    views: 45,
    access: "Can edit",
  },
  {
    id: 2,
    name: "Customer Insights Report",
    owner: { name: "Mikasa A.", initials: "MA" },
    sharedDate: "3 days ago",
    views: 28,
    access: "View only",
  },
  {
    id: 3,
    name: "Team Performance Metrics",
    owner: { name: "Eren Y.", initials: "EY" },
    sharedDate: "1 week ago",
    views: 67,
    access: "Can edit",
  },
]

export default function SharedReportsContent() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-foreground flex items-center gap-3">
          <Share2 className="w-8 h-8 text-primary" />
          Shared Reports
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Reports shared with you by teammates</p>
      </div>

      <div className="space-y-3">
        {sharedReports.map((report) => (
          <Card key={report.id} className="p-5 cursor-pointer hover:shadow-lg hover:border-primary transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{report.name}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Avatar className="w-5 h-5">
                      <AvatarFallback className="text-[8px] bg-gradient-to-br from-orange-400 to-pink-500 text-white">
                        {report.owner.initials}
                      </AvatarFallback>
                    </Avatar>
                    <span>{report.owner.name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {report.sharedDate}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {report.views} views
                  </div>
                </div>
              </div>
              <Badge variant={report.access === "Can edit" ? "default" : "secondary"}>{report.access}</Badge>
              <Button variant="outline" size="sm">
                Open
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
