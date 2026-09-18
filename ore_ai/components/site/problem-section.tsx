import { TrendingDown, Timer, MapPinOff } from "lucide-react"

const problems = [
  {
    icon: TrendingDown,
    stat: "~50%",
    title: "Import dependence",
    body: "India imports roughly half of its manganese demand, despite holding significant domestic reserves that remain unmapped or under-exploited.",
  },
  {
    icon: MapPinOff,
    stat: "Sparse",
    title: "Reserve visibility",
    body: "Conventional exploration relies on slow, costly ground surveys and drilling, leaving large tracts of prospective terrain unassessed.",
  },
  {
    icon: Timer,
    stat: "Reactive",
    title: "Production planning",
    body: "Shortfalls against targets are often detected after the fact, when corrective action is expensive and mine plans are already committed.",
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            The challenge
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Manganese is critical. Finding it is still slow.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Manganese is essential to steelmaking and battery chemistries, yet
            exploration and production planning lag behind demand. OreSight AI
            targets three structural gaps.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="flex size-11 items-center justify-center rounded-lg bg-secondary text-primary">
                <p.icon className="size-5" />
              </div>
              <div className="mt-5 font-display text-2xl font-bold text-primary">
                {p.stat}
              </div>
              <h3 className="mt-1 text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
