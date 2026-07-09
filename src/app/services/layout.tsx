// src/app/services/layout.tsx
// Summit Door Pros — /services parent layout
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.summitdoorpros.com';
const url = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: "Garage Door Services | Repair, Springs, Openers & More | Summit Door Pros",
  description:
    "Summit Door Pros offers garage door repair, spring & cable repair, new door installation, opener installation, maintenance plans, and commercial doors for Waco and Central Texas. IDA-trained, Lifetime Spring Warranty + 2-Year Workmanship.",
  keywords: [
    "garage door repair Waco TX",
    "garage door services Waco",
    "spring replacement Central Texas",
    "garage door opener installation Waco TX",
    "garage door company Texas",
    "commercial garage doors Waco",
    "IDA trained garage door Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Garage Door Services | Summit Door Pros",
    description:
      "Repair, springs, new doors, openers, maintenance, and commercial doors for Waco and Central Texas. IDA-trained, Lifetime Spring Warranty + 2-Year Workmanship.",
    url,
    siteName: "Summit Door Pros",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Door Services | Summit Door Pros",
    description: "Repair, springs, openers & more for Central Texas. IDA-trained.",
  },
  robots: { index: true, follow: true },
};

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Summit Door Pros — Garage Door Services",
  description:
    "Residential and commercial garage door services for Waco and Central Texas: repair, springs & cables, new doors, openers, maintenance, and commercial doors.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "Summit Door Pros",
    url: BASE_URL,
    telephone: "+12547201100",
    address: { "@type": "PostalAddress", addressLocality: "Waco", addressRegion: "TX", addressCountry: "US" },
  },
  itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Garage Door Repair", url: `${BASE_URL}/services/garage-door-repair` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Spring & Cable Repair", url: `${BASE_URL}/services/spring-cable-repair` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "New Door Installation", url: `${BASE_URL}/services/new-door-installation` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Opener Installation", url: `${BASE_URL}/services/opener-installation` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Door Maintenance Plans", url: `${BASE_URL}/services/door-maintenance` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Doors", url: `${BASE_URL}/services/commercial-doors` } },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }} />
      {children}
    </>
  );
}
