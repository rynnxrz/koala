import type { Metadata } from "next";
import Link from "next/link";
import { company, site } from "@/lib/company";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Khaki Koala, a registered New Zealand company focused on operational compliance for B2B teams.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-16">
      <section className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted-ink)]">
            About
          </p>
          <h1 className="mt-4 font-[var(--font-display)] text-4xl font-semibold">
            A focused team building quieter, safer operations.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-[color:var(--muted-ink)]">
            {company.name} exists to help regulated B2B teams keep compliance
            clear without slowing down. We build tools that make governance feel
            routine instead of reactive.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="cta-primary inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[color:var(--accent-dark)]"
            >
              {site.primaryCta}
            </Link>
            <Link
              href="/product"
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--line)] px-6 py-3 text-sm font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--ink)]"
            >
              Explore product
            </Link>
          </div>
        </div>
        <div className="card-shadow rounded-3xl border border-[color:var(--line)] bg-white p-8">
          <p className="text-sm font-semibold text-[color:var(--muted-ink)]">
            Company facts
          </p>
          <dl className="mt-6 space-y-4 text-sm text-[color:var(--muted-ink)]">
            <div className="flex items-center justify-between">
              <dt>Legal name</dt>
              <dd className="font-semibold text-[color:var(--ink)]">
                {company.legalName}
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt>Company number</dt>
              <dd className="font-semibold text-[color:var(--ink)]">
                {company.companyNumber}
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt>NZBN</dt>
              <dd className="font-semibold text-[color:var(--ink)]">
                {company.nzbn}
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt>Incorporated</dt>
              <dd className="font-semibold text-[color:var(--ink)]">
                {company.incorporationDate}
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt>Status</dt>
              <dd className="font-semibold text-[color:var(--ink)]">
                {company.status}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-[color:var(--line)] bg-[color:var(--paper)] p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted-ink)]">
            Mission
          </p>
          <h2 className="mt-3 font-[var(--font-display)] text-2xl font-semibold">
            Keep compliance practical.
          </h2>
          <p className="mt-3 text-sm text-[color:var(--muted-ink)]">
            We believe operators deserve calm systems that surface risk early,
            reduce manual chasing, and make audits feel routine.
          </p>
        </div>
        <div className="rounded-3xl border border-[color:var(--line)] bg-white p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted-ink)]">
            Values
          </p>
          <ul className="mt-4 space-y-3 text-sm text-[color:var(--muted-ink)]">
            <li>Clarity over complexity.</li>
            <li>Evidence over assumption.</li>
            <li>Delivery over theatre.</li>
          </ul>
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-[color:var(--line)] bg-white p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted-ink)]">
              Leadership
            </p>
            <h2 className="mt-3 font-[var(--font-display)] text-2xl font-semibold">
              Directors
            </h2>
          </div>
          <div className="grid gap-4 text-sm text-[color:var(--muted-ink)]">
            {company.directors.map((director) => (
              <div
                key={director}
                className="rounded-2xl border border-[color:var(--line)] px-4 py-3"
              >
                {director}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
