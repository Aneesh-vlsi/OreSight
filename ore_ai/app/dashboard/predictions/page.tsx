import { BrainCircuit, Target, Gauge, MapPinned } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { StatCard } from "@/components/dashboard/stat-card"
import { ForecastChart } from "@/components/dashboard/forecast-chart"
import {
  ModelPerformanceCard,
  ExplorationTargetsCard,
} from "@/components/dashboard/model-cards"
import { explorationTargets } from "@/lib/mock-data"

export default function PredictionsPage() {
  const recommended = explorationTargets.filter((t) => t.recommended).length
  const upside = explorationTargets.reduce((s, t) => s + t.expectedMt, 0)
  return (
    <>
      <DashboardHeader
        title="AI Predictions"
        description="Reserve forecasting, prospectivity scoring, and exploration targeting"
      />
      <div className="flex flex-col gap-4 p-4 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Model accuracy"
            value="93.6"
            unit="%"
            icon={BrainCircuit}
            delta={{ value: "+2.1 pts", positive: true }}
          />
          <StatCard
            label="Forecast error (MAPE)"
            value="4.2"
            unit="%"
            icon={Gauge}
            delta={{ value: "-0.7 pts", positive: true }}
          />
          <StatCard
            label="Priority targets"
            value={recommended.toString()}
            icon={Target}
            hint="Recommended for drilling"
          />
          <StatCard
            label="Exploration upside"
            value={upside.toFixed(1)}
            unit="Mt"
            icon={MapPinned}
            hint="Expected new reserves"
          />
        </div>

        <ForecastChart />

        <div className="grid gap-4 lg:grid-cols-3">
          <ModelPerformanceCard />
          <ExplorationTargetsCard />
        </div>
      </div>
    </>
  )
}
