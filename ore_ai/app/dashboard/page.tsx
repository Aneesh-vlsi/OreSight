import { Layers, Gauge, Pickaxe, Target } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { StatCard } from "@/components/dashboard/stat-card"
import { ProductionTrendChart } from "@/components/dashboard/production-trend-chart"
import { GradeDistributionChart } from "@/components/dashboard/grade-distribution-chart"
import { MineTable } from "@/components/dashboard/mine-table"
import { AlertsFeed } from "@/components/dashboard/alerts-feed"
import {
  totalReserveMt,
  totalAnnualProductionKt,
  avgGrade,
  avgConfidence,
} from "@/lib/mock-data"

export default function OverviewPage() {
  return (
    <>
      <DashboardHeader
        title="Overview"
        description="Reserve estimation and production intelligence across the MOIL network"
      />
      <div className="flex flex-col gap-4 p-4 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Estimated reserves"
            value={totalReserveMt.toFixed(1)}
            unit="Mt"
            icon={Layers}
            delta={{ value: "+2.3 Mt YoY", positive: true }}
          />
          <StatCard
            label="Annual production"
            value={(totalAnnualProductionKt / 1000).toFixed(2)}
            unit="Mt/yr"
            icon={Pickaxe}
            delta={{ value: "+6.1% vs LY", positive: true }}
          />
          <StatCard
            label="Avg. ore grade"
            value={avgGrade.toFixed(1)}
            unit="% Mn"
            icon={Gauge}
            hint="Across all sites"
          />
          <StatCard
            label="Model confidence"
            value={avgConfidence.toFixed(0)}
            unit="%"
            icon={Target}
            delta={{ value: "+1.8 pts", positive: true }}
          />
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <ProductionTrendChart />
          <GradeDistributionChart />
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <MineTable />
          </div>
          <AlertsFeed />
        </div>
      </div>
    </>
  )
}
