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
  faIndustry, faClipboardList, faHandshake,
  faRocket, faTrophy, faChartLine, faClock,
  faWrench, faLink, faCogs, faBuilding,
} from "@fortawesome/free-solid-svg-icons";

export default function CommercialFacilitiesIndustryPage() {

  const painPoints = [
    { icon: faCalendarAlt, problem: "Down doors stop shipping and receiving", consequence: "A failed dock or bay door cascades into labor overtime, missed loads, and customer delays." },
    { icon: faFileInvoiceDollar, problem: "Emergency rates destroy maintenance budgets", consequence: "Reactive spring and operator failures cost far more than planned high-cycle service." },
    { icon: faUsers, problem: "Vendors who only know residential doors", consequence: "Residential techs aren't set up for rolling steel, high-cycle springs, or after-hours production windows." },
    { icon: faIndustry, problem: "No multi-door visibility across the site", consequence: "Facilities teams can't prioritize which doors are one failure away from downtime." },
    { icon: faClipboardList, problem: "Incomplete documentation for EHS and insurance", consequence: "Missing safety edge tests and service logs create audit and claims friction." },
    { icon: faHandshake, problem: "Slow COI and access coordination", consequence: "Corporate facilities need paperwork and escorts — slow vendors stall critical work." },
  ];

  const whyFeatures = [
    { icon: faIndustry, title: "Commercial Door Specialists", description: "Rolling steel, sectional, and high-cycle operators serviced by IDA-trained commercial techs." },
    { icon: faCalendarAlt, title: "After-Hours Windows", description: "Nights and weekends so repairs don't stop daytime production or retail hours." },
    { icon: faFileInvoiceDollar, title: "Facilities-Friendly Invoicing", description: "Clear scopes, POs, and multi-door quotes your controller can approve." },
  ];

  const processSteps = [
    { number: 1, title: "Site Assessment", description: "Door inventory, cycle risk ranking, and safety device check.", icon: faSearch },
    { number: 2, title: "Service Plan", description: "Repair, spring, operator, and PM plan aligned to your production calendar.", icon: faCalendarAlt },
    { number: 3, title: "Execute with Minimal Downtime", description: "Crews work approved windows; multi-door sites get route efficiency.", icon: faRocket },
    { number: 4, title: "Document & Maintain", description: "Service logs and optional standing PM for facilities compliance.", icon: faClipboardList },
  ];

  const metrics = [
    { icon: faTrophy, value: 600, label: "Commercial door jobs completed", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 97, label: "Jobs completed in scheduled window", suffix: "%", duration: 2 },
    { icon: faClock, value: 15, label: "Years serving Central Texas facilities", suffix: "+", duration: 2 },
  ];

  const comparisonRows = [
    { feature: "After-hours commercial work", us: "✅ Available", others: "❌ Daytime only" },
    { feature: "Rolling steel capability", us: "✅ Yes", others: "❌ Residential only" },
    { feature: "Multi-door site plans", us: "✅ Full inventory", others: "❌ One ticket at a time" },
    { feature: "COI for corporate facilities", us: "✅ Fast turnaround", others: "❌ Slow" },
    { feature: "IDA-trained commercial techs", us: "✅ Always", others: "❌ Mixed" },
  ];

  const faq = [
    { question: "What commercial door types do you service?", answer: "Rolling steel, sectional overhead, high-cycle dock doors, and many commercial operators. Call with model numbers if available." },
    { question: "Can you work outside production hours?", answer: "Yes — evenings and weekends are available for facilities that can't lose daytime operations." },
    { question: "Do you provide COIs for corporate facilities?", answer: "Yes — certificates of insurance are available quickly on request." },
    { question: "Can you set up a preventive maintenance route?", answer: "Yes — multi-door PM routes reduce emergency failures and stabilize budgets." },
    { question: "What areas do you cover for commercial work?", answer: "Waco, Temple, Killeen, Hewitt, Woodway, Bellmead, McGregor, and surrounding Central Texas." },
  ];

  const services = [
    { icon: faBuilding, title: "Commercial Doors", body: "Rolling steel and high-cycle service.", link: "/services/commercial-doors" },
    { icon: faLink, title: "Spring & Cable Repair", body: "High-cycle spring replacement.", link: "/services/spring-cable-repair" },
    { icon: faWrench, title: "Garage Door Repair", body: "Track, roller, and panel repairs.", link: "/services/garage-door-repair" },
    { icon: faCogs, title: "Opener Installation", body: "Commercial and residential operators.", link: "/services/opener-installation" },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Fastest commercial dispatch and multi-door routes.", badge: "Home Base" },
    { town: "Temple", benefit: "Warehouse and retail door service.", badge: "" },
    { town: "Killeen", benefit: "Industrial parks and retail facilities.", badge: "" },
    { town: "McGregor", benefit: "Fabrication and shop door service.", badge: "" },
    { town: "Bellmead", benefit: "Warehouse and light industrial.", badge: "" },
    { town: "Hewitt", benefit: "Suburban commercial properties.", badge: "" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Commercial Facilities" }]} />
      <SectionIntro title="Garage Doors for Commercial Facilities" subtitle="Rolling steel, sectional, and high-cycle door service for warehouses, retail, and industrial sites — after-hours options, COIs, multi-door plans." />
      <TrustBar headline="Facilities teams call Summit when uptime matters" />
      <div className={styles.section}><IndustryPainPoints industry="commercial facilities" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Facilities Teams" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services Facilities Use Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/commercial-facilities" title="Commercial Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Commercial Facilities FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request Commercial Facilities Service" cityName="Waco" slug="industries/commercial-facilities" spot="commercial-facilities-industry-form" formVariant={2} /></div>
      <CTABanner headline="Commercial Door Down?" subline="After-hours options. Multi-door plans. Bonded & insured." primaryText="Call (254) 720-1100" primaryLink="tel:+12547201100" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
