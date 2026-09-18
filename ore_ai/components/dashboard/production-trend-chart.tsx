"use client"

import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
} from "recharts"
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
import { productionTrend } from "@/lib/mock-data"

const config = {
  actual: { label: "Actual", color: "var(--chart-1)" },
  forecast: { label: "AI forecast", color: "var(--chart-2)" },
  target: { label: "Target", color: "var(--chart-4)" },
} satisfies ChartConfig

export function ProductionTrendChart() {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Production vs. AI forecast</CardTitle>
        <CardDescription>
          Monthly output across all operational mines (kt) &middot; FY 2025&ndash;26
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config} className="aspect-[16/7] w-full">
          <AreaChart data={productionTrend} margin={{ left: 4, right: 8, top: 8 }}>
            <defs>
              <linearGradient id="fillActual" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-actual)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--color-actual)" stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="fillForecast" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-forecast)" stopOpacity={0.25} />
                <stop offset="95%" stopColor="var(--color-forecast)" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={34}
              domain={[100, 170]}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Area
              dataKey="forecast"
              type="monotone"
              fill="url(#fillForecast)"
              stroke="var(--color-forecast)"
              strokeWidth={2}
              strokeDasharray="5 4"
            />
            <Area
              dataKey="actual"
              type="monotone"
              fill="url(#fillActual)"
              stroke="var(--color-actual)"
              strokeWidth={2.5}
              connectNulls={false}
            />
            <Line
              dataKey="target"
              type="monotone"
              stroke="var(--color-target)"
              strokeWidth={1.5}
              dot={false}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
