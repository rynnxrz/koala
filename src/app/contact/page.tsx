import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { company } from "@/lib/company";
import { SubmitButton } from "@/app/components/SubmitButton";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a demo with Khaki Koala to map your onboarding or compliance workflow.",
};

async function submitLead(formData: FormData) {
  "use server";

  const payload = {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    company: String(formData.get("company") || "").trim(),
    teamSize: String(formData.get("teamSize") || "").trim(),
    message: String(formData.get("message") || "").trim(),
  };

  console.log("New lead", payload);

  redirect("/contact?submitted=1");
}

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { submitted?: string };
}) {
  const submitted = searchParams?.submitted === "1";

  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-16">
      <section className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted-ink)]">
            Contact
          </p>
          <h1 className="mt-4 font-[var(--font-display)] text-4xl font-semibold">
            Book a demo with {company.name}.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-[color:var(--muted-ink)]">
            Share your onboarding or compliance workflow and we will reply with a
            tailored plan and pricing range within two business days.
          </p>
          <div className="mt-8 space-y-4 text-sm text-[color:var(--muted-ink)]">
            <div className="rounded-2xl border border-[color:var(--line)] bg-white p-5">
              <p className="font-semibold text-[color:var(--ink)]">
                What to expect
              </p>
              <ul className="mt-3 space-y-2">
                <li>30-minute discovery call.</li>
                <li>Workflow mapping with compliance checkpoints.</li>
                <li>Implementation plan and pilot timeline.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--paper)] p-5">
              <p className="font-semibold text-[color:var(--ink)]">
                Company details
              </p>
              <p className="mt-2 text-sm">
                NZBN {company.nzbn} · Company No. {company.companyNumber}
              </p>
            </div>
          </div>
        </div>
        <div>
          {submitted ? (
            <div
              className="card-shadow rounded-3xl border border-[color:var(--line)] bg-white p-8"
              role="status"
              aria-live="polite"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted-ink)]">
                Thank you
              </p>
              <h2 className="mt-3 font-[var(--font-display)] text-2xl font-semibold">
                Your request is in.
              </h2>
              <p className="mt-3 text-sm text-[color:var(--muted-ink)]">
                We will reach out shortly to schedule a demo and confirm the next
                steps.
              </p>
            </div>
          ) : (
            <form
              action={submitLead}
              className="card-shadow space-y-5 rounded-3xl border border-[color:var(--line)] bg-white p-8"
            >
              <div>
                <label
                  htmlFor="lead-name"
                  className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-ink)]"
                >
                  Full name
                </label>
                <input
                  id="lead-name"
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-2 w-full rounded-2xl border border-[color:var(--line)] px-4 py-3 text-sm"
                  placeholder="Jane Lee"
                />
              </div>
              <div>
                <label
                  htmlFor="lead-email"
                  className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-ink)]"
                >
                  Work email
                </label>
                <input
                  id="lead-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  spellCheck={false}
                  className="mt-2 w-full rounded-2xl border border-[color:var(--line)] px-4 py-3 text-sm"
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="lead-company"
                  className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted-ink)]"
                >
                  Company
                </label>
                <input
                  id="lead-company"
                  name="company"
                  required
                  autoComplete="organization"
                  className="mt-2 w-full rounded-2xl border border-[color:var(--line)] px-4 py-3 text-sm"
                  placeholder="Company name"
                />
              </div>
              <input type="hidden" name="teamSize" value="" />
              <input type="hidden" name="message" value="" />
              <input type="hidden" name="message" value="" />
              <SubmitButton />
              <div className="flex items-center justify-center gap-4 pt-2 text-xs text-[color:var(--muted-ink)]">
                <span className="trust-badge">Data protected</span>
                <span>•</span>
                <span>We respond within 48 hours</span>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
