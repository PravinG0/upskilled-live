import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { BookOpen, Code2, Wrench, Trophy, CheckCircle2, Circle, Play, TerminalSquare } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Learn",
    headline: "Build Foundational Understanding",
    body: "Structured, adaptive programs that build foundational understanding — at each learner's pace, with AI support in every lesson. No one gets left behind. No one clicks through.",
    Icon: BookOpen,
  },
  {
    n: "02",
    title: "Practice",
    headline: "Write Real Code. Analyze Real Data.",
    body: "Hands-on Jupyter Labs where learners write real code, analyze real data, and build real projects — with the AI Tutor guiding every step. This is the step other platforms skip.",
    Icon: Code2,
  },
  {
    n: "03",
    title: "Apply",
    headline: "Passive Knowledge Becomes Active Capability",
    body: "Real-world projects that mirror actual job tasks. This is the step that traditional platforms skip entirely. This is where passive knowledge becomes active capability.",
    Icon: Wrench,
  },
  {
    n: "04",
    title: "Succeed",
    headline: "Certifications Backed by Demonstrated Competency",
    body: "Career matches in the Jobs Portal, and analytics reports that prove program ROI to administrators, executives, and accreditation bodies.",
    Icon: Trophy,
  },
];

/* ── Step 01: Course progress card ── */
const modules = [
  { label: "Introduction to Machine Learning", pct: 100 },
  { label: "Supervised Learning Fundamentals", pct: 72 },
  { label: "Neural Networks & Deep Learning", pct: 35 },
  { label: "Model Evaluation & Tuning", pct: 0 },
];

function LearnCard() {
  const [active, setActive] = useState(1);
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-gold font-mono">COURSE PROGRESS</span>
        <span className="text-xs text-muted-foreground">3 / 4 modules</span>
      </div>
      {modules.map((m, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={`w-full text-left rounded-xl px-4 py-3 transition-all border ${active === i ? "border-gold/40 bg-gold/5" : "border-white/5 bg-white/[0.02] hover:border-white/10"}`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-medium truncate pr-2">{m.label}</span>
            <span className="text-[10px] font-mono text-gold shrink-0">{m.pct}%</span>
          </div>
          <div className="h-1 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${m.pct}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.9 }}
              className="h-full rounded-full bg-gradient-to-r from-gold to-gold/40"
            />
          </div>
        </button>
      ))}
    </div>
  );
}

/* ── Step 02: Code editor mock ── */
const codeLines = [
  { indent: 0, tokens: [{ c: "text-purple-400", t: "import" }, { c: "text-foreground", t: " pandas " }, { c: "text-purple-400", t: "as" }, { c: "text-foreground", t: " pd" }] },
  { indent: 0, tokens: [{ c: "text-purple-400", t: "import" }, { c: "text-foreground", t: " numpy " }, { c: "text-purple-400", t: "as" }, { c: "text-foreground", t: " np" }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ c: "text-blue-400", t: "df" }, { c: "text-foreground", t: " = pd." }, { c: "text-yellow-300", t: "read_csv" }, { c: "text-foreground", t: "(" }, { c: "text-green-400", t: "'dataset.csv'" }, { c: "text-foreground", t: ")" }] },
  { indent: 0, tokens: [{ c: "text-blue-400", t: "X" }, { c: "text-foreground", t: " = df[" }, { c: "text-green-400", t: "'features'" }, { c: "text-foreground", t: "]" }] },
  { indent: 0, tokens: [{ c: "text-blue-400", t: "y" }, { c: "text-foreground", t: " = df[" }, { c: "text-green-400", t: "'label'" }, { c: "text-foreground", t: "]" }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ c: "text-muted-foreground", t: "# Train the model" }] },
  { indent: 0, tokens: [{ c: "text-blue-400", t: "model" }, { c: "text-foreground", t: "." }, { c: "text-yellow-300", t: "fit" }, { c: "text-foreground", t: "(X, y)" }] },
];

