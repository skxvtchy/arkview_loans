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
import { Button } from "@/components/ui/button"

const sidebarFallback = (
  <div className="flex min-h-svh w-full">
    <div
      className="shrink-0 bg-sidebar"
      style={{ width: "calc(var(--spacing) * 72)" }}
    />
    <main className="min-h-svh flex-1 bg-background" />
  </div>
)

export default function SettingsPermissionsPage() {
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
                      Permissions
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      Manage roles and access for your team.
                    </p>
                  </div>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Team roles</CardTitle>
                        <CardDescription>
                          View and edit role-based access
                        </CardDescription>
                      </div>
                      <Button size="sm">Add role</Button>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted/50 rounded-lg border p-6 text-center text-sm text-muted-foreground">
                        Admin, Editor, and Viewer roles. Configure in the table below.
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Access by resource</CardTitle>
                      <CardDescription>
                        Permissions per project and workspace
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted/50 h-48 rounded-lg" />
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
