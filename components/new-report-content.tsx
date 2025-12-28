"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, BarChart, PieChart, LineChartIcon, Table, Layout } from "lucide-react"

const reportTemplates = [
  {
    id: 1,
    name: "Blank Report",
    description: "Start from scratch",
    icon: FileText,
    color: "bg-gray-100 text-gray-700",
  },
  {
    id: 2,
    name: "Sales Report",
    description: "Track sales performance",
    icon: BarChart,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 3,
    name: "Analytics Report",
    description: "Detailed analytics",
    icon: LineChartIcon,
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: 4,
    name: "Financial Report",
    description: "Financial overview",
    icon: PieChart,
    color: "bg-green-100 text-green-700",
  },
  {
    id: 5,
    name: "Data Table Report",
    description: "Tabular data display",
    icon: Table,
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: 6,
    name: "Dashboard Report",
    description: "Multi-widget dashboard",
    icon: Layout,
    color: "bg-pink-100 text-pink-700",
  },
]

export default function NewReportContent() {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null)

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-foreground">Create New Report</h1>
        <p className="text-sm text-muted-foreground mt-1">Choose a template to get started</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {reportTemplates.map((template) => {
          const Icon = template.icon
          return (
            <Card
              key={template.id}
              className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                selectedTemplate === template.id ? "ring-2 ring-primary border-primary" : "hover:border-primary"
              }`}
              onClick={() => setSelectedTemplate(template.id)}
            >
              <div className="space-y-4">
                <div className={`w-16 h-16 rounded-lg ${template.color} flex items-center justify-center mx-auto`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-1">{template.name}</h3>
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {selectedTemplate && (
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => setSelectedTemplate(null)}>
            Cancel
          </Button>
          <Button>Create Report</Button>
        </div>
      )}
    </div>
  )
}
