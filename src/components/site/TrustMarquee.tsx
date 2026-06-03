import { motion } from "framer-motion";

const items = [
  "AI-Powered Learning",
  "Integrated Jupyter Labs",
  "Automated Assessments",
  "Career Development",
  "Measurable Outcomes",
  "SOC 2 · HIPAA · ISO 27001",
];

export function TrustMarquee() {
  const row = [...items, ...items, ...items];
  return (
    <section className="relative py-10 border-y border-white/5">
      <div className="text-center text-[11px] tracking-[0.25em] text-muted-foreground mb-6">
        TRUSTED LEARNING INFRASTRUCTURE
      </div>
      <div className="relative overflow-hidden mask-marquee">
        <motion.div className="flex gap-12 whitespace-nowrap marquee">
          {row.map((t, i) => (
            <div key={i} className="flex items-center gap-3 text-sm text-foreground/80">
              <span className="size-1.5 rounded-full bg-gold" />
              <span className="font-display font-medium">{t}</span>
            </div>
          ))}
        </motion.div>
      </div>
      <style>{`.mask-marquee{ -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);}`}</style>
    </section>
  );
}
