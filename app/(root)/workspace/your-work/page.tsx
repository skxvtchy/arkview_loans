import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { SiteHeader } from "@/components/sidebar/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/sidebar/sidebar"
import { ClientOnly } from "@/components/ui/client-only"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const sidebarFallback = (
  <div className="flex min-h-svh w-full">
    <div
      className="shrink-0 bg-sidebar"
      style={{ width: "calc(var(--spacing) * 72)" }}
    />
    <main className="min-h-svh flex-1 bg-background" />
  </div>
)

const yourWork = [
  { id: "1", title: "Review API spec", project: "API v2", type: "Task", status: "In progress" },
  { id: "2", title: "Design feedback", project: "Platform Redesign", type: "Review", status: "To do" },
  { id: "3", title: "Fix login bug", project: "Mobile App", type: "Bug", status: "In progress" },
]

export default function YourWorkPage() {
  return (
    <ClientOnly fallback={sidebarFallback}>
      <SidebarProvider
        style={
          {
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          } as React.CSSProperties
        }
      >
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-6 py-4 md:gap-8 md:py-6">
                <div className="flex flex-col gap-6 px-4 lg:px-6">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Your work
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      Issues and tasks assigned to you.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          In progress
                        </CardTitle>
                        <CardDescription>2 items</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-muted/50 h-20 rounded-lg" />
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          To do
                        </CardTitle>
                        <CardDescription>1 item</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-muted/50 h-20 rounded-lg" />
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Done this week
                        </CardTitle>
                        <CardDescription>Completed items</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-muted/50 h-20 rounded-lg" />
                      </CardContent>
                    </Card>
                  </div>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">
                        Assigned to you
                      </CardTitle>
                      <CardDescription>Recent issues and tasks</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Project</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {yourWork.map((item) => (
                            <TableRow key={item.id}>
                              <TableCell className="font-medium">
                                {item.title}
                              </TableCell>
                              <TableCell className="text-muted-foreground">
                                {item.project}
                              </TableCell>
                              <TableCell>{item.type}</TableCell>
                              <TableCell>{item.status}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ClientOnly>
  )
}
