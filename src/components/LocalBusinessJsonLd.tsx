import { site } from "@/lib/site";
import { allServicedTowns } from "@/content/towns";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}#business`,
    name: site.name,
    alternateName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phones.map((p) => p.number),
    priceRange: "$$",
    paymentAccepted: site.payments.join(", "),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: allServicedTowns.map((t) => ({
      "@type": "City",
      name: `${t}, MA`,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    makesOffer: [
      { "@type": "Offer", name: "Kiln-Dried Hardwood" },
      { "@type": "Offer", name: "Seasoned Hardwood" },
      { "@type": "Offer", name: "Green Hardwood" },
    ],
    category: "Firewood Supplier",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
