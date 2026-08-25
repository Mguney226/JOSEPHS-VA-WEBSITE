"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { site, tiers } from "@/lib/site-config"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const planOptions = [
  ...tiers.map((tier) => ({ value: tier.id, label: `${tier.name} — ${tier.hours}` })),
  { value: "not-sure", label: "Not sure yet" },
]

// The form composes an email to site.contactEmail via the visitor's mail app,
// so it works with no backend. To collect submissions in a dashboard instead,
// swap handleSubmit for a POST to a form endpoint (Formspree, Basin, etc.).
export function InquiryForm() {
  const searchParams = useSearchParams()
  const planParam = searchParams.get("plan")
  const [plan, setPlan] = useState(
    planOptions.some((option) => option.value === planParam) ? (planParam as string) : "not-sure"
  )
  const [sent, setSent] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const planLabel = planOptions.find((option) => option.value === plan)?.label ?? "Not sure yet"
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Business: ${data.get("business") || "—"}`,
      `Plan interest: ${planLabel}`,
      "",
      "What they want to hand off:",
      `${data.get("tasks")}`,
      "",
      `Tools they use: ${data.get("tools") || "—"}`,
      "",
      "Anything else:",
      `${data.get("notes") || "—"}`,
    ].join("\r\n")
    const subject = `New assistant inquiry — ${planLabel}`
    window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  // Field caps keep the composed mailto URL under common handler limits (~2,000 chars).

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Your name</Label>
          <Input id="name" name="name" required maxLength={100} autoComplete="name" placeholder="Jane Smith" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            maxLength={150}
            autoComplete="email"
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="business">Business name</Label>
          <Input id="business" name="business" maxLength={120} autoComplete="organization" placeholder="Acme Co." />
        </div>
        <div className="space-y-2">
          <Label htmlFor="plan">Plan you are interested in</Label>
          <select
            id="plan"
            name="plan"
            value={plan}
            onChange={(event) => setPlan(event.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:text-sm"
          >
            {planOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="tasks">What would you hand off first?</Label>
        <Textarea
          id="tasks"
          name="tasks"
          required
          maxLength={500}
          rows={4}
          placeholder="Inbox and calendar, customer support tickets, order processing..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="tools">Tools you use</Label>
        <Input id="tools" name="tools" maxLength={150} placeholder="Shopify, Gmail, Slack, HubSpot..." />
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Anything else we should know?</Label>
        <Textarea id="notes" name="notes" maxLength={300} rows={3} placeholder="Working hours, time zone, start date..." />
      </div>

      <div className="space-y-3">
        <Button type="submit" className="rounded-full px-10">
          Send inquiry
        </Button>
        <div role="status">
          {sent ? (
            <p className="rounded-md border border-foreground/20 bg-muted/50 px-4 py-3 text-sm text-foreground">
              Your email app should have opened with your inquiry ready to send. If it did not,
              email us directly at <span className="font-medium">{site.contactEmail}</span>.
            </p>
          ) : (
            <p className="text-sm text-muted-foreground">
              We reply within one business day with pricing and next steps.
            </p>
          )}
        </div>
      </div>
    </form>
  )
}
