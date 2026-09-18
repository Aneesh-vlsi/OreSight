import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { Hero } from "@/components/site/hero"
import { ProblemSection } from "@/components/site/problem-section"
import { PlatformSection } from "@/components/site/platform-section"
import { HowSection } from "@/components/site/how-section"
import { ImpactSection } from "@/components/site/impact-section"

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <PlatformSection />
        <HowSection />
        <ImpactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
