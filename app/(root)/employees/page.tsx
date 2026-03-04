  import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { SiteHeader } from "@/components/sidebar/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/sidebar/sidebar"
import { ClientOnly } from "@/components/ui/client-only"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { IconPlus } from "@tabler/icons-react"

const sidebarFallback = (
  <div className="flex min-h-svh w-full">
    <div
      className="shrink-0 bg-sidebar"
      style={{ width: "calc(var(--spacing) * 72)" }}
    />
    <main className="min-h-svh flex-1 bg-background" />
  </div>
)

const employees = [
  { id: "1", name: "Jordan Lee", email: "jordan.lee@company.com", department: "Engineering", status: "Active" },
  { id: "2", name: "Sam Rivera", email: "sam.rivera@company.com", department: "Sales", status: "Active" },
  { id: "3", name: "Alex Chen", email: "alex.chen@company.com", department: "Operations", status: "Active" },
  { id: "4", name: "Morgan Taylor", email: "morgan.taylor@company.com", department: "HR", status: "Onboarding" },
  { id: "5", name: "Casey Kim", email: "casey.kim@company.com", department: "Finance", status: "Active" },
]

export default function EmployeesPage() {
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
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <div className="flex flex-col gap-4 px-4 lg:px-6">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      All Employees
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      View and manage your team members.
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-muted-foreground text-sm">
                      {employees.length} employees
                    </div>
                    <Button size="sm">
                      <IconPlus className="mr-2 size-4" />
                      Add employee
                    </Button>
                  </div>
                  <div className="rounded-lg border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Department</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="w-[80px]" />
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {employees.map((emp) => (
                          <TableRow key={emp.id}>
                            <TableCell className="font-medium">
                              {emp.name}
                            </TableCell>
                            <TableCell className="text-muted-foreground">
                              {emp.email}
                            </TableCell>
                            <TableCell>{emp.department}</TableCell>
                            <TableCell>{emp.status}</TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm">
                                View
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ClientOnly>
  )
}
