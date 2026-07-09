import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.summitdoorpros.com';
const url = `${BASE_URL}/about`;

export const metadata: Metadata = {
  title: "About Summit Door Pros — Waco TX Garage Door Company Since 2011",
  description:
    "Meet the Summit Door Pros team. Locally owned and operated in Waco, Texas since 2011. IDA-trained technicians, bonded & insured, honest pricing, and a Lifetime Spring Warranty + 2-Year Workmanship. Serving Waco, Hewitt, Woodway, Temple, Killeen, and all of Central Texas.",
  keywords: [
    "about Summit Door Pros",
    "Waco garage door company",
    "garage door contractor Waco TX",
    "locally owned garage door Waco",
    "IDA trained garage door Waco Texas",
    "Marcus Hale Summit Door Pros",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "About Summit Door Pros — Waco TX Garage Door Company Since 2011",
    description:
      "Locally owned garage door company in Waco, TX. IDA-trained, flat-rate pricing, Lifetime Spring Warranty + 2-Year Workmanship.",
    url,
    siteName: "Summit Door Pros",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Summit Door Pros — Waco TX Since 2011",
    description: "Locally owned garage door company in Waco, TX. IDA-trained, flat-rate pricing.",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "Summit Door Pros",
  url: BASE_URL,
  telephone: "+12547201100",
  email: "hello@summitdoorpros.com",
  foundingDate: "2011",
  founder: {
    "@type": "Person",
    name: "Marcus Hale",
    jobTitle: "Owner & Lead Garage Door Technician",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "1401 Franklin Ave",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76701",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/summitdoorpros",
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      {children}
    </>
  );
}
