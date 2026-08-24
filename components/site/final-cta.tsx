import { Button } from "@/components/ui/button"

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-border">
      {/* Second and last appearance of the gradient motif */}
      <div
        className="pointer-events-none absolute -bottom-32 left-1/2 h-[320px] w-[480px] -translate-x-1/2 rounded-full bg-gradient-to-br from-pink-300 via-orange-200 to-yellow-100 opacity-40 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-screen-2xl px-6 py-28 text-center">
        <h2 className="mx-auto max-w-2xl text-4xl font-light leading-tight tracking-tight md:text-6xl">
          YOUR WEEK BACK,
          <br />
          STARTING TOMORROW.
        </h2>
        <div className="mt-10">
          <Button asChild className="rounded-full px-10">
            <a href="#pricing">Hire an assistant</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
