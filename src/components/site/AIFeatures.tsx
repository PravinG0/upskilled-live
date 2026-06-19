import { motion } from "framer-motion";
import { useState } from "react";
import { Bot, FileQuestion, CheckCheck, MessageSquare, Sparkles, LineChart } from "lucide-react";

const features = [
  {
    tag: "Learner Support",
    title: "AI Tutor",
    body: "Context-aware, embedded in every lesson and notebook. Available 24/7. Provides personalized explanations, code guidance, and step-by-step help — exactly when the learner needs it, not 8 hours later on a forum.",
    Icon: Bot,
    demo: "tutor",
  },
  {
    tag: "Assessment",
    title: "AI Quiz Generator",
    body: "Generates high-quality, objective-aligned assessments automatically. Saves instructors 40+ hours of quiz creation per course. Every learner gets tested on what actually matters.",
    Icon: FileQuestion,
    demo: "quiz",
  },
  {
    tag: "Grading",
    title: "AI Auto-Grading",
    body: "Reduces instructor grading effort by 80%. AI drafts grades and feedback from rubrics — instructors review instead of create. Feedback cycles drop from days to minutes.",
    Icon: CheckCheck,
    demo: "grade",
  },
  {
    tag: "Instant Help",
    title: "AI Doubt Solver",
    body: "Responds to learner questions in under 5 minutes — vs. the 8-hour industry average. Complex queries are escalated to instructors. Common ones are resolved instantly.",
    Icon: MessageSquare,
    demo: "doubt",
  },
  {
    tag: "Content Creation",
    title: "AI Content Assistant",
    body: "Generate full course outlines, quiz banks, notebook starters, and lesson summaries from a topic or learning objective. What takes weeks now takes a morning.",
    Icon: Sparkles,
    demo: "content",
  },
  {
    tag: "Analytics",
    title: "AI Learning Intelligence",
    body: "Identifies skill gaps, dropout risks, engagement patterns, and program effectiveness across your entire learner population. Turns learning data into decisions L&D leaders can act on — and defend in budget reviews.",
    Icon: LineChart,
    demo: "insights",
  },
];

function DemoPanel({ kind }: { kind: string }) {
  if (kind === "tutor") {
    return (
      <div className="space-y-2 text-xs">
        <div className="glass rounded-lg p-2.5 text-muted-foreground">How do I tune learning rate?</div>
        <div className="glass-gold rounded-lg p-2.5 text-white">
          Start at 1e-3. If loss oscillates, decay by 10×. Try a cosine schedule for the last 30%.
        </div>
      </div>
    );
  }
  if (kind === "quiz") {
    return (
      <div className="text-xs space-y-2">
        <div className="font-mono text-gold">Q · Generated in 1.2s</div>
        <div className="text-white">Which regularization adds the absolute value of weights?</div>
        {["L1", "L2", "Dropout", "Batch Norm"].map((o, i) => (
          <div key={o} className={`glass rounded-md px-3 py-1.5 ${i === 0 ? "border-gold/60 text-gold" : "text-muted-foreground"}`}>
            {o}
          </div>
        ))}
      </div>
    );
  }
  if (kind === "grade") {
    return (
      <div className="text-xs space-y-2">
        {[
          { n: "Assignment 3.py", s: 94 },
          { n: "Lab 04 — pandas.ipynb", s: 88 },
          { n: "Quiz — Regression", s: 100 },
        ].map((r) => (
          <div key={r.n} className="flex items-center justify-between glass rounded-md px-3 py-2">
            <span className="font-mono text-muted-foreground">{r.n}</span>
            <span className="text-gold font-mono">{r.s}</span>
          </div>
        ))}
      </div>
    );
  }
  if (kind === "doubt") {
    return (
      <div className="text-xs space-y-2">
        <div className="flex items-center justify-between text-muted-foreground">
          <span>Avg response</span><span className="text-gold font-mono">5 min</span>
        </div>
        <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
          <motion.div initial={{ width: "100%" }} whileInView={{ width: "8%" }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="h-full bg-gold" />
        </div>
        <div className="text-[10px] text-muted-foreground">Down from 8 hours</div>
      </div>
    );
  }
  if (kind === "content") {
    return (
      <div className="text-xs space-y-2">
        {["Module outline — 12 lessons", "Notebook starter — sklearn", "Quiz bank — 24 questions"].map((t) => (
          <div key={t} className="glass rounded-md px-3 py-2 flex items-center justify-between">
            <span className="text-muted-foreground">{t}</span>
            <span className="text-gold font-mono text-[10px]">✓ AI</span>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="text-xs space-y-2">
      <div className="text-muted-foreground">Skill gap detected</div>
      <div className="grid grid-cols-5 gap-1 h-16 items-end">
        {[30, 50, 25, 70, 45].map((h, i) => (
          <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} className={`rounded-t ${i === 2 ? "bg-gold" : "bg-white/20"}`} />
        ))}
      </div>
      <div className="text-[10px] text-gold font-mono">SQL — recommend lab 07</div>
    </div>
  );
}

export function AIFeatures() {
  const [active, setActive] = useState(0);
  const f = features[active];
  const FIcon = f.Icon;
  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <div className="text-xs tracking-[0.25em] text-gold font-mono">AI-POWERED TOOLS</div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Six AI Capabilities.{" "}
            <br />
            <span className="text-gold text-glow-gold">All Native. All Included.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Every learner gets a personal AI. Every instructor gets their time back.
            Context-aware, embedded in every lesson and notebook. Available 24/7. These aren't
            add-ons or premium tiers — they're built into the core of how Upskilled works.
            Every learner. Every lesson. Every time.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-[1fr_1.1fr] gap-8">
          <div className="space-y-2">
            {features.map((feat, i) => {
              const FI = feat.Icon;
              const isActive = active === i;
              return (
                <button
                  key={feat.title}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`group w-full text-left rounded-2xl p-5 transition-all duration-300 ${
                    isActive ? "glass-gold shadow-[0_20px_60px_-20px_rgba(255,208,0,0.35)]" : "glass hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`grid place-items-center size-10 rounded-xl transition ${isActive ? "bg-gold text-black" : "glass text-gold"}`}>
                      <FI className="size-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] tracking-widest font-mono text-muted-foreground">{feat.tag.toUpperCase()}</div>
                      <div className="font-display font-semibold text-lg">{feat.title}</div>
                    </div>
                    <motion.div
                      animate={{ width: isActive ? 24 : 8, opacity: isActive ? 1 : 0.3 }}
                      className="h-px bg-gold"
                    />
                  </div>
                </button>
              );
            })}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl glass p-8 overflow-hidden min-h-[460px]"
          >
            <div className="absolute -top-20 -right-20 size-72 rounded-full bg-gold/15 blur-3xl" />
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="grid place-items-center size-14 rounded-2xl bg-gold text-black glow-gold">
                  <FIcon className="size-6" />
                </div>
                <div>
                  <div className="text-[10px] tracking-widest font-mono text-gold">{f.tag.toUpperCase()}</div>
                  <div className="font-display text-2xl font-bold">{f.title}</div>
                </div>
              </div>
              <p className="mt-5 text-muted-foreground max-w-md">{f.body}</p>
              <div className="mt-6 rounded-2xl glass p-4">
                <DemoPanel kind={f.demo} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
