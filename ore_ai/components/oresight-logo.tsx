import { cn } from "@/lib/utils"

export function OreSightLogo({
  className,
  showText = true,
}: {
  className?: string
  showText?: boolean
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative inline-flex size-8 items-center justify-center rounded-md bg-accent text-accent-foreground">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-5"
          aria-hidden="true"
        >
          <path
            d="M12 3a5 5 0 0 0-4.9 6c-1.2.7-2 2-2 3.5A4 4 0 0 0 9 16.4V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2.6a4 4 0 0 0 3.9-3.9c0-1.5-.8-2.8-2-3.5A5 5 0 0 0 12 3Z"
            fill="currentColor"
            opacity="0.9"
          />
          <circle cx="12" cy="10" r="2.2" fill="var(--accent)" stroke="white" strokeWidth="1" />
          <path d="M12 12.2V16" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </span>
      {showText && (
        <span className="font-display text-lg font-bold leading-none tracking-tight">
          OreSight<span className="text-accent"> AI</span>
        </span>
      )}
    </span>
  )
}
