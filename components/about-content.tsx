"use client";

import Image from "next/image";
import {
  AnimatedSection,
  StaggerContainer,
  staggerItem,
} from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import { Leaf, Recycle, Heart, ShieldCheck, Check } from "lucide-react";

/* ──────────────────────────── Hero ──────────────────────────── */

function AboutHero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pb-24 pt-48 lg:pb-32 lg:pt-56">
      <Image
        src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=1920&q=80"
        alt="Elegant interior design"
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
          About Us
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-4 font-serif text-4xl font-bold text-primary-foreground md:text-6xl text-balance"
        >
          Our Story
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg text-primary-foreground/80 leading-relaxed text-pretty"
        >
          Lush n&apos; Luxe was founded with a vision to bring refined,
          sustainable textiles to homes and businesses that value quality and
          responsibility.
        </motion.p>
      </div>
    </section>
  );
}

/* ──────────────────── Our Story ──────────────────── */

function OurStory() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <AnimatedSection direction="left" className="lg:w-1/2">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
                alt="Lush n' Luxe workspace"
                width={900}
                height={700}
                className="h-[480px] w-full object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection
            direction="right"
            delay={0.15}
            className="lg:w-1/2"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Who We Are
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Quality, Responsibility &amp; Partnership
            </h2>
            <div className="mt-3 h-0.5 w-16 bg-accent" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We serve homeowners seeking elevated comfort, and institutions
              requiring dependable textile solutions &mdash; from boutique
              hotels and Airbnb to hospitals and nursing homes.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our focus is not only on supplying textiles but on building
              long-term partnerships through innovation, service reliability,
              and environmental stewardship.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Mission & Vision ──────────────────── */

function MissionVision() {
  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading title="Mission &amp; Vision" />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <AnimatedSection delay={0.1}>
            <div className="h-full rounded-lg border border-border bg-background p-10">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
                Our Mission
              </p>
              <h3 className="mt-4 font-serif text-2xl font-bold text-foreground">
                Comfort with Conscience
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                To provide sustainable, premium home textiles that enhance
                comfort, elevate environments, and reduce environmental impact
                through responsible sourcing and circular textile practices.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="h-full rounded-lg border border-border bg-background p-10">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
                Our Vision
              </p>
              <h3 className="mt-4 font-serif text-2xl font-bold text-foreground">
                Trusted Sustainable Luxury
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                To become a trusted supplier of sustainable luxury textiles
                across residential and commercial markets.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Sustainability Commitment ──────────────────── */

const commitments = [
  "Ethical sourcing",
  "Durable, long-life fabrics",
  "Textile recycling programs",
  "Subscription replacement systems that reduce waste",
  "Responsible packaging",
];

function SustainabilityCommitment() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:gap-16">
          <AnimatedSection direction="right" className="lg:w-1/2">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=80"
                alt="Sustainable landscape"
                width={900}
                height={700}
                className="h-[480px] w-full object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection
            direction="left"
            delay={0.15}
            className="lg:w-1/2"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Our Pledge
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Sustainability Commitment
            </h2>
            <div className="mt-3 h-0.5 w-16 bg-accent" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We are committed to building a circular linen economy. Every
              decision we make moves us closer to a textile industry that
              respects people and planet alike.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {commitments.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </span>
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

/* ──────────────────── Brand Values ──────────────────── */

const values = [
  {
    icon: Leaf,
    title: "Ethical Sourcing",
    description:
      "Every fibre is traceable, every supplier is vetted, and every material meets our rigorous environmental standards.",
  },
  {
    icon: Recycle,
    title: "Circular Economy",
    description:
      "Our return-and-recycle programme ensures textiles are repurposed, repaired, or recycled — never landfilled.",
  },
  {
    icon: Heart,
    title: "Durable Quality",
    description:
      "Long-life fabrics designed for longevity and comfort, reducing the need for frequent replacement.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Packaging",
    description:
      "We use eco-friendly packaging throughout our supply chain, minimising waste at every stage.",
  },
];

function BrandValues() {
  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Our Values"
            subtitle="The four pillars that guide every thread we weave and every partnership we build."
          />
        </AnimatedSection>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((val) => (
            <motion.div
              key={val.title}
              variants={staggerItem}
              className="group rounded-lg border border-border bg-background p-8 text-center transition-shadow hover:shadow-md"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <val.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 font-serif text-lg font-semibold text-foreground">
                {val.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {val.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ──────────────────── Page Export ──────────────────── */

export default function AboutContent() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <SustainabilityCommitment />
      <BrandValues />
    </>
  );
}
