"use client"

import { Cell, Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { gradeDistribution, totalReserveMt } from "@/lib/mock-data"

const config = {
  reserve: { label: "Reserve (Mt)" },
} satisfies ChartConfig

export function GradeDistributionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reserves by ore grade</CardTitle>
        <CardDescription>Estimated tonnage per Mn grade band</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <ChartContainer config={config} className="mx-auto aspect-square max-h-[200px] w-full">
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="band" hideLabel />}
            />
            <Pie
              data={gradeDistribution}
              dataKey="reserve"
              nameKey="band"
              innerRadius={52}
              outerRadius={82}
              paddingAngle={2}
              strokeWidth={2}
            >
              {gradeDistribution.map((d) => (
                <Cell key={d.band} fill={d.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="flex flex-col gap-2">
          {gradeDistribution.map((d) => (
            <div key={d.band} className="flex items-center gap-2 text-sm">
              <span
                className="size-2.5 shrink-0 rounded-sm"
                style={{ background: d.fill }}
              />
              <span className="flex-1 text-muted-foreground">{d.band}</span>
              <span className="font-medium tabular-nums">{d.reserve} Mt</span>
            </div>
          ))}
          <div className="mt-1 flex items-center justify-between border-t border-border pt-2 text-sm font-semibold">
            <span>Total estimated</span>
            <span className="tabular-nums">{totalReserveMt.toFixed(1)} Mt</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
