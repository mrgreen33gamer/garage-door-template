// Summit Door Pros — Opener Installation
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faCogs, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faWrench, faLink, faDoorOpen,
  faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function OpenerInstallationPage() {

  const expectations = [
    { icon: faSearch, title: "Opener Match to Door", description: "We size horsepower and drive type to your door weight — chain, belt, or screw — so the motor isn't under- or over-specced." },
    { icon: faFileContract, title: "Flat-Rate Install Quote", description: "Opener, rail, sensors, labor, and programming in one written number before work starts." },
    { icon: faCheckCircle, title: "Safety Setup Included", description: "Photo-eyes aligned, force limits set, safety reverse tested, remotes and wall control programmed." },
    { icon: faShieldHalved, title: "2-Year Workmanship", description: "Installation workmanship covered for two years on top of manufacturer parts warranty." },
  ];

  const whyFeatures = [
    { icon: faCogs, title: "All Major Brands", description: "LiftMaster, Genie, Chamberlain, Linear, and more — including smart Wi-Fi models." },
    { icon: faShieldHalved, title: "Balanced Door First", description: "We never install a new opener on a poorly balanced door. Springs and cables get checked first." },
    { icon: faClock, title: "Most Installs Same Day", description: "Standard opener swaps often complete in a few hours once you approve the quote." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Tell us your door type and whether you want smart features or battery backup.", icon: faHeadset },
    { number: 2, title: "Assess Door & Wiring", description: "We verify spring balance, outlet location, and ceiling mounting.", icon: faSearch },
    { number: 3, title: "Install & Program", description: "Mount unit, hang rail, wire sensors, set limits, pair remotes and apps.", icon: faFileContract },
    { number: 4, title: "Safety Test", description: "Force, reverse, and sensor tests before we pack up.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 2000, label: "Openers installed across Central Texas", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98, label: "Successful first-visit installs", suffix: "%", duration: 2 },
    { icon: faClock, value: 15, label: "Years installing openers in Waco", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Fastest opener installs from home base.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full opener coverage in Hewitt.", badge: "" },
    { town: "Woodway", benefit: "Popular for quiet belt-drive upgrades.", badge: "" },
    { town: "Temple", benefit: "Bell County opener installation.", badge: "" },
    { town: "Bellmead", benefit: "On our regular service route.", badge: "" },
    { town: "Killeen", benefit: "Full coverage including Fort Cavazos area.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Door balance check first", us: "✅ Always", others: "❌ Often skipped" },
    { feature: "Photo-eye alignment", us: "✅ Included", others: "❌ Rushed" },
    { feature: "Smart app setup", us: "✅ On request", others: "❌ DIY only" },
    { feature: "2-Year Workmanship", us: "✅ Every install", others: "❌ Limited" },
    { feature: "Flat-rate pricing", us: "✅ Written quote", others: "❌ Hourly" },
  ];

  const faq = [
    { question: "How much does garage door opener installation cost in Waco?", answer: "Most residential opener installs run $350–$750 depending on brand, drive type, and whether new wiring or drywall work is needed. We quote flat-rate before starting." },
    { question: "Chain vs belt drive — which should I choose?", answer: "Belt drives are quieter (better for rooms above the garage). Chain drives are durable and cost-effective. We'll match the choice to your home." },
    { question: "Do you install smart openers?", answer: "Yes — Wi-Fi openers with phone apps, MyQ-compatible systems, and battery backup options." },
    { question: "Can you install an opener if my door is manual only?", answer: "Yes — we add the rail, operator, sensors, and wall control, and verify springs can support powered operation." },
    { question: "Why did my new opener reverse randomly?", answer: "Usually photo-eyes are misaligned or force limits are wrong. We set both correctly and retest before leaving." },
    { question: "Do remotes and keypads come programmed?", answer: "Yes — remotes, keypads, and wall controls are programmed and tested as part of the install." },
  ];

  const crossServices = [
    { icon: faLink, title: "Spring & Cable Repair", body: "Balanced springs protect your new opener.", link: "/services/spring-cable-repair" },
    { icon: faDoorOpen, title: "New Door Installation", body: "Upgrade door and opener together.", link: "/services/new-door-installation" },
    { icon: faWrench, title: "Garage Door Repair", body: "Fix rollers and tracks before adding power.", link: "/services/garage-door-repair" },
    { icon: faCogs, title: "Door Maintenance Plans", body: "Keep opener and door working smoothly.", link: "/services/door-maintenance" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Opener Installation" }]} />
      <SectionIntro title="Garage Door Opener Installation in Waco, TX" subtitle="Chain, belt, and smart openers installed with full safety setup — flat-rate pricing, IDA-trained techs." />
      <TrustBar headline="2,000+ openers installed for Central Texas homes" />
      <div className={styles.section}><WhatToExpect sectionTitle="What Happens on an Opener Install" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Summit for Openers" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/opener-installation" title="Opener Installs Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Opener Installation FAQs" /></div>
      <CTABanner headline="Need a New Garage Door Opener?" subline="Quiet, reliable, smart-ready installs. Flat-rate quotes. Same-week availability." primaryText="Call Us Now" primaryLink="tel:+12547201100" secondaryText="Book Online" secondaryLink="/contact" />
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={crossServices} /></div>
      <div className={styles.section}><Variant4 title="Schedule Opener Installation" cityName="Waco" slug="services/opener-installation" spot="opener-installation-page-form" formVariant={2} /></div>
    </main>
  );
}
