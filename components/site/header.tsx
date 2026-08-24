import Link from "next/link"
import { site } from "@/lib/site-config"
import { Button } from "@/components/ui/button"

const nav = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#use-cases", label: "What they do" },
  { href: "#vetting", label: "Vetting" },
  { href: "#pricing", label: "Pricing" },
]

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-6 py-6">
      <Link href="/" className="text-sm font-medium uppercase tracking-[0.2em]">
        {site.name}
      </Link>
      <nav className="hidden items-center gap-8 md:flex">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <Button asChild variant="outline" className="rounded-full border-foreground px-6">
        <a href="#pricing">Hire an assistant</a>
      </Button>
    </header>
  )
}
