// Summit Door Pros — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faDoorOpen, faLink, faWrench, faCogs, faClipboardList, faBuilding,
  faTrophy, faChartLine, faClock,
  faShieldHalved, faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faFileAlt, faRotateLeft, faStar, faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    {
      icon: faWrench,
      title: "Garage Door Repair",
      body: "Same-day diagnosis on off-track doors, rollers, hinges, cables, and noisy operation. We stock common parts on every truck — most repairs completed in one visit.",
      link: "/services/garage-door-repair",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faLink,
      title: "Spring & Cable Repair",
      body: "Torsion and extension spring replacement, cable re-stringing, and door balancing — with a Lifetime Spring Warranty on every spring job.",
      link: "/services/spring-cable-repair",
      image: "/pages/home/services/service-2.jpg",
    },
    {
      icon: faDoorOpen,
      title: "New Door Installation",
      body: "Steel, insulated, carriage-house, and custom residential doors sized and installed for curb appeal, security, and Texas heat.",
      link: "/services/new-door-installation",
      image: "/pages/home/services/service-3.jpg",
    },
    {
      icon: faCogs,
      title: "Opener Installation",
      body: "Chain, belt, and smart openers with photo-eyes, wall controls, and app setup — quiet, reliable access every day.",
      link: "/services/opener-installation",
      image: "/pages/home/services/service-4.jpg",
    },
    {
      icon: faClipboardList,
      title: "Door Maintenance Plans",
      body: "Tune-ups, lubrication, balance checks, and safety reverse testing so small issues never leave you stranded.",
      link: "/services/door-maintenance",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faBuilding,
      title: "Commercial Doors",
      body: "Rolling steel, sectional, and high-cycle commercial door service for warehouses, retail, and multi-unit properties.",
      link: "/services/commercial-doors",
      image: "/pages/home/services/service-2.jpg",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 5000, label: "Doors serviced across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock,     value: 15,   label: "Years of local garage door experience", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",          suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Flat-Rate Written Quotes",
      description: "You get a firm price before we touch a spring or panel. No hourly billing, no surprise add-ons mid-job.",
    },
    {
      icon: faShieldHalved,
      title: "IDA-Trained Technicians",
      description: "Every tech is IDA-trained, bonded, and insured. No unlicensed freelancers working alone on your door.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2011",
      description: "We're not a franchise. Summit Door Pros was founded in Waco by Marcus Hale. Every decision is made locally.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — your choice. We'll confirm a same-day or next-day slot that fits your schedule.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "We Diagnose On-Site",
      description: "An IDA-trained tech inspects the door, explains the issue in plain English, and shows options — not just the most expensive one.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "You Get a Flat-Rate Quote",
      description: "Written price before any work starts. You decide — zero pressure to proceed. The quote never changes mid-job.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Done Right, Warrantied",
      description: "Quality parts, clean workmanship, Lifetime Spring Warranty + 2-Year Workmanship. We leave when you're satisfied.",
      icon: faCheckCircle,
    },
  ];

  const expectations = [
    {
      icon: faSearch,
      title: "Honest Door Assessment",
      description: "We diagnose what's actually wrong — not what's most profitable to sell. You see the findings before we quote anything.",
    },
    {
      icon: faWrench,
      title: "Clean, Respectful Work",
      description: "Drop cloths down, driveway protected, hardware cleaned up. Your home and garage left the way we found them.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Flat-Rate Price",
      description: "Written quote before any work begins. The number doesn't change when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "Quality Parts & Balance",
      description: "Manufacturer-approved springs, cables, rollers, and openers — balanced and safety-tested before we leave.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling and most available techs in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and commercial coverage. On our regular route.",      badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway homes and businesses.",               badge: "" },
    { town: "Temple",       benefit: "Regular service area — quick turnaround guaranteed.",                  badge: "" },
    { town: "China Spring", benefit: "Rural coverage, no trip charge for most China Spring addresses.",      badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area customers.",           badge: "" },
  ];

  const faq = [
    {
      question: "How much does garage door service cost in Waco?",
      answer: "Most repairs range from $150–$450 depending on the issue. Spring replacement typically runs $250–$450. New door installation varies by size and style. We always provide a flat-rate written quote before any work begins.",
    },
    {
      question: "Do you offer same-day or emergency service?",
      answer: "Yes — same-day and emergency garage door service is available 7 days a week including evenings. Call us at (254) 720-1100 anytime.",
    },
    {
      question: "How quickly can you start my project?",
      answer: "Most repair calls are same-day or next-day. New door installs are typically scheduled within 1–2 weeks depending on door availability and style selection.",
    },
    {
      question: "What garage door services do you offer?",
      answer: "Garage door repair, spring & cable repair, new door installation, opener installation, door maintenance plans, and commercial doors.",
    },
    {
      question: "Are you bonded and insured?",
      answer: "Yes — Summit Door Pros is bonded and insured with IDA-trained technicians. Credentials available on request.",
    },
    {
      question: "Do you offer a warranty?",
      answer: "Yes — Lifetime Spring Warranty on spring replacements plus a Lifetime Spring Warranty + 2-Year Workmanship covering labor and installation defects.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar
        headline="Waco's trusted garage door company — IDA-trained, insured, and warrantied on every job"
      />
      <div className={styles.section}>
        <ImpactMetrics
          title="Numbers That Speak for Us"
          metrics={metrics}
          cityName="Waco"
        />
      </div>
      <CTABanner
        headline="Garage Door Stuck? We Roll Fast."
        subline="Springs, openers, and full door replacements — same-day service across Central Texas."
        primaryText="Call (254) 720-1100"
        primaryLink="tel:+12547201100"
        secondaryText="Book Door Tech"
        secondaryLink="/contact"
        imageSrc="/pages/home/welcome/hero-main.jpg"
      />
      <div className={styles.section}>
        <ServiceCardComponent
          heading="Complete Garage Door Services for Your Home"
          cards={services}
        />
      </div>
      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="What Makes Summit Door Pros Different"
        />
      </div>
      <div className={styles.section}>
        <Variant4
          title="Request Service or a Free Quote"
          cityName="Waco"
          slug="/"
          spot="homepage-contact-form"
          formVariant={2}
        />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>
      <div className={styles.section}>
        <GuaranteeSection />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas
          cityName="Waco"
          areas={localAreas}
          servicePath=""
          title="Serving All of Central Texas"
        />
      </div>
      <div className={styles.section}>
        <WhatToExpect
          sectionTitle="Every Service Call, Every Time"
          expectations={expectations}
        />
      </div>
      <div className={styles.section}>
        <FAQ
          cityName="Waco"
          faq={faq}
          title="Garage Door Questions — Answered Straight"
        />
      </div>
      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>
    </main>
  );
}
