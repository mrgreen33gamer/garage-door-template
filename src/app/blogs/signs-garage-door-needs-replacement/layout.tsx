import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.summitdoorpros.com';
const url = `${BASE_URL}/blogs/signs-garage-door-needs-replacement`;

export const metadata: Metadata = {
  title: "7 Signs Your Garage Door Needs Replacement | Waco TX | Summit Door Pros",
  description: "When to repair vs replace a garage door in Waco, TX. Cost, age, insulation, and safety signs that mean it's time for a new door.",
  alternates: { canonical: url },
  openGraph: {
    title: "7 Signs Your Garage Door Needs Replacement | Waco TX",
    description: "Honest repair-vs-replace guide for Central Texas homeowners.",
    url, siteName: "Summit Door Pros", locale: "en_US", type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
