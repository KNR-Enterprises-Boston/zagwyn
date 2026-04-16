"use client";

import { useState } from "react";
import { lookupZip } from "@/content/zips";

type Result =
  | { kind: "idle" }
  | { kind: "match"; town: string; zone: 1 | 2 | 3 }
  | { kind: "miss"; zip: string };

export function ZipChecker() {
  const [zip, setZip] = useState("");
  const [result, setResult] = useState<Result>({ kind: "idle" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const hit = lookupZip(zip);
    if (hit) {
      setResult({ kind: "match", town: hit.town, zone: hit.zone });
    } else {
      setResult({ kind: "miss", zip });
    }
  }

  return (
    <div className="border border-charcoal/15 bg-offwhite-dark p-6 md:p-8">
      <div className="eyebrow mb-2">Check Your Zip</div>
      <h3 className="font-serif text-2xl md:text-3xl">Do We Deliver to You?</h3>
      <p className="mt-3 text-charcoal/75 text-sm max-w-md">
        Enter your zip code. If we don't have it listed, give us a call — we
        serve plenty of towns that aren't in the quick lookup.
      </p>
      <form
        onSubmit={submit}
        className="mt-5 flex flex-col sm:flex-row gap-3 max-w-md"
      >
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]{5}"
          maxLength={5}
          required
          value={zip}
          onChange={(e) => setZip(e.target.value.replace(/[^0-9]/g, ""))}
          placeholder="e.g. 01464"
          className="flex-1 border border-charcoal/30 bg-offwhite px-4 py-3 text-base focus:outline-none focus:border-amber"
          aria-label="Zip code"
        />
        <button type="submit" className="btn-primary">
          Check
        </button>
      </form>
      <div className="mt-5 min-h-[2.5rem]" aria-live="polite">
        {result.kind === "match" && (
          <div className="text-charcoal">
            <span className="text-amber font-semibold">Yes —</span> we deliver
            to {result.town} ({zoneLabel(result.zone)}).
          </div>
        )}
        {result.kind === "miss" && (
          <div className="text-charcoal">
            {result.zip} isn't in our quick lookup.{" "}
            <a href="/contact" className="underline hover:text-amber">
              Contact us
            </a>{" "}
            and we'll confirm delivery to your area.
          </div>
        )}
      </div>
    </div>
  );
}

function zoneLabel(zone: 1 | 2 | 3) {
  if (zone === 1) return "Zone 1 — Local";
  if (zone === 2) return "Zone 2 — Surrounding Towns";
  return "Zone 3 — Extended Range";
}
