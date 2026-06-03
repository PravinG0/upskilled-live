import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Building2 } from "lucide-react";

const stages = [
  { label: "Learning" },
  { label: "Certification" },
  { label: "Internship" },
  { label: "Job" },
  { label: "Growth" },
];

export function Careers() {
  return (
    <section id="careers" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <div className="text-xs tracking-[0.25em] text-gold font-mono">CAREER DEVELOPMENT</div>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Connect Learning with <span className="text-gold text-glow-gold">Career Growth.</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl">
            Learning should lead to opportunity. Upskilled enables organizations, colleges,
            universities, and training providers to publish job opportunities directly within the
            platform.
          </p>
        </div>

        {/* pathway */}
        <div className="mt-14 relative rounded-3xl glass p-8 overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <svg viewBox="0 0 1000 80" className="w-full h-20 relative">
            <motion.path
              d="M20,40 C200,-20 300,100 500,40 C700,-20 800,100 980,40"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
            />
            <motion.path
              d="M20,40 C200,-20 300,100 500,40 C700,-20 800,100 980,40"
              fill="none"
              stroke="#FFD000"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{ filter: "drop-shadow(0 0 8px #FFD000)" }}
            />
          </svg>
          <div className="relative -mt-4 grid grid-cols-5 gap-2">
            {stages.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="size-3 rounded-full bg-gold shadow-[0_0_16px_var(--gold)]" />
                <div className="mt-3 font-display font-semibold text-sm sm:text-base">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-2xl glass p-6"
          >
            <div className="flex items-center gap-3">
              <div className="grid place-items-center size-10 rounded-xl glass-gold text-gold">
                <GraduationCap className="size-5" />
              </div>
              <h3 className="font-display text-xl font-semibold">For Learners</h3>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {[
                "Explore jobs aligned with acquired skills",
                "Discover internships and full-time roles",
                "Connect certifications with career growth",
                "Build stronger career pathways",
                "Move from learning to employment faster",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <ArrowRight className="size-4 text-gold mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-2xl glass p-6"
          >
            <div className="flex items-center gap-3">
              <div className="grid place-items-center size-10 rounded-xl glass-gold text-gold">
                <Building2 className="size-5" />
              </div>
              <h3 className="font-display text-xl font-semibold">For Organizations</h3>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {[
                "Post opportunities within the platform",
                "Connect trained learners with openings",
                "Support student placement initiatives",
                "Promote internal career mobility",
                "Strengthen learning-to-employment outcomes",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <ArrowRight className="size-4 text-gold mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
