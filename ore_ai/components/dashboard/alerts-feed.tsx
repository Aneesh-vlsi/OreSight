import { AlertTriangle, Info, AlertCircle } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { alerts, type AlertLevel } from "@/lib/mock-data"

const levelMap: Record<
  AlertLevel,
  { icon: typeof Info; className: string; label: string }
> = {
  critical: { icon: AlertCircle, className: "text-destructive", label: "Critical" },
  warning: { icon: AlertTriangle, className: "text-chart-4", label: "Warning" },
  info: { icon: Info, className: "text-chart-2", label: "Info" },
}

export function AlertsFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shortfall & signal alerts</CardTitle>
        <CardDescription>Model-generated notifications</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        {alerts.map((a) => {
          const { icon: Icon, className, label } = levelMap[a.level]
          return (
            <div
              key={a.id}
              className="flex gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-secondary/60"
            >
              <Icon className={cn("mt-0.5 size-4 shrink-0", className)} />
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span>{a.mine}</span>
                  <span className="text-xs text-muted-foreground">&middot;</span>
                  <span className={cn("text-xs font-medium", className)}>
                    {label}
                  </span>
                </div>
                <p className="text-sm leading-snug text-muted-foreground">
                  {a.message}
                </p>
                <span className="text-xs text-muted-foreground/70">{a.time}</span>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
