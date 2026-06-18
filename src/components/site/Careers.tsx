import { motion } from "framer-motion";
import { ArrowRight, MapPin, Briefcase, TrendingUp as MatchIcon } from "lucide-react";

const jobMatches = [
  { title: "Senior Data Analyst", location: "Singapore", match: 94, type: "Full-Time · Remote-Eligible · Global Tech", basis: "Based on completed labs and data science certification" },
  { title: "AI/ML Engineer", location: "London", match: 88, type: "Hybrid · AI-first startup · High growth", basis: "Based on Python and ML assessments" },
  { title: "Cloud Infrastructure Specialist", location: "Dubai", match: 91, type: "Contract · Enterprise · Remote-eligible", basis: "Based on cloud certification track" },
  { title: "Data Science Lead", location: "Toronto", match: 96, type: "Full-Time · Senior · Relocation supported", basis: "Based on capstone project scores" },
];

export function Careers() {
  return (
    <section id="careers" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.25em] text-gold font-mono"
            >
              INTEGRATED JOBS PORTAL
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]"
            >
              Universities prove graduate employability.{" "}
              <span className="text-gold text-glow-gold">Learners find careers that match what they can actually do.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-5 text-muted-foreground max-w-xl"
            >
              Most platforms end at certification. Upskilled closes the loop. The integrated Jobs
              Portal matches learners to real career opportunities based on skills they've actually
              demonstrated — not just courses they've completed.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 space-y-3"
            >
              {[
                { label: "For universities", detail: "Prove placement rates to accreditation bodies and prospective students." },
                { label: "For companies", detail: "Identify internal candidates for promotion based on demonstrated competency, not tenure." },
                { label: "For learners", detail: "Stop applying blind — apply to roles where your skills already match the requirement." },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="relative rounded-2xl glass-gold p-4 overflow-hidden"
                >
                  <div className="absolute -top-6 -right-6 size-20 rounded-full bg-gold/10 blur-xl pointer-events-none" />
                  <div className="relative flex items-start gap-3">
                    <ArrowRight className="size-4 text-gold mt-0.5 shrink-0" />
                    <div>
                      <span className="font-display font-bold text-gold">{item.label}:</span>{" "}
                      <span className="text-sm text-foreground/80">{item.detail}</span>
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
            <motion.a
              href="#cta"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group mt-8 inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm hover:bg-white/5 transition"
            >
              See the Jobs Portal →
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>

          {/* Right: jobs card mock */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl glass p-6 overflow-hidden"
          >
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="relative">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Briefcase className="size-4 text-gold" />
                  <span className="text-sm font-display font-semibold">Jobs Portal — Skill-Matched Opportunities</span>
                </div>
                <span className="text-[10px] font-mono glass-gold text-gold rounded-full px-2 py-0.5">14 new matches</span>
              </div>
              <div className="space-y-3">
                {jobMatches.map((job, i) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="rounded-xl glass p-4 hover:bg-white/[0.05] transition cursor-pointer group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-display font-semibold text-sm group-hover:text-gold transition">
                          {job.title}
                        </div>
                        <div className="flex items-center gap-1 mt-0.5 text-[11px] text-muted-foreground">
                          <MapPin className="size-3" />
                          {job.location}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <MatchIcon className="size-3 text-gold" />
                        <span className="text-xs font-mono font-bold text-gold">{job.match}% match</span>
                      </div>
                    </div>
                    <div className="mt-2 text-[11px] text-muted-foreground">{job.type}</div>
                    <div className="mt-1.5 h-1 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${job.match}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                        className="h-full rounded-full bg-gradient-to-r from-gold to-gold/40"
                      />
                    </div>
                    <div className="mt-1 text-[10px] text-muted-foreground font-mono">{job.basis}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}