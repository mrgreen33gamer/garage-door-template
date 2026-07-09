// Summit Door Pros — Spring & Cable Repair
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
  faLink, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faWrench, faDoorOpen, faCogs,
  faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function SpringCableRepairPage() {

  const expectations = [
    { icon: faSearch,       title: "Safe Spring Diagnosis", description: "We identify torsion vs. extension spring failure, cable wear, and drum condition — without risky DIY methods." },
    { icon: faFileContract, title: "Flat-Rate Spring Quote", description: "Written price for springs, cables, and labor before we wind anything. No surprise add-ons." },
    { icon: faCheckCircle,  title: "Matched Springs & Balance", description: "We install correctly matched springs, re-string cables, and balance the door so the opener isn't overworked." },
    { icon: faShieldHalved, title: "Lifetime Spring Warranty", description: "Every spring we install is covered for life. Workmanship is covered for two years." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Same-Day Spring Service", description: "Broken springs are a safety issue. We prioritize same-day spring and cable calls across Central Texas." },
    { icon: faLink,         title: "Torsion & Extension Experts", description: "Single and dual torsion, extension springs, center-mounted systems — we service them all." },
    { icon: faShieldHalved, title: "No DIY Spring Risk", description: "Garage door springs store deadly force. Our IDA-trained techs use the right winding bars and procedures every time." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Describe the bang, the stuck door, or the frayed cable. We'll get you on the schedule fast.", icon: faHeadset },
    { number: 2, title: "Inspect & Measure", description: "We measure spring wire size, length, and wind direction so the replacement matches your door weight.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "You approve the written price before any springs are wound or cables replaced.", icon: faFileContract },
    { number: 4, title: "Replace & Balance", description: "New springs and cables installed, door balanced, opener force checked, safety reverse tested.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 5000, label: "Doors serviced across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Same-visit spring completion rate", suffix: "%", duration: 2 },
    { icon: faClock,     value: 15,   label: "Years of garage door spring experience", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Fastest spring dispatch from our home base.", badge: "Fastest Response" },
    { town: "Hewitt", benefit: "Full spring and cable coverage in Hewitt.", badge: "" },
    { town: "Woodway", benefit: "Same-day spring service for Woodway homes.", badge: "" },
    { town: "McGregor", benefit: "Rural spring calls without inflated trip fees.", badge: "" },
    { town: "Temple", benefit: "Bell County spring and cable service.", badge: "" },
    { town: "Killeen", benefit: "Full spring service for Killeen-area homes.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Lifetime Spring Warranty", us: "✅ On every spring", others: "❌ Limited or none" },
    { feature: "Matched spring pairs", us: "✅ Always", others: "❌ Sometimes single only" },
    { feature: "Door rebalance included", us: "✅ Always", others: "❌ Extra charge" },
    { feature: "IDA-trained techs", us: "✅ All techs", others: "❌ Mixed" },
    { feature: "Same-day emergency", us: "✅ 7 days/week", others: "❌ Business hours only" },
  ];

  const faq = [
    { question: "How much does garage door spring replacement cost in Waco?", answer: "Most residential torsion spring jobs run $250–$450 depending on spring type, door weight, and whether cables need replacement. We quote flat-rate on site." },
    { question: "Should I replace both springs if only one broke?", answer: "Yes. Springs wear together. Replacing only one often leads to the other failing soon after and leaves the door unbalanced." },
    { question: "Is it safe to open the door with a broken spring?", answer: "No. The opener is not designed to lift the full door weight. Using it can burn out the motor or snap cables. Disconnect and call us." },
    { question: "How long do garage door springs last?", answer: "Typical torsion springs are rated around 10,000 cycles. With daily use that's roughly 7–10 years, depending on door weight and usage." },
    { question: "Do you repair cables too?", answer: "Yes — cable re-stringing, drum alignment, and safety bottom brackets are common with spring jobs." },
    { question: "Why did I hear a loud bang?", answer: "That's classic torsion spring failure. The door may not open, or may slam. Stay clear of the door and call for same-day service." },
  ];

  const crossServices = [
    { icon: faWrench,   title: "Garage Door Repair", body: "Rollers, hinges, tracks, and panel repairs.", link: "/services/garage-door-repair" },
    { icon: faDoorOpen, title: "New Door Installation", body: "If the door itself is worn out, we can replace it.", link: "/services/new-door-installation" },
    { icon: faCogs,     title: "Opener Installation", body: "A balanced door protects your opener investment.", link: "/services/opener-installation" },
    { icon: faLink,     title: "Door Maintenance Plans", body: "Catch spring wear before it strands you.", link: "/services/door-maintenance" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Spring & Cable Repair" },
      ]} />
      <SectionIntro
        title="Spring & Cable Repair in Waco, TX"
        subtitle="Broken torsion or extension springs? Same-day replacement with a Lifetime Spring Warranty — flat-rate pricing, IDA-trained techs."
      />
      <TrustBar headline="Lifetime Spring Warranty on every spring we install" />
      <div className={styles.section}><WhatToExpect sectionTitle="What Happens on a Spring Service Call" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Summit for Springs & Cables" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/spring-cable-repair" title="Spring Service Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Spring & Cable FAQs" /></div>
      <CTABanner headline="Heard a Loud Bang? Broken Spring?" subline="Same-day spring service. Lifetime Spring Warranty. Flat-rate written quotes." primaryText="Call Us Now" primaryLink="tel:+12547201100" secondaryText="Book Online" secondaryLink="/contact" />
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={crossServices} /></div>
      <div className={styles.section}><Variant4 title="Schedule Spring & Cable Service" cityName="Waco" slug="services/spring-cable-repair" spot="spring-cable-repair-page-form" formVariant={2} /></div>
    </main>
  );
}
