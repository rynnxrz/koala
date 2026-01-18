import Link from "next/link";
import Image from "next/image";
import { company, site } from "@/lib/company";

// Logo assets
import sparkLogo from "@/image/spark-light-logo.svg";
import ivyjLogo from "@/image/ivyj.webp";
import oraLogo from "@/image/ora.webp";

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
              Operations that run themselves. Compliance you can prove.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-[color:var(--muted-ink)]">
              One platform for onboarding, evidence capture, and reporting.
              Built for regulated B2B teams who ship fast and stay audit-ready.
            </p>
            <div className="mt-6">
              <span className="social-proof">
                ✦ Powering NZ&apos;s fastest-growing teams
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="cta-primary inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[color:var(--accent-dark)]"
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
                Why teams choose us
              </p>
              <div className="mt-6 space-y-5">
                {[
                  "Zero-friction onboarding",
                  "Audit trails that hold up",
                  "Reports execs actually read",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl bg-[color:var(--paper)] px-4 py-3"
                  >
                    <span className="text-sm font-medium text-[color:var(--ink)]">
                      {item}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">
                      Live
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-dashed border-[color:var(--line)] p-4 text-sm text-[color:var(--muted-ink)]">
                Built for regulated services, finance ops, and complex B2B workflows.
              </div>
            </div>
            <div className="absolute -right-6 -top-6 hidden h-24 w-24 rounded-full bg-[color:var(--mint)] opacity-60 blur-2xl lg:block" />
          </div>
        </div>
      </section>

      {/* Logo Wall - Trusted By (Grayscale with hover color) */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <p className="mb-8 text-center text-xs uppercase tracking-[0.3em] text-[color:var(--muted-ink)]">
          Team experience includes
        </p>
        <div className="logo-wall">
          {[
            { name: "Ivy J Studio", logo: ivyjLogo },
            { name: "Ora Nutrition", logo: oraLogo },
            { name: "Spark", logo: sparkLogo },
            { name: "Kiwi Logistics", initials: "KL" }, // Fallback for KL
          ].map((client) => (
            <div key={client.name} className="logo-item" title={client.name}>
              {client.logo ? (
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              ) : (
                <div className="flex h-10 items-center gap-2 rounded-lg bg-[color:var(--paper)] px-4">
                  <span className="font-semibold text-[color:var(--ink)]">
                    {client.initials}
                  </span>
                  <span className="text-sm text-[color:var(--muted-ink)]">
                    {client.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Micro Case Studies - Logo + Outcome Data Pattern */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted-ink)]">
            Results that matter
          </p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold">
            Real outcomes from real teams.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              company: "Ivy J Studio",
              logo: ivyjLogo,
              outcome: "Replaced manual PDF workflows with live inventory, achieving",
              highlight: "40% faster rental processing",
              tags: ["Jewelry", "Inventory"],
            },
            {
              company: "Ora Nutrition",
              logo: oraLogo,
              outcome: "Consolidated 4 spreadsheets into a single dashboard for",
              highlight: "40-person team visibility",
              tags: ["Food & Bev", "Operations"],
            },
            {
              company: "Spark",
              logo: sparkLogo,
              outcome: "Prior experience delivering AI-powered call summaries at scale—",
              highlight: "reducing agent handover time by 30%",
              tags: ["Prior Experience", "AI Ops"],
            },
          ].map((caseStudy) => (
            <div key={caseStudy.company} className="micro-case-card">
              <div className="micro-case-header">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--paper)] p-2">
                  <Image
                    src={caseStudy.logo}
                    alt={`${caseStudy.company} logo`}
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="micro-case-company">{caseStudy.company}</span>
              </div>
              <p className="micro-case-outcome">
                {caseStudy.outcome}{" "}
                <span className="highlight">{caseStudy.highlight}</span>
              </p>
              <div className="micro-case-tags">
                {caseStudy.tags.map((tag) => (
                  <span key={tag} className="micro-case-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Trust by default",
              copy: "Audit logs, access controls, and version history—baked in from day one.",
            },
            {
              title: "Built for doers",
              copy: "Clear handoffs. Fewer pings. Everyone knows what's next.",
            },
            {
              title: "NZ-owned",
              copy: "NZBN-registered. Local support. Built for local compliance.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="card-shadow card-hover rounded-3xl border border-[color:var(--line)] bg-white p-6"
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
              What you can do
            </p>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold">
              Real workflows. Real results.
            </h2>
          </div>
          <Link
            href="/product"
            className="hidden text-sm font-semibold text-[color:var(--accent)] md:inline-flex"
          >
            See what&apos;s possible →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Onboard vendors fast",
              copy: "Docs, approvals, requirements—one place, zero chasing.",
              tag: "Procurement",
            },
            {
              title: "Ship implementations",
              copy: "Visible handoffs. Clear owners. Nothing falls through.",
              tag: "Delivery",
            },
            {
              title: "Nail compliance",
              copy: "Evidence bundles on demand. No last-minute scramble.",
              tag: "Compliance",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="card-hover rounded-3xl border border-[color:var(--line)] bg-[color:var(--paper)] p-6"
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
                Up and running in weeks, not months.
              </h2>
            </div>
            <p className="max-w-xl text-sm text-[color:var(--muted-ink)]">
              Map your workflow. Configure governance. Go live with your team.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Assess",
                copy: "Pinpoint the workflows creating the most risk.",
              },
              {
                step: "02",
                title: "Configure",
                copy: "Set approvals, evidence capture, and handoff rules.",
              },
              {
                step: "03",
                title: "Operate",
                copy: "Run live. Monitor. Improve with clear ownership.",
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
              Quick answers.
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "How fast can we go live?",
                a: "Most teams ship a pilot in 2–4 weeks.",
              },
              {
                q: "Do you integrate with our tools?",
                a: "Yes. CSV, secure APIs, and deeper integrations as needed.",
              },
              {
                q: "What about security?",
                a: "Access controls, audit logs, least-privilege defaults—standard.",
              },
              {
                q: "How is pricing structured?",
                a: "Based on active workflows and governed participants.",
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
                Let&apos;s talk
              </p>
              <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold">
                See it in action.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-white/70">
                One call. We&apos;ll map your workflow, confirm fit, and share pricing
                within 48 hours.
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
    </div >
  );
}
