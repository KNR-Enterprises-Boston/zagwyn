import Link from "next/link";
import { site } from "@/lib/site";
import { allServicedTowns } from "@/content/towns";
import { NewsletterSignup } from "./NewsletterSignup";

export function Footer() {
  return (
    <footer className="bg-charcoal text-offwhite">
      <div className="container-wide py-12 sm:py-16">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-3">
          <div>
            <div className="font-serif text-xl sm:text-2xl">
              Zagwyn<span className="text-amber"> Firewood</span>
            </div>
            <p className="mt-3 text-offwhite/70 max-w-xs text-sm sm:text-base">{site.tagline}</p>
            <div className="mt-5 sm:mt-6 space-y-1 text-sm">
              {site.phones.map((p) => (
                <div key={p.number}>
                  <span className="text-offwhite/60">{p.label}: </span>
                  <a href={p.href} className="hover:text-amber transition-colors">
                    {p.number}
                  </a>
                </div>
              ))}
              <div className="mt-3 text-offwhite/60">
                {site.address.street}
                <br />
                {site.address.locality}, {site.address.region}{" "}
                {site.address.postalCode}
              </div>
            </div>
          </div>

          <div>
            <div className="eyebrow mb-4">Explore</div>
            <ul className="space-y-2 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-offwhite/80 hover:text-amber transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="text-offwhite/60 hover:text-amber transition-colors"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-4">Stay In Touch</div>
            <NewsletterSignup />
            <div className="mt-6 sm:mt-8">
              <div className="eyebrow mb-3">Towns We Deliver To</div>
              <p className="text-xs text-offwhite/60 leading-relaxed">
                {allServicedTowns.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-offwhite/10">
        <div className="container-wide py-5 sm:py-6 text-xs text-offwhite/50 flex flex-col sm:flex-row justify-between gap-2">
          <div>
            © {new Date().getFullYear()} Zagwyn Contracting. All rights reserved.
          </div>
          <div>Shirley, Massachusetts</div>
        </div>
      </div>
    </footer>
  );
}
