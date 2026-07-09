// libs/local-db/reviews.ts
// ─────────────────────────────────────────────────────────────────────────────
// Static testimonials for Summit Door Pros — used by Testimonials component,
// schema markup, and aggregate rating in layout.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Spring & Cable Repair',
    text:     "Our garage door slammed shut mid-open — broken torsion spring. Summit Door Pros had a tech at our house the same afternoon, replaced both springs, and balanced the door perfectly. Lifetime spring warranty and clear pricing. Highly recommend.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Garage Door Repair',
    text:     'Woke up to a door that would not open for work. Called Summit and they had someone at my door by 9am. Fixed a snapped cable and bad roller the same day, fair price. This is the kind of service you tell your neighbors about.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Opener Installation',
    text:     'Had three companies quote a new smart opener. Summit was honest about the wall wiring and photo-eye placement we actually needed — not just upselling the most expensive unit. Clean install, quiet opener, and they walked us through the app.',
  },
  {
    name:     'Patricia L.',
    location: 'Temple, TX',
    rating:   5,
    date:     'December 2025',
    service:  'New Door Installation',
    text:     'They removed our old dented double door and installed an insulated carriage-house style. The layout advice was excellent and the finish work was clean. Curb appeal went way up — worth every penny.',
  },
  {
    name:     'David M.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Commercial Doors',
    text:     'We hired Summit for rolling steel door service at our warehouse. They handled the springs, tracks, and safety edges over a weekend so we would not lose operations. Finished ahead of schedule. Professional from start to finish.',
  },
  {
    name:     'Angela W.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Door Maintenance Plans',
    text:     'Signed up for their maintenance plan after years of ignoring lubrication and spring tension. Door is quieter, safer, and they catch small issues before they strand us. My new go-to garage door company for life.',
  },
  {
    name:     'Robert H.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Garage Door Repair',
    text:     'Off-track door after a storm. Summit straightened the track, replaced rollers, and rebalanced everything. Fair pricing, no after-hours gouge. Highly recommend for emergency garage door repair.',
  },
  {
    name:     'Cheryl B.',
    location: 'McGregor, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Spring & Cable Repair',
    text:     'Called about a loud bang and a door that would not lift. Broken cable and tired springs. They treated it like it mattered, explained safety clearly, and finished the same visit. Thank you.',
  },
];

export default reviews;
