import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.summitdoorpros.com';
const url = `${BASE_URL}/industries/commercial-facilities`;

export const metadata: Metadata = {
  title: "Commercial Facility Garage Doors | Summit Door Pros Waco TX",
  description: "Rolling steel, sectional, and high-cycle commercial garage door service for warehouses, retail, and industrial facilities in Waco and Central Texas.",
  keywords: ["commercial garage doors Waco", "rolling steel door repair", "warehouse door service Texas", "Summit Door Pros"],
  alternates: { canonical: url },
  openGraph: {
    title: "Commercial Facility Garage Doors | Summit Door Pros",
    description: "Commercial door service for Central Texas facilities.",
    url, siteName: "Summit Door Pros", locale: "en_US", type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
