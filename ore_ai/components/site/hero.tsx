import Link from "next/link"
import { Satellite, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  totalReserveMt,
  totalAnnualProductionKt,
  avgConfidence,
  mines,
} from "@/lib/mock-data"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(var(--primary-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--primary-foreground) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 70% 0%, black, transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 size-[28rem] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 60%)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium">
            <Satellite className="size-3.5 text-accent" />
            Space Technology &middot; SIH 2026 &middot; PS 26009
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Find manganese before you break ground.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/75 text-pretty">
            OreSight AI fuses multispectral satellite imagery with machine
            learning to estimate manganese reserves, map new prospects, and
            forecast production shortfalls across MOIL&apos;s mine network.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button nativeButton={false} render={<Link href="/dashboard" />} size="lg">
              Explore the dashboard
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              nativeButton={false}
              render={<a href="#platform" />}
              size="lg"
              variant="outline"
              className="border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              See how it works
            </Button>
          </div>
        </div>

        <div className="flex items-center">
          <div className="grid w-full grid-cols-2 gap-3">
            <HeroStat
              value={`${totalReserveMt.toFixed(0)} Mt`}
              label="Estimated reserves under management"
            />
            <HeroStat
              value={`${avgConfidence.toFixed(0)}%`}
              label="Avg. model confidence"
            />
            <HeroStat
              value={`${(totalAnnualProductionKt / 1000).toFixed(2)} Mt/yr`}
              label="Production monitored"
            />
            <HeroStat value={`${mines.length}`} label="Mines & survey blocks" />
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/[0.06] p-5 backdrop-blur-sm">
      <div className="font-display text-3xl font-bold text-accent">{value}</div>
      <div className="mt-1 text-sm leading-snug text-primary-foreground/70">
        {label}
      </div>
    </div>
  )
}
