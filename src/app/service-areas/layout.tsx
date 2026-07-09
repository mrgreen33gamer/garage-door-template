import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.summitdoorpros.com';
const url = `${BASE_URL}/service-areas`;

export const metadata: Metadata = {
  title: 'Garage Door Service Areas | Waco, Hewitt, Killeen, Temple & Central Texas | Summit Door Pros',
  description:
    'Summit Door Pros serves Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Killeen, Temple, and all of Central Texas. Flat-rate pricing, same-day service, Lifetime Spring Warranty + 2-Year Workmanship.',
  keywords: [
    'garage door service areas Central Texas',
    'garage door repair Waco TX',
    'garage door technician Hewitt TX',
    'garage door technician Killeen TX',
    'garage door technician Temple TX',
    'Summit Door Pros service areas',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Garage Door Service Areas | Summit Door Pros — Central Texas',
    description:
      'Serving Waco and all of Central Texas with flat-rate garage door repair, spring & cable repair, and installation. Same-day service available.',
    url,
    siteName: 'Summit Door Pros',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garage Door Service Areas | Summit Door Pros — Central Texas',
    description: 'Waco, Temple, Killeen, and surrounding Central Texas — IDA-trained garage door service.',
  },
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
