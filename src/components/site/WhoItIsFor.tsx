import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { GraduationCap, Building2, CheckCircle2, XCircle, ArrowRight } from "lucide-react";

const sectors = [
  {
    id: "education",
    emoji: "🎓",
    label: "Education Sector",
    color: "from-gold/20 to-gold/5",
    accent: "border-gold/40",
    tagline: "Every 72 hours, students graduate into jobs that don't exist anymore.",
    body: "While you're teaching last year's curriculum, companies are hiring for skills that didn't exist 6 months ago. Your students aren't just competing for jobs — they're competing against AI. Static LMS platforms lock you into outdated content delivery.",
    stats: [
      { val: "40%", label: "of job skills obsolete by 2027" },
      { val: "8 hrs", label: "avg learner wait for doubt resolution" },
      { val: "12 wks", label: "early dropout detection by AI" },
    ],
    pains: [
      "Students demand relevance, not just credentials",
      "Your current LMS can't keep pace with industry change",
      "Employers are rejecting graduates with outdated skill sets",
      "No career outcomes after certification",
    ],
    comparison: [
      { need: "Hands-on technical labs", theirs: "External tool links", ours: "Native JupyterHub inside every lesson" },
      { need: "AI support — not 8-hr forum wait", theirs: "Forum + 8-hour wait", ours: "AI Tutor + Doubt Solver — under 5 min" },
      { need: "Automated grading", theirs: "Manual workflows", ours: "AI Auto-Grading — faculty reviews, not creates" },
      { need: "Dropout detection", theirs: "Completion percentages", ours: "AI flags risk up to 12 weeks early" },
      { need: "Career outcomes post-certification", theirs: "Nothing after cert", ours: "Jobs Portal — skill-matched opportunities" },
    ],
    Icon: GraduationCap,
  },
  {
    id: "corporate",
    emoji: "🏢",
    label: "Corporate Sector",
    color: "from-white/10 to-white/5",
    accent: "border-white/20",
    tagline: "New hires are costing you more and delivering value later than they should.",
    body: "Without a structured LMS-driven onboarding program, new hires take significantly longer to reach full productivity. They ask the same questions repeatedly. They make avoidable errors. First-year turnover in many industries runs above 30%.",
    stats: [
      { val: "1.5×", label: "longer time-to-productivity without onboarding" },
      { val: "30%+", label: "first-year employee turnover" },
      { val: "80%", label: "reduction in grading time with AI" },
    ],
    pains: [
      "Inconsistent onboarding = inconsistent performance at scale",
      "Static learning paths don't adapt to individual skill gaps",
      "Manual compliance reporting creates audit risk",
      "Proprietary platforms mean vendor lock-in forever",
    ],
    comparison: [
      { need: "Hands-on technical training", theirs: "Video courses + quizzes", ours: "Native Jupyter Labs — real code, real results" },
      { need: "AI personalization at scale", theirs: "Static learning paths", ours: "Adaptive AI Tutor in every lesson" },
      { need: "Compliance records & audit trails", theirs: "Manual reporting", ours: "Auto-generated audit logs + outcome evidence" },
      { need: "Measurable skills growth", theirs: "Completion percentages", ours: "Skill growth analytics + AI intelligence dashboard" },
      { need: "No vendor lock-in", theirs: "Proprietary, locked", ours: "Frappe framework — open source, self-hostable" },
    ],
    Icon: Building2,
  },
];

