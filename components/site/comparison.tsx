import { comparison, site } from "@/lib/site-config"
import { cn } from "@/lib/utils"
import { SectionHeading } from "./section-heading"

export function Comparison() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto w-full max-w-screen-2xl px-6 py-24">
        <SectionHeading
          kicker="The alternatives"
          title="Compare it to what you would do instead."
        />
        <div className="mt-16 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-foreground text-left">
                <th className="w-40 py-4 pr-6 font-normal text-muted-foreground" scope="col" />
                {comparison.columns.map((col) => (
                  <th
                    key={col}
                    scope="col"
                    className={cn(
                      "py-4 pr-6 font-medium",
                      col === site.name && "text-foreground",
                      col !== site.name && "text-muted-foreground"
                    )}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.label} className="border-b border-border align-top">
                  <th scope="row" className="py-4 pr-6 text-left font-normal text-muted-foreground">
                    {row.label}
                  </th>
                  {row.values.map((value, i) => (
                    <td key={i} className={cn("py-4 pr-6", i === 0 ? "font-medium" : "text-muted-foreground")}>
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
