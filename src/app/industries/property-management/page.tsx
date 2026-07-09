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
  faBuilding, faClipboardList, faHandshake,
  faRocket, faTrophy, faChartLine, faClock,
  faWrench, faLink, faCogs, faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";

export default function PropertyManagementIndustryPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "No proactive door maintenance schedule", consequence: "Units fail reactively at turnover or after tenant complaints — driving emergency rates and bad reviews instead of planned, budgeted work." },
    { icon: faFileInvoiceDollar, problem: "Door costs blow up the CapEx budget with no warning", consequence: "Without a multi-unit plan and locked pricing, a spring replacement wave or door swap lands as one enormous line item." },
    { icon: faUsers, problem: "Tenants disrupted by no-show or late techs", consequence: "Missed access windows create complaints to the PM office that reliable scheduling would avoid." },
    { icon: faBuilding, problem: "Different units get different quality of work", consequence: "Rotating freelancers leave inconsistent spring work, openers, and safety setup across the portfolio." },
    { icon: faClipboardList, problem: "No single point of contact for multi-property work", consequence: "Coordinating separate quotes and crews for each building wastes management time." },
    { icon: faHandshake, problem: "Vendors don't understand property management workflows", consequence: "Access notices, owner approvals, and turnover timelines all move on their own schedule." },
  ];

  const whyFeatures = [
    { icon: faCalendarAlt, title: "Portfolio-Wide Door Planning", description: "Phased schedules across units and buildings — turnovers, common garages, and CapEx upgrades." },
    { icon: faFileInvoiceDollar, title: "Locked-In, Multi-Unit Pricing", description: "Volume-friendly rates and clear scopes so ownership sees predictable numbers." },
    { icon: faUsers, title: "Tenant-Friendly Scheduling", description: "We coordinate access windows and same-day turnarounds so your office isn't fielding angry calls." },
  ];

  const processSteps = [
    { number: 1, title: "Portfolio Assessment", description: "We walk units/common garages, document door condition, and prioritize risk.", icon: faSearch },
    { number: 2, title: "Phased Plan & Quote", description: "Multi-unit pricing and a schedule synced to turnovers and CapEx cycles.", icon: faCalendarAlt },
    { number: 3, title: "Execute by Building", description: "Crews move unit-by-unit with consistent quality and safety testing.", icon: faRocket },
    { number: 4, title: "Standing Maintenance", description: "Optional standing service so door issues stay on a plan.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy, value: 80, label: "Multi-unit properties serviced", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 15, label: "PM companies on standing service", suffix: "+", duration: 2 },
    { icon: faClock, value: 15, label: "Years serving Central Texas properties", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "Multi-unit door planning", us: "✅ Full portfolio plan", others: "❌ One-off calls only" },
    { feature: "Locked multi-unit pricing", us: "✅ Volume-friendly rates", others: "❌ Re-quoted every ticket" },
    { feature: "Single point of contact", us: "✅ Dedicated project lead", others: "❌ Different tech each time" },
    { feature: "Tenant communication support", us: "✅ Built into scheduling", others: "❌ Minimal notice" },
    { feature: "IDA-trained & insured", us: "✅ Always", others: "❌ Not always" },
  ];

  const faq = [
    { question: "Do you work with property managers on multi-unit portfolios?", answer: "Yes — apartments, duplexes, HOA common garages, and scattered-site residential portfolios are core B2B work for us." },
    { question: "Can you prioritize make-ready turnovers?", answer: "Yes. We schedule door make-ready work around your turnover calendar and can often turn units same-week." },
    { question: "Do you provide insurance certificates?", answer: "Yes — COIs for property managers and ownership groups are available on request." },
    { question: "Can you standardize openers and remotes across a complex?", answer: "Yes. Consistent opener brands, keypad setups, and documentation are part of our multi-unit approach." },
    { question: "What areas do you cover for PM work?", answer: "Waco, Temple, Killeen, Hewitt, Woodway, Bellmead, McGregor, China Spring, and surrounding Central Texas." },
  ];

  const services = [
    { icon: faWrench, title: "Garage Door Repair", body: "Fast make-ready and tenant ticket resolution.", link: "/services/garage-door-repair" },
    { icon: faLink, title: "Spring & Cable Repair", body: "CapEx spring replacements across units.", link: "/services/spring-cable-repair" },
    { icon: faCogs, title: "Opener Installation", body: "Unit and common-area opener packages.", link: "/services/opener-installation" },
    { icon: faDoorOpen, title: "New Door Installation", body: "Full door replacements for aging stock.", link: "/services/new-door-installation" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base for multi-unit and scattered-site PM work.", badge: "Home Base" },
    { town: "Temple", benefit: "Regular multi-family coverage in Bell County.", badge: "" },
    { town: "Killeen", benefit: "Apartments and rental portfolios near Fort Cavazos.", badge: "" },
    { town: "Hewitt", benefit: "Suburban rental portfolios.", badge: "" },
    { town: "Woodway", benefit: "Premium rentals and townhomes.", badge: "" },
    { town: "Bellmead", benefit: "Scattered-site residential portfolios.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Property Management" }]} />
      <SectionIntro title="Garage Door Service for Property Management" subtitle="Portfolio-wide repairs, springs, openers, and maintenance for multi-unit and scattered-site properties across Central Texas." />
      <TrustBar headline="Property managers trust Summit Door Pros for turnovers and standing service" />
      <div className={styles.section}><IndustryPainPoints industry="property management" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Property Managers" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Property Managers Use Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/property-management" title="PM Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Property Management FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request a PM Portfolio Quote" cityName="Waco" slug="industries/property-management" spot="pm-industry-form" formVariant={2} /></div>
      <CTABanner headline="Need a Door Vendor Who Understands Turnovers?" subline="COIs available. Volume pricing. Single point of contact." primaryText="Call (254) 720-1100" primaryLink="tel:+12547201100" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
