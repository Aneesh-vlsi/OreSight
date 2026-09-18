import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { demandVsSupply } from "@/lib/mock-data"

export function ShortfallCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Demand vs. supply</CardTitle>
        <CardDescription>
          Domestic ferro-alloy demand coverage (Mt/yr)
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {demandVsSupply.map((d) => {
          const coverage = Math.round((d.supply / d.demand) * 100)
          return (
            <div key={d.year} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{d.year}</span>
                <span className="text-muted-foreground tabular-nums">
                  {d.supply} / {d.demand} Mt &middot;{" "}
                  <span className="font-medium text-foreground">
                    {coverage}%
                  </span>
                </span>
              </div>
              <Progress value={coverage} className="h-2" />
            </div>
          )
        })}
        <p className="mt-1 rounded-md bg-secondary/60 p-3 text-xs leading-relaxed text-muted-foreground">
          OreSight forecasts a persistent supply gap without capacity
          expansion. Highlighted sites are prioritized for deeper survey to
          close the shortfall.
        </p>
      </CardContent>
    </Card>
  )
}
