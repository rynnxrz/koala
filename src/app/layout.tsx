import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, Manrope } from "next/font/google";
import { company, site } from "@/lib/company";
import "./globals.css";

const displayFont = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://khakikoala.co.nz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} — ${site.tagline}`,
    template: `%s — ${company.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${company.name} — ${site.tagline}`,
    description: site.description,
    url: siteUrl,
    siteName: company.name,
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — ${site.tagline}`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased text-[color:var(--ink)]`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[999] focus:rounded-full focus:bg-[color:var(--accent)] focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <div className="bg-grid">
          <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--paper)]/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <Link
                href="/"
                className="flex items-center gap-3 font-[var(--font-display)] text-xl font-semibold"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--ink)] text-sm font-semibold text-[color:var(--paper)]">
                  KK
                </span>
                {company.name}
              </Link>
              <nav className="hidden items-center gap-8 text-sm font-medium text-[color:var(--muted-ink)] md:flex">
                <Link className="hover:text-[color:var(--ink)]" href="/product">
                  Product
                </Link>
                <Link className="hover:text-[color:var(--ink)]" href="/pricing">
                  Pricing
                </Link>
                <Link className="hover:text-[color:var(--ink)]" href="/about">
                  About
                </Link>
                <Link className="hover:text-[color:var(--ink)]" href="/contact">
                  Contact
                </Link>
              </nav>
              <div className="flex items-center gap-3">
                <Link
                  className="hidden rounded-full border border-[color:var(--line)] px-4 py-2 text-sm font-medium text-[color:var(--ink)] transition hover:border-[color:var(--ink)] md:inline-flex"
                  href="/pricing"
                >
                  {site.secondaryCta}
                </Link>
                <Link
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[color:var(--accent-dark)]"
                  href="/contact"
                >
                  {site.primaryCta}
                </Link>
              </div>
            </div>
          </header>
          <main id="main">{children}</main>
          <footer className="border-t border-[color:var(--line)] bg-[color:var(--paper)]">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[2fr,1fr,1fr]">
              <div>
                <p className="font-[var(--font-display)] text-lg font-semibold">
                  {company.name}
                </p>
                <p className="mt-3 max-w-md text-sm text-[color:var(--muted-ink)]">
                  {site.description}
                </p>
                <div className="mt-5 text-xs uppercase tracking-[0.2em] text-[color:var(--muted-ink)]">
                  NZBN {company.nzbn} · Company No. {company.companyNumber}
                </div>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-[color:var(--ink)]">Company</p>
                <div className="mt-4 flex flex-col gap-2 text-[color:var(--muted-ink)]">
                  <Link href="/product">Product</Link>
                  <Link href="/pricing">Pricing</Link>
                  <Link href="/about">About</Link>
                  <Link href="/contact">Contact</Link>
                </div>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-[color:var(--ink)]">Legal</p>
                <div className="mt-4 flex flex-col gap-2 text-[color:var(--muted-ink)]">
                  <Link href="/legal/privacy">Privacy</Link>
                  <Link href="/legal/terms">Terms</Link>
                </div>
                <p className="mt-6 text-xs text-[color:var(--muted-ink)]">
                  {company.legalName} · {company.location}
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
