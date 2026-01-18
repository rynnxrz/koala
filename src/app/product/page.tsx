import type { Metadata } from "next";
import Link from "next/link";
import { company, site } from "@/lib/company";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Explore how Khaki Koala centralizes onboarding, compliance, and operational reporting for B2B teams.",
};

export default function ProductPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-16">
      <section className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted-ink)]">
            Product overview
          </p>
          <h1 className="mt-4 font-[var(--font-display)] text-4xl font-semibold">
            One workspace for every compliance-critical workflow.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-[color:var(--muted-ink)]">
            {company.name} gives operators a clear view of onboarding progress,
            evidence, and accountability so teams can move faster with less risk.
          </p>
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
        </div>
        <div className="card-shadow rounded-3xl border border-[color:var(--line)] bg-white p-8">
          <p className="text-sm font-semibold text-[color:var(--muted-ink)]">
            Core capabilities
          </p>
          <ul className="mt-6 space-y-4 text-sm text-[color:var(--muted-ink)]">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
              Workflow templates for onboarding, risk checks, and approvals.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
              Evidence capture with ownership, timestamps, and audit trails.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
              Live dashboards for operational status, exceptions, and SLAs.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
              Role-based access and escalation logic for governance.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Onboarding flow builder",
              copy: "Design repeatable steps, approvals, and document requirements.",
            },
            {
              title: "Compliance evidence vault",
              copy: "Store evidence with provenance, tags, and retention policy.",
            },
            {
              title: "Executive reporting",
              copy: "Share board-ready updates without spreadsheet chasing.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--paper)] p-6"
            >
              <p className="font-[var(--font-display)] text-xl font-semibold">
                {card.title}
              </p>
              <p className="mt-3 text-sm text-[color:var(--muted-ink)]">
                {card.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-10 lg:grid-cols-[1fr,1fr]">
        <div className="rounded-3xl border border-[color:var(--line)] bg-white p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted-ink)]">
            Integrations
          </p>
          <h2 className="mt-3 font-[var(--font-display)] text-2xl font-semibold">
            Connect the tools you already use.
          </h2>
          <p className="mt-3 text-sm text-[color:var(--muted-ink)]">
            Start with CSV import and secure API access. Expand to HRIS, CRM, and
            finance systems as your workflows mature.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-[color:var(--muted-ink)]">
            <div className="rounded-2xl border border-dashed border-[color:var(--line)] px-4 py-3">
              Secure API + webhooks
            </div>
            <div className="rounded-2xl border border-dashed border-[color:var(--line)] px-4 py-3">
              CSV imports for existing databases
            </div>
            <div className="rounded-2xl border border-dashed border-[color:var(--line)] px-4 py-3">
              Role-based access via SSO (optional)
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--ink)] p-8 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">
            Outcomes
          </p>
          <h2 className="mt-3 font-[var(--font-display)] text-2xl font-semibold">
            Less risk, more clarity.
          </h2>
          <ul className="mt-6 space-y-4 text-sm text-white/70">
            <li>Shorter onboarding cycles with clear ownership.</li>
            <li>Audit-ready evidence without the scramble.</li>
            <li>Confidence for compliance, legal, and operations leaders.</li>
            <li>Repeatable processes across teams and locations.</li>
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <div className="card-shadow rounded-3xl border border-[color:var(--line)] bg-white p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold">
                See how {company.name} maps to your workflow.
              </h2>
              <p className="mt-3 text-sm text-[color:var(--muted-ink)]">
                We will review one workflow and show a tailored path forward.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[color:var(--accent-dark)]"
            >
              {site.primaryCta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
