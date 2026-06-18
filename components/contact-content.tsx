"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { MapPin, Mail, Phone, MessageCircle, Calendar, Store } from "lucide-react";

/* ──────────────────────────── Hero ──────────────────────────── */

function ContactHero() {
  return (
    <section className="bg-foreground pb-24 pt-48 lg:pb-32 lg:pt-56">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium uppercase tracking-[0.3em] text-accent"
        >
          Get in Touch
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-4 font-serif text-4xl font-bold text-primary-foreground md:text-6xl text-balance"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg text-primary-foreground/80 leading-relaxed text-pretty"
        >
          We&apos;d love to support your home or business textiles needs.
        </motion.p>
      </div>
    </section>
  );
}

/* ──────────────────── Contact Info ──────────────────── */

const contactDetails = [
  {
    icon: MapPin,
    title: "Location",
    lines: ["Castlewellan, Northern Ireland", "Warehouse & Showroom Available"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["Info@lushnluxe.co.uk"],
    href: "mailto:Info@lushnluxe.co.uk",
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+44 7379 879818"],
    href: "tel:+447379879818",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: ["Chat with us on WhatsApp"],
    href: "https://wa.me/447379879818",
  },
];

/* ──────────────────── Form + Details ──────────────────── */

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-16 lg:flex-row">
          {/* Left: Contact details + CTAs */}
          <AnimatedSection direction="left" className="lg:w-5/12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Contact Details
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground text-balance">
              We&apos;re Here to Help
            </h2>
            <div className="mt-3 h-0.5 w-16 bg-accent" />

            <div className="mt-10 flex flex-col gap-8">
              {contactDetails.map((detail) => {
                const content = (
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <detail.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{detail.title}</p>
                      {detail.lines.map((line) => (
                        <p key={line} className="text-sm text-muted-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
                return detail.href ? (
                  <a
                    key={detail.title}
                    href={detail.href}
                    className="transition-opacity hover:opacity-80"
                    target={detail.href.startsWith("http") ? "_blank" : undefined}
                    rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={detail.title}>{content}</div>
                );
              })}
            </div>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                <Calendar className="h-4 w-4" />
                Book Consultation
              </Link>
              <Link
                href="/#"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted"
              >
                <Store className="h-4 w-4" />
                Visit Showroom
              </Link>
            </div>
          </AnimatedSection>

          {/* Right: Contact form */}
          <AnimatedSection direction="right" delay={0.15} className="lg:w-7/12">
            <div className="rounded-lg border border-border bg-card p-8 lg:p-10">
              <SectionHeading
                title="Send Us a Message"
                subtitle="Fill in the form below and we'll get back to you within 24 hours."
                align="left"
              />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-10 rounded-lg bg-primary/10 p-8 text-center"
                >
                  <p className="font-serif text-xl font-semibold text-foreground">
                    Thank you for reaching out!
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We&apos;ve received your message and will respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="mt-10 flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-foreground"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Your full name"
                        className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-foreground"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-sm font-medium text-foreground"
                    >
                      Subject
                    </label>
                    <select
                      id="contact-subject"
                      required
                      defaultValue=""
                      className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="general">General Enquiry</option>
                      <option value="b2b">B2B / Corporate Account</option>
                      <option value="quotation">Request a Quotation</option>
                      <option value="subscription">Subscription Programme</option>
                      <option value="showroom">Showroom Visit</option>
                      <option value="press">Press / Media</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="Tell us how we can help..."
                      className="mt-2 w-full resize-none rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="self-start rounded-sm bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── Page Export ──────────────────── */

export default function ContactContent() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
