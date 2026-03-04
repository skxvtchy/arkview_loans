import { notFound } from "next/navigation"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { SiteHeader } from "@/components/sidebar/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/sidebar/sidebar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ClientOnly } from "@/components/ui/client-only"
import { getProjectById } from "../data"

const sidebarFallback = (
  <div className="flex min-h-svh w-full">
    <div
      className="shrink-0 bg-sidebar"
      style={{ width: "calc(var(--spacing) * 72)" }}
    />
    <main className="min-h-svh flex-1 bg-background" />
  </div>
)

type Props = { params: Promise<{ id: string }> }

export default async function ProjectPage({ params }: Props) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  const isActive = project.status === "Active"

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
                  <Card>
                    <CardHeader className="pb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono rounded bg-muted px-2 py-0.5 text-sm font-medium text-muted-foreground">
                          {project.key}
                        </span>
                        <Badge variant={isActive ? "default" : "secondary"}>
                          {project.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl tracking-tight">
                        {project.name}
                      </CardTitle>
                      <CardDescription>
                        Project ID: {project.id}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Separator className="mb-6" />
                      <dl className="grid gap-4 sm:grid-cols-2">
                        <div className="flex flex-col gap-1 rounded-lg border bg-muted/30 p-4">
                          <dt className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
                            Lead
                          </dt>
                          <dd className="font-medium">{project.lead}</dd>
                        </div>
                        <div className="flex flex-col gap-1 rounded-lg border bg-muted/30 p-4">
                          <dt className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
                            Open issues
                          </dt>
                          <dd className="font-medium">{project.issues}</dd>
                        </div>
                      </dl>
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
