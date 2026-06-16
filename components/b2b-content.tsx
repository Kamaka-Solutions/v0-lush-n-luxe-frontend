"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { B2B_PARTNERS, B2B_FEATURES } from "@/lib/constants";
import {
  Building2,
  Home,
  Heart,
  Users,
  Briefcase,
  Calendar,
  TrendingUp,
  RefreshCw,
  Package,
  Sparkles,
  FileText,
  CreditCard,
  Award,
  Shield,
  Clock,
  ThumbsUp,
  CheckCircle2,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Home,
  Heart,
  Users,
  Briefcase,
  Calendar,
  TrendingUp,
  RefreshCw,
  Package,
  Sparkles,
  FileText,
  CreditCard,
};

/* ──────────────────────────── Hero ──────────────────────────── */

function B2BHero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-foreground pb-24 pt-48 lg:pb-32 lg:pt-56">
      <Image
        src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1920&q=80"
        alt="Professional hotel interior"
        fill
        className="object-cover opacity-30"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium uppercase tracking-[0.3em] text-accent"
        >
          For Business
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-4 font-serif text-4xl font-bold text-primary-foreground md:text-6xl text-balance"
        >
          Professional Linen Supply Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg text-primary-foreground/80 leading-relaxed text-pretty"
        >
          We partner with hotels, boutique stays, Airbnb hosts, hospitals,
          nursing homes, corporate housing, and event organisers to deliver
          premium textile solutions at scale.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#quote"
            className="inline-flex items-center rounded-sm bg-accent px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-accent/90"
          >
            Request Corporate Account
          </Link>
          <Link
            href="#quote"
            className="inline-flex items-center rounded-sm border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
          >
            Request a Quotation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────── Partners ──────────────────── */

function Partners() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Who We Partner With"
            subtitle="From boutique hotels to enterprise healthcare, we supply premium textiles at scale."
          />
        </AnimatedSection>

        <StaggerContainer className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {B2B_PARTNERS.map((partner) => {
            const Icon = iconMap[partner.icon] || Building2;
            return (
              <motion.div
                key={partner.title}
                variants={staggerItem}
                className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-6 text-center transition-shadow hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">
                  {partner.title}
                </p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ──────────────────── Features ──────────────────── */

function Features() {
  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="What We Offer"
            subtitle="Comprehensive textile solutions designed for operational excellence."
          />
        </AnimatedSection>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {B2B_FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon] || Package;
            return (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                className="group rounded-lg border border-border bg-background p-8 transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-6 font-serif text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ──────────────────── Trust Strip ──────────────────── */

const trustItems = [
  { icon: Award, label: "ISO 9001 Certified" },
  { icon: Shield, label: "Fully Insured" },
  { icon: Clock, label: "48-Hour Delivery" },
  { icon: ThumbsUp, label: "500+ Business Clients" },
];

function TrustStrip() {
  return (
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {trustItems.map((item) => (
            <motion.div
              key={item.label}
              variants={staggerItem}
              className="flex flex-col items-center gap-3 text-center"
            >
              <item.icon className="h-8 w-8 text-accent" />
              <p className="text-sm font-medium text-primary-foreground">
                {item.label}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ��────��────────────── Page Export ──────────────────── */

function QuoteRequest() {
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    "w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

  return (
    <section id="quote" className="scroll-mt-40 bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Request a Quotation"
            subtitle="Tell us about your requirements and our team will prepare a tailored quote within 48 hours."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          {submitted ? (
            <div className="mt-12 flex flex-col items-center gap-4 rounded-lg border border-border bg-background p-12 text-center">
              <CheckCircle2 className="h-12 w-12 text-primary" />
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Thank you!
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                Your quotation request has been received. A member of our
                business team will be in touch within 48 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-12 grid grid-cols-1 gap-6 rounded-lg border border-border bg-background p-8 sm:grid-cols-2 lg:p-10"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="q-name" className="text-sm font-medium text-foreground">
                  Full Name
                </label>
                <input id="q-name" type="text" required placeholder="Jane Doe" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="q-company" className="text-sm font-medium text-foreground">
                  Company
                </label>
                <input id="q-company" type="text" required placeholder="Acme Hospitality" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="q-email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <input id="q-email" type="email" required placeholder="jane@company.com" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="q-phone" className="text-sm font-medium text-foreground">
                  Phone
                </label>
                <input id="q-phone" type="tel" placeholder="+1 (555) 000-0000" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="q-type" className="text-sm font-medium text-foreground">
                  Business Type
                </label>
                <select id="q-type" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option>Hotel / Resort</option>
                  <option>Boutique Stay / Airbnb</option>
                  <option>Healthcare / Nursing Home</option>
                  <option>Corporate Housing</option>
                  <option>Event Organiser</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="q-quantity" className="text-sm font-medium text-foreground">
                  Estimated Quantity
                </label>
                <input id="q-quantity" type="text" placeholder="e.g. 200 towel sets" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="q-details" className="text-sm font-medium text-foreground">
                  Project Details
                </label>
                <textarea
                  id="q-details"
                  rows={4}
                  placeholder="Tell us about the products you need, timelines, and any special requirements."
                  className={inputClass}
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-sm bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
                >
                  Submit Quotation Request
                </button>
              </div>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}

export default function B2BContent() {
  return (
    <>
      <B2BHero />
      <Partners />
      <Features />
      <TrustStrip />
      <QuoteRequest />
    </>
  );
}
