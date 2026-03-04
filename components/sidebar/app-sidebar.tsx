"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import {
  AudioWaveform,
  BarChart3,
  BookOpen,
  Bot,
  Command,
  CreditCard,
  Frame,
  GalleryVerticalEnd,
  LayoutGrid,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/sidebar/nav-main"
import { NavSettings } from "@/components/sidebar/nav-settings"
import { NavUser } from "@/components/sidebar/nav-user"
import { TeamSwitcher } from "@/components/sidebar/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/sidebar/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "/overview",
      icon: SquareTerminal,
    },
    {
      title: "Employees",
      url: "/employees",
      icon: Bot,
      items: [
        { title: "All Employees", url: "/employees" },
        { title: "Analytics", url: "/employees/analytics" },
      ],
    },
    // {
    //   title: "Payroll",
    //   url: "/payroll",
    //   icon: PieChart,
    //   items: [
    //     { title: "Run Payroll", url: "/payroll/run" },
    //     { title: "Scheduled Payrolls", url: "/payroll/scheduled" },
    //     { title: "Pay History", url: "/payroll/history" },
    //     { title: "Bonuses & Reimbursements", url: "/payroll/adjustments" },
    //   ],
    // },
    // {
    //   title: "Taxes",
    //   url: "/taxes",
    //   icon: Settings2,
    //   items: [
    //     { title: "Payroll Taxes", url: "/taxes/payroll" },
    //     { title: "Federal Filings (941, 940)", url: "/taxes/federal" },
    //     { title: "State Filings", url: "/taxes/state" },
    //     { title: "W-2 & 1099 Forms", url: "/taxes/forms" },
    //     { title: "Tax Payments", url: "/taxes/payments" },
    //   ],
    // },
    {
      title: "Workspace",
      url: "/workspace",
      icon: BookOpen,
      items: [
        { title: "All projects", url: "/workspace/projects" },
          { title: "Your Work", url: "/workspace/your-work" },
          { title: "Performance", url: "/workspace/performance" },
      ],
    },
    {
      title: "Projects",
      url: "/projects",
      icon: LayoutGrid,
      items: [
        { title: "Project 1", url: "/projects/id123" },
        { title: "Project 2", url: "/projects/id124" },
        { title: "Project 3", url: "/projects/id125" },
        { title: "Project 4", url: "/projects/id126" },
        { title: "Project 5", url: "/projects/id127" },
        { title: "Project 6", url: "/projects/id128" },
        { title: "Project 7", url: "/projects/id129" },
      ],
      isActive: true,
    },
    // {
    //   title: "Settings",
    //   url: "/settings",
    //   icon: Frame,
    //   items: [
    //     { title: "Company Profile", url: "/settings/company" },
    //     { title: "Bank Accounts", url: "/settings/bank-accounts" },
    //     { title: "Pay Schedules", url: "/settings/pay-schedules" },
    //     { title: "Permissions", url: "/settings/permissions" },
    //     { title: "Integrations", url: "/settings/integrations" },
    //   ],
    // },
  ],
  settings: [
    {
      name: "Permissions",
      url: "/settings/permissions",
      icon: Settings2,
    },
    {
      name: "Billing",
      url: "/settings/billing",
      icon: CreditCard,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname() ?? "/"

  const navMain = React.useMemo(
    () =>
      data.navMain.map((item) => {
        const isActive =
          pathname === item.url || pathname.startsWith(item.url + "/")
        return { ...item, isActive }
      }),
    [pathname]
  )

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavSettings settings={data.settings} />
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
