import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.summitdoorpros.com';
const url = `${BASE_URL}/industries/property-management`;

export const metadata: Metadata = {
  title: "Garage Doors for Property Management | Summit Door Pros Waco TX",
  description: "Multi-unit garage door repair, springs, openers, and maintenance for property managers across Waco and Central Texas. COIs available, volume pricing.",
  keywords: ["property management garage doors Waco", "apartment garage door repair", "multi-unit door service Texas", "Summit Door Pros"],
  alternates: { canonical: url },
  openGraph: {
    title: "Garage Doors for Property Management | Summit Door Pros",
    description: "Portfolio-wide garage door service for property managers in Central Texas.",
    url, siteName: "Summit Door Pros", locale: "en_US", type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
