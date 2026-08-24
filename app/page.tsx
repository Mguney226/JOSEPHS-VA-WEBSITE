import { Header } from "@/components/site/header"
import { Hero } from "@/components/site/hero"
import { StatStrip } from "@/components/site/stat-strip"
import { HowItWorks } from "@/components/site/how-it-works"
import { UseCases } from "@/components/site/use-cases"
import { Vetting } from "@/components/site/vetting"
import { Comparison } from "@/components/site/comparison"
import { Pricing } from "@/components/site/pricing"
import { FinalCta } from "@/components/site/final-cta"
import { Footer } from "@/components/site/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <StatStrip />
        <HowItWorks />
        <UseCases />
        <Vetting />
        <Comparison />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
