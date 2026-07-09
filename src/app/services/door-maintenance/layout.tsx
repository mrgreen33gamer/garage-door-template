import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.summitdoorpros.com';
const url = BASE_URL + '/services/door-maintenance';

export const metadata: Metadata = {
  title: "Garage Door Maintenance Plans Waco TX | Summit Door Pros",
  description: "Garage door maintenance plans in Waco and Central Texas. Lubrication, balance, safety reverse testing, and spring inspection. Month-to-month options, no contracts.",
  keywords: [
    "garage door maintenance Waco TX",
    "garage door tune up Central Texas",
    "garage door safety inspection Waco",
    "maintenance plan garage door",
    "Summit Door Pros",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Garage Door Maintenance Plans Waco TX | Summit Door Pros",
    description: "Garage door maintenance plans in Waco and Central Texas. Lubrication, balance, safety reverse testing, and spring inspection. Month-to-month options, no contracts.",
    url,
    siteName: "Summit Door Pros",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Door Maintenance Plans Waco TX | Summit Door Pros",
    description: "Garage door maintenance plans in Waco and Central Texas. Lubrication, balance, safety reverse testing, and spring inspection. Month-to-month options, no contracts.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Door Maintenance Plans",
  description: "Garage door maintenance plans in Waco and Central Texas. Lubrication, balance, safety reverse testing, and spring inspection. Month-to-month options, no contracts.",
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
  serviceType: "Door Maintenance Plans",
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
