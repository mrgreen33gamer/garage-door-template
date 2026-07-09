// Summit Door Pros — New Door Installation
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
  faDoorOpen, faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faWrench, faLink, faCogs,
  faTrophy, faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function NewDoorInstallationPage() {

  const expectations = [
    { icon: faSearch,       title: "On-Site Measure & Style Consult", description: "We measure the opening, check headroom and side room, and help you pick a style and insulation level that fits Texas weather." },
    { icon: faFileContract, title: "Flat-Rate Install Quote", description: "Door, hardware, labor, and haul-away in one written number before we order materials." },
    { icon: faCheckCircle,  title: "Clean Removal & Install", description: "Old door removed carefully, new door hung level, tracks aligned, and opener reconnected or newly installed." },
    { icon: faShieldHalved, title: "2-Year Workmanship Warranty", description: "Manufacturer warranty on the door plus our 2-Year Workmanship on the installation." },
  ];

  const whyFeatures = [
    { icon: faDoorOpen,     title: "Styles for Every Home", description: "Steel raised-panel, insulated, carriage-house, glass, and custom options from trusted brands." },
    { icon: faShieldHalved, title: "Built for Texas Heat", description: "We recommend insulation R-values that actually help with garage temperatures and energy bills." },
    { icon: faClock,        title: "Efficient Scheduling", description: "Most standard installs complete in one day once the door arrives on site." },
  ];

  const processSteps = [
    { number: 1, title: "Consult & Measure", description: "In-home or virtual style review, precise measurements, and written quote.", icon: faHeadset },
    { number: 2, title: "Order Your Door", description: "We order the selected model and hardware with realistic lead times.", icon: faSearch },
    { number: 3, title: "Install Day", description: "Remove old door, install new sections, tracks, springs, and balance.", icon: faFileContract },
    { number: 4, title: "Final Walkthrough", description: "Opener force, safety reverse, remotes, and warranty paperwork before we leave.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1200, label: "New doors installed across Central Texas", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction on installs", suffix: "%", duration: 2 },
    { icon: faClock,     value: 15,   label: "Years installing residential doors", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Showroom consults and fastest install scheduling.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full new-door installs throughout Hewitt.", badge: "" },
    { town: "Woodway", benefit: "Popular for insulated and carriage-house upgrades.", badge: "" },
    { town: "Temple", benefit: "Bell County new door installations.", badge: "" },
    { town: "China Spring", benefit: "Rural installs with no inflated trip fees.", badge: "" },
    { town: "Killeen", benefit: "Full coverage for Killeen-area homes.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate install quote", us: "✅ Before order", others: "❌ Vague estimates" },
    { feature: "Haul-away included", us: "✅ Standard", others: "❌ Often extra" },
    { feature: "2-Year Workmanship", us: "✅ Every install", others: "❌ 90 days or less" },
    { feature: "Opener reconnection", us: "✅ Included", others: "❌ Extra fee" },
    { feature: "IDA-trained installers", us: "✅ Always", others: "❌ Subcontracted" },
  ];

  const faq = [
    { question: "How much does a new garage door cost in Waco?", answer: "Most residential single doors run $1,200–$3,500 installed depending on material, insulation, and windows. Doubles and custom styles run higher. We quote after measuring." },
    { question: "How long does installation take?", answer: "A standard replacement is typically completed in one day once the door is on site. Custom orders may take 2–4 weeks for manufacturing." },
    { question: "Should I replace the opener with the door?", answer: "If the opener is over 10–12 years old or underpowered for the new door weight, yes. We'll recommend honestly either way." },
    { question: "Do you haul away the old door?", answer: "Yes — haul-away of the old door and packaging is included in our standard install quote." },
    { question: "What insulation R-value do I need in Texas?", answer: "For attached garages, insulated doors (often R-9 to R-18 class) improve comfort and reduce heat transfer into the home. We'll match options to your goals." },
    { question: "Can you match my home's exterior?", answer: "Yes — color, window inserts, and carriage-house designs can complement brick, stone, and siding common in Central Texas." },
  ];

  const crossServices = [
    { icon: faCogs,   title: "Opener Installation", body: "Pair your new door with a quiet smart opener.", link: "/services/opener-installation" },
    { icon: faLink,   title: "Spring & Cable Repair", body: "Keep existing doors safe with pro spring work.", link: "/services/spring-cable-repair" },
    { icon: faWrench, title: "Garage Door Repair", body: "Not ready for a full replacement? We repair too.", link: "/services/garage-door-repair" },
    { icon: faDoorOpen, title: "Door Maintenance Plans", body: "Protect your investment with annual tune-ups.", link: "/services/door-maintenance" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "New Door Installation" }]} />
      <SectionIntro title="New Garage Door Installation in Waco, TX" subtitle="Steel, insulated, and carriage-house doors installed by IDA-trained techs — flat-rate pricing and 2-Year Workmanship." />
      <TrustBar headline="1,200+ new doors installed for Central Texas homeowners" />
      <div className={styles.section}><WhatToExpect sectionTitle="What to Expect on a New Door Install" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Summit for New Doors" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/new-door-installation" title="New Door Installs Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="New Door Installation FAQs" /></div>
      <CTABanner headline="Ready for a New Garage Door?" subline="Free on-site measure and flat-rate quote. IDA-trained installers." primaryText="Call Us Now" primaryLink="tel:+12547201100" secondaryText="Book Online" secondaryLink="/contact" />
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={crossServices} /></div>
      <div className={styles.section}><Variant4 title="Schedule Your Door Install Quote" cityName="Waco" slug="services/new-door-installation" spot="new-door-installation-page-form" formVariant={2} /></div>
    </main>
  );
}
