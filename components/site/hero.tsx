import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-screen-2xl overflow-hidden px-6 pb-24 pt-16 md:pt-24">
      {/* Gradient blob: the one decorative motif, hero and final CTA only */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[340px] w-[340px] rounded-full bg-gradient-to-br from-pink-300 via-orange-200 to-yellow-100 opacity-50 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        <h1 className="max-w-4xl text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">
          THE MOST RELIABLE
          <br />
          AUTOMATION
          <br />
          IS A PERSON.
        </h1>

        <div className="mt-16 flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild className="rounded-full px-8">
                <Link href="/inquire">Inquire about pricing</Link>
              </Button>
              <Button asChild variant="ghost" className="rounded-full px-6">
                <a href="#how-it-works">How it works</a>
              </Button>
            </div>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              EVERY ASSISTANT IS SCREENED, TESTED, AND REFERENCE-CHECKED
              BEFORE YOU MEET THEM. TELL US WHAT YOU NEED, HAND OFF THE
              WORK, AND IT KEEPS GETTING DONE.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm">SHARE YOUR NEEDS, WE HANDLE THE REST</span>
            <span className="h-px w-12 bg-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
