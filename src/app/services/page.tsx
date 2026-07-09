// Summit Door Pros — Services Index
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro         from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar             from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs          from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline      from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics        from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials         from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection     from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import FAQ                  from "#/PageComponents/FAQ/FAQ";
import CTABanner            from "#/PageComponents/CTABanner/CTABanner";
import Variant4             from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faDoorOpen, faLink, faWrench, faCogs, faClipboardList, faBuilding,
  faTrophy, faChartLine, faClock, faShieldHalved, faUsers, faClipboardCheck,
  faHeadset, faSearch, faFileContract, faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faWrench,        title: "Garage Door Repair",     body: "Fast diagnosis on off-track doors, rollers, hinges, cables, and noisy operation. Same-day service available — we stock common parts on every truck.", link: "/services/garage-door-repair" },
    { icon: faLink,          title: "Spring & Cable Repair",  body: "Torsion and extension spring replacement, cable re-stringing, and professional door balancing — Lifetime Spring Warranty on every spring job.", link: "/services/spring-cable-repair" },
    { icon: faDoorOpen,      title: "New Door Installation",  body: "Steel, insulated, carriage-house, and custom residential doors sized for curb appeal, security, and Texas heat.", link: "/services/new-door-installation" },
    { icon: faCogs,          title: "Opener Installation",    body: "Chain, belt, and smart openers with photo-eyes, wall controls, and app setup — quiet, reliable access every day.", link: "/services/opener-installation" },
    { icon: faClipboardList, title: "Door Maintenance Plans", body: "Tune-ups, lubrication, balance checks, and safety reverse testing so small issues never leave you stranded.", link: "/services/door-maintenance" },
    { icon: faBuilding,      title: "Commercial Doors",       body: "Rolling steel, sectional, and high-cycle commercial door service for warehouses, retail, and multi-unit properties.", link: "/services/commercial-doors" },
  ];

  const whyFeatures = [
    { icon: faClipboardCheck, title: "Flat-Rate Written Quotes", description: "Firm price before we touch a spring or panel. No hourly billing, no surprise add-ons mid-job." },
    { icon: faShieldHalved,   title: "IDA-Trained Technicians",  description: "Every tech is IDA-trained, bonded, and insured. No unlicensed freelancers on your door." },
    { icon: faUsers,          title: "Locally Owned Since 2011", description: "Founded in Waco by Marcus Hale. Every decision is made locally — not by a call center franchise." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — we'll confirm a same-day or next-day slot.", icon: faHeadset },
    { number: 2, title: "We Diagnose On-Site", description: "An IDA-trained tech inspects the door and explains options in plain English.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before any work starts. Zero pressure to proceed.", icon: faFileContract },
    { number: 4, title: "Done Right, Warrantied", description: "Quality parts, clean workmanship, Lifetime Spring Warranty + 2-Year Workmanship.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 5000, label: "Doors serviced across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",        suffix: "%", duration: 2 },
    { icon: faClock,     value: 15,   label: "Years of local garage door experience", suffix: "+", duration: 2 },
  ];

  const faq = [
    { question: "How much does garage door service cost in Waco?", answer: "Repairs typically range from $150–$450 depending on the issue. Spring replacement runs $250–$450. New door installation varies by size and style. We always provide a flat-rate written quote before any work begins." },
    { question: "Do you work on all garage door brands?", answer: "Yes — all major brands including Clopay, Amarr, CHI, Wayne Dalton, LiftMaster, Genie, Chamberlain, and more." },
    { question: "What does your maintenance plan include?", answer: "Lubrication, spring tension and cable inspection, roller and hinge check, track alignment, balance test, and safety reverse testing. Month-to-month options available." },
    { question: "Do you offer emergency service?", answer: "Yes — same-day and emergency garage door service is available 7 days a week including evenings. Call (254) 720-1100 anytime." },
    { question: "Are you bonded and insured?", answer: "Yes — Summit Door Pros is bonded and insured with IDA-trained technicians." },
    { question: "Do you offer a warranty?", answer: "Yes — Lifetime Spring Warranty on spring replacements plus a 2-Year Workmanship Warranty." },
  ];

  return (
    <main className={styles.pageWrapper}>

      <SectionIntro
        title="Garage Door Services for Waco & Central Texas"
        subtitle="Repair, springs & cables, new doors, openers, maintenance, and commercial doors — done right, priced upfront, backed by a Lifetime Spring Warranty + 2-Year Workmanship."
      />

      <TrustBar headline="5,000+ Central Texas doors serviced by Summit Door Pros" />

      <div className={styles.section}>
        <ServiceCardComponent heading="All Our Services" cards={services} />
      </div>

      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose Summit" />
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
        <FAQ cityName="Waco" faq={faq} title="Garage Door Service FAQs" />
      </div>

      <div className={styles.section}>
        <Variant4 title="Request Service or a Free Quote" cityName="Waco" slug="/services" spot="services-index-form" formVariant={2} />
      </div>

      <CTABanner
        headline="Need Garage Door Service Today?"
        subline="Same-day appointments available. Flat-rate pricing. Lifetime Spring Warranty + 2-Year Workmanship."
        primaryText="Call (254) 720-1100"
        primaryLink="tel:+12547201100"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
