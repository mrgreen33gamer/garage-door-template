"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "./page.module.scss";
import SectionIntro       from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import SectionIndustriesServed from "#/PageComponents/SectionIndustriesServed/SectionIndustriesServed";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison    from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import Variant4           from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faTrophy, faChartLine, faClock,
  faHandshake, faShieldHalved, faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {

  const whyFeatures = [
    {
      icon: faHandshake,
      title: "We Learn Your Operation Before We Quote",
      description: "A property manager, a homebuilder, and a facilities lead all work differently. Before we quote, we learn your access process, budget cycle, and downtime constraints.",
    },
    {
      icon: faShieldHalved,
      title: "IDA-Trained, Bonded & Insured",
      description: "We're based in Waco, TX with IDA-trained technicians and full insurance — the documentation multi-unit, commercial, and builder projects require.",
    },
    {
      icon: faFileInvoiceDollar,
      title: "Repair, Install & Maintenance — One Vendor",
      description: "Whether your project needs multi-unit make-ready, new-construction doors, or after-hours commercial repairs — we handle it under one roof.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 3,    label: "B2B industries actively served across Central Texas", suffix: "",  duration: 2 },
    { icon: faChartLine, value: 200,  label: "Commercial and multi-unit door projects completed",  suffix: "+", duration: 3 },
    { icon: faClock,     value: 15,   label: "Years serving Central Texas organizations",           suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Our home base — serving PM, builders, and facilities clients.", badge: "Headquarters" },
    { town: "Temple", benefit: "Commercial and multi-unit properties across Bell County.", badge: "" },
    { town: "Killeen", benefit: "Retail, apartments, and light industrial facilities.", badge: "" },
    { town: "Hewitt", benefit: "Residential portfolios and suburban commercial.", badge: "" },
    { town: "Woodway", benefit: "Professional offices and premium rentals.", badge: "" },
    { town: "McGregor", benefit: "Industrial corridor and fabrication shops.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Organization-specific scheduling", us: "✅ Built per project type", others: "❌ One-size-fits-all" },
    { feature: "Central Texas market knowledge", us: "✅ 15+ years in Waco", others: "❌ Out-of-area contractors" },
    { feature: "IDA-trained commercial crews", us: "✅ Always", others: "❌ Not always" },
    { feature: "Transparent, upfront pricing", us: "✅ Quote before work starts", others: "❌ Billable hours + surprises" },
    { feature: "Lifetime Spring Warranty + 2-Year Workmanship", us: "✅ On every install", others: "❌ Limited or none" },
  ];

  const faq = [
    {
      question: "What types of organizations does Summit Door Pros work with?",
      answer: "We have dedicated experience with property management companies, homebuilders & remodelers, and commercial facilities — in addition to residential garage door services.",
    },
    {
      question: "Do you build a custom proposal for each organization?",
      answer: "Yes. Every proposal is built around access rules, downtime windows, CapEx cycles, and open dates — not a generic residential quote.",
    },
    {
      question: "Do you serve organizations outside of Waco?",
      answer: "Yes — Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead, and most of Central Texas within about 60 miles of Waco.",
    },
    {
      question: "Can you handle multi-property or multi-building portfolios?",
      answer: "Yes — we build phased, portfolio-wide pricing and scheduling with a single dedicated point of contact.",
    },
    {
      question: "How do I know which program is right for my organization?",
      answer: "Start by clicking your industry below or contacting us directly. We'll recommend the approach that fits — no pressure.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
      <SectionIntro
        title="Industries We Serve Across Central Texas"
        subtitle="Garage door programs built for how your organization actually works — turnovers, open dates, and production windows, not a generic residential quote."
      />
      <TrustBar headline="Trusted by property managers, builders, and facilities across Central Texas since 2011" />
      <div className={styles.section}>
        <SectionIndustriesServed
          title="Browse by Industry"
          subtitle="Click your industry to see exactly what we build for organizations like yours."
        />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Central Texas" features={whyFeatures} title="Built for Organizations, Not Just Homes" />
      </div>
      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries" title="B2B Coverage Across Central Texas" />
      </div>
      <div className={styles.section}>
        <ValueComparison rows={comparisonRows} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Industry Partnership FAQs" />
      </div>
      <div className={styles.section}>
        <Variant4 title="Talk to Our B2B Team" cityName="Waco" slug="/industries" spot="industries-index-form" formVariant={2} />
      </div>
      <CTABanner
        headline="Need a Garage Door Partner for Your Organization?"
        subline="Property management, homebuilders, and commercial facilities — flat-rate pricing, COIs on request."
        primaryText="Call (254) 720-1100"
        primaryLink="tel:+12547201100"
        secondaryText="Request a Proposal"
        secondaryLink="/contact"
      />
    </main>
  );
}
