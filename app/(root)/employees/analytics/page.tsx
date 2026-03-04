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

const sidebarFallback = (
  <div className="flex min-h-svh w-full">
    <div
      className="shrink-0 bg-sidebar"
      style={{ width: "calc(var(--spacing) * 72)" }}
    />
    <main className="min-h-svh flex-1 bg-background" />
  </div>
)

export default function EmployeesAnalyticsPage() {
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
                      Employee Analytics
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      Metrics and insights for your team and workforce.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Headcount
                        </CardTitle>
                        <CardDescription>
                          Total and by department
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-muted/50 h-32 rounded-lg" />
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Turnover & retention
                        </CardTitle>
                        <CardDescription>
                          Churn and retention rates
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-muted/50 h-32 rounded-lg" />
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          Onboarding
                        </CardTitle>
                        <CardDescription>
                          New hire progress and time-to-productivity
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-muted/50 h-32 rounded-lg" />
                      </CardContent>
                    </Card>
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
