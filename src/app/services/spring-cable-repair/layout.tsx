import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.summitdoorpros.com';
const url = BASE_URL + '/services/spring-cable-repair';

export const metadata: Metadata = {
  title: "Garage Door Spring & Cable Repair Waco TX | Summit Door Pros",
  description: "Torsion and extension spring replacement and cable repair in Waco, TX. Lifetime Spring Warranty, same-day service, flat-rate pricing, IDA-trained technicians.",
  keywords: [
    "garage door spring replacement Waco TX",
    "broken torsion spring Waco",
    "garage door cable repair Central Texas",
    "spring replacement Waco TX",
    "Summit Door Pros",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Garage Door Spring & Cable Repair Waco TX | Summit Door Pros",
    description: "Torsion and extension spring replacement and cable repair in Waco, TX. Lifetime Spring Warranty, same-day service, flat-rate pricing, IDA-trained technicians.",
    url,
    siteName: "Summit Door Pros",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Door Spring & Cable Repair Waco TX | Summit Door Pros",
    description: "Torsion and extension spring replacement and cable repair in Waco, TX. Lifetime Spring Warranty, same-day service, flat-rate pricing, IDA-trained technicians.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Spring & Cable Repair",
  description: "Torsion and extension spring replacement and cable repair in Waco, TX. Lifetime Spring Warranty, same-day service, flat-rate pricing, IDA-trained technicians.",
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
  serviceType: "Spring & Cable Repair",
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
