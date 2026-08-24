import { stats } from "@/lib/site-config"

export function StatStrip() {
  if (stats.length === 0) return null
  return (
    <section className="border-y border-border">
      <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 divide-y divide-border px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat) => (
          <div key={stat.label} className="py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0">
            <div className="text-3xl font-light tracking-tight">{stat.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
