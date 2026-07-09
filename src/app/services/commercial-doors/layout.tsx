import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.summitdoorpros.com';
const url = BASE_URL + '/services/commercial-doors';

export const metadata: Metadata = {
  title: "Commercial Garage Doors Waco TX | Rolling Steel & Sectional | Summit Door Pros",
  description: "Commercial garage door service in Waco, TX. Rolling steel, sectional, and high-cycle doors for warehouses, retail, and multi-unit properties. IDA-trained, bonded & insured.",
  keywords: [
    "commercial garage doors Waco TX",
    "rolling steel door repair Waco",
    "warehouse door service Central Texas",
    "commercial overhead door Waco",
    "Summit Door Pros",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Commercial Garage Doors Waco TX | Rolling Steel & Sectional | Summit Door Pros",
    description: "Commercial garage door service in Waco, TX. Rolling steel, sectional, and high-cycle doors for warehouses, retail, and multi-unit properties. IDA-trained, bonded & insured.",
    url,
    siteName: "Summit Door Pros",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Garage Doors Waco TX | Rolling Steel & Sectional | Summit Door Pros",
    description: "Commercial garage door service in Waco, TX. Rolling steel, sectional, and high-cycle doors for warehouses, retail, and multi-unit properties. IDA-trained, bonded & insured.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Doors",
  description: "Commercial garage door service in Waco, TX. Rolling steel, sectional, and high-cycle doors for warehouses, retail, and multi-unit properties. IDA-trained, bonded & insured.",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "Summit Door Pros",
    url: BASE_URL,
    telephone: "+12547201100",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1401 Franklin Ave",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76701",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "Commercial Doors",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
