// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'garage-door-spring-break-safety-waco',
    title:    'Garage Door Spring Break Safety: What Waco Homeowners Must Know',
    excerpt:  'A broken torsion spring can slam a door shut or leave it stuck. Learn the warning signs, why DIY spring repair is dangerous, and when to call a pro in Central Texas.',
    category: 'Safety',
    date:     'July 3, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/heat-pump.jpg',
    imageAlt: 'Garage door spring break safety guide for Waco TX homeowners',
    featured: true,
  },
  {
    slug:     'how-to-choose-garage-door-opener',
    title:    'How to Choose a Garage Door Opener for Your Waco Home',
    excerpt:  'Chain, belt, or screw drive? Horsepower, smart features, and battery backup — an honest guide to picking the right opener for Central Texas homes.',
    category: 'Installation',
    date:     'June 24, 2026',
    readTime: 6,
    imageSrc: '/pages/blogs/energy-savings.jpg',
    imageAlt: 'How to choose a garage door opener guide for Waco TX',
  },
  {
    slug:     'signs-garage-door-needs-replacement',
    title:    '7 Signs Your Garage Door Needs Replacement (Not Just Repair)',
    excerpt:  'Dent-riddled panels, rising repair costs, and poor insulation can mean it is time for a new door. Here is how to decide repair vs. replace in Central Texas.',
    category: 'Replacement',
    date:     'June 15, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/ac-replacement.jpg',
    imageAlt: 'Signs your garage door needs replacement in Central Texas',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
