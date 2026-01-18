"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="cta-primary w-full rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[color:var(--accent-dark)] disabled:opacity-70 disabled:cursor-not-allowed"
        >
            {pending ? "Sending..." : "Request a demo"}
        </button>
    );
}
