import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { modelMetrics } from "@/lib/mock-data"

export function ImpactSection() {
  return (
    <section id="impact" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modelMetrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <div className="font-display text-4xl font-bold text-primary">
                {m.value.toLocaleString()}
                <span className="text-2xl text-accent">{m.suffix}</span>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="relative mt-16 overflow-hidden rounded-2xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, var(--accent), transparent 40%), radial-gradient(circle at 80% 70%, var(--chart-3), transparent 40%)",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              See OreSight AI in action.
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/75 text-pretty">
              Explore reserve estimates, satellite-derived prospects, and
              production forecasts across MOIL&apos;s mine network in the live
              analytics dashboard.
            </p>
            <Button
              nativeButton={false}
              render={<Link href="/dashboard" />}
              size="lg"
              className="mt-8"
            >
              Launch the dashboard
              <ArrowRight data-icon="inline-end" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
