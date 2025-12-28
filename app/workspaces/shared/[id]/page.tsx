import DashboardLayout from "@/components/dashboard-layout"
import { WorkspaceItemContent } from "@/components/workspace-item-content"

export default async function WorkspaceItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <DashboardLayout>
      <WorkspaceItemContent id={id} />
    </DashboardLayout>
  )
}
