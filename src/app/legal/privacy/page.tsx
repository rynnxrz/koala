import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy policy for Khaki Koala, covering data collection and processing practices.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-16">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted-ink)]">
        Legal
      </p>
      <h1 className="mt-4 font-[var(--font-display)] text-4xl font-semibold">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-[color:var(--muted-ink)]">
        Effective date: 13 Oct 2023
      </p>

      <div className="mt-8 space-y-6 text-sm text-[color:var(--muted-ink)]">
        <p>
          {company.legalName} ("we", "us", "our") respects your privacy. This
          policy explains what information we collect, how we use it, and your
          rights.
        </p>
        <div>
          <h2 className="font-[var(--font-display)] text-xl font-semibold text-[color:var(--ink)]">
            Information we collect
          </h2>
          <ul className="mt-3 space-y-2">
            <li>Contact details submitted through our forms.</li>
            <li>Basic usage analytics to understand site performance.</li>
            <li>Operational details you share during discovery calls.</li>
          </ul>
        </div>
        <div>
          <h2 className="font-[var(--font-display)] text-xl font-semibold text-[color:var(--ink)]">
            How we use information
          </h2>
          <ul className="mt-3 space-y-2">
            <li>To respond to inquiries and schedule demos.</li>
            <li>To improve our product and services.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </div>
        <div>
          <h2 className="font-[var(--font-display)] text-xl font-semibold text-[color:var(--ink)]">
            Data retention
          </h2>
          <p className="mt-3">
            We retain personal data only as long as needed for the purposes
            described above, unless a longer retention period is required by law.
          </p>
        </div>
        <div>
          <h2 className="font-[var(--font-display)] text-xl font-semibold text-[color:var(--ink)]">
            Your rights
          </h2>
          <p className="mt-3">
            You can request access, correction, or deletion of your personal
            information by contacting us via the contact form on this site.
          </p>
        </div>
      </div>
    </div>
  );
}
