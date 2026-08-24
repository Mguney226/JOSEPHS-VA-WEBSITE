import { site } from "@/lib/site-config"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-6 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <span className="uppercase tracking-[0.2em] text-foreground">{site.name}</span>
        <nav className="flex flex-wrap gap-6">
          <a href="#how-it-works" className="transition-colors hover:text-foreground">
            How it works
          </a>
          <a href="#vetting" className="transition-colors hover:text-foreground">
            Vetting
          </a>
          <a href="#pricing" className="transition-colors hover:text-foreground">
            Pricing
          </a>
        </nav>
        <a href={`mailto:${site.contactEmail}`} className="transition-colors hover:text-foreground">
          {site.contactEmail}
        </a>
      </div>
    </footer>
  )
}
