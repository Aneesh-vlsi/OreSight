"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
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
import { spectralTrend } from "@/lib/mock-data"

const config = {
  ferricIndex: { label: "Ferric (Fe-oxide)", color: "var(--chart-4)" },
  clayIndex: { label: "Clay alteration", color: "var(--chart-2)" },
  vegetation: { label: "Vegetation (NDVI)", color: "var(--chart-1)" },
} satisfies ChartConfig

export function SpectralChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Spectral index trends</CardTitle>
        <CardDescription>
          Satellite-derived alteration signals, 2019&ndash;2025 (normalized)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config} className="aspect-[16/9] w-full">
          <LineChart data={spectralTrend} margin={{ left: 4, right: 8, top: 8 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="period"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={34}
              domain={[0, 1]}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Line
              dataKey="ferricIndex"
              type="monotone"
              stroke="var(--color-ferricIndex)"
              strokeWidth={2.5}
              dot={false}
            />
            <Line
              dataKey="clayIndex"
              type="monotone"
              stroke="var(--color-clayIndex)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="vegetation"
              type="monotone"
              stroke="var(--color-vegetation)"
              strokeWidth={2}
              strokeDasharray="5 4"
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
