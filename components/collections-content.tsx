"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Bell, Check } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { COLLECTIONS } from "@/lib/constants";

/* ──────────────────────────── Hero ──────────────────────────── */

function CollectionsHero() {
  return (
    <section className="relative overflow-hidden bg-foreground pb-20 pt-48 lg:pb-28 lg:pt-56">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium uppercase tracking-[0.3em] text-accent"
        >
          Coming Soon
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance"
        >
          Our Collections
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 text-pretty"
        >
          We&apos;re carefully curating our first collections and will be
          launching them soon. Be the first to know when they&apos;re available.
        </motion.p>
      </div>
    </section>
  );
}

/* ──────────────────── Notify Me Button ──────────────────── */

function NotifyButton({ collection }: { collection: string }) {
  const [notified, setNotified] = useState(false);

  if (notified) {
    return (
      <span className="inline-flex items-center gap-2 rounded-sm bg-primary/10 px-6 py-3.5 text-sm font-semibold text-primary">
        <Check className="h-4 w-4" />
        We&apos;ll be in touch
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setNotified(true)}
      aria-label={`Notify me when ${collection} launches`}
      className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
    >
      <Bell className="h-4 w-4" />
      Notify Me
    </button>
  );
}

/* ──────────────────── Collection Row ──────────────────── */

function CollectionRow({
  collection,
  index,
}: {
  collection: (typeof COLLECTIONS)[number];
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <section
      id={collection.slug}
      className="scroll-mt-40 border-b border-border py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`flex flex-col items-center gap-10 lg:gap-16 ${
            reversed ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          {/* Image */}
          <AnimatedSection
            direction={reversed ? "left" : "right"}
            className="w-full lg:w-1/2"
          >
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={collection.image}
                alt={collection.title}
                width={1200}
                height={900}
                className="h-[360px] w-full object-cover lg:h-[460px]"
              />
              <span className="absolute left-4 top-4 rounded-sm bg-background/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                Coming Soon
              </span>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection
            direction={reversed ? "right" : "left"}
            delay={0.15}
            className="w-full lg:w-1/2"
          >
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              {collection.title}
            </h2>
            <div className="mt-3 h-0.5 w-16 bg-accent" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {collection.description}
            </p>

            <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-foreground">
              What&apos;s Coming
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {collection.products.map((product) => (
                <li
                  key={product}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
                >
                  {product}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <NotifyButton collection={collection.title} />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Page Export ──────────────────── */

export default function CollectionsContent() {
  return (
    <>
      <CollectionsHero />
      {COLLECTIONS.map((collection, i) => (
        <CollectionRow key={collection.slug} collection={collection} index={i} />
      ))}
    </>
  );
}
