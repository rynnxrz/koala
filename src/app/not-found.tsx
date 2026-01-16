import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start gap-6 px-6 pb-20 pt-24">
      <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted-ink)]">
        404
      </p>
      <h1 className="font-[var(--font-display)] text-4xl font-semibold">
        That page does not exist.
      </h1>
      <p className="text-sm text-[color:var(--muted-ink)]">
        Try heading back to the homepage or use the navigation to find what you
        need.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[color:var(--accent-dark)]"
      >
        Return home
      </Link>
    </div>
  );
}
