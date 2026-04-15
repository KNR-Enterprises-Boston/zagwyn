import type { Metadata } from "next";
import { Oswald, DM_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrustBar } from "@/components/TrustBar";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { site } from "@/lib/site";
import "./globals.css";

// Oswald: condensed sans — reads like a truck decal or lumber yard sign.
// Perfect for an industrial New England firewood operation.
const display = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

// DM Sans: clean, slightly warm sans for body copy.
const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  icons: { icon: "/favicon.ico" },
  openGraph: {
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <LocalBusinessJsonLd />
        <Header />
        <TrustBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
