import Link from "next/link";
import { company, site } from "@/lib/company";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://khakikoala.co.nz";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    legalName: company.legalName,
    url: siteUrl,
    identifier: company.nzbn,
    foundingDate: "2023-10-13",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.name,
    url: siteUrl,
    description: site.description,
    potentialAction: {
      "@type": "ContactAction",
      target: `${siteUrl}/contact`,
      name: site.primaryCta,
    },
  },
];

export default function HomePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted-ink)]">
              {company.legalName}
            </p>
            <h1 className="mt-5 font-[var(--font-display)] text-4xl font-semibold leading-tight text-balance text-[color:var(--ink)] sm:text-5xl">
              Calm, compliant operations for B2B teams that cannot afford chaos.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-[color:var(--muted-ink)]">
              {site.description} Move faster with a single source of truth for
              onboarding, evidence, and reporting.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[color:var(--accent-dark)]"
              >
                {site.primaryCta}
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--line)] px-6 py-3 text-sm font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--ink)]"
              >
                {site.secondaryCta}
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-xs uppercase tracking-[0.2em] text-[color:var(--muted-ink)]">
              <span>Registered NZ company</span>
              <span>NZBN {company.nzbn}</span>
              <span>Incorporated {company.incorporationDate}</span>
            </div>
          </div>
          <div className="relative">
            <div className="card-shadow rounded-3xl border border-[color:var(--line)] bg-white p-8">
              <p className="text-sm font-semibold text-[color:var(--muted-ink)]">
                What teams ask for most
              </p>
              <div className="mt-6 space-y-5">
                {[
                  "Compliance-ready onboarding paths",
                  "Audit trails with clear ownership",
                  "Reporting that executives can trust",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl bg-[color:var(--paper)] px-4 py-3"
                  >
                    <span className="text-sm font-medium text-[color:var(--ink)]">
                      {item}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">
                      Ready
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-dashed border-[color:var(--line)] p-4 text-sm text-[color:var(--muted-ink)]">
                Designed for regulated services, finance partners, and
                operationally complex B2B teams.
              </div>
            </div>
            <div className="absolute -right-6 -top-6 hidden h-24 w-24 rounded-full bg-[color:var(--mint)] opacity-60 blur-2xl lg:block" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Trust-first posture",
              copy: "Document control, audit logs, and access governance by default.",
            },
            {
              title: "Designed for operators",
              copy: "Clear handoffs, status visibility, and fewer follow-ups.",
            },
            {
              title: "NZ-based entity",
              copy: "Registered with NZBN and built for local compliance needs.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="card-shadow rounded-3xl border border-[color:var(--line)] bg-white p-6"
            >
              <p className="font-[var(--font-display)] text-lg font-semibold">
                {card.title}
              </p>
              <p className="mt-3 text-sm text-[color:var(--muted-ink)]">
                {card.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted-ink)]">
              Core use cases
            </p>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold">
              Designed around how B2B teams actually operate.
            </h2>
          </div>
          <Link
            href="/product"
            className="hidden text-sm font-semibold text-[color:var(--accent)] md:inline-flex"
          >
            Explore the product →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Vendor onboarding",
              copy: "Centralize documents, approvals, and requirements in one place.",
              tag: "Procurement",
            },
            {
              title: "Client implementation",
              copy: "Make every handoff visible, accountable, and trackable.",
              tag: "Delivery",
            },
            {
              title: "Regulatory reporting",
              copy: "Generate evidence bundles without frantic spreadsheets.",
              tag: "Compliance",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--paper)] p-6"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--muted-ink)]">
                {item.tag}
              </p>
              <p className="mt-3 font-[var(--font-display)] text-xl font-semibold">
                {item.title}
              </p>
              <p className="mt-3 text-sm text-[color:var(--muted-ink)]">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-[color:var(--line)] bg-white p-8 md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted-ink)]">
                How it works
              </p>
              <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold">
                Three steps to operational calm.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-[color:var(--muted-ink)]">
              We keep rollout light: map your workflow, configure governance, then
              launch with your team in weeks.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Assess",
                copy: "Identify the workflows that create the most compliance risk.",
              },
              {
                step: "02",
                title: "Configure",
                copy: "Set up approvals, evidence capture, and handoff clarity.",
              },
              {
                step: "03",
                title: "Operate",
                copy: "Run live, monitor, and refine with clear ownership.",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl bg-[color:var(--paper)] p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">
                  {item.step}
                </p>
                <p className="mt-3 font-[var(--font-display)] text-xl font-semibold">
                  {item.title}
                </p>
                <p className="mt-3 text-sm text-[color:var(--muted-ink)]">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted-ink)]">
              FAQ
            </p>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold">
              The usual questions, answered.
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "How fast can we go live?",
                a: "Most teams ship a pilot workflow in 2-4 weeks, depending on integration needs.",
              },
              {
                q: "Do you integrate with existing tools?",
                a: "Yes. We start with CSV import and secure APIs, then add deeper integrations as needed.",
              },
              {
                q: "What is your security posture?",
                a: "Access controls, audit logs, and least-privilege defaults come standard.",
              },
              {
                q: "How is pricing structured?",
                a: "Pricing is based on active workflows and the number of governed participants.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="rounded-2xl border border-[color:var(--line)] bg-white px-6 py-4"
              >
                <summary className="cursor-pointer text-sm font-semibold text-[color:var(--ink)]">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm text-[color:var(--muted-ink)]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="card-shadow rounded-3xl border border-[color:var(--line)] bg-[color:var(--ink)] p-10 text-white md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Ready to move?
              </p>
              <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold">
                Book a short discovery call.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-white/70">
                We will map one operational workflow, confirm fit, and share a
                pricing range within 48 hours.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[color:var(--ink)]"
            >
              {site.primaryCta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
