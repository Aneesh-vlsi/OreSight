"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
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
import { productionByMine } from "@/lib/mock-data"

const config = {
  balaghat: { label: "Balaghat", color: "var(--chart-1)" },
  dongriBuzurg: { label: "Dongri Buzurg", color: "var(--chart-2)" },
  ukwa: { label: "Ukwa", color: "var(--chart-3)" },
  chikla: { label: "Chikla", color: "var(--chart-4)" },
  gumgaon: { label: "Gumgaon", color: "var(--chart-5)" },
} satisfies ChartConfig

export function ProductionBreakdownChart() {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Quarterly output by mine</CardTitle>
        <CardDescription>Ore extracted per site (kt)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config} className="aspect-[16/8] w-full">
          <BarChart data={productionByMine} margin={{ left: 4, right: 8, top: 8 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="quarter"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={38}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="balaghat" stackId="a" fill="var(--color-balaghat)" />
            <Bar dataKey="dongriBuzurg" stackId="a" fill="var(--color-dongriBuzurg)" />
            <Bar dataKey="ukwa" stackId="a" fill="var(--color-ukwa)" />
            <Bar dataKey="chikla" stackId="a" fill="var(--color-chikla)" />
            <Bar
              dataKey="gumgaon"
              stackId="a"
              fill="var(--color-gumgaon)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
