"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Plus, Grid, List, Star, Calendar, TrendingUp } from "lucide-react"

const myReports = [
  {
    id: 1,
    name: "Q4 Sales Analysis",
    created: "2 days ago",
    lastModified: "1 hour ago",
    status: "Published",
    views: 156,
  },
  {
    id: 2,
    name: "Customer Retention Study",
    created: "1 week ago",
    lastModified: "3 days ago",
    status: "Draft",
    views: 0,
  },
  {
    id: 3,
    name: "Revenue Forecasting",
    created: "2 weeks ago",
    lastModified: "5 days ago",
    status: "Published",
    views: 234,
  },
  {
    id: 4,
    name: "Market Analysis Report",
    created: "3 weeks ago",
    lastModified: "1 week ago",
    status: "Published",
    views: 89,
  },
]

export default function MyReportsContent() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">My Reports</h1>
          <p className="text-sm text-muted-foreground mt-1">Reports created and owned by you</p>
        </div>
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
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Total Reports</div>
            <div className="text-2xl font-bold">{myReports.length}</div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Published</div>
            <div className="text-2xl font-bold">{myReports.filter((r) => r.status === "Published").length}</div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Total Views</div>
            <div className="text-2xl font-bold">{myReports.reduce((sum, r) => sum + r.views, 0)}</div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="space-y-1">
            <div className="text-xs text-muted-foreground">Avg Views</div>
            <div className="text-2xl font-bold">
              {Math.round(myReports.reduce((sum, r) => sum + r.views, 0) / myReports.length)}
            </div>
          </div>
        </Card>
      </div>

      {viewMode === "list" ? (
        <div className="space-y-2">
          {myReports.map((report) => (
            <Card key={report.id} className="p-4 cursor-pointer hover:shadow-lg hover:border-primary transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{report.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                    <span>Created {report.created}</span>
                    <span>Modified {report.lastModified}</span>
                  </div>
                </div>
                <Badge variant={report.status === "Published" ? "default" : "secondary"}>{report.status}</Badge>
                <div className="text-sm text-muted-foreground">{report.views} views</div>
                <Star className="w-4 h-4 text-muted-foreground hover:text-yellow-500 transition-colors" />
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {myReports.map((report) => (
            <Card key={report.id} className="p-5 cursor-pointer hover:shadow-lg hover:border-primary transition-all">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                  <Star className="w-4 h-4 text-muted-foreground hover:text-yellow-500 transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{report.name}</h3>
                  <Badge variant={report.status === "Published" ? "default" : "secondary"} className="mb-3">
                    {report.status}
                  </Badge>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Created {report.created}
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {report.views} views
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
