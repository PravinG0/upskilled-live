import React from "react";
import ReactDOM from "react-dom/client";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustMarquee } from "@/components/site/TrustMarquee";
import { WhoItIsFor } from "@/components/site/WhoItIsFor";
import { LearningGap } from "@/components/site/LearningGap";
import { Journey } from "@/components/site/Journey";
import { JupyterLabs } from "@/components/site/JupyterLabs";
import { AdvancedAITools } from "@/components/site/AdvancedAITools";
import { Impact } from "@/components/site/Impact";
import { Solutions } from "@/components/site/Solutions";
import { Careers } from "@/components/site/Careers";
import { Security } from "@/components/site/Security";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import "./styles.css";

function App() {
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
