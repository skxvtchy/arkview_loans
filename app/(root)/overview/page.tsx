import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { ChartAreaInteractive } from "@/components/dashboard/chart-area-interactive"
import { Documents } from "@/components/dashboard/documents"
import { Profile } from "@/components/dashboard/profile"
import { Contact } from "@/components/dashboard/contact"
import { Progress } from "@/components/dashboard/progress"
import { SignOutButton } from "@/components/dashboard/sign-out-button"
import { DataTable } from "@/components/dashboard/data-table"
import { SectionCards } from "@/components/dashboard/section-cards"
import Link from "next/link"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/sidebar/sidebar"
import { ClientOnly } from "@/components/ui/client-only"

import data from "./data.json"

const sidebarFallback = (
  <div className="flex min-h-svh w-full">
    <div
      className="shrink-0 bg-sidebar"
      style={{ width: "calc(var(--spacing) * 72)" }}
    />
    <main className="min-h-svh flex-1 bg-background" />
  </div>
)

export default function OverviewPage() {
  return (
    <ClientOnly fallback={sidebarFallback}>
      <div className="flex flex-1 flex-col">
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-zinc-200/80 bg-white/20 px-6 backdrop-blur-md">
          <Link href="/overview" className="text-xl font-bold tracking-tighter text-zinc-900">
            ARKVIEW
          </Link>
          <SignOutButton />
        </header>
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 pt-4 md:gap-6 md:pt-6">
            <SectionCards />
            <div className="flex flex-col gap-4 px-4 lg:px-6 sm:flex-row">
              <div className="flex min-w-0 flex-[2] flex-col gap-4">
                <Progress currentStep="Under review" />
                <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 flex-1">
                  <Profile />
                  <Contact />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <Documents />
              </div>
            </div>
            {/* <DataTable data={data} /> */}
          </div>
        </div>
      </div>
    </ClientOnly>
  )
}
