"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "../page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faCalendarAlt, faSearch, faFileInvoiceDollar, faUsers,
  faHardHat, faClipboardList, faHandshake,
  faRocket, faTrophy, faChartLine, faClock,
  faWrench, faLink, faCogs, faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";

export default function HomebuildersIndustryPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "Door installs miss the close date", consequence: "Late garage doors delay CO, walkthroughs, and final draws — costing reputation with buyers and lenders." },
    { icon: faFileInvoiceDollar, problem: "Change orders on door packages", consequence: "Unclear specs and last-minute style swaps create budget fights with owners and GCs." },
    { icon: faUsers, problem: "Inconsistent installer quality across lots", consequence: "Different crews leave different track alignments, spring setups, and opener programming." },
    { icon: faHardHat, problem: "No coordination with other trades", consequence: "Drywall, painters, and electricians get blocked when door installs aren't sequenced." },
    { icon: faClipboardList, problem: "Warranty callbacks after close", consequence: "Poor balance and sensor setup show up after the buyer moves in — reflecting on the builder." },
    { icon: faHandshake, problem: "Vendors who only do residential service calls", consequence: "Service companies don't understand production home schedules or multi-lot coordination." },
  ];

  const whyFeatures = [
    { icon: faHardHat, title: "Builder Production Rhythm", description: "We schedule door and opener installs around dry-in, paint, and final so your calendar stays intact." },
    { icon: faFileInvoiceDollar, title: "Package Pricing by Plan", description: "Standard door/opener packages per floor plan with clear upgrade paths for buyers." },
    { icon: faUsers, title: "Consistent Crew Quality", description: "Same trained installers, same documentation — every lot, every phase." },
  ];

  const processSteps = [
    { number: 1, title: "Plan Spec Review", description: "We align door sizes, insulation, and opener packages to your plans.", icon: faSearch },
    { number: 2, title: "Phase Schedule", description: "Install windows tied to your production calendar and close dates.", icon: faCalendarAlt },
    { number: 3, title: "Install & Punch", description: "Doors hung, springs balanced, openers programmed, punch list cleared.", icon: faRocket },
    { number: 4, title: "Warranty Support", description: "Post-close support so callbacks don't land on your superintendents.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy, value: 350, label: "Builder lots completed", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 12, label: "Active builder relationships", suffix: "+", duration: 2 },
    { icon: faClock, value: 15, label: "Years installing for Central Texas builders", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Production schedule alignment", us: "✅ Per phase", others: "❌ Service-call only" },
    { feature: "Plan-based package pricing", us: "✅ Standard + upgrades", others: "❌ Re-quoted each lot" },
    { feature: "Consistent installer teams", us: "✅ Same crews", others: "❌ Day labor variance" },
    { feature: "Post-close warranty support", us: "✅ Included", others: "❌ Buyer left alone" },
    { feature: "IDA-trained installers", us: "✅ Always", others: "❌ Mixed" },
  ];

  const faq = [
    { question: "Do you work with production and custom homebuilders?", answer: "Yes — production homes, semi-custom, and remodelers across McLennan and Bell counties." },
    { question: "Can you match door packages to specific floor plans?", answer: "Yes. We build standard packages per plan with optional buyer upgrades." },
    { question: "How do you handle punch lists before close?", answer: "We schedule a punch pass with your super and clear balance, seal, and opener issues before final walkthrough." },
    { question: "Do you install openers and remotes for every lot?", answer: "Yes — openers, remotes, keypads, and safety reverse setup are part of the install package when specified." },
    { question: "What areas do you cover for builders?", answer: "Waco metro, Temple, Killeen, and surrounding Central Texas communities within about 60 miles." },
  ];

  const services = [
    { icon: faDoorOpen, title: "New Door Installation", body: "Plan-matched residential doors on schedule.", link: "/services/new-door-installation" },
    { icon: faCogs, title: "Opener Installation", body: "Smart and standard openers per package.", link: "/services/opener-installation" },
    { icon: faLink, title: "Spring & Cable Setup", body: "Correct springs and balance every lot.", link: "/services/spring-cable-repair" },
    { icon: faWrench, title: "Warranty Repair", body: "Post-close service that protects your brand.", link: "/services/garage-door-repair" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Core production and custom build market.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Active subdivision growth corridor.", badge: "" },
    { town: "Woodway", benefit: "Custom and premium residential builds.", badge: "" },
    { town: "Temple", benefit: "Bell County production homes.", badge: "" },
    { town: "China Spring", benefit: "Rural custom homes and shops.", badge: "" },
    { town: "Killeen", benefit: "Military-market new construction.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Homebuilders & Remodelers" }]} />
      <SectionIntro title="Garage Doors for Homebuilders & Remodelers" subtitle="Production-ready door and opener packages that hit close dates — consistent crews, plan pricing, post-close support." />
      <TrustBar headline="Builders across Central Texas trust Summit for lot-by-lot installs" />
      <div className={styles.section}><IndustryPainPoints industry="homebuilder" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Builders" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Builders Use Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/homebuilders" title="Builder Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Homebuilder FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request a Builder Package Quote" cityName="Waco" slug="industries/homebuilders" spot="homebuilders-industry-form" formVariant={2} /></div>
      <CTABanner headline="Need a Door Partner Who Hits Close Dates?" subline="Plan packages. Consistent crews. Post-close support." primaryText="Call (254) 720-1100" primaryLink="tel:+12547201100" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
