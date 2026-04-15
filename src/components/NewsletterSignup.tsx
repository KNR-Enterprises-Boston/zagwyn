"use client";

import { useState } from "react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "done">("idle");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: wire to real list provider (Mailchimp, Buttondown, etc.)
        setState("done");
      }}
      className="space-y-2"
    >
      <label htmlFor="newsletter-email" className="block text-sm text-offwhite/75">
        Get early-season pricing and pre-order updates.
      </label>
      {state === "done" ? (
        <div className="text-sm text-amber">Thanks — we'll be in touch.</div>
      ) : (
        <div className="flex">
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="flex-1 min-w-0 bg-charcoal-700 border border-offwhite/20 px-3 py-2 text-sm text-offwhite placeholder:text-offwhite/40 focus:outline-none focus:border-amber"
          />
          <button
            type="submit"
            className="bg-amber text-charcoal font-semibold px-4 py-2 text-sm uppercase tracking-wide hover:bg-amber-light transition-colors"
          >
            Sign Up
          </button>
        </div>
      )}
    </form>
  );
}
