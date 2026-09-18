import { Satellite } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export function DashboardHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <header className="sticky top-0 z-10 flex flex-col gap-3 border-b border-border bg-background/90 px-4 py-3 backdrop-blur-md sm:px-6">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-1 h-5" />
        <div className="flex flex-1 flex-wrap items-center justify-between gap-2">
          <div>
            <h1 className="font-display text-lg font-bold leading-tight">
              {title}
            </h1>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <Badge variant="secondary" className="gap-1.5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            <Satellite className="size-3.5" />
            Last pass 14 Nov 2025
          </Badge>
        </div>
      </div>
    </header>
  )
}
