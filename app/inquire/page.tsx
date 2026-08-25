import type { Metadata } from "next"
import { Suspense } from "react"
import { site } from "@/lib/site-config"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { SectionHeading } from "@/components/site/section-heading"
import { InquiryForm } from "@/components/site/inquiry-form"

export const metadata: Metadata = {
  title: `Inquire about pricing | ${site.name}`,
  description:
    "Tell us what you need and we will reply with pricing and a matched assistant within one business day.",
}

export default function InquirePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto w-full max-w-screen-2xl px-6 pb-24 pt-10 md:pt-16">
        <SectionHeading
          as="h1"
          kicker="Inquire"
          title="Tell us what you need."
          lede="Share a few details about your business and the work you want off your plate. We reply within one business day with pricing and a matched assistant."
        />
        <div className="mt-12 max-w-2xl">
          <Suspense
            fallback={
              <p className="text-sm text-muted-foreground">
                Loading the inquiry form... You can also email us directly at{" "}
                <a href={`mailto:${site.contactEmail}`} className="underline hover:text-foreground">
                  {site.contactEmail}
                </a>
                .
              </p>
            }
          >
            <InquiryForm />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  )
}
