import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.summitdoorpros.com';
const url = BASE_URL + '/services/new-door-installation';

export const metadata: Metadata = {
  title: "New Garage Door Installation Waco TX | Summit Door Pros",
  description: "New residential garage door installation in Waco and Central Texas. Steel, insulated, carriage-house styles. Flat-rate pricing, IDA-trained crew, 2-Year Workmanship.",
  keywords: [
    "new garage door installation Waco TX",
    "garage door replacement Waco",
    "insulated garage door Central Texas",
    "carriage house garage door Waco",
    "Summit Door Pros",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "New Garage Door Installation Waco TX | Summit Door Pros",
    description: "New residential garage door installation in Waco and Central Texas. Steel, insulated, carriage-house styles. Flat-rate pricing, IDA-trained crew, 2-Year Workmanship.",
    url,
    siteName: "Summit Door Pros",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Garage Door Installation Waco TX | Summit Door Pros",
    description: "New residential garage door installation in Waco and Central Texas. Steel, insulated, carriage-house styles. Flat-rate pricing, IDA-trained crew, 2-Year Workmanship.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "New Door Installation",
  description: "New residential garage door installation in Waco and Central Texas. Steel, insulated, carriage-house styles. Flat-rate pricing, IDA-trained crew, 2-Year Workmanship.",
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
  serviceType: "New Door Installation",
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
