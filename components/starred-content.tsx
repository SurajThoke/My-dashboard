"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Search, Filter, MoreVertical, LayoutGrid, List, FileText, Users, PieChart, Target } from "lucide-react"

const starredItems = [
  { id: 1, type: "report", title: "Q3 Sales Revenue", date: "Oct 12, 2023", owner: "Suraj", category: "Revenue" },
  { id: 2, type: "workspace", title: "Suraj Workspace", date: "Sep 28, 2023", owner: "Suraj", category: "Personal" },
  {
    id: 3,
    type: "report",
    title: "Team Performance Analytics",
    date: "Oct 05, 2023",
    owner: "Admin",
    category: "Team",
  },
  { id: 4, type: "goal", title: "Annual Revenue Target", date: "Aug 15, 2023", owner: "Suraj", category: "Goals" },
]

export default function StarredContent() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredItems = starredItems.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))

  const getIcon = (type: string) => {
    switch (type) {
      case "report":
        return <PieChart className="w-5 h-5 text-blue-500" />
      case "workspace":
        return <Users className="w-5 h-5 text-purple-500" />
      case "goal":
        return <Target className="w-5 h-5 text-green-500" />
      default:
        return <FileText className="w-5 h-5 text-muted-foreground" />
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Starred</h1>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setViewMode("grid")}
            className={viewMode === "grid" ? "bg-secondary" : ""}
          >
            <LayoutGrid className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setViewMode("list")}
            className={viewMode === "list" ? "bg-secondary" : ""}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search starred items..."
            className="w-full pl-10 pr-4 py-2 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="gap-2 bg-transparent">
          <Filter className="w-4 h-4" />
          Filters
        </Button>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="p-4 hover:shadow-lg transition-all group relative cursor-pointer border-border/50"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-secondary rounded-lg">{getIcon(item.type)}</div>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                </Button>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold truncate">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.category}</p>
              </div>
              <div className="mt-4 flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <Avatar className="w-5 h-5">
                    <AvatarFallback className="text-[8px] bg-primary text-primary-foreground">
                      {item.owner[0]}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-[10px] text-muted-foreground">{item.owner}</span>
                </div>
                <span className="text-[10px] text-muted-foreground">{item.date}</span>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="divide-y divide-border">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-4 flex items-center gap-4 hover:bg-secondary/30 transition-colors group cursor-pointer"
            >
              <div className="p-2 bg-secondary rounded-lg">{getIcon(item.type)}</div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold truncate">{item.title}</h3>
                <p className="text-xs text-muted-foreground">
                  {item.category} • Created by {item.owner}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-muted-foreground hidden sm:block">{item.date}</span>
                <Button variant="ghost" size="icon" className="text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </Card>
      )}

      {filteredItems.length === 0 && (
        <div className="text-center py-20 bg-secondary/20 rounded-xl border border-dashed border-border">
          <Star className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
          <h3 className="text-lg font-medium">No starred items found</h3>
          <p className="text-sm text-muted-foreground">Try adjusting your search or add new favorites.</p>
        </div>
      )}
    </div>
  )
}
