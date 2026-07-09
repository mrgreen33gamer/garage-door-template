import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.summitdoorpros.com';
const url = BASE_URL + '/services/garage-door-repair';

export const metadata: Metadata = {
  title: "Garage Door Repair Waco TX | Same-Day Fixes | Summit Door Pros",
  description: "Same-day garage door repair in Waco and Central Texas. Off-track doors, rollers, hinges, cables — flat-rate pricing, IDA-trained, Lifetime Spring Warranty + 2-Year Workmanship.",
  keywords: [
    "garage door repair Waco TX",
    "garage door technician Waco",
    "broken garage door Central Texas",
    "off track garage door Waco",
    "emergency garage door repair Waco TX",
    "Summit Door Pros",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Garage Door Repair Waco TX | Same-Day Fixes | Summit Door Pros",
    description: "Same-day garage door repair in Waco and Central Texas. Off-track doors, rollers, hinges, cables — flat-rate pricing, IDA-trained, Lifetime Spring Warranty + 2-Year Workmanship.",
    url,
    siteName: "Summit Door Pros",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Door Repair Waco TX | Same-Day Fixes | Summit Door Pros",
    description: "Same-day garage door repair in Waco and Central Texas. Off-track doors, rollers, hinges, cables — flat-rate pricing, IDA-trained, Lifetime Spring Warranty + 2-Year Workmanship.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Garage Door Repair",
  description: "Same-day garage door repair in Waco and Central Texas. Off-track doors, rollers, hinges, cables — flat-rate pricing, IDA-trained, Lifetime Spring Warranty + 2-Year Workmanship.",
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
  serviceType: "Garage Door Repair",
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
