import { Satellite, Layers, ScanLine, Boxes } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { StatCard } from "@/components/dashboard/stat-card"
import { ReserveMap } from "@/components/dashboard/reserve-map"
import { SpectralChart } from "@/components/dashboard/spectral-chart"
import {
  totalReserveMt,
  mines,
  satelliteScenes,
  avgConfidence,
} from "@/lib/mock-data"

export default function ReservesPage() {
  const surveyed = mines.filter((m) => m.status !== "survey").length
  return (
    <>
      <DashboardHeader
        title="Satellite & Reserves"
        description="Space-based ore body detection and reserve estimation"
      />
      <div className="flex flex-col gap-4 p-4 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Estimated reserves"
            value={totalReserveMt.toFixed(1)}
            unit="Mt"
            icon={Layers}
            hint="Measured + indicated"
          />
          <StatCard
            label="Scenes processed"
            value={satelliteScenes.toLocaleString()}
            icon={Satellite}
            delta={{ value: "+128 this quarter", positive: true }}
          />
          <StatCard
            label="Sites classified"
            value={`${surveyed}/${mines.length}`}
            icon={Boxes}
            hint="Confirmed deposits"
          />
          <StatCard
            label="Detection confidence"
            value={avgConfidence.toFixed(0)}
            unit="%"
            icon={ScanLine}
            delta={{ value: "+1.8 pts", positive: true }}
          />
        </div>

        <ReserveMap />
        <SpectralChart />
      </div>
    </>
  )
}
