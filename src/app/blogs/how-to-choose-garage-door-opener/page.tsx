'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faCogs, faVolumeLow, faWifi, faCarBattery, faShieldHalved, faDollarSign, faWrench } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Choosing a garage door opener isn't just about brand names. Drive type, horsepower, smart features, and battery backup all matter — especially if you have living space above the garage or want phone control. Here's a practical guide for Waco and Central Texas homeowners.",
  },
  {
    type: 'cards',
    heading: 'Key Opener Decisions',
    cards: [
      { icon: faCogs, title: 'Chain vs belt vs screw', body: 'Chain drives are durable and cost-effective. Belt drives are quieter for rooms above the garage. Screw drives have fewer moving parts but can be noise-sensitive in cold weather.' },
      { icon: faVolumeLow, title: 'Noise matters in Texas homes', body: 'If a bedroom or bonus room sits above the garage, a belt-drive opener is usually worth the upgrade.' },
      { icon: faWifi, title: 'Smart / Wi-Fi openers', body: 'Phone apps, guest access, and delivery modes are popular. Confirm your Wi-Fi reaches the garage before you buy.' },
      { icon: faCarBattery, title: 'Battery backup', body: 'Texas storms and outages make battery backup useful so you can still open the door when power is out.' },
      { icon: faShieldHalved, title: 'Safety sensors are non-negotiable', body: 'Photo-eyes must be aligned and safety reverse tested after every install — never skip this step.' },
      { icon: faDollarSign, title: 'Match horsepower to door weight', body: 'Heavier insulated doors need appropriately sized operators. Undersized openers wear out early.' },
      { icon: faWrench, title: 'Balance the door first', body: 'A new opener on a poorly balanced door is a recipe for motor failure. Springs and cables should be checked first.' },
    ],
  },
  {
    type: 'table',
    heading: 'Opener Type Comparison',
    tableHeaders: ['Type', 'Best For', 'Tradeoff'],
    tableRows: [
      ['Chain drive', 'Budget, durability', 'Louder operation'],
      ['Belt drive', 'Quiet homes / rooms above garage', 'Slightly higher cost'],
      ['Screw drive', 'Simple mechanism', 'Noise can vary with temperature'],
      ['Smart Wi-Fi', 'App control & access sharing', 'Needs reliable garage Wi-Fi'],
      ['Battery backup', 'Storm readiness', 'Battery maintenance over years'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Don't buy an opener online and DIY the install if you're unsure about spring balance or sensor wiring. A flat-rate pro install includes programming, safety testing, and warranty support.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Decide if quiet operation or smart features are must-haves',
      'Have springs and door balance inspected before installing a new opener',
      'Confirm outlet location and ceiling mount structure',
      'Ask for photo-eye alignment and force limit testing',
      'Get a flat-rate install quote from Summit Door Pros',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="How to Choose a Garage Door Opener for Your Waco Home"
        description="Chain, belt, or screw drive? Horsepower, smart features, and battery backup — an honest guide to picking the right opener for Central Texas homes."
        imageSrc="/pages/blogs/energy-savings.jpg"
        imageAlt="How to choose a garage door opener guide for Waco TX"
        category="Installation"
        date="June 24, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Ready for a New Opener?"
        body="Summit Door Pros installs LiftMaster, Genie, Chamberlain, and more — flat-rate pricing, full safety setup."
        buttonText="Schedule Opener Install"
        buttonHref="/services/opener-installation"
      />
      <NewsletterSignup variant={1} spot="how-to-choose-garage-door-opener-blog" />
    </>
  );
}
