import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Code2, Wrench, Trophy } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Learn",
    headline: "Build Foundational Knowledge",
    body: "Structured learning experiences that build understanding from the ground up — at the learner's pace, with AI support available throughout.",
    Icon: BookOpen,
  },
  {
    n: "02",
    title: "Practice",
    headline: "Apply Concepts Immediately",
    body: "Hands-on exercises and interactive Jupyter Labs let learners apply what they just learned — without switching tools or setting up environments.",
    Icon: Code2,
  },
  {
    n: "03",
    title: "Apply",
    headline: "Solve Real-World Challenges",
    body: "Practical projects and guided activities that mirror real job tasks — building the muscle memory that makes skills stick and transfer.",
    Icon: Wrench,
  },
  {
    n: "04",
    title: "Succeed",
    headline: "Demonstrate Competency",
    body: "Measurable outcomes, certifications, and career opportunities confirm what learners have built — not just what they watched or clicked through.",
    Icon: Trophy,
  },
];

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineLength = useTransform(scrollYProgress, [0.05, 0.85], ["0%", "100%"]);

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <div className="text-xs tracking-[0.25em] text-gold font-mono">THE LEARNING EXPERIENCE</div>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Built for <span className="text-gold text-glow-gold">Real Skill Development.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Real learning doesn't happen when someone watches a video. It happens when they
            practice, experiment, fail, improve — and eventually master a skill.
          </p>
        </div>

        <div ref={ref} className="relative mt-20">
          {/* vertical scroll line */}
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />
          <motion.div
            style={{ height: lineLength }}
            className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 w-px bg-gold shadow-[0_0_20px_var(--gold)]"
          />
          <div className="space-y-20 sm:space-y-28">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={s.n}
                  className={`relative grid sm:grid-cols-2 gap-8 items-center ${left ? "" : "sm:[&>*:first-child]:order-2"}`}
                >
                  {/* node */}
                  <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 -translate-x-1/2 top-2 size-4 rounded-full bg-gold shadow-[0_0_20px_var(--gold)]">
                    <span className="absolute inset-0 rounded-full bg-gold pulse-ring" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: left ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className={`pl-12 sm:pl-0 ${left ? "sm:pr-16 sm:text-right" : "sm:pl-16"}`}
                  >
                    <div className="font-mono text-xs text-gold">{s.n} — {s.title.toUpperCase()}</div>
                    <h3 className="mt-2 text-2xl sm:text-3xl font-bold">{s.headline}</h3>
                    <p className="mt-3 text-muted-foreground max-w-md sm:inline-block">{s.body}</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20, rotate: left ? -2 : 2 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className={`pl-12 sm:pl-0 ${left ? "sm:pl-16" : "sm:pr-16"}`}
                  >
                    <div className="relative rounded-2xl glass p-6 overflow-hidden">
                      <div className="absolute -top-12 -right-12 size-48 rounded-full bg-gold/10 blur-3xl" />
                      <div className="flex items-center justify-between">
                        <div className="grid place-items-center size-12 rounded-xl glass-gold">
                          <s.Icon className="size-5 text-gold" />
                        </div>
                        <div className="font-display text-5xl font-bold text-white/10">{s.n}</div>
                      </div>
                      <div className="mt-4 space-y-2">
                        {[0.6, 0.85, 0.45].map((w, k) => (
                          <motion.div
                            key={k}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${w * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + k * 0.15, duration: 0.8 }}
                            className="h-1.5 rounded-full bg-gradient-to-r from-gold to-gold/20"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
