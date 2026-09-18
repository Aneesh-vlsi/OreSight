const steps = [
  {
    n: "01",
    title: "Ingest & calibrate",
    body: "Multispectral, radar, and elevation scenes are atmospherically corrected and co-registered with historical drill and assay records.",
  },
  {
    n: "02",
    title: "Extract signatures",
    body: "Spectral indices isolate iron-oxide alteration, clay, and gossan signatures while change detection flags exposed or expanding ore bodies.",
  },
  {
    n: "03",
    title: "Model & estimate",
    body: "ML models score prospectivity zone-by-zone and estimate reserve tonnage and grade with calibrated confidence bounds.",
  },
  {
    n: "04",
    title: "Forecast & alert",
    body: "Production is forecast against targets, surfacing shortfalls early with recommended interventions for planners.",
  },
]

export function HowSection() {
  return (
    <section id="how" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            How it works
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            From orbit to mine plan in four steps.
          </h2>
        </div>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="flex flex-col bg-card p-6">
              <span className="font-display text-4xl font-bold text-accent/30">
                {s.n}
              </span>
              <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
