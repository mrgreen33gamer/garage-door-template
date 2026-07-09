// Summit Door Pros — Garage Door Repair Service Page
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
  faWrench, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faLink, faDoorOpen, faCogs,
  faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function GarageDoorRepairPage() {

  const expectations = [
    { icon: faSearch,       title: "Same-Day Diagnosis", description: "We arrive on time, inspect the door, and explain what's wrong in plain English — no upsell pressure, ever." },
    { icon: faFileContract, title: "Flat-Rate Quote Before We Touch Anything", description: "You get a written price before any work starts. It doesn't change when the job takes longer than expected." },
    { icon: faCheckCircle,  title: "Fix It Right the First Time", description: "We stock common rollers, hinges, cables, and brackets on every truck — most repairs completed in a single visit." },
    { icon: faShieldHalved, title: "Lifetime Spring Warranty + 2-Year Workmanship", description: "Every repair we complete is backed by our workmanship warranty. If our work fails, we make it right." },
  ];

  const whyFeatures = [
    { icon: faClock,        title: "Emergency Service — Any Time", description: "We answer 7 days a week, including evenings and weekends. A stuck door can't wait until Monday." },
    { icon: faWrench,       title: "All Makes & Models Serviced", description: "Residential and light commercial — rollers, hinges, tracks, panels, seals, and more." },
    { icon: faShieldHalved, title: "IDA-Trained Technicians", description: "Every tech is IDA-trained. You're never dealing with an unlicensed subcontractor on our jobs." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Contact us by phone, text, or online. We'll schedule you in — usually same-day during business hours.", icon: faHeadset },
    { number: 2, title: "Tech Arrives", description: "On time, in uniform, with a fully stocked truck. Diagnosis starts immediately.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "We show you the exact price before any work begins. You decide — zero pressure.", icon: faFileContract },
    { number: 4, title: "Repair & Warranty", description: "Repaired with quality parts, tested before we leave, and backed by our warranty.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 5000, label: "Doors serviced across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "First-visit fix rate", suffix: "%", duration: 2 },
    { icon: faClock,     value: 15,   label: "Years serving Waco-area homeowners", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest dispatch, most available techs.", badge: "Fastest Response" },
    { town: "Hewitt",       benefit: "Full garage door repair coverage throughout Hewitt.", badge: "" },
    { town: "Woodway",      benefit: "Same-day garage door service for Woodway neighborhoods.", badge: "" },
    { town: "Bellmead",     benefit: "On our regular route — quick turnaround guaranteed.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for same-day availability.", badge: "" },
    { town: "Temple",       benefit: "Full garage door service coverage for Bell County homes.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate price before work starts", us: "✅ Always written", others: "❌ Hourly + estimate only" },
    { feature: "Lifetime Spring Warranty + 2-Year Workmanship", us: "✅ Every job", others: "❌ Rare or none" },
    { feature: "IDA-trained technicians", us: "✅ All techs", others: "❌ Not always" },
    { feature: "Emergency service 7 days/week", us: "✅ Always available", others: "❌ M–F business hours" },
    { feature: "Parts on truck — same-visit repair", us: "✅ Most repairs", others: "❌ Often a return trip" },
  ];

  const faq = [
    { question: "How much does garage door repair cost in Waco?", answer: "Most garage door repairs range from $150–$450. Roller or hinge replacement often runs $150–$300. Cable repair is typically $150–$350. We quote flat-rate before starting." },
    { question: "Can you fix my door the same day I call?", answer: "In most cases, yes — especially during business hours. We dispatch from Waco and keep common parts on every truck. Call before noon and same-day service is usually available." },
    { question: "What are common signs I need garage door repair?", answer: "Door off-track, loud grinding, uneven travel, frayed cables, broken rollers, or a door that reverses unexpectedly are all signals to call us." },
    { question: "Do you fix openers too?", answer: "Yes — we diagnose and repair openers, remotes, wall controls, and photo-eyes, and can install a new unit if repair isn't cost-effective." },
    { question: "Is my issue a repair or a full door replacement?", answer: "If panels are rusted through, severely dented, or repair costs approach half the price of a new door, replacement may be smarter. We'll give you an honest recommendation either way." },
    { question: "Do you service commercial properties?", answer: "Yes — light commercial and multi-unit properties are within our scope. Call to discuss your building and timeline." },
  ];

  const crossServices = [
    { icon: faLink,     title: "Spring & Cable Repair", body: "Broken torsion or extension springs replaced with Lifetime Spring Warranty.", link: "/services/spring-cable-repair" },
    { icon: faDoorOpen, title: "New Door Installation", body: "Steel, insulated, and carriage-house doors installed right.", link: "/services/new-door-installation" },
    { icon: faCogs,     title: "Opener Installation", body: "Chain, belt, and smart openers with full safety setup.", link: "/services/opener-installation" },
    { icon: faWrench,   title: "Door Maintenance Plans", body: "Keep small issues from becoming emergency calls.", link: "/services/door-maintenance" },
  ];

  return (
    <main className={styles.pageWrapper}>

      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Garage Door Repair" },
      ]} />

      <SectionIntro
        title="Garage Door Repair in Waco, TX"
        subtitle="Same-day diagnosis, flat-rate pricing, and a Lifetime Spring Warranty + 2-Year Workmanship — for off-track doors, rollers, hinges, and cables."
      />

      <TrustBar headline="5,000+ Central Texas homeowners trust Summit Door Pros for garage door service" />

      <div className={styles.section}>
        <WhatToExpect sectionTitle="What Happens When You Call for Garage Door Repair" expectations={expectations} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls Summit Door Pros First" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/garage-door-repair" title="Garage Door Repair Across Central Texas" />
      </div>

      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>

      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Garage Door Repair FAQs — Answered Honestly" />
      </div>

      <CTABanner
        headline="Door Won't Open? We're Ready Right Now."
        subline="Same-day service available. Flat-rate pricing, Lifetime Spring Warranty + 2-Year Workmanship, IDA-trained."
        primaryText="Call Us Now"
        primaryLink="tel:+12547201100"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

      <div className={styles.section}>
        <ServiceCardComponent heading="Related Services" cards={crossServices} />
      </div>

      <div className={styles.section}>
        <Variant4 title="Schedule Your Garage Door Repair" cityName="Waco" slug="services/garage-door-repair" spot="garage-door-repair-page-form" formVariant={2} />
      </div>

    </main>
  );
}
