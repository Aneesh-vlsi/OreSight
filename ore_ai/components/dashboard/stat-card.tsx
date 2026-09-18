import type { LucideIcon } from "lucide-react"
import { TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function StatCard({
  label,
  value,
  unit,
  delta,
  icon: Icon,
  hint,
}: {
  label: string
  value: string
  unit?: string
  delta?: { value: string; positive: boolean }
  icon: LucideIcon
  hint?: string
}) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-3 p-5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">
            {label}
          </span>
          <span className="flex size-9 items-center justify-center rounded-lg bg-secondary text-primary">
            <Icon className="size-4.5" />
          </span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display text-3xl font-bold tracking-tight">
            {value}
          </span>
          {unit && (
            <span className="text-sm font-medium text-muted-foreground">
              {unit}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 text-xs">
          {delta && (
            <span
              className={cn(
                "inline-flex items-center gap-1 font-medium",
                delta.positive ? "text-chart-1" : "text-destructive",
              )}
            >
              {delta.positive ? (
                <TrendingUp className="size-3.5" />
              ) : (
                <TrendingDown className="size-3.5" />
              )}
              {delta.value}
            </span>
          )}
          {hint && <span className="text-muted-foreground">{hint}</span>}
        </div>
      </CardContent>
    </Card>
  )
}
