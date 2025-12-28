"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MoreHorizontal, Share2, Star, Clock, FileText } from "lucide-react"

export function WorkspaceItemContent({ id }: { id: string }) {
  const title = id.charAt(0).toUpperCase() + id.slice(1).replace("-", " ")

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
            <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
              Shared Workspace
            </Badge>
          </div>
          <p className="text-muted-foreground">Manage your collaborative work and data in {title}.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Star className="w-4 h-4" />
            Star
          </Button>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Share2 className="w-4 h-4" />
            Share
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Open Editor
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:border-primary/50 transition-colors cursor-pointer group">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Recent Documents</CardTitle>
            <Clock className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-1">Updated 2 hours ago</p>
          </CardContent>
        </Card>
        <Card className="hover:border-primary/50 transition-colors cursor-pointer group">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
            <Share2 className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground mt-1">4 active now</p>
          </CardContent>
        </Card>
        <Card className="hover:border-primary/50 transition-colors cursor-pointer group">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Active Tasks</CardTitle>
            <FileText className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground mt-1">5 due this week</p>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-xl border border-border bg-card">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h3 className="font-semibold">Recent Activity</h3>
          <Button variant="ghost" size="sm">
            View all
          </Button>
        </div>
        <div className="divide-y divide-border">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">Weekly Update Report - Week {i}</p>
                  <p className="text-xs text-muted-foreground">Modified by Suraj Thoke • 2 hours ago</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
