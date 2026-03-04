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

export default function SettingsBillingPage() {
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
                      Billing
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      Manage your plan and payment method.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                          <CardTitle>Current plan</CardTitle>
                          <CardDescription>
                            Your subscription and usage
                          </CardDescription>
                        </div>
                        <Button size="sm" variant="outline">
                          Upgrade
                        </Button>
                      </CardHeader>
                      <CardContent>
                        <div className="rounded-lg border bg-muted/30 p-4">
                          <p className="font-medium">Pro</p>
                          <p className="text-muted-foreground text-sm">
                            Renews on the 1st of each month
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                          <CardTitle>Payment method</CardTitle>
                          <CardDescription>
                            Card on file
                          </CardDescription>
                        </div>
                        <Button size="sm" variant="outline">
                          Update
                        </Button>
                      </CardHeader>
                      <CardContent>
                        <div className="rounded-lg border bg-muted/30 p-4">
                          <p className="font-medium">•••• •••• •••• 4242</p>
                          <p className="text-muted-foreground text-sm">
                            Expires 12/25
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Billing history</CardTitle>
                      <CardDescription>
                        Invoices and receipts
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted/50 h-40 rounded-lg" />
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
