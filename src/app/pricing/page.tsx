import type { Metadata } from "next";
import Link from "next/link";
import { company, site } from "@/lib/company";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing guidance for Khaki Koala, tailored to workflow volume and compliance complexity.",
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-16">
      <section className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted-ink)]">
            Pricing
          </p>
          <h1 className="mt-4 font-[var(--font-display)] text-4xl font-semibold">
            Pricing that matches your operational load.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-[color:var(--muted-ink)]">
            {company.name} is priced based on the number of active workflows,
            governed participants, and compliance depth. We keep it predictable
            and easy to scale.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[color:var(--accent-dark)]"
            >
              {site.primaryCta}
            </Link>
            <Link
              href="/product"
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--line)] px-6 py-3 text-sm font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--ink)]"
            >
              See product details
            </Link>
          </div>
        </div>
        <div className="card-shadow rounded-3xl border border-[color:var(--line)] bg-white p-8">
          <p className="text-sm font-semibold text-[color:var(--muted-ink)]">
            What is included
          </p>
          <ul className="mt-6 space-y-4 text-sm text-[color:var(--muted-ink)]">
            <li>Workflow templates and onboarding playbooks.</li>
            <li>Compliance evidence storage with audit trails.</li>
            <li>Role-based access, approvals, and escalation paths.</li>
            <li>Operational reporting and executive summaries.</li>
            <li>Guided onboarding and workflow design support.</li>
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Starter",
              copy: "For focused teams running 1-2 core workflows with clear governance needs.",
              fit: "Best for 20-50 participants",
            },
            {
              title: "Growth",
              copy: "Scale multiple onboarding and compliance flows across departments.",
              fit: "Best for 50-200 participants",
            },
            {
              title: "Enterprise",
              copy: "Complex compliance requirements, custom integrations, and advanced controls.",
              fit: "Best for 200+ participants",
            },
          ].map((tier) => (
            <div
              key={tier.title}
              className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--paper)] p-6"
            >
              <p className="font-[var(--font-display)] text-xl font-semibold">
                {tier.title}
              </p>
              <p className="mt-3 text-sm text-[color:var(--muted-ink)]">
                {tier.copy}
              </p>
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">
                {tier.fit}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[1fr,1fr]">
        <div className="rounded-3xl border border-[color:var(--line)] bg-white p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted-ink)]">
            Pricing components
          </p>
          <h2 className="mt-3 font-[var(--font-display)] text-2xl font-semibold">
            A simple, transparent structure.
          </h2>
          <ul className="mt-6 space-y-3 text-sm text-[color:var(--muted-ink)]">
            <li>Base platform access.</li>
            <li>Active workflow volume.</li>
            <li>Compliance modules (as needed).</li>
            <li>Integration and data migration support.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--ink)] p-8 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">
            Getting a quote
          </p>
          <h2 className="mt-3 font-[var(--font-display)] text-2xl font-semibold">
            A 30-minute discovery call.
          </h2>
          <p className="mt-4 text-sm text-white/70">
            We map your current onboarding flow, estimate the workflow volume,
            and deliver a tailored pricing range within two business days.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--ink)]"
          >
            {site.primaryCta}
          </Link>
        </div>
      </section>
    </div>
  );
}
