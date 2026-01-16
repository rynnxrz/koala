import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms of service for Khaki Koala, covering site usage and service engagement.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-16">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted-ink)]">
        Legal
      </p>
      <h1 className="mt-4 font-[var(--font-display)] text-4xl font-semibold">
        Terms of Service
      </h1>
      <p className="mt-4 text-sm text-[color:var(--muted-ink)]">
        Effective date: 13 Oct 2023
      </p>

      <div className="mt-8 space-y-6 text-sm text-[color:var(--muted-ink)]">
        <p>
          These terms govern your use of the {company.name} website and any
          related services. By using this site, you agree to these terms.
        </p>
        <div>
          <h2 className="font-[var(--font-display)] text-xl font-semibold text-[color:var(--ink)]">
            Use of the site
          </h2>
          <p className="mt-3">
            You may use this site for lawful business purposes only. Do not
            misuse the content or attempt to interfere with the site’s normal
            operation.
          </p>
        </div>
        <div>
          <h2 className="font-[var(--font-display)] text-xl font-semibold text-[color:var(--ink)]">
            Service engagements
          </h2>
          <p className="mt-3">
            Any commercial engagement with {company.legalName} will be governed
            by a separate written agreement.
          </p>
        </div>
        <div>
          <h2 className="font-[var(--font-display)] text-xl font-semibold text-[color:var(--ink)]">
            Limitation of liability
          </h2>
          <p className="mt-3">
            We provide this site on an “as is” basis and do not guarantee that it
            will be uninterrupted or error-free.
          </p>
        </div>
      </div>
    </div>
  );
}
