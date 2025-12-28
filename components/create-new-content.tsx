"use client"

import { Card } from "@/components/ui/card"
import { FileText, BarChart, Target, Folder, Users, Calendar } from "lucide-react"
import { useRouter } from "next/navigation"

const createOptions = [
  {
    id: 1,
    name: "New Report",
    description: "Create a detailed report",
    icon: FileText,
    path: "/reports/new",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    name: "New Dashboard",
    description: "Build a custom dashboard",
    icon: BarChart,
    path: "/",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: 3,
    name: "New Goal",
    description: "Set team or personal goals",
    icon: Target,
    path: "/goals",
    color: "bg-green-100 text-green-700",
  },
  {
    id: 4,
    name: "New Workspace",
    description: "Create a team workspace",
    icon: Folder,
    path: "/workspaces/suraj",
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: 5,
    name: "New Team",
    description: "Set up a new team",
    icon: Users,
    path: "/",
    color: "bg-pink-100 text-pink-700",
  },
  {
    id: 6,
    name: "New Event",
    description: "Schedule a meeting or event",
    icon: Calendar,
    path: "/",
    color: "bg-indigo-100 text-indigo-700",
  },
]

export default function CreateNewContent() {
  const router = useRouter()

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-foreground">Create New</h1>
        <p className="text-sm text-muted-foreground mt-1">Choose what you want to create</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {createOptions.map((option) => {
          const Icon = option.icon
          return (
            <Card
              key={option.id}
              className="p-6 cursor-pointer transition-all hover:shadow-lg hover:border-primary"
              onClick={() => router.push(option.path)}
            >
              <div className="space-y-4">
                <div className={`w-16 h-16 rounded-lg ${option.color} flex items-center justify-center`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{option.name}</h3>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
