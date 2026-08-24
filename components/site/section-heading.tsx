export function SectionHeading({
  kicker,
  title,
  lede,
}: {
  kicker: string
  title: string
  lede?: string
}) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{kicker}</span>
        <span className="h-px w-12 bg-border" />
      </div>
      <h2 className="mt-4 text-3xl font-light leading-tight tracking-tight md:text-5xl">{title}</h2>
      {lede ? <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{lede}</p> : null}
    </div>
  )
}
