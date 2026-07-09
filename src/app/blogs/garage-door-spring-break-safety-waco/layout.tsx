import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.summitdoorpros.com';
const url = `${BASE_URL}/blogs/garage-door-spring-break-safety-waco`;

export const metadata: Metadata = {
  title: "Garage Door Spring Break Safety in Waco TX | Summit Door Pros",
  description: "What to do when a garage door spring breaks in Waco, TX. Safety tips, why DIY is dangerous, and when to call for same-day spring replacement.",
  alternates: { canonical: url },
  openGraph: {
    title: "Garage Door Spring Break Safety in Waco TX",
    description: "Safety guide for broken garage door springs in Central Texas.",
    url, siteName: "Summit Door Pros", locale: "en_US", type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
