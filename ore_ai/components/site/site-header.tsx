import Link from "next/link"
import { Button } from "@/components/ui/button"
import { OreSightLogo } from "@/components/oresight-logo"

const nav = [
  { label: "Problem", href: "#problem" },
  { label: "Platform", href: "#platform" },
  { label: "How it works", href: "#how" },
  { label: "Impact", href: "#impact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="OreSight AI home">
          <OreSightLogo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button nativeButton={false} render={<Link href="/dashboard" />}>
          Launch dashboard
        </Button>
      </div>
    </header>
  )
}
