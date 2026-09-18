import { CheckCircle2 } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { modelMetrics, explorationTargets } from "@/lib/mock-data"

export function ModelPerformanceCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Model performance</CardTitle>
        <CardDescription>Ensemble estimator, latest validation run</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {modelMetrics.map((m) => (
          <div key={m.label} className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{m.label}</span>
              <span className="tabular-nums text-muted-foreground">
                {m.value}
                {m.suffix}
              </span>
            </div>
            <Progress value={m.pct} className="h-1.5" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export function ExplorationTargetsCard() {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Priority exploration targets</CardTitle>
        <CardDescription>
          AI-ranked prospects by prospectivity score and expected tonnage
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {explorationTargets.map((t) => (
          <div
            key={t.id}
            className="flex flex-col gap-3 rounded-lg border border-border p-4 sm:flex-row sm:items-center"
          >
            <div className="flex flex-1 flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="font-display font-semibold">{t.name}</span>
                {t.recommended && (
                  <Badge variant="secondary" className="gap-1">
                    <CheckCircle2 className="size-3" />
                    Recommended
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{t.rationale}</p>
            </div>
            <div className="flex items-center gap-6 sm:gap-8">
              <div className="min-w-20">
                <div className="text-xs text-muted-foreground">Expected</div>
                <div className="font-display text-lg font-bold tabular-nums">
                  {t.expectedMt} Mt
                </div>
              </div>
              <div className="min-w-28">
                <div className="mb-1 flex items-center justify-between gap-2 text-xs text-muted-foreground">
                  <span>Prospectivity</span>
                  <span className="font-medium text-foreground tabular-nums">
                    {t.score}
                  </span>
                </div>
                <Progress value={t.score} className="h-1.5" />
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
