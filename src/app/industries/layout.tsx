import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.summitdoorpros.com';
const url = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: "Industries We Serve | Property Management, Homebuilders & Commercial | Summit Door Pros",
  description:
    "Summit Door Pros serves property management companies, homebuilders & remodelers, and commercial facilities across Waco and Central Texas with garage door repair, installation, and maintenance.",
  keywords: [
    "garage door property management Waco",
    "homebuilder garage doors Texas",
    "commercial garage doors Waco TX",
    "multi-unit garage door service",
    "Summit Door Pros industries",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Industries We Serve | Summit Door Pros",
    description: "Garage door programs for property managers, homebuilders, and commercial facilities in Central Texas.",
    url,
    siteName: "Summit Door Pros",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
