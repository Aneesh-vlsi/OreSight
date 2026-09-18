import { Pickaxe, Percent, Timer, TrendingUp } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { StatCard } from "@/components/dashboard/stat-card"
import { ProductionBreakdownChart } from "@/components/dashboard/production-breakdown-chart"
import { ShortfallCard } from "@/components/dashboard/shortfall-card"
import { MineTable } from "@/components/dashboard/mine-table"
import { totalAnnualProductionKt } from "@/lib/mock-data"

export default function ProductionPage() {
  return (
    <>
      <DashboardHeader
        title="Production"
        description="Output tracking, efficiency, and shortfall analysis"
      />
      <div className="flex flex-col gap-4 p-4 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Annual output"
            value={(totalAnnualProductionKt / 1000).toFixed(2)}
            unit="Mt/yr"
            icon={Pickaxe}
            delta={{ value: "+6.1% vs LY", positive: true }}
          />
          <StatCard
            label="Capacity utilization"
            value="87.4"
            unit="%"
            icon={Percent}
            delta={{ value: "+3.2 pts", positive: true }}
          />
          <StatCard
            label="Avg. downtime"
            value="4.1"
            unit="%"
            icon={Timer}
            delta={{ value: "-0.9 pts", positive: true }}
          />
          <StatCard
            label="Forecast next Q"
            value="342"
            unit="kt"
            icon={TrendingUp}
            delta={{ value: "+4.4% QoQ", positive: true }}
          />
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <ProductionBreakdownChart />
          <ShortfallCard />
        </div>

        <MineTable />
      </div>
    </>
  )
}
