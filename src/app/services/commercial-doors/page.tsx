// Summit Door Pros — Commercial Doors
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
  faBuilding, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faWrench, faLink, faCogs,
  faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function CommercialDoorsPage() {

  const expectations = [
    { icon: faSearch, title: "Facility Walkthrough", description: "We assess cycle counts, safety edges, operators, and downtime risk for each door on site." },
    { icon: faFileContract, title: "Clear Commercial Quotes", description: "Parts and labor itemized. After-hours options available to protect operations." },
    { icon: faCheckCircle, title: "Minimize Downtime", description: "Stocked trucks and scheduled windows so your docks and bays stay productive." },
    { icon: faShieldHalved, title: "Bonded & Insured Crews", description: "IDA-trained techs with commercial COI available on request for property managers." },
  ];

  const whyFeatures = [
    { icon: faBuilding, title: "Rolling Steel & Sectional", description: "Service for rolling steel, sectional, high-speed, and high-cycle commercial doors." },
    { icon: faClock, title: "After-Hours Available", description: "Weekend and evening windows so repairs don't shut down business hours." },
    { icon: faShieldHalved, title: "Property Manager Friendly", description: "Multi-site coordination, clear invoices, and priority response for contracted facilities." },
  ];

  const processSteps = [
    { number: 1, title: "Request Service", description: "Call or form with facility address, door count, and urgency.", icon: faHeadset },
    { number: 2, title: "On-Site Assessment", description: "We diagnose operators, springs, tracks, and safety devices.", icon: faSearch },
    { number: 3, title: "Approve Scope", description: "Written quote for repair, spring work, or replacement — you approve first.", icon: faFileContract },
    { number: 4, title: "Complete & Document", description: "Work finished, tested, and documented for your facilities file.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 600, label: "Commercial door jobs completed", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 97, label: "Jobs completed within scheduled window", suffix: "%", duration: 2 },
    { icon: faClock, value: 15, label: "Years serving Central Texas businesses", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Fastest commercial dispatch and multi-door routes.", badge: "Home Base" },
    { town: "Temple", benefit: "Retail and warehouse door service.", badge: "" },
    { town: "Killeen", benefit: "Commercial coverage including industrial parks.", badge: "" },
    { town: "Hewitt", benefit: "Light commercial and multi-unit properties.", badge: "" },
    { town: "Woodway", benefit: "Office and retail door service.", badge: "" },
    { town: "Bellmead", benefit: "Warehouse and shop door repairs.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "After-hours scheduling", us: "✅ Available", others: "❌ Business hours only" },
    { feature: "COI for property managers", us: "✅ On request", others: "❌ Slow or missing" },
    { feature: "Multi-door site visits", us: "✅ Efficient routes", others: "❌ One door at a time" },
    { feature: "Flat-rate commercial quotes", us: "✅ Written scope", others: "❌ Open-ended T&M" },
    { feature: "IDA-trained commercial techs", us: "✅ Always", others: "❌ Mixed skill levels" },
  ];

  const faq = [
    { question: "What commercial door types do you service?", answer: "Rolling steel, sectional overhead, high-cycle dock doors, and many operator brands. Call with your door type if unsure." },
    { question: "Can you work nights or weekends?", answer: "Yes — after-hours windows are available for facilities that can't lose daytime operations." },
    { question: "Do you provide certificates of insurance?", answer: "Yes — COIs can be issued for property managers and GCs on request." },
    { question: "How fast can you respond to a down door?", answer: "Many Waco-area commercial emergencies are same-day. Multi-site or specialty parts may need scheduling." },
    { question: "Do you handle multi-unit residential properties?", answer: "Yes — apartment and HOA garage doors are a regular part of our commercial / property management work." },
    { question: "Can you set up a service agreement?", answer: "Yes — preventive maintenance routes for multi-door facilities keep downtime down and costs predictable." },
  ];

  const crossServices = [
    { icon: faLink, title: "Spring & Cable Repair", body: "High-cycle spring service for commercial doors.", link: "/services/spring-cable-repair" },
    { icon: faWrench, title: "Garage Door Repair", body: "Track, roller, and panel repairs on the same visit.", link: "/services/garage-door-repair" },
    { icon: faCogs, title: "Opener Installation", body: "Commercial and residential operators.", link: "/services/opener-installation" },
    { icon: faBuilding, title: "Door Maintenance Plans", body: "Route-based preventive service for facilities.", link: "/services/door-maintenance" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Commercial Doors" }]} />
      <SectionIntro title="Commercial Garage Doors in Waco, TX" subtitle="Rolling steel, sectional, and high-cycle door service for warehouses, retail, and multi-unit properties — IDA-trained, bonded & insured." />
      <TrustBar headline="Commercial door service that respects your uptime" />
      <div className={styles.section}><WhatToExpect sectionTitle="What to Expect on a Commercial Call" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Facilities Call Summit" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/commercial-doors" title="Commercial Coverage Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Commercial Door FAQs" /></div>
      <CTABanner headline="Commercial Door Down?" subline="Same-day and after-hours options. Clear quotes. Bonded & insured crews." primaryText="Call Us Now" primaryLink="tel:+12547201100" secondaryText="Request Service" secondaryLink="/contact" />
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={crossServices} /></div>
      <div className={styles.section}><Variant4 title="Request Commercial Door Service" cityName="Waco" slug="services/commercial-doors" spot="commercial-doors-page-form" formVariant={2} /></div>
    </main>
  );
}
