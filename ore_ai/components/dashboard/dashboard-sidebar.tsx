"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Satellite,
  Mountain,
  BrainCircuit,
  ArrowUpRight,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { OreSightLogo } from "@/components/oresight-logo"

const items = [
  { title: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { title: "Satellite & Reserves", href: "/dashboard/reserves", icon: Satellite },
  { title: "Production", href: "/dashboard/production", icon: Mountain },
  { title: "AI Predictions", href: "/dashboard/predictions", icon: BrainCircuit },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex h-12 items-center px-2">
          <Link href="/" aria-label="OreSight AI home">
            <OreSightLogo />
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Analytics</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const active =
                  item.href === "/dashboard"
                    ? pathname === "/dashboard"
                    : pathname.startsWith(item.href)
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      nativeButton={false}
                      render={<Link href={item.href} />}
                      isActive={active}
                      tooltip={item.title}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              nativeButton={false}
              render={<Link href="/" />}
              tooltip="Back to site"
            >
              <ArrowUpRight />
              <span>Back to site</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