export function WhoItIsFor() {
  const [active, setActive] = useState(0);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const s = sectors[active];

  return (
    <section id="who" className="relative py-28 overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: active === 0 ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/3 left-1/4 size-[32rem] rounded-full bg-gold/6 blur-3xl"
        />
        <motion.div
          animate={{ opacity: active === 1 ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/3 right-1/4 size-[32rem] rounded-full bg-white/4 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">

        {/* ── Header ── */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs tracking-[0.25em] text-gold font-mono">WHO THIS IS FOR</div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05]">
            The stakes are different in every sector.{" "}
            <span className="text-gold text-glow-gold">The cost of the wrong LMS is not.</span>
          </h2>
        </div>

        {/* ── Sector selector cards ── */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-xl mb-16">
          {sectors.map((sec, i) => {
            const SI = sec.Icon;
            const isActive = active === i;
            return (
              <motion.button
                key={sec.id}
                onClick={() => setActive(i)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className={`relative text-left rounded-2xl p-5 border transition-all duration-400 overflow-hidden ${
                  isActive
                    ? "glass-gold border-gold/50 shadow-[0_0_40px_-8px_rgba(255,208,0,0.4)]"
                    : "glass border-white/8 hover:border-white/20"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="sectorGlow"
                    className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent pointer-events-none"
                  />
                )}
                <div className="relative flex items-center gap-3">
                  <div className={`grid place-items-center size-10 rounded-xl transition-all ${isActive ? "bg-gold text-black" : "glass text-muted-foreground"}`}>
                    <SI className="size-5" />
                  </div>
                  <div>
                    <div className={`text-[10px] font-mono tracking-widest ${isActive ? "text-gold" : "text-muted-foreground"}`}>
                      {i === 0 ? "EDUCATION" : "CORPORATE"}
                    </div>
                    <div className={`font-display font-semibold text-sm ${isActive ? "text-foreground" : "text-foreground/60"}`}>
                      {sec.label}
                    </div>
                  </div>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto size-2 rounded-full bg-gold"
                    />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45 }}
          >
            {/* ── Top: tagline + stats + pains ── */}
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 mb-10">

              {/* Left: tagline + body + pain points */}
              <div className="relative rounded-3xl glass overflow-hidden p-8">
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="relative">
                  <div className="text-xs font-mono text-gold tracking-widest mb-4">THE PROBLEM</div>
                  <blockquote className="text-xl sm:text-2xl font-bold leading-snug mb-5">
                    "{s.tagline}"
                  </blockquote>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.body}</p>
                  <div className="space-y-2.5">
                    {s.pains.map((p, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-3"
                      >
                        <XCircle className="size-4 text-red-400/70 mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{p}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: animated stat cards */}
              <div className="flex flex-col gap-4">
                {s.stats.map((st, i) => (
                  <motion.div
                    key={st.val}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative rounded-2xl glass-gold p-6 overflow-hidden group hover:scale-[1.02] transition-transform"
                  >
                    <div className="absolute -top-8 -right-8 size-28 rounded-full bg-gold/10 blur-2xl" />
                    <div className="font-display text-5xl font-bold text-gold text-glow-gold">{st.val}</div>
                    <div className="mt-2 text-sm text-muted-foreground">{st.label}</div>
                    {/* animated bar */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 1.2 }}
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold to-transparent"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Comparison table ── */}
            <div className="rounded-3xl glass overflow-hidden border border-white/8">
              {/* Header */}
              <div className="grid grid-cols-[1.5fr_1fr_1.3fr] border-b border-white/8">
                <div className="px-6 py-4 text-[10px] font-mono tracking-widest text-muted-foreground">WHAT'S NEEDED</div>
                <div className="px-6 py-4 text-[10px] font-mono tracking-widest text-muted-foreground border-l border-white/8">MOST PLATFORMS</div>
                <div className="px-6 py-4 text-[10px] font-mono tracking-widest text-gold bg-gold/5 border-l border-gold/20">UPSKILLED</div>
              </div>

              {s.comparison.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                  onMouseEnter={() => setHoveredRow(i)}
                  onMouseLeave={() => setHoveredRow(null)}
                  className={`grid grid-cols-[1.5fr_1fr_1.3fr] border-t border-white/5 transition-colors duration-200 ${
                    hoveredRow === i ? "bg-white/[0.03]" : ""
                  }`}
                >
                  <div className="px-6 py-4 text-sm text-foreground/80 flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-white/20 shrink-0" />
                    {row.need}
                  </div>
                  <div className="px-6 py-4 text-sm text-muted-foreground border-l border-white/5 flex items-center gap-2">
                    <XCircle className="size-3.5 text-red-400/50 shrink-0" />
                    {row.theirs}
                  </div>
                  <div className={`px-6 py-4 text-sm border-l border-gold/10 bg-gold/[0.03] transition-colors ${hoveredRow === i ? "bg-gold/[0.07]" : ""}`}>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="size-4 text-gold mt-0.5 shrink-0" />
                      <span className="text-foreground/90">{row.ours}</span>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Footer CTA */}
              <div className="px-6 py-5 border-t border-white/8 flex items-center justify-between bg-gold/[0.02]">
                <span className="text-sm text-muted-foreground">
                  See how Upskilled compares for{" "}
                  <span className="text-foreground font-medium">{s.label}</span>
                </span>
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 text-sm text-gold font-medium hover:gap-3 transition-all"
                >
                  Book a demo <ArrowRight className="size-4" />
                </a>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
