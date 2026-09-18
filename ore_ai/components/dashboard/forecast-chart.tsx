"use client"

import { Area, AreaChart, CartesianGrid, Line, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { reserveForecast } from "@/lib/mock-data"

const config = {
  estimate: { label: "Estimate", color: "var(--chart-1)" },
  span: { label: "90% confidence band", color: "var(--chart-2)" },
} satisfies ChartConfig

export function ForecastChart() {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Reserve depletion forecast</CardTitle>
        <CardDescription>
          Projected recoverable reserves with 90% confidence interval (Mt)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config} className="aspect-[16/8] w-full">
          <AreaChart data={reserveForecast} margin={{ left: 4, right: 8, top: 8 }}>
            <defs>
              <linearGradient id="fillBand" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-span)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--color-span)" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={34}
              domain={[0, 60]}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Area
              dataKey="lower"
              type="monotone"
              stackId="band"
              stroke="none"
              fill="transparent"
              activeDot={false}
              legendType="none"
              tooltipType="none"
            />
            <Area
              dataKey="span"
              type="monotone"
              stackId="band"
              stroke="none"
              fill="url(#fillBand)"
            />
            <Line
              dataKey="estimate"
              type="monotone"
              stroke="var(--color-estimate)"
              strokeWidth={2.5}
              dot={false}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
