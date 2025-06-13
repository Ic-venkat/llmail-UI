"use client"

import * as React from "react"
import {
  IconDatabase,
  IconFileWord,
  IconHelp,
  IconReport,
  IconSearch,
  IconSettings,
  IconMelon,
  IconClipboardList,
  IconActivityHeartbeat,
  IconRadar,
  IconMessageChatbot,
  IconScale,
  IconBookmark,
  IconCpu,
  IconBell,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"



const data = {
  navMain: [
    {
      name: "Application Tracker",
      title: "Application Tracker",
      url: "#",
      icon: IconClipboardList,
    },
    {
      name: "Status & Updates",
      title: "Status & Updates",
      url: "#",
      icon: IconActivityHeartbeat,
    },
    {
      name: "Recruiter Radar",
      title: "Recruiter Radar",
      url: "#",
      icon: IconRadar,
    },
    {
      name: "Smart Outreach",
      title: "Smart Outreach",
      url: "#",
      icon: IconMessageChatbot,
    },
  ],

  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Job Feed",
      url: "#",
      icon: IconSearch,
    },
    {
      name: "Resume Builder",
      url: "#",
      icon: IconFileWord,
    },
    {
      name: "Compare (Beta)",
      url: "#",
      icon: IconScale,
    },
    {
      name: "Saved Jobs",
      url: "#",
      icon: IconBookmark,
    },
    {
      name: "AI Role Matcher",
      url: "#",
      icon: IconCpu,
    },
    {
      name: "Smart Job Alerts",
      url: "#",
      icon: IconBell,
    },
    {
      name: "Interview Prep AI",
      url: "#",
      icon: IconMessageChatbot,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/dashboard">
                <IconMelon className="!size-5" />
                <span className="text-base font-semibold">melone.ai</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
