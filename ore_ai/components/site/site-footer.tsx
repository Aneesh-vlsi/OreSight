import { OreSightLogo } from "@/components/oresight-logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <OreSightLogo />
          <p className="max-w-md text-sm text-muted-foreground">
            AI/ML and space technology for manganese reserve estimation and
            production shortfall analysis.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Smart India Hackathon 2026</p>
          <p>Problem Statement 26009 &middot; Team CoSynthesis Engines</p>
          <p className="mt-2 text-xs">
            Demonstration data only. Not affiliated with MOIL Limited.
          </p>
        </div>
      </div>
    </footer>
  )
}
