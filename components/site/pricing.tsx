import Link from "next/link"
import { Check } from "lucide-react"
import { tiers } from "@/lib/site-config"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "./section-heading"

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-border">
      <div className="mx-auto w-full max-w-screen-2xl scroll-mt-20 px-6 py-24">
        <SectionHeading
          kicker="Pricing"
          title="Pick your hours. Tell us what you need."
          lede="Every plan is monthly with no long-term contract. If your assistant is not a fit, we replace them free."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={cn(
                "flex flex-col rounded-lg border p-8",
                tier.popular ? "border-foreground" : "border-border"
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{tier.name}</h3>
                {tier.popular ? <Badge className="rounded-full">Most popular</Badge> : null}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{tier.hours}</div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-light tracking-tight">
                  from ${tier.priceFrom.toLocaleString("en-US")}
                </span>
                {tier.priceNote ? (
                  <span className="text-sm text-muted-foreground">{tier.priceNote}</span>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{tier.blurb}</p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={tier.popular ? "default" : "outline"}
                className="mt-8 w-full rounded-full"
              >
                <Link href={`/inquire?plan=${tier.id}`}>Inquire about pricing</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
