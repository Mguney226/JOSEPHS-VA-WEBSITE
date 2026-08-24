import { steps } from "@/lib/site-config"
import { SectionHeading } from "./section-heading"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto w-full max-w-screen-2xl scroll-mt-20 px-6 py-24">
      <SectionHeading
        kicker="How it works"
        title="From checkout to a working assistant."
        lede="No discovery calls and no proposals. You buy the plan, we do the matching."
      />
      <ol className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.title} className="border-t border-foreground pt-6">
            <div className="font-mono text-xs text-muted-foreground">0{i + 1}</div>
            <h3 className="mt-3 text-lg font-medium">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
