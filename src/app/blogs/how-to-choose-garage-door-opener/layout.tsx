import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.summitdoorpros.com';
const url = `${BASE_URL}/blogs/how-to-choose-garage-door-opener`;

export const metadata: Metadata = {
  title: "How to Choose a Garage Door Opener | Waco TX Guide | Summit Door Pros",
  description: "Chain vs belt vs screw drive, smart openers, battery backup, and safety — how to choose the right garage door opener for your Waco home.",
  alternates: { canonical: url },
  openGraph: {
    title: "How to Choose a Garage Door Opener | Waco TX",
    description: "Practical opener buying guide for Central Texas homeowners.",
    url, siteName: "Summit Door Pros", locale: "en_US", type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
