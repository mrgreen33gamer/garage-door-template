import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.summitdoorpros.com';
const url = BASE_URL + '/services/opener-installation';

export const metadata: Metadata = {
  title: "Garage Door Opener Installation Waco TX | Summit Door Pros",
  description: "Garage door opener installation in Waco, TX. Chain, belt, and smart openers for LiftMaster, Genie, Chamberlain. Photo-eyes, app setup, flat-rate pricing.",
  keywords: [
    "garage door opener installation Waco TX",
    "LiftMaster install Waco",
    "smart garage door opener Central Texas",
    "Genie opener installation Waco",
    "Summit Door Pros",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Garage Door Opener Installation Waco TX | Summit Door Pros",
    description: "Garage door opener installation in Waco, TX. Chain, belt, and smart openers for LiftMaster, Genie, Chamberlain. Photo-eyes, app setup, flat-rate pricing.",
    url,
    siteName: "Summit Door Pros",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage Door Opener Installation Waco TX | Summit Door Pros",
    description: "Garage door opener installation in Waco, TX. Chain, belt, and smart openers for LiftMaster, Genie, Chamberlain. Photo-eyes, app setup, flat-rate pricing.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Opener Installation",
  description: "Garage door opener installation in Waco, TX. Chain, belt, and smart openers for LiftMaster, Genie, Chamberlain. Photo-eyes, app setup, flat-rate pricing.",
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
  serviceType: "Opener Installation",
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
