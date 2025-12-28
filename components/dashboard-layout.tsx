"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ChevronDown,
  Search,
  Plus,
  Star,
  Clock,
  LayoutDashboard,
  Users,
  Target,
  Settings,
  Menu,
  X,
  ChevronRight,
} from "lucide-react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [workspacesExpanded, setWorkspacesExpanded] = useState(true)
  const [sharedExpanded, setSharedExpanded] = useState(false)
  const [reportsExpanded, setReportsExpanded] = useState(true)

  const navItems = [
    { label: "Starred", icon: Star, path: "/starred" },
    { label: "Recent", icon: Clock, path: "/recent" },
    { label: "Sales list", icon: Users, path: "/sales-list" },
    { label: "Goals", icon: Target, path: "/goals" },
    { label: "Dashboard", icon: LayoutDashboard, path: "/" },
  ]

  const reportItems = [
    { label: "Share with me", path: "/reports/shared" },
    { label: "Deals by user", path: "/reports/deals-by-user" },
    { label: "Deal duration", path: "/reports/deal-duration" },
    { label: "My reports", path: "/reports/my-reports" },
    { label: "New report", path: "/reports/new", badge: "7" },
    { label: "Analytics", path: "/reports/analytics" },
  ]

  const sharedWithMeItems = [
    { label: "Cargo2go", path: "/workspaces/shared/cargo2go" },
    { label: "Cloudz3r", path: "/workspaces/shared/cloudz3r", badge: "2" },
    { label: "Idioma", path: "/workspaces/shared/idioma" },
    { label: "Syllables", path: "/workspaces/shared/syllables" },
    { label: "x-0b", path: "/workspaces/shared/x-0b" },
  ]

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card flex flex-col">
        <div className="p-4 border-b border-border flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center text-background font-bold text-sm">
            D
          </div>
          <div className="flex items-center gap-2 flex-1">
            <span className="font-semibold text-sm">Dashboard.com</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.path
            return (
              <button
                key={item.path}
                onClick={() => router.push(item.path)}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
                  isActive ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
                {item.label === "Dashboard" && <Plus className="w-3 h-3 ml-auto" />}
              </button>
            )
          })}

          <div className="pt-4">
            <button
              onClick={() => setWorkspacesExpanded(!workspacesExpanded)}
              className="w-full px-3 py-2 text-xs font-semibold text-muted-foreground flex items-center justify-between hover:text-foreground transition-colors uppercase tracking-wider"
            >
              <span>Workspaces</span>
              {workspacesExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            </button>

            {workspacesExpanded && (
              <div className="mt-1 space-y-1">
                <button
                  onClick={() => router.push("/workspaces/suraj")}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
                    pathname === "/workspaces/suraj"
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  <span className="text-xs">Suraj</span>
                </button>

                <div>
                  <button
                    onClick={() => setSharedExpanded(!sharedExpanded)}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
                      pathname.startsWith("/workspaces/shared")
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    <span className="text-xs">Shared with me</span>
                    {sharedExpanded ? (
                      <ChevronDown className="w-3 h-3 ml-auto" />
                    ) : (
                      <ChevronRight className="w-3 h-3 ml-auto" />
                    )}
                  </button>

                  {sharedExpanded && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-border pl-2">
                      {sharedWithMeItems.map((item) => (
                        <button
                          key={item.path}
                          onClick={() => router.push(item.path)}
                          className={`w-full flex items-center gap-2 px-3 py-2 text-xs rounded-md transition-colors ${
                            pathname === item.path
                              ? "text-primary font-medium bg-primary/5"
                              : "text-muted-foreground hover:bg-secondary/50"
                          }`}
                        >
                          {item.label}
                          {item.badge && (
                            <Badge
                              variant="secondary"
                              className="ml-auto bg-primary/10 text-primary text-[9px] h-3.5 px-1 min-w-[16px] justify-center"
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => router.push("/workspaces/codename")}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
                    pathname === "/workspaces/codename"
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  <span className="text-xs">Dashboard</span>
                </button>
              </div>
            )}
          </div>

          <div className="pt-4">
            <button
              onClick={() => setReportsExpanded(!reportsExpanded)}
              className="w-full px-3 py-2 text-xs font-semibold text-muted-foreground flex items-center justify-between hover:text-foreground transition-colors uppercase tracking-wider"
            >
              <div className="flex items-center gap-2">
                <span>Reports</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    router.push("/reports/new")
                  }}
                  className="hover:bg-secondary rounded p-0.5 transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
                {reportsExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
              </div>
            </button>

            {reportsExpanded && (
              <div className="mt-1 space-y-1">
                {reportItems.map((item) => {
                  const isActive = pathname === item.path
                  const isNewReport = item.label === "New report"
                  return (
                    <button
                      key={item.path}
                      onClick={() => router.push(item.path)}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
                        isNewReport
                          ? "bg-primary text-primary-foreground font-medium"
                          : isActive
                            ? "bg-secondary"
                            : "text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      <span className="text-xs">{item.label}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="ml-auto bg-white/20 text-white text-[10px] h-4 px-1">
                          {item.badge}
                        </Badge>
                      )}
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        </nav>

        <div className="p-3 border-t border-border space-y-2">
          <button
            onClick={() => router.push("/settings")}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-secondary rounded-lg transition-colors"
          >
            <Settings className="w-4 h-4" />
          </button>
          <div className="px-3 py-2 text-xs text-muted-foreground">
            Made by <span className="font-semibold text-foreground">Suraj Thoke</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="border-b border-border bg-card sticky top-0 z-10">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder='Try searching "insights"'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                    <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                  </button>
                )}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <Menu className="w-5 h-5" />
              </Button>
              <button onClick={() => router.push("/profile")}>
                <Avatar className="w-8 h-8 cursor-pointer hover:ring-2 hover:ring-ring transition-all">
                  <AvatarFallback className="bg-gradient-to-br from-orange-400 to-pink-500 text-white text-xs">
                    ST
                  </AvatarFallback>
                </Avatar>
              </button>
              <Button
                size="icon"
                className="rounded-full bg-primary hover:bg-primary/90"
                onClick={() => router.push("/new")}
              >
                <Plus className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </header>

        {children}
      </main>
    </div>
  )
}
