import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.summitdoorpros.com';

export const metadata: Metadata = {
  title: 'Garage Door Tips & Insights | Summit Door Pros Blog',
  description:
    'Garage Door safety tips, spring & cable repair guides, and door maintenance advice for Waco and Central Texas homeowners from Summit Door Pros.',
  alternates: { canonical: `${BASE_URL}/blogs` },
  openGraph: {
    title: 'Garage Door Tips & Insights | Summit Door Pros Blog',
    description: 'Practical garage door guidance for Central Texas homeowners.',
    url: `${BASE_URL}/blogs`,
    siteName: 'Summit Door Pros',
    locale: 'en_US',
    type: 'website',
  },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
