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
            <div className="text-xs tracking-[0.25em] text-gold font-mono">GET STARTED TODAY</div>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Ready to Transform Learning Into <br />
              <span className="text-gold text-glow-gold">Measurable Outcomes?</span>
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
              Whether you are training employees, educating students, or developing future talent,
              Upskilled provides the tools to create engaging learning experiences, validate
              skills, and deliver measurable success.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className="group relative inline-flex items-center gap-2 rounded-full bg-gold text-black font-semibold px-6 py-3 text-sm hover:scale-[1.03] active:scale-95 transition glow-gold overflow-hidden"
              >
                <span className="relative z-10">Book a Personalized Demo</span>
                <ArrowRight className="size-4 relative z-10 group-hover:translate-x-1 transition" />
                <span className="absolute inset-0 shine" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm hover:bg-white/5 transition"
              >
                <MessageCircle className="size-4 text-gold" />
                Talk to a Learning Specialist
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
