'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faBolt, faExclamationTriangle, faShieldHalved, faWrench, faClock, faHouseChimney, faBan } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "A garage door spring stores hundreds of pounds of force. When it breaks — often with a loud bang — the door can slam shut, refuse to open, or leave your opener straining. In Waco and across Central Texas, spring failures spike after temperature swings and after years of daily cycles. Here's what every homeowner should know before anyone reaches for a winding bar.",
  },
  {
    type: 'cards',
    heading: 'Spring Break Safety Essentials',
    cards: [
      { icon: faBolt, title: 'That loud bang is a spring (usually)', body: 'A sudden bang followed by a door that won\'t lift is classic torsion spring failure. Stop using the opener immediately.' },
      { icon: faBan, title: 'Never try DIY spring winding', body: 'Improper winding bars or improvised tools can cause serious injury. Springs should only be serviced by trained technicians.' },
      { icon: faExclamationTriangle, title: 'Don\'t force the opener', body: 'Openers are not designed to lift an unbalanced door. Running them after a spring break can burn out the motor or snap cables.' },
      { icon: faShieldHalved, title: 'Replace springs in pairs', body: 'Springs wear together. Replacing only one often leads to the second failing soon after and leaves the door unbalanced.' },
      { icon: faWrench, title: 'Cables need inspection too', body: 'Broken springs often stress cables and drums. A proper repair includes cable condition and door balance.' },
      { icon: faClock, title: 'Same-day help is available', body: 'Summit Door Pros prioritizes spring emergencies across Waco, Hewitt, Woodway, Temple, and Killeen.' },
      { icon: faHouseChimney, title: 'Lifetime Spring Warranty matters', body: 'Ask whether springs are warrantied for life and whether workmanship is covered — not just parts.' },
    ],
  },
  {
    type: 'table',
    heading: 'What To Do After a Spring Breaks',
    tableHeaders: ['Step', 'Do This', 'Avoid This'],
    tableRows: [
      ['1', 'Disconnect opener and stay clear of the door', 'Forcing the door open by hand or motor'],
      ['2', 'Call a trained garage door technician', 'YouTube DIY spring winding'],
      ['3', 'Get a flat-rate written quote', 'Approving open-ended hourly work'],
      ['4', 'Replace both springs + check cables', 'Replacing only the broken spring'],
      ['5', 'Test balance and safety reverse', 'Leaving without a balance check'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: If you heard a bang and the door won't open, call (254) 720-1100. Same-day spring service is available across Central Texas — Lifetime Spring Warranty on every spring we install.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Stop using the opener until springs are repaired',
      'Clear kids and pets away from the door path',
      'Schedule same-day spring service with an IDA-trained tech',
      'Ask for paired spring replacement and cable inspection',
      'Consider a maintenance plan to catch wear before the next bang',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Garage Door Spring Break Safety: What Waco Homeowners Must Know"
        description="A broken torsion spring can slam a door shut or leave it stuck. Learn the warning signs, why DIY spring repair is dangerous, and when to call a pro in Central Texas."
        imageSrc="/pages/blogs/heat-pump.jpg"
        imageAlt="Garage door spring break safety guide for Waco TX homeowners"
        category="Safety"
        date="July 3, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Heard a Bang? Stuck Door?"
        body="Get same-day spring service from Summit Door Pros — IDA-trained technicians with a Lifetime Spring Warranty."
        buttonText="Schedule Spring Service"
        buttonHref="/services/spring-cable-repair"
      />
      <NewsletterSignup variant={1} spot="garage-door-spring-break-safety-blog" />
    </>
  );
}
