import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustMarquee } from "@/components/site/TrustMarquee";
import { WhoItIsFor } from "@/components/site/WhoItIsFor";
import { LearningGap } from "@/components/site/LearningGap";
import { Journey } from "@/components/site/Journey";
import { JupyterLabs } from "@/components/site/JupyterLabs";
import { AIFeatures } from "@/components/site/AIFeatures";
import { AdvancedAITools } from "@/components/site/AdvancedAITools";
import { Impact } from "@/components/site/Impact";
import { Solutions } from "@/components/site/Solutions";
import { Careers } from "@/components/site/Careers";
import { Security } from "@/components/site/Security";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Upskilled.ai — Where Learning Becomes Capability" },
      {
        name: "description",
        content:
          "AI-powered learning platform with intelligent tutors, integrated Jupyter labs, automated assessments, and career pathways — built to turn learning into measurable outcomes.",
      },
      { property: "og:title", content: "Upskilled.ai — Where Learning Becomes Capability" },
      {
        property: "og:description",
        content:
          "AI tutors, integrated coding labs, automated assessments, career pathways, and learning intelligence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Nav />
      <Hero />
      <div className="border-t border-white/5" />
      <TrustMarquee />
      <div className="border-t border-white/5" />
      <WhoItIsFor />
      <div className="border-t border-white/5" />
      <LearningGap />
      <div className="border-t border-white/5" />
      <Journey />
      <div className="border-t border-white/5" />
      <JupyterLabs />
      <div className="border-t border-white/5" />
      <AIFeatures />
      <div className="border-t border-white/5" />
      <AdvancedAITools />
      <div className="border-t border-white/5" />
      <Impact />
      <div className="border-t border-white/5" />
      <Solutions />
      <div className="border-t border-white/5" />
      <Careers />
      <div className="border-t border-white/5" />
      <Security />
      <div className="border-t border-white/5" />
      <FAQ />
      <div className="border-t border-white/5" />
      <CTA />
      <div className="border-t border-white/5" />
      <Footer />
    </main>
  );
}
