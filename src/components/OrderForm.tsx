"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function OrderForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots often fill every field.
    if ((data.get("company") as string)?.length) {
      setStatus("success");
      form.reset();
      return;
    }

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    if (!endpoint) {
      console.warn("NEXT_PUBLIC_FORM_ENDPOINT not set; simulating success.");
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Form endpoint responded ${res.status}`);
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong sending your request.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="border border-amber bg-offwhite-dark p-8">
        <div className="eyebrow mb-2">Request Received</div>
        <h3 className="font-serif text-2xl md:text-3xl">
          Thanks — we'll be in touch.
        </h3>
        <p className="mt-3 text-charcoal/75 max-w-md">
          We'll respond within one business day to confirm pricing, schedule
          delivery, and answer any questions. If it's urgent, call Alex at{" "}
          <a href="tel:+19785015184" className="underline hover:text-amber">
            978-501-5184
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 btn-outline"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Your Name" name="name" required />
        <Field label="Phone Number" name="phone" type="tel" required />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Town or Zip Code" name="location" required />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Select label="Product Interest" name="product" required>
          <option value="">Select a product</option>
          <option value="kiln-dried">Kiln-Dried Hardwood</option>
          <option value="seasoned">Seasoned Hardwood</option>
          <option value="green">Green Hardwood</option>
          <option value="unsure">Not sure yet</option>
        </Select>
        <Select label="Volume" name="volume" required>
          <option value="">Select a volume</option>
          <option value="0.5">1/2 Cord</option>
          <option value="1">1 Cord</option>
          <option value="2">2 Cords</option>
          <option value="3">3 Cords</option>
          <option value="4+">4+ Cords</option>
          <option value="custom">Custom / Wholesale</option>
        </Select>
      </div>
      <Field
        label="Preferred Delivery Window"
        name="delivery_window"
        placeholder="e.g. Next week, weekday mornings"
      />
      <TextArea
        label="Additional Notes"
        name="notes"
        placeholder="Stacking requests, access constraints, commercial inquiries, custom lengths, etc."
      />

      {/* honeypot */}
      <div className="hidden" aria-hidden>
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="btn-primary"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Send My Order Request"}
        </button>
        <p className="mt-3 text-xs text-charcoal/60">
          We'll respond within one business day to confirm pricing and schedule
          delivery. No payment collected online.
        </p>
        {status === "error" && (
          <p className="mt-3 text-sm text-red-700">
            {errorMsg ?? "Something went wrong. Please try again or call us directly."}
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.14em] text-charcoal/70">
        {label}
        {required && <span className="text-amber"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border border-charcoal/30 bg-offwhite px-4 py-3 text-base focus:outline-none focus:border-amber"
      />
    </label>
  );
}

function Select({
  label,
  name,
  required,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.14em] text-charcoal/70">
        {label}
        {required && <span className="text-amber"> *</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full border border-charcoal/30 bg-offwhite px-4 py-3 text-base focus:outline-none focus:border-amber"
      >
        {children}
      </select>
    </label>
  );
}

function TextArea({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.14em] text-charcoal/70">
        {label}
      </span>
      <textarea
        name={name}
        rows={5}
        placeholder={placeholder}
        className="mt-2 w-full border border-charcoal/30 bg-offwhite px-4 py-3 text-base focus:outline-none focus:border-amber"
      />
    </label>
  );
}
