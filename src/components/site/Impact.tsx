import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ to, suffix = "", prefix = "", decimals = 0 }: { to: number; suffix?: string; prefix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (val) => setV(val),
    });
    return () => controls.stop();
  }, [inView, to]);
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {v.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const metrics = [
  { val: <><Counter to={80} />%</>, k: "Grading Time Reduced", body: "From 60% of instructor time on grading to under 10%" },
  { val: <><Counter to={40} />%</>, k: "Faster Onboarding", body: "New hires reach productivity faster with AI-guided onboarding paths" },
  { val: <><Counter to={3} />×</>, k: "Faster Time-to-Skill", body: "Hands-on labs drive 3× faster skill acquisition than video-only learning" },
  { val: <><Counter to={5} /> min</>, k: "Doubt Resolution", body: "Down from 8 hours — AI answers learner questions in under 5 minutes" },
  { val: <><Counter to={10} />×</>, k: "Faster Course Creation", body: "AI Content Assistant — what takes weeks now takes a morning" },
  { val: <><Counter to={97} />%</>, k: "Higher Job Confidence", body: "Learners who report stronger job readiness after completing labs" },
  { val: <><Counter to={12} /> wks</>, k: "Early Dropout Detection", body: "AI flags disengagement risk up to 12 weeks before dropout happens" },
  { val: <>$<Counter to={43.5} decimals={1} />B</>, k: "LMS Market — 2026", body: "Your competitors are investing in better learning infrastructure right now" },
];

export function Impact() {
  return (
    <section id="impact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <div className="text-xs tracking-[0.25em] text-gold font-mono">THE NUMBERS THAT MATTER</div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Measured Outcomes.{" "}
            <br />
            <span className="text-gold text-glow-gold">Not Measured Completions.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Learning initiatives should deliver more than course completions. They should improve
            capability, readiness, performance, and growth.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="relative rounded-2xl glass p-6 overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 size-32 rounded-full bg-gold/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
              <div className="font-display text-4xl sm:text-5xl font-bold text-gold text-glow-gold">
                {m.val}
              </div>
              <div className="mt-2 font-semibold">{m.k}</div>
              <div className="mt-2 text-xs text-muted-foreground">{m.body}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
