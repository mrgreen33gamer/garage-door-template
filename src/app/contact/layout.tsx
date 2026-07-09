// src/app/contact/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.summitdoorpros.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact Summit Door Pros | Schedule Service in Waco & Central Texas',
  description:
    'Contact Summit Door Pros to schedule garage door repair, spring & cable repair, or a free estimate. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (254) 720-1100.',
  keywords: [
    'contact Summit Door Pros',
    'garage door service Waco TX',
    'schedule garage door repair Waco',
    'garage door estimate Central Texas',
    'Summit Door Pros contact',
    '254-720-1100',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact Summit Door Pros | Schedule Service in Waco & Central Texas',
    description:
      'Call, text, or submit a request. Same-day service available. Flat-rate pricing, Lifetime Spring Warranty + 2-Year Workmanship, IDA-trained garage door technicians.',
    url,
    siteName: 'Summit Door Pros',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Summit Door Pros | Waco & Central Texas',
    description: 'Schedule garage door service or get a free estimate. Call (254) 720-1100.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
