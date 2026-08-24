import { Check } from "lucide-react"
import { useCases } from "@/lib/site-config"
import { SectionHeading } from "./section-heading"

export function UseCases() {
  return (
    <section id="use-cases" className="border-t border-border">
      <div className="mx-auto w-full max-w-screen-2xl scroll-mt-20 px-6 py-24">
        <SectionHeading
          kicker="What they do"
          title="Real work, not a task list you have to invent."
          lede="Assistants come in with experience in the work below. You point them at yours."
        />
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {useCases.map((useCase) => (
            <div key={useCase.audience} className="bg-background p-8">
              <h3 className="text-lg font-medium">{useCase.audience}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{useCase.summary}</p>
              <ul className="mt-6 space-y-3">
                {useCase.tasks.map((task) => (
                  <li key={task} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
