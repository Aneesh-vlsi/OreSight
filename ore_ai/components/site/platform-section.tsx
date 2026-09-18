import { Satellite, Pickaxe, BrainCircuit, Check } from "lucide-react"

const pillars = [
  {
    icon: Satellite,
    title: "Satellite data",
    desc: "Multispectral and radar imagery processed into geological signals.",
    points: [
      "Iron-oxide & clay alteration indices",
      "NDVI change detection over ore bodies",
      "Structural lineament & gossan mapping",
    ],
  },
  {
    icon: Pickaxe,
    title: "Ore production",
    desc: "Live production telemetry blended with reserve models.",
    points: [
      "Actual vs. target vs. forecast output",
      "Grade dilution & blend monitoring",
      "Shortfall alerts before commitments",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI / ML models",
    desc: "Prospectivity and estimation models trained on fused data.",
    points: [
      "Reserve tonnage & grade estimation",
      "Prospectivity scoring of new zones",
      "Time-series production forecasting",
    ],
  },
]

export function PlatformSection() {
  return (
    <section id="platform" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            The platform
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Three data layers, one decision engine.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            OreSight AI unifies orbital observation, on-the-ground production,
            and machine learning into a single operational view.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <p.icon className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{p.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span className="text-foreground/90">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
