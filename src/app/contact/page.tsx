import { pageMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { OrderForm } from "@/components/OrderForm";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Order Firewood & Contact Zagwyn",
  description:
    "Request a firewood delivery from Zagwyn Firewood in Shirley, MA. Call Alex or David directly, or submit an order request and we'll confirm within one business day.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-offwhite border-b border-charcoal/10">
        <div className="container-wide py-14 sm:py-20 md:py-24">
          <SectionHeading
            as="h1"
            eyebrow="Contact & Orders"
            title="Place an order — or just ask a question."
            lede="Two ways to reach us. Phone is fastest. The form below gets you on our schedule and we'll call back to confirm pricing and delivery within one business day."
          />
        </div>
      </section>

      <section className="bg-charcoal text-offwhite">
        <div className="container-wide py-10 sm:py-16 grid gap-6 sm:gap-8 md:grid-cols-2">
          {site.phones.map((p) => (
            <a
              key={p.number}
              href={p.href}
              className="block border border-offwhite/20 hover:border-amber p-6 sm:p-8 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="eyebrow mb-2">{p.label}</div>
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl text-amber">
                {p.number}
              </div>
              <div className="mt-3 text-offwhite/70 text-sm uppercase tracking-[0.12em]">
                Tap to call →
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-offwhite">
        <div className="container-wide py-14 sm:py-20 md:py-24 grid gap-10 sm:gap-14 md:grid-cols-[1.3fr_1fr]">
          <div>
            <div className="eyebrow mb-3">Order Request Form</div>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              Tell us what you need and we'll follow up.
            </h2>
            <p className="mt-4 text-charcoal/75 max-w-xl">
              This form doesn't charge you anything. When you submit,
              we'll call or email to confirm pricing, availability, and
              a delivery window — then we schedule the drop.
            </p>
            <div className="mt-10">
              <OrderForm />
            </div>
          </div>

          <aside className="space-y-10">
            <div>
              <div className="eyebrow mb-3">Business Hours</div>
              <ul className="space-y-1 text-charcoal/80">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4 border-b border-charcoal/10 py-2">
                    <span>{h.day}</span>
                    <span className="text-charcoal/60">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="eyebrow mb-3">Yard Location</div>
              <p className="text-charcoal/80">
                {site.address.street}
                <br />
                {site.address.locality}, {site.address.region}{" "}
                {site.address.postalCode}
              </p>
              <p className="mt-2 text-sm text-charcoal/60">
                Yard visits by appointment.
              </p>
            </div>
            <div>
              <div className="eyebrow mb-3">Payment</div>
              <p className="text-charcoal/80">
                {site.payments.join(" · ")}
              </p>
              <p className="mt-2 text-sm text-charcoal/60">
                Payment is collected at delivery, not online.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
