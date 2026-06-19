import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { BookOpen, Code2, Wrench, Trophy } from "lucide-react";

/* ─── Ambient visual fills ─── */

// 01 Learn — animated neural network
function LearnVisual() {
  const nodes = [
    { x: 80, y: 60 }, { x: 80, y: 130 }, { x: 80, y: 200 },
    { x: 200, y: 40 }, { x: 200, y: 110 }, { x: 200, y: 180 }, { x: 200, y: 250 },
    { x: 320, y: 80 }, { x: 320, y: 160 }, { x: 320, y: 240 },
    { x: 420, y: 120 }, { x: 420, y: 200 },
  ];
  const edges: [number, number][] = [
    [0,3],[0,4],[1,3],[1,4],[1,5],[2,4],[2,5],[2,6],
    [3,7],[3,8],[4,7],[4,8],[4,9],[5,8],[5,9],[6,9],
    [7,10],[7,11],[8,10],[8,11],[9,11],
  ];
  return (
    <div className="w-full overflow-hidden rounded-xl" style={{ height: 280 }}>
      <svg viewBox="0 0 500 290" className="w-full h-full" aria-hidden>
        {edges.map(([a, b], k) => (
          <motion.line
            key={k}
            x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
            stroke="rgba(255,208,0,0.18)" strokeWidth={1}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: k * 0.04, ease: "easeOut" }}
          />
        ))}
        {edges.slice(0, 10).map(([a, b], k) => (
          <motion.circle key={`p${k}`} r={2.5} fill="#FFD000"
            animate={{ cx: [nodes[a].x, nodes[b].x], cy: [nodes[a].y, nodes[b].y], opacity: [0, 1, 0] }}
            transition={{ duration: 1.8 + (k % 3) * 0.4, repeat: Infinity, delay: k * 0.3, ease: "easeInOut" }}
          />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={18} fill="rgba(255,208,0,0.06)" />
            <motion.circle cx={n.x} cy={n.y} r={5} fill="#FFD000"
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              transition={{ delay: 0.5 + i * 0.06, type: "spring", stiffness: 200 }}
            />
            <motion.circle cx={n.x} cy={n.y} r={5} fill="none" stroke="#FFD000" strokeOpacity={0.5}
              animate={{ r: [5, 18], opacity: [0.5, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.2 }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

// 02 Practice — floating code tokens
const CODE_TOKENS = [
  "import", "pandas", "numpy", "fit()", "predict()", "def train():",
  "accuracy", "0.947", "X_train", "y_test", "model.score", "epoch=10",
  "loss: 0.08", "sklearn", "DataFrame", "corr()", "plt.show()",
];
function PracticeVisual() {
  return (
    <div className="relative w-full overflow-hidden rounded-xl" style={{ height: 280 }}>
      <div className="absolute inset-0 bg-black/20 rounded-xl" />
      {CODE_TOKENS.map((tok, i) => {
        const left = 5 + ((i * 17) % 88);
        const delay = (i * 0.4) % 6;
        const dur = 5 + (i % 4);
        return (
          <motion.span
            key={i}
            className="absolute font-mono text-[11px] text-gold/60 select-none whitespace-nowrap"
            style={{ left: `${left}%`, bottom: -24 }}
            animate={{ y: [-0, -320], opacity: [0, 0.8, 0.8, 0] }}
            transition={{ duration: dur, repeat: Infinity, delay, ease: "linear" }}
          >
            {tok}
          </motion.span>
        );
      })}
      {/* scan line */}
      <motion.div
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

// 03 Apply — particle burst
function ApplyVisual() {
  const particles = Array.from({ length: 20 });
  return (
    <div className="relative w-full flex items-center justify-center rounded-xl" style={{ height: 280 }}>
      <div className="relative flex items-center justify-center" style={{ width: 260, height: 260 }}>
        {/* pulsing rings */}
        {[80, 110, 140].map((r, ri) => (
          <motion.div key={ri}
            className="absolute rounded-full border border-gold/20"
            style={{ width: r * 2, height: r * 2 }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.15, 0.3] }}
            transition={{ duration: 2.4 + ri * 0.6, repeat: Infinity, delay: ri * 0.5 }}
          />
        ))}
        {/* center node */}
        <div className="relative z-10 size-14 rounded-2xl glass-gold grid place-items-center glow-gold">
          <Wrench className="size-6 text-gold" />
        </div>
        {/* orbiting particles */}
        {particles.map((_, i) => {
          const angle = (i / particles.length) * 360;
          const r = 90 + (i % 3) * 25;
          const dur = 8 + (i % 5);
          return (
            <motion.div key={i}
              className="absolute"
              style={{ width: r * 2, height: r * 2 }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: dur, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="absolute rounded-full bg-gold"
                style={{
                  width: 3 + (i % 3),
                  height: 3 + (i % 3),
                  top: "0%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  opacity: 0.3 + (i % 4) * 0.15,
                }}
                animate={{ opacity: [0.2, 0.9, 0.2] }}
                transition={{ duration: 1.5 + (i % 3), repeat: Infinity, delay: i * 0.15 }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// 04 Succeed — expanding trophy rings
function SucceedVisual() {
  return (
    <div className="relative w-full flex items-center justify-center rounded-xl" style={{ height: 280 }}>
      <div className="relative flex items-center justify-center">
        {[40, 70, 100, 130, 160].map((r, i) => (
          <motion.div key={i}
            className="absolute rounded-full border border-gold"
            style={{ width: r * 2, height: r * 2 }}
            animate={{ scale: [0.8, 1.3], opacity: [0.6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5, ease: "easeOut" }}
          />
        ))}
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 size-20 rounded-2xl glass-gold grid place-items-center glow-gold"
        >
          <Trophy className="size-8 text-gold" />
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Step interactive content ─── */

const modules = [
  { label: "Introduction to Machine Learning", pct: 100 },
  { label: "Supervised Learning Fundamentals", pct: 72 },
  { label: "Neural Networks & Deep Learning", pct: 35 },
  { label: "Model Evaluation & Tuning", pct: 8 },
];

function LearnContent() {
  const [active, setActive] = useState(1);
  return (
    <div className="mt-5 space-y-2">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-mono text-gold tracking-widest">COURSE PROGRESS</span>
        <span className="text-[10px] text-muted-foreground font-mono">3 / 4 modules</span>
      </div>
      {modules.map((m, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={`w-full text-left rounded-xl px-4 py-3 transition-all border ${
            active === i ? "border-gold/40 bg-gold/5" : "border-white/5 bg-white/[0.02] hover:border-white/10"
          }`}
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

const codeLines = [
  [{ c: "text-purple-400", t: "import" }, { c: "text-foreground", t: " pandas " }, { c: "text-purple-400", t: "as" }, { c: "text-foreground", t: " pd" }],
  [{ c: "text-purple-400", t: "import" }, { c: "text-foreground", t: " numpy " }, { c: "text-purple-400", t: "as" }, { c: "text-foreground", t: " np" }],
  [],
  [{ c: "text-blue-400", t: "df" }, { c: "text-foreground", t: " = pd." }, { c: "text-yellow-300", t: "read_csv" }, { c: "text-foreground", t: "(" }, { c: "text-green-400", t: "'dataset.csv'" }, { c: "text-foreground", t: ")" }],
  [{ c: "text-blue-400", t: "X" }, { c: "text-foreground", t: " = df[" }, { c: "text-green-400", t: "'features'" }, { c: "text-foreground", t: "]" }],
  [{ c: "text-blue-400", t: "y" }, { c: "text-foreground", t: " = df[" }, { c: "text-green-400", t: "'label'" }, { c: "text-foreground", t: "]" }],
  [],
  [{ c: "text-muted-foreground", t: "# Train the model" }],
  [{ c: "text-blue-400", t: "model" }, { c: "text-foreground", t: "." }, { c: "text-yellow-300", t: "fit" }, { c: "text-foreground", t: "(X, y)" }],
];

function PracticeContent() {
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const run = () => {
    if (running || done) return;
    setRunning(true);
    setTimeout(() => { setRunning(false); setDone(true); }, 1800);
  };
  return (
    <div className="mt-5">
      <div className="flex items-center justify-between px-4 py-2 rounded-t-xl bg-white/5 border border-white/10 border-b-0">
        <div className="flex items-center gap-2">
          <TerminalSquare className="size-3.5 text-gold" />
          <span className="text-[10px] font-mono text-muted-foreground">notebook.ipynb</span>
        </div>
        <button
          onClick={run}
          className={`flex items-center gap-1.5 text-[10px] font-mono px-3 py-1 rounded-full transition-all ${
            done ? "bg-green-500/20 text-green-400" : "bg-gold/20 text-gold hover:bg-gold/30"
          }`}
        >
          {running ? (
            <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 0.8 }}>
              ● Running…
            </motion.span>
          ) : done ? "✓ Output ready" : <><Play className="size-2.5 fill-gold" /> Run cell</>}
        </button>
      </div>
      <div className="rounded-b-xl bg-black/40 border border-white/10 px-4 py-3 font-mono text-[10px] leading-5">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -4 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="flex gap-3"
          >
            <span className="text-white/20 select-none w-3 shrink-0">{line.length ? i + 1 : ""}</span>
            <span>{line.map((tok, j) => <span key={j} className={tok.c}>{tok.t}</span>)}</span>
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

const tasks = [
  "Load and clean the sales dataset",
  "Perform exploratory data analysis",
  "Build a forecasting model",
  "Evaluate model performance",
  "Write a business summary report",
];

function ApplyContent() {
  const [checked, setChecked] = useState<number[]>([0, 1]);
  const toggle = (i: number) =>
    setChecked((p) => p.includes(i) ? p.filter((x) => x !== i) : [...p, i]);
  const pct = Math.round((checked.length / tasks.length) * 100);
  return (
    <div className="mt-5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-mono text-gold tracking-widest">PROJECT TASKS</span>
        <span className="text-[10px] font-mono text-muted-foreground">{pct}% complete</span>
      </div>
      <div className="h-1 rounded-full bg-white/10 mb-4 overflow-hidden">
        <motion.div
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.4 }}
          className="h-full rounded-full bg-gradient-to-r from-gold to-gold/40"
        />
      </div>
      <div className="space-y-1.5">
        {tasks.map((t, i) => (
          <button
            key={i}
            onClick={() => toggle(i)}
            className="w-full flex items-center gap-3 text-left rounded-xl px-4 py-2.5 hover:bg-white/5 transition"
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

function SucceedContent() {
  const r = 54;
  const circ = 2 * Math.PI * r;
  return (
    <div className="mt-5 flex flex-col items-center gap-4">
      <div className="relative flex items-center justify-center">
        <svg width="140" height="140" className="-rotate-90">
          <circle cx="70" cy="70" r={r} fill="none" stroke="rgba(255,208,0,0.1)" strokeWidth="8" />
          <motion.circle
            cx="70" cy="70" r={r}
            fill="none" stroke="#FFD000" strokeWidth="8" strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            whileInView={{ strokeDashoffset: circ * (1 - 0.94) }}
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
          >94%</motion.div>
          <div className="text-[10px] text-muted-foreground font-mono">SCORE</div>
        </div>
      </div>
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

const steps = [
  {
    n: "01", tag: "Step 01 — Learn",
    headline: "Build Foundational Understanding",
    body: "Structured, adaptive programs that build foundational understanding — at each learner's pace, with AI support in every lesson. No one gets left behind. No one clicks through.",
    Icon: BookOpen,
    Visual: LearnVisual,
  },
  {
    n: "02", tag: "Step 02 — Practice",
    headline: "Write Real Code. Analyze Real Data.",
    body: "Hands-on Jupyter Labs where learners write real code, analyze real data, and build real projects — with the AI Tutor guiding every step. This is the step other platforms skip.",
    Icon: Code2,
    Visual: PracticeVisual,
  },
  {
    n: "03", tag: "Step 03 — Apply",
    headline: "Passive Knowledge Becomes Active Capability",
    body: "Real-world projects that mirror actual job tasks. This is the step that traditional platforms skip entirely. This is where passive knowledge becomes active capability.",
    Icon: Wrench,
    Visual: ApplyVisual,
  },
  {
    n: "04", tag: "Step 04 — Succeed",
    headline: "Certifications Backed by Demonstrated Competency",
    body: "Career matches in the Jobs Portal, and analytics reports that prove program ROI to administrators, executives, and accreditation bodies.",
    Icon: Trophy,
    Visual: SucceedVisual,
  },
];

export function Journey() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(i); },
        // rootMargin: top -30% bottom -30% so card must be well into view
        { rootMargin: "-30% 0px -30% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">

          {/* LEFT — sticky */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="text-xs tracking-[0.25em] text-gold font-mono">THE LEARNING JOURNEY</div>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05]">
                Four steps from learning to{" "}
                <span className="text-gold text-glow-gold">proven, employable capability.</span>
              </h2>
              <p className="mt-5 text-muted-foreground max-w-md">
                Real learning doesn't happen when someone watches a video. It happens when they
                practice, experiment, fail, improve — and eventually master a skill.
              </p>

              {/* Progress dots */}
              <div className="mt-10 flex items-center gap-2.5">
                {steps.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => {
                      setActiveIndex(i);
                      cardRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    animate={{ width: i === activeIndex ? 32 : 10, opacity: i === activeIndex ? 1 : 0.3 }}
                    transition={{ duration: 0.3 }}
                    className="h-1.5 rounded-full bg-gold"
                  />
                ))}
                <span className="ml-2 font-mono text-xs text-muted-foreground">
                  {String(activeIndex + 1).padStart(2, "0")} / 04
                </span>
              </div>

              {/* Active step label */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8 rounded-2xl glass border border-gold/20 px-5 py-4"
                >
                  <div className="font-mono text-[10px] text-gold mb-1 tracking-widest">
                    {steps[activeIndex].tag.toUpperCase()}
                  </div>
                  <div className="font-display font-semibold text-sm text-foreground">
                    {steps[activeIndex].headline}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* RIGHT — tall scrolling cards */}
          <div className="space-y-6">
            {steps.map((s, i) => {
              const SI = s.Icon;
              const isActive = activeIndex === i;
              return (
                <div
                  key={s.n}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  // min-height ensures only one card fits in viewport at a time
                  style={{ minHeight: "70vh" }}
                  className="flex"
                >
                  <motion.div
                    initial={{ opacity: 0, x: 28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                    onClick={() => setActiveIndex(i)}
                    className={`relative rounded-2xl p-7 cursor-pointer overflow-hidden transition-all duration-500 w-full flex flex-col ${
                      isActive
                        ? "glass-gold shadow-[0_0_60px_-12px_rgba(255,208,0,0.4)]"
                        : "glass hover:bg-white/[0.04]"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute -top-16 -right-16 size-64 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
                    )}

                    <div className="relative flex items-start gap-5">
                      {/* Number box */}
                      <div
                        className={`shrink-0 grid place-items-center size-13 rounded-xl border-2 font-display font-bold text-2xl transition-all duration-300 ${
                          isActive ? "border-gold text-gold bg-gold/10" : "border-white/15 text-white/30"
                        }`}
                        style={{ width: 52, height: 52 }}
                      >
                        {i + 1}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className={`text-[10px] font-mono tracking-widest mb-1.5 transition-colors ${isActive ? "text-gold" : "text-muted-foreground"}`}>
                          {s.tag.toUpperCase()}
                        </div>
                        <h3 className={`font-display font-bold text-xl leading-snug transition-colors ${isActive ? "text-foreground" : "text-foreground/50"}`}>
                          {s.headline}
                        </h3>
                        <p className={`mt-2 text-sm leading-relaxed transition-colors ${isActive ? "text-muted-foreground" : "text-foreground/30"}`}>
                          {s.body}
                        </p>
                      </div>

                      <div className={`shrink-0 grid place-items-center size-10 rounded-xl transition-all duration-300 ${isActive ? "bg-gold text-black" : "glass text-white/25"}`}>
                        <SI className="size-5" />
                      </div>
                    </div>

                    {/* Visual fill — only rendered when active */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="flex-1 mt-4"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <s.Visual />
                        </motion.div>
                      )}
                    </AnimatePresence>
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
