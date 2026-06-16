"use client";

import Link from "next/link";
import Image from "next/image";
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
            href="/contact"
            className="inline-flex items-center rounded-sm bg-accent px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-accent/90"
          >
            Request Corporate Account
          </Link>
          <Link
            href="/contact"
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

/* ─────��────────────── Page Export ──────────────────── */

export default function B2BContent() {
  return (
    <>
      <B2BHero />
      <Partners />
      <Features />
      <TrustStrip />
    </>
  );
}