function PracticeCard() {
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);

  const run = () => {
    if (running || done) return;
    setRunning(true);
    setTimeout(() => { setRunning(false); setDone(true); }, 1800);
  };

  return (
    <div>
      {/* editor header */}
      <div className="flex items-center justify-between px-4 py-2 rounded-t-xl bg-white/5 border border-white/10 border-b-0">
        <div className="flex items-center gap-2">
          <TerminalSquare className="size-3.5 text-gold" />
          <span className="text-[10px] font-mono text-muted-foreground">notebook.ipynb</span>
        </div>
        <button
          onClick={run}
          className={`flex items-center gap-1.5 text-[10px] font-mono px-3 py-1 rounded-full transition-all ${done ? "bg-green-500/20 text-green-400" : "bg-gold/20 text-gold hover:bg-gold/30"}`}
        >
          {running ? (
            <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 0.8 }}>
              ● Running…
            </motion.span>
          ) : done ? "✓ Output ready" : (
            <><Play className="size-2.5 fill-gold" /> Run cell</>
          )}
        </button>
      </div>
      {/* code body */}
      <div className="rounded-b-xl bg-black/40 border border-white/10 px-4 py-3 font-mono text-[10px] leading-5 overflow-hidden">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex gap-3"
          >
            <span className="text-white/20 select-none w-3 shrink-0">{line.tokens.length ? i + 1 : ""}</span>
            <span>
              {line.tokens.map((tok, j) => (
                <span key={j} className={tok.c}>{tok.t}</span>
              ))}
            </span>
          </motion.div>
        ))}
        {done && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 pt-2 border-t border-white/10 text-green-400"
          >
            Model trained · accuracy: <span className="text-gold">0.947</span> · loss: <span className="text-gold">0.081</span>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ── Step 03: Project task checklist ── */
const tasks = [
  "Load and clean the sales dataset",
  "Perform exploratory data analysis",
  "Build a forecasting model",
  "Evaluate model performance",
  "Write a business summary report",
];

function ApplyCard() {
  const [checked, setChecked] = useState<number[]>([0, 1]);

  const toggle = (i: number) => {
    setChecked((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]);
  };

  const pct = Math.round((checked.length / tasks.length) * 100);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-gold font-mono">PROJECT TASKS</span>
        <span className="text-xs font-mono text-muted-foreground">{pct}% complete</span>
      </div>
      <div className="h-1 rounded-full bg-white/10 mb-4 overflow-hidden">
        <motion.div
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.4 }}
          className="h-full rounded-full bg-gradient-to-r from-gold to-gold/40"
        />
      </div>
      <div className="space-y-2">
        {tasks.map((t, i) => (
          <button
            key={i}
            onClick={() => toggle(i)}
            className="w-full flex items-center gap-3 text-left rounded-xl px-4 py-2.5 transition-all hover:bg-white/5"
          >
            {checked.includes(i)
              ? <CheckCircle2 className="size-4 text-gold shrink-0" />
              : <Circle className="size-4 text-white/20 shrink-0" />}
            <span className={`text-xs transition-all ${checked.includes(i) ? "line-through text-muted-foreground" : ""}`}>{t}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Step 04: Certification badge + score ── */
function SucceedCard() {
  const circumference = 2 * Math.PI * 54;
  return (
    <div className="flex flex-col items-center gap-4">
      {/* score ring */}
      <div className="relative flex items-center justify-center">
        <svg width="140" height="140" className="-rotate-90">
          <circle cx="70" cy="70" r="54" fill="none" stroke="rgba(255,208,0,0.1)" strokeWidth="8" />
          <motion.circle
            cx="70" cy="70" r="54"
            fill="none"
            stroke="#FFD000"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference * (1 - 0.94) }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            style={{ filter: "drop-shadow(0 0 6px #FFD000)" }}
          />
        </svg>
        <div className="absolute text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-3xl font-bold font-display text-gold"
          >
            94%
          </motion.div>
          <div className="text-[10px] text-muted-foreground font-mono">SCORE</div>
        </div>
      </div>
      {/* cert card */}
      <div className="w-full rounded-2xl border border-gold/30 bg-gold/5 px-5 py-4 text-center">
        <div className="text-[10px] font-mono text-gold mb-1">CERTIFICATE OF COMPLETION</div>
        <div className="font-display font-bold text-sm">Machine Learning Fundamentals</div>
        <div className="text-xs text-muted-foreground mt-1">Issued by Upskilled · June 2025</div>
        <div className="mt-3 flex justify-center gap-4 text-[10px] font-mono text-muted-foreground">
          <span>⏱ 24h learning</span>
          <span>✓ 6 projects</span>
          <span>★ Distinction</span>
        </div>
      </div>
    </div>
  );
}

const cardComponents = [LearnCard, PracticeCard, ApplyCard, SucceedCard];

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineLength = useTransform(scrollYProgress, [0.05, 0.85], ["0%", "100%"]);

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <div className="text-xs tracking-[0.25em] text-gold font-mono">THE LEARNING JOURNEY</div>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Four steps from learning to{" "}
            <span className="text-gold text-glow-gold">proven, employable capability.</span>
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
              const CardContent = cardComponents[i];
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
                    <div className="relative rounded-2xl glass p-5 overflow-hidden">
                      <div className="absolute -top-12 -right-12 size-48 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
                      <CardContent />
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