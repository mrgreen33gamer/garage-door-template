import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.summitdoorpros.com';
const url = `${BASE_URL}/industries/homebuilders`;

export const metadata: Metadata = {
  title: "Garage Doors for Homebuilders & Remodelers | Summit Door Pros Waco TX",
  description: "Production-ready garage door and opener packages for homebuilders and remodelers in Waco and Central Texas. Plan pricing, consistent crews, close-date scheduling.",
  keywords: ["homebuilder garage doors Waco", "new construction garage door install", "builder door packages Texas", "Summit Door Pros"],
  alternates: { canonical: url },
  openGraph: {
    title: "Garage Doors for Homebuilders | Summit Door Pros",
    description: "Production-ready door packages for Central Texas builders.",
    url, siteName: "Summit Door Pros", locale: "en_US", type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
