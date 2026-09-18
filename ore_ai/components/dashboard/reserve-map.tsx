"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { mines, statusLabels, type Mine } from "@/lib/mock-data"

const statusColor: Record<Mine["status"], string> = {
  operational: "var(--chart-1)",
  expansion: "var(--chart-4)",
  survey: "var(--chart-2)",
}

export function ReserveMap() {
  const [active, setActive] = useState<Mine>(mines[0])

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Satellite reserve map</CardTitle>
        <CardDescription>
          AI-classified deposits over multispectral terrain composite
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-primary">
            <Image
              src="/satellite-terrain.png"
              alt="Multispectral satellite terrain composite of the manganese belt"
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
            />
            <div className="absolute inset-0 bg-primary/20" aria-hidden="true" />
            {mines.map((m) => {
              const isActive = m.id === active.id
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setActive(m)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                  style={{ left: `${m.x}%`, top: `${m.y}%` }}
                  aria-label={`${m.name} — ${statusLabels[m.status]}`}
                >
                  <span
                    className={cn(
                      "block rounded-full ring-2 ring-white/90 transition-all",
                      isActive ? "size-4" : "size-3 hover:size-3.5",
                    )}
                    style={{ background: statusColor[m.status] }}
                  />
                  {isActive && (
                    <span
                      className="absolute left-1/2 top-1/2 -z-0 size-8 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full"
                      style={{ background: statusColor[m.status], opacity: 0.4 }}
                    />
                  )}
                  <span className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-primary/90 px-1.5 py-0.5 text-[10px] font-medium text-primary-foreground">
                    {m.name}
                  </span>
                </button>
              )
            })}
            <div className="absolute bottom-3 left-3 flex flex-col gap-1.5 rounded-md bg-primary/80 p-2.5 text-[11px] text-primary-foreground backdrop-blur-sm">
              {(
                ["operational", "expansion", "survey"] as Mine["status"][]
              ).map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <span
                    className="size-2.5 rounded-full"
                    style={{ background: statusColor[s] }}
                  />
                  {statusLabels[s]}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-lg border border-border bg-secondary/40 p-5">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-display text-xl font-bold">{active.name}</h3>
                <p className="text-sm text-muted-foreground">{active.state}</p>
              </div>
              <Badge variant="outline">{statusLabels[active.status]}</Badge>
            </div>
            <dl className="grid grid-cols-2 gap-3">
              <MapStat label="Est. reserve" value={`${active.estimatedReserveMt} Mt`} />
              <MapStat label="Avg. grade" value={`${active.gradePct}% Mn`} />
              <MapStat
                label="Annual output"
                value={
                  active.annualProductionKt > 0
                    ? `${active.annualProductionKt} kt`
                    : "—"
                }
              />
              <MapStat label="Confidence" value={`${active.confidence}%`} />
            </dl>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Estimates derived from fused spectral alteration indices,
              structural interpretation, and assimilated drillhole assays.
              Confidence reflects spatial data density and model agreement.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function MapStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-border bg-card p-3">
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className="mt-0.5 font-display text-lg font-bold tabular-nums">
        {value}
      </dd>
    </div>
  )
}
