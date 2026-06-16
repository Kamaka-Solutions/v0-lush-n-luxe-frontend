"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { SUBSCRIPTION_STEPS, SUBSCRIPTION_BENEFITS } from "@/lib/constants";
import { Home, Building2, Bed, Users, DollarSign, Sparkles, Leaf, Settings, Briefcase } from "lucide-react";

/* ──────────────────────────── Hero ──────────────────────────── */

function SubHero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pb-24 pt-48 lg:pb-32 lg:pt-56">
      <Image
        src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1920&q=80"
        alt="Fresh clean linens"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium uppercase tracking-[0.3em] text-accent"
        >
          Subscription Programme
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-4 font-serif text-4xl font-bold text-primary-foreground md:text-6xl text-balance"
        >
          A Smarter Way to Manage Textiles
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg text-primary-foreground/80 leading-relaxed text-pretty"
        >
          A smarter way to manage textiles. Subscribe, receive, return, and
          refresh &mdash; a circular textile programme that saves money, time,
          and the environment.
        </motion.p>
      </div>
    </section>
  );
}

/* ──────────────────── How It Works ──────────────────── */

function HowItWorks() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="How It Works"
            subtitle="Five simple steps to effortless textile management."
          />
        </AnimatedSection>

        <div className="mt-16 flex flex-col gap-0 md:flex-row md:gap-0">
          {SUBSCRIPTION_STEPS.map((step, i) => (
            <AnimatedSection
              key={step.step}
              delay={i * 0.1}
              className="flex-1 relative"
            >
              <div className="flex flex-col items-center text-center px-4 py-8 md:py-4">
                {/* Step number */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-serif text-xl font-bold">
                  {step.step}
                </div>
                {/* Connector line (desktop) */}
                {i < SUBSCRIPTION_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-11 left-[calc(50%+28px)] right-0 h-0.5 bg-border" />
                )}
                <h3 className="mt-6 font-serif text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Ideal For ──────────────────── */

const idealFor = [
  { icon: Bed, label: "Airbnb Hosts" },
  { icon: Building2, label: "Small Hotels" },
  { icon: Users, label: "Nursing Homes" },
  { icon: Home, label: "Spa Facilities" },
  { icon: Briefcase, label: "Corporate Housing" },
];

function IdealFor() {
  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Ideal For"
            subtitle="Whether you manage one home or one hundred rooms, our subscription adapts."
          />
        </AnimatedSection>

        <StaggerContainer className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {idealFor.map((item) => (
            <motion.div
              key={item.label}
              variants={staggerItem}
              className="flex flex-col items-center gap-4 rounded-lg border border-border bg-background p-8 text-center transition-shadow hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="font-medium text-foreground">{item.label}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ──────────────────── Benefits ──────────────────── */

const benefitIcons = [DollarSign, Sparkles, Leaf, Settings];

function Benefits() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Why Subscribe"
            subtitle="The smarter, greener, more affordable way to keep your spaces impeccable."
          />
        </AnimatedSection>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {SUBSCRIPTION_BENEFITS.map((benefit, i) => {
            const Icon = benefitIcons[i] || Sparkles;
            return (
              <motion.div
                key={benefit.title}
                variants={staggerItem}
                className="group rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-6 font-serif text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection delay={0.3} className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-sm bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            Join the Programme
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ──────────────────── Page Export ──────────────────── */

export default function SubscriptionContent() {
  return (
    <>
      <SubHero />
      <HowItWorks />
      <IdealFor />
      <Benefits />
    </>
  );
}
