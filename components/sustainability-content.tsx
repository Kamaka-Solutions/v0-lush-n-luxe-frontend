"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { SUSTAINABILITY_METRICS } from "@/lib/constants";
import { Recycle, Truck, Scissors, Leaf, Droplets, Zap, TreePine } from "lucide-react";

/* ──────────────────────────── Hero ──────────────────────────── */

function SustainHero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pb-24 pt-48 lg:pb-32 lg:pt-56">
      <Image
        src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80"
        alt="Lush green landscape"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-foreground/55" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium uppercase tracking-[0.3em] text-accent"
        >
          Our Commitment
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-4 font-serif text-4xl font-bold text-primary-foreground md:text-6xl text-balance"
        >
          Sustainability at Our Core
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg text-primary-foreground/80 leading-relaxed text-pretty"
        >
          We are building a responsible textile future.
        </motion.p>
      </div>
    </section>
  );
}

/* ──────────────────── Circular Programme ──────────────────── */

function CircularProgramme() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <AnimatedSection direction="left" className="lg:w-1/2">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=900&q=80"
                alt="Sustainable cotton fields"
                width={900}
                height={700}
                className="h-[480px] w-full object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15} className="lg:w-1/2">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Circular Economy
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Circular Textile Programme
            </h2>
            <div className="mt-3 h-0.5 w-16 bg-accent" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Through our return &amp; recycle initiative, clients can return
              used linens, track environmental impact, participate in seasonal
              refresh cycles, and reduce landfill waste.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Textiles that can no longer be used in their original form are
              broken down and repurposed into new products, insulation, or
              industrial cleaning materials &mdash; ensuring nothing goes to
              waste.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Return & Recycle ──────────────────── */

const recycleSteps = [
  {
    icon: Truck,
    title: "Collect",
    description: "Schedule a free pickup or use our prepaid return bags.",
  },
  {
    icon: Scissors,
    title: "Inspect & Sort",
    description: "Our team assesses condition and determines the best next life for each item.",
  },
  {
    icon: Recycle,
    title: "Recycle & Repurpose",
    description: "Clean items are re-circulated; worn items are recycled into new materials.",
  },
  {
    icon: Leaf,
    title: "Renew",
    description: "You receive fresh, sustainably sourced replacements — the cycle continues.",
  },
];

function ReturnRecycle() {
  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Return & Recycle Initiative"
            subtitle="A closed-loop system that keeps textiles out of landfill and in circulation."
          />
        </AnimatedSection>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {recycleSteps.map((step) => (
            <motion.div
              key={step.title}
              variants={staggerItem}
              className="flex flex-col items-center rounded-lg border border-border bg-background p-8 text-center transition-shadow hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 font-serif text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ──────────────────── Smart Linen for B2B ──────────────────── */

function SmartLinen() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:gap-16">
          <AnimatedSection direction="right" className="lg:w-1/2">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900&q=80"
                alt="Hotel room with fresh linens"
                width={900}
                height={700}
                className="h-[480px] w-full object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.15} className="lg:w-1/2">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              For Business
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Smart Linen Management for B2B
            </h2>
            <div className="mt-3 h-0.5 w-16 bg-accent" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              For hotels, healthcare facilities, and hospitality providers, our
              smart linen management system provides usage tracking, automated
              restock reminders, inventory forecasting, and subscription
              optimisation.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {[
                "Usage tracking",
                "Automated restock reminders",
                "Inventory forecasting",
                "Subscription optimisation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Leaf className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Impact Metrics ──────────────────── */

const metricIcons = [Recycle, Droplets, TreePine, Zap];

function ImpactMetrics() {
  return (
    <section className="bg-primary py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Our Impact"
            subtitle="Numbers that reflect our commitment to a sustainable future."
            light
          />
        </AnimatedSection>

        <StaggerContainer className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {SUSTAINABILITY_METRICS.map((metric, i) => {
            const Icon = metricIcons[i] || Leaf;
            return (
              <motion.div
                key={metric.label}
                variants={staggerItem}
                className="flex flex-col items-center gap-3 text-center"
              >
                <Icon className="h-8 w-8 text-accent" />
                <span className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
                  {metric.value}
                </span>
                <p className="text-sm text-primary-foreground/70">
                  {metric.label}
                </p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ──────────────────── Page Export ──────────────────── */

export default function SustainabilityContent() {
  return (
    <>
      <SustainHero />
      <CircularProgramme />
      <ReturnRecycle />
      <SmartLinen />
      <ImpactMetrics />
    </>
  );
}
