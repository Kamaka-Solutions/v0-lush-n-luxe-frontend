"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import {
  AnimatedSection,
  StaggerContainer,
  staggerItem,
} from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { CollectionCard } from "@/components/collection-card";
import {
  FEATURED_COLLECTIONS,
  CAROUSEL_COLLECTIONS,
  BRAND_PROMISES,
} from "@/lib/constants";
import { Check, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

/* ──────────────────────────── Hero ──────────────────────────── */

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden grain-overlay">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80"
        alt="Luxury living room with sustainable textiles"
        fill
        priority
        className="object-cover"
      />
      {/* Dark vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/40 to-foreground/70 z-[1]" />

      <div className="relative z-[2] mx-auto max-w-4xl px-6 pt-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium uppercase tracking-[0.3em] text-accent"
        >
          Sustainable Homeware &amp; Textiles Solutions
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl text-balance"
        >
          Elevating Homes Where Elegance Meets Sustainability
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 text-pretty"
        >
          Luxury Homeware &amp; Textiles, Crafted for Every Lifestyle &mdash;
          Delivered Sustainably and Affordably.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/#collections"
            className="inline-flex items-center rounded-sm bg-accent px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-accent/90 hover:shadow-lg"
          >
            Shop Collection
          </Link>
          <Link
            href="/b2b"
            className="inline-flex items-center rounded-sm border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
          >
            Explore B2B Solutions
          </Link>
          <Link
            href="/subscription"
            className="inline-flex items-center rounded-sm border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
          >
            Join Linen Subscription
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-[2] -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="h-10 w-6 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center pt-2"
        >
          <div className="h-2 w-1 rounded-full bg-primary-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ────────────────────── Featured Collections ────────────────────── */

function FeaturedCollections() {
  return (
    <section id="collections" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Our Collections"
            subtitle="Discover carefully curated ranges designed to transform every corner of your home."
          />
        </AnimatedSection>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_COLLECTIONS.map((col, i) => (
            <motion.div
              key={col.title}
              variants={staggerItem}
              className={
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }
            >
              <CollectionCard
                title={col.title}
                description={col.description}
                image={col.image}
                href={col.href}
              />
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ────────────────────── About Preview ────────────────────── */

function AboutPreview() {
  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <AnimatedSection direction="left" className="lg:w-1/2">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=900&q=80"
                alt="Sustainable luxury bedroom interior"
                width={900}
                height={700}
                className="h-[500px] w-full object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection
            direction="right"
            delay={0.15}
            className="lg:w-1/2"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              About Lush n&apos; Luxe
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Redefining Comfort with Purpose
            </h2>
            <div className="mt-3 h-0.5 w-16 bg-accent" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              At Lush n&apos; Luxe, we believe luxury should feel good &mdash;
              and do good. We supply sustainable, high-quality home textiles
              designed for refined living spaces, hospitality environments, and
              care facilities that demand durability without compromising
              elegance.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From curated seasonal bedding to commercial-grade towel solutions,
              we combine comfort, performance, and environmental responsibility.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-foreground">
              Our Promise
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {BRAND_PROMISES.map((promise) => (
                <li
                  key={promise}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </span>
                  {promise}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────── Featured Carousel ────────────────────── */

function FeaturedCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              title="Featured Collections"
              subtitle="Hand-picked ranges designed for those who appreciate the finer things."
            />
            <div className="hidden flex-shrink-0 gap-3 pb-2 sm:flex">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Scroll collections left"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Scroll collections right"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Edge fade hints that there is more to scroll */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent" />

          <div
            ref={scrollRef}
            className="mt-16 -mx-6 px-6 overflow-x-auto hide-scrollbar scroll-smooth"
          >
            <div className="flex gap-6" style={{ minWidth: "max-content" }}>
              {CAROUSEL_COLLECTIONS.map((item, i) => (
                <AnimatedSection
                  key={item.title}
                  delay={i * 0.1}
                  className="w-80 flex-shrink-0"
                >
                  <div className="group overflow-hidden rounded-lg bg-card shadow-sm transition-shadow hover:shadow-md">
                    <div className="overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={800}
                        height={600}
                        className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile arrows below the track */}
        <div className="mt-6 flex justify-center gap-3 sm:hidden">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll collections left"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll collections right"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────── Newsletter ────────────────────── */

function Newsletter() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <AnimatedSection>
          <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left lg:justify-between">
            <div className="lg:max-w-lg">
              <h2 className="font-serif text-2xl font-bold text-primary-foreground md:text-3xl text-balance">
                Stay in the Loop
              </h2>
              <p className="mt-3 text-primary-foreground/80 leading-relaxed">
                Get early access to our latest collections and exclusive
                promotions.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-sm border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ────────────────────── Page Export ────────────────────── */

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <AboutPreview />
      <FeaturedCarousel />
      <Newsletter />
    </>
  );
}
