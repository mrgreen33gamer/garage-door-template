// Summit Door Pros — Door Maintenance Plans
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
  faClipboardList, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faWrench, faLink, faCogs,
  faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function DoorMaintenancePage() {

  const expectations = [
    { icon: faSearch, title: "Full Safety Inspection", description: "Springs, cables, rollers, hinges, tracks, seals, and safety reverse — documented in plain English." },
    { icon: faFileContract, title: "Simple Plan Pricing", description: "Month-to-month or annual options. No multi-year lock-in contracts." },
    { icon: faCheckCircle, title: "Lubrication & Balance", description: "Proper lube points, spring tension check, and door balance so the opener isn't overworked." },
    { icon: faShieldHalved, title: "Priority Scheduling", description: "Plan members get priority windows when something does go wrong." },
  ];

  const whyFeatures = [
    { icon: faClipboardList, title: "Prevent Stranded Cars", description: "Most emergency calls are wear issues that a tune-up would have caught early." },
    { icon: faShieldHalved, title: "Safety First", description: "Auto-reverse and photo-eye testing every visit — critical for kids and pets." },
    { icon: faClock, title: "No Contract Pressure", description: "Cancel anytime. We earn renewals with good service, not fine print." },
  ];

  const processSteps = [
    { number: 1, title: "Enroll or Book Tune-Up", description: "Join a plan or book a one-time maintenance visit online or by phone.", icon: faHeadset },
    { number: 2, title: "On-Site Inspection", description: "We walk the full door system and show you any wear items.", icon: faSearch },
    { number: 3, title: "Service & Report", description: "Lubricate, tighten, balance, and leave a clear condition report.", icon: faFileContract },
    { number: 4, title: "Optional Repairs", description: "If something needs parts, you get a flat-rate quote — approve only if you want.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 800, label: "Maintenance visits completed yearly", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 40, label: "Fewer emergency calls for plan members", suffix: "%", duration: 2 },
    { icon: faClock, value: 15, label: "Years keeping Central Texas doors running", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Highest plan density — easiest scheduling.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Regular maintenance routes through Hewitt.", badge: "" },
    { town: "Woodway", benefit: "Popular for quiet belt-drive homes.", badge: "" },
    { town: "Temple", benefit: "Bell County maintenance coverage.", badge: "" },
    { town: "McGregor", benefit: "Rural plan members welcome.", badge: "" },
    { town: "Killeen", benefit: "Full maintenance coverage available.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "No long-term contract", us: "✅ Cancel anytime", others: "❌ Multi-year lock-in" },
    { feature: "Safety reverse testing", us: "✅ Every visit", others: "❌ Often skipped" },
    { feature: "Written condition report", us: "✅ Always", others: "❌ Verbal only" },
    { feature: "Priority emergency slots", us: "✅ Plan members", others: "❌ First-come only" },
    { feature: "Flat-rate repair quotes", us: "✅ Before any parts", others: "❌ Hourly surprises" },
  ];

  const faq = [
    { question: "How often should a garage door be maintained?", answer: "At least once a year for typical residential use. High-cycle or commercial doors may need twice yearly." },
    { question: "What's included in a maintenance visit?", answer: "Lubrication, hardware tighten-up, spring and cable inspection, track check, balance test, opener force check, and safety reverse / photo-eye testing." },
    { question: "Do I have to join a plan?", answer: "No — one-time tune-ups are available. Plans simply add priority scheduling and predictable annual service." },
    { question: "Will maintenance void my manufacturer warranty?", answer: "No — proper professional maintenance typically helps preserve warranties versus neglect." },
    { question: "Can you maintain commercial doors too?", answer: "Yes — multi-door properties and light commercial sites can be scheduled on routes." },
    { question: "What if you find a broken spring during maintenance?", answer: "We stop, show you the issue, and provide a flat-rate repair quote before any spring work begins." },
  ];

  const crossServices = [
    { icon: faLink, title: "Spring & Cable Repair", body: "Lifetime Spring Warranty when replacement is needed.", link: "/services/spring-cable-repair" },
    { icon: faWrench, title: "Garage Door Repair", body: "Same-day fixes for rollers, tracks, and panels.", link: "/services/garage-door-repair" },
    { icon: faCogs, title: "Opener Installation", body: "Upgrade aging openers after a tune-up.", link: "/services/opener-installation" },
    { icon: faClipboardList, title: "Commercial Doors", body: "Route maintenance for multi-door facilities.", link: "/services/commercial-doors" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Door Maintenance Plans" }]} />
      <SectionIntro title="Garage Door Maintenance Plans in Waco, TX" subtitle="Annual tune-ups, safety testing, and priority service — no long-term contracts. Keep your door quiet, safe, and reliable." />
      <TrustBar headline="Preventive maintenance that actually prevents emergencies" />
      <div className={styles.section}><WhatToExpect sectionTitle="What's Included in a Maintenance Visit" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Summit Maintenance Plans" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/door-maintenance" title="Maintenance Coverage Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Maintenance Plan FAQs" /></div>
      <CTABanner headline="Keep Your Door Working Every Day" subline="Book a tune-up or start a no-contract maintenance plan today." primaryText="Call Us Now" primaryLink="tel:+12547201100" secondaryText="Book Online" secondaryLink="/contact" />
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={crossServices} /></div>
      <div className={styles.section}><Variant4 title="Schedule Maintenance Service" cityName="Waco" slug="services/door-maintenance" spot="door-maintenance-page-form" formVariant={2} /></div>
    </main>
  );
}
