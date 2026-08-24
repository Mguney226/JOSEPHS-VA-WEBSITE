import { vettingStages } from "@/lib/site-config"
import { SectionHeading } from "./section-heading"

export function Vetting() {
  return (
    <section id="vetting" className="border-t border-border">
      <div className="mx-auto w-full max-w-screen-2xl scroll-mt-20 px-6 py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div>
            <SectionHeading
              kicker="Vetting"
              title="Most applicants never make it to your inbox."
              lede="You are not paying for access to a marketplace. You are paying for the filtering we already did."
            />
          </div>
          <ol className="space-y-0">
            {vettingStages.map((stage, i) => (
              <li key={stage.title} className="flex gap-6 border-t border-border py-6 last:pb-0">
                <div className="w-8 shrink-0 font-mono text-xs text-muted-foreground">0{i + 1}</div>
                <div>
                  <h3 className="text-base font-medium">{stage.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{stage.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
