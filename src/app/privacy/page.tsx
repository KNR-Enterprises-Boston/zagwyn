import { pageMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Zagwyn Firewood handles your information.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <section className="bg-offwhite">
      <div className="container-wide max-w-3xl py-20 md:py-28">
        <SectionHeading as="h1" eyebrow="Privacy" title="How we handle your information." />
        <div className="mt-10 space-y-5 text-charcoal/80 leading-relaxed">
          <p>
            When you contact Zagwyn Firewood through this site, we collect the
            information you submit (name, phone number, email, delivery
            location, order details) only to respond to your request and
            schedule your delivery. We don't sell, trade, or share your
            information with third parties.
          </p>
          <p>
            Our website uses basic analytics to understand how visitors find
            us and which pages are useful. No personally identifying
            information is sold or shared.
          </p>
          <p>
            If you have questions about your information, call Alex at{" "}
            <a href="tel:+19785015184" className="underline hover:text-amber">
              978-501-5184
            </a>
            .
          </p>
          <p className="text-sm text-charcoal/60">
            This is a brief placeholder policy. Replace with a full policy
            reviewed by counsel before launch.
          </p>
        </div>
      </div>
    </section>
  );
}
