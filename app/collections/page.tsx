import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import CollectionsContent from "@/components/collections-content";

export const metadata: Metadata = {
  title: "Collections | Lush n' Luxe",
  description:
    "Explore the Lush n' Luxe collections launching soon — luxury, sustainable homeware and textiles for every room. Sign up to be the first to know.",
};

export default function CollectionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <CollectionsContent />
      </main>
      <Footer />
    </>
  );
}
