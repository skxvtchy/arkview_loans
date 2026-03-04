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
import Link from "next/link"
import { projects } from "./data"

const sidebarFallback = (
  <div className="flex min-h-svh w-full">
    <div
      className="shrink-0 bg-sidebar"
      style={{ width: "calc(var(--spacing) * 72)" }}
    />
    <main className="min-h-svh flex-1 bg-background" />
  </div>
)

export default function ProjectsPage() {
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
                      All projects
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      View and manage your team projects.
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-muted-foreground text-sm">
                      {projects.length} projects
                    </div>
                    <Button size="sm">
                      <IconPlus className="mr-2 size-4" />
                      Create project
                    </Button>
                  </div>
                  <div className="rounded-lg border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Key</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead>Lead</TableHead>
                          <TableHead>Issues</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="w-[80px]" />
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {projects.map((proj) => (
                          <TableRow key={proj.id}>
                            <TableCell className="font-mono font-medium">
                              {proj.key}
                            </TableCell>
                            <TableCell className="font-medium">
                              <Link
                                href={`/projects/${proj.id}`}
                                className="hover:underline"
                              >
                                {proj.name}
                              </Link>
                            </TableCell>
                            <TableCell className="text-muted-foreground">
                              {proj.lead}
                            </TableCell>
                            <TableCell>{proj.issues}</TableCell>
                            <TableCell>{proj.status}</TableCell>
                            <TableCell>
                              <Button variant="ghost" size="sm" asChild>
                                <Link href={`/projects/${proj.id}`}>
                                  Open
                                </Link>
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
