import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] glass-gold p-10 sm:p-16 text-center"
        >
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 size-[28rem] rounded-full bg-gold/20 blur-3xl" />
          <div className="relative">
            <div className="text-xs tracking-[0.25em] text-gold font-mono">THE COST OF WAITING</div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05]">
              Build skills. Prove growth. <br />
              <span className="text-gold text-glow-gold">Or watch someone else do it faster.</span>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
              Every day your organization runs on a platform that can't prove capability is a day
              the gap between you and the competition quietly grows. Upskilled turns learning into
              something your organization can measure, defend, and build on.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className="group relative inline-flex items-center gap-2 rounded-full bg-gold text-black font-semibold px-6 py-3 text-sm hover:scale-[1.03] active:scale-95 transition glow-gold overflow-hidden"
              >
                <span className="relative z-10">Start Free Trial →</span>
                <span className="absolute inset-0 shine" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm hover:bg-white/5 transition"
              >
                <MessageCircle className="size-4 text-gold" />
                Book a Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
