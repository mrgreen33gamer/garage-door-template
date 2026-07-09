'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faDoorOpen, faDollarSign, faTemperatureHigh, faShieldHalved, faWrench, faClock, faHouseChimney } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Not every problem needs a new garage door. Springs, rollers, and openers can often be repaired. But when panels rust through, repairs stack up, or insulation fails in Texas heat, replacement becomes the smarter investment. Here are seven signs we use on assessments across Waco and Central Texas.",
  },
  {
    type: 'cards',
    heading: '7 Signs Replacement Makes Sense',
    cards: [
      { icon: faDoorOpen, title: 'Panels are dented, cracked, or rusted through', body: 'Cosmetic damage is one thing; structural panel failure compromises safety and weather sealing.' },
      { icon: faDollarSign, title: 'Repair costs approach half a new door', body: 'If a single visit is nearing 50% of replacement cost — and the door is aging — stop throwing money at it.' },
      { icon: faTemperatureHigh, title: 'No insulation and a hot attached garage', body: 'Uninsulated doors transfer heat into living spaces. Modern insulated doors improve comfort and efficiency.' },
      { icon: faShieldHalved, title: 'Security is compromised', body: 'Warped doors, broken locks, or large gaps invite break-ins. A new door with modern locks is a security upgrade.' },
      { icon: faWrench, title: 'Constant repairs year after year', body: 'A pattern of rollers, hinges, cables, and panel patches means the system is worn out as a whole.' },
      { icon: faClock, title: 'Door is 15–25+ years old', body: 'Age alone isn\'t a reason to replace — but combined with wear, older doors often lack modern safety and insulation.' },
      { icon: faHouseChimney, title: 'Curb appeal is hurting resale', body: 'The garage door can be a large portion of your home\'s front elevation. A fresh door transforms first impressions.' },
    ],
  },
  {
    type: 'table',
    heading: 'Repair vs. Replace',
    tableHeaders: ['Factor', 'Repair', 'Replace'],
    tableRows: [
      ['Issue scope', 'Isolated part failure', 'Multiple systems failing'],
      ['Door age / condition', 'Structurally sound', 'Rusted, warped, or uninsulated'],
      ['Cost vs new door', 'Well under 50%', 'Approaching 50%+'],
      ['Energy / comfort goals', 'Not a priority', 'Want insulated performance'],
      ['Typical Waco outcome', 'Same-day fix', '1-day install after order'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Ask for an honest repair-vs-replace quote. Summit Door Pros will show you both paths with flat-rate numbers — no pressure either way.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Get a free on-site assessment of door condition and repair costs',
      'Compare insulated options if your garage is attached',
      'Decide if you want to upgrade the opener at the same time',
      'Ask about haul-away and warranty on installation',
      'Schedule measure and style consult with Summit Door Pros',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="7 Signs Your Garage Door Needs Replacement (Not Just Repair)"
        description="Dent-riddled panels, rising repair costs, and poor insulation can mean it is time for a new door. Here is how to decide repair vs. replace in Central Texas."
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt="Signs your garage door needs replacement in Central Texas"
        category="Replacement"
        date="June 15, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Wondering If It's Time for a New Door?"
        body="Get a free repair-vs-replace assessment from Summit Door Pros — flat-rate quotes, no pressure."
        buttonText="Schedule a Free Assessment"
        buttonHref="/services/new-door-installation"
      />
      <NewsletterSignup variant={1} spot="signs-garage-door-needs-replacement-blog" />
    </>
  );
}
