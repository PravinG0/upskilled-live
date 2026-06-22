import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { BookOpen, Code2, FolderKanban, Trophy } from "lucide-react";

/* ─── Ambient visuals (shown inside active card) ─── */

function LearnVisual() {
  const nodes = [
    { x: 60, y: 50 }, { x: 60, y: 110 }, { x: 60, y: 170 },
    { x: 180, y: 30 }, { x: 180, y: 90 }, { x: 180, y: 150 }, { x: 180, y: 210 },
    { x: 300, y: 60 }, { x: 300, y: 130 }, { x: 300, y: 200 },
    { x: 400, y: 95 }, { x: 400, y: 165 },
  ];
  const edges: [number, number][] = [
    [0,3],[0,4],[1,3],[1,4],[1,5],[2,4],[2,5],[2,6],
    [3,7],[3,8],[4,7],[4,8],[4,9],[5,8],[5,9],[6,9],
    [7,10],[7,11],[8,10],[8,11],[9,11],
  ];
  return (
    <svg viewBox="0 0 460 240" className="w-full h-full" aria-hidden>
      {edges.map(([a, b], k) => (
        <motion.line key={k}
          x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
          stroke="rgba(255,208,0,0.2)" strokeWidth={1}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: k * 0.04, ease: "easeOut" }}
        />
      ))}
      {edges.slice(0, 10).map(([a, b], k) => (
        <motion.circle key={`p${k}`} r={2.5} fill="#FFD000"
          animate={{ cx: [nodes[a].x, nodes[b].x], cy: [nodes[a].y, nodes[b].y], opacity: [0, 1, 0] }}
          transition={{ duration: 1.8 + (k % 3) * 0.4, repeat: Infinity, delay: k * 0.3 }}
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={16} fill="rgba(255,208,0,0.06)" />
          <motion.circle cx={n.x} cy={n.y} r={5} fill="#FFD000"
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ delay: 0.4 + i * 0.06, type: "spring", stiffness: 200 }}
          />
          <motion.circle cx={n.x} cy={n.y} r={5} fill="none" stroke="#FFD000" strokeOpacity={0.4}
            animate={{ r: [5, 16], opacity: [0.4, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.2 }}
          />
        </g>
      ))}
    </svg>
  );
}

const CODE_TOKENS = ["import pandas", "numpy", "fit()", "predict()", "def train():",
  "accuracy=0.947", "X_train", "y_test", "model.score()", "epoch=10", "loss: 0.08", "sklearn"];

function PracticeVisual() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-black/20 rounded-lg" />
      {CODE_TOKENS.map((tok, i) => {
        const left = 4 + ((i * 19) % 84);
        const delay = (i * 0.5) % 6;
        const dur = 4 + (i % 4);
        return (
          <motion.span key={i}
            className="absolute font-mono text-[11px] text-gold/60 select-none whitespace-nowrap"
            style={{ left: `${left}%`, bottom: -20 }}
            animate={{ y: [0, -260], opacity: [0, 0.9, 0.9, 0] }}
            transition={{ duration: dur, repeat: Infinity, delay, ease: "linear" }}
          >{tok}</motion.span>
        );
      })}
      <motion.div
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

function ApplyVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        {[60, 90, 120].map((r, ri) => (
          <motion.div key={ri}
            className="absolute rounded-full border border-gold/20"
            style={{ width: r * 2, height: r * 2 }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.1, 0.25] }}
            transition={{ duration: 2.4 + ri * 0.6, repeat: Infinity, delay: ri * 0.5 }}
          />
        ))}
        <div className="relative z-10 size-14 rounded-2xl glass-gold grid place-items-center glow-gold">
          <FolderKanban className="size-6 text-gold" />
        </div>
        {Array.from({ length: 16 }).map((_, i) => {
          const r = 70 + (i % 3) * 22;
          return (
            <motion.div key={i} className="absolute" style={{ width: r * 2, height: r * 2 }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 8 + (i % 5), repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute rounded-full bg-gold"
                style={{ width: 3 + (i % 2), height: 3 + (i % 2), top: 0, left: "50%",
                  transform: "translate(-50%,-50%)", opacity: 0.3 + (i % 3) * 0.15 }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function SucceedVisual() {
  const r = 50;
  const circ = 2 * Math.PI * r;
  return (
    <div className="w-full h-full flex items-center justify-center gap-8">
      <div className="relative flex items-center justify-center">
        {[40, 65, 90].map((rad, i) => (
          <motion.div key={i} className="absolute rounded-full border border-gold"
            style={{ width: rad * 2, height: rad * 2 }}
            animate={{ scale: [0.85, 1.25], opacity: [0.5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6, ease: "easeOut" }}
          />
        ))}
        <svg width="120" height="120" className="-rotate-90">
          <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(255,208,0,0.1)" strokeWidth="7" />
          <motion.circle cx="60" cy="60" r={r}
            fill="none" stroke="#FFD000" strokeWidth="7" strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            whileInView={{ strokeDashoffset: circ * 0.06 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            style={{ filter: "drop-shadow(0 0 6px #FFD000)" }}
          />
        </svg>
        <div className="absolute text-center">
          <div className="text-2xl font-bold font-display text-gold">94%</div>
          <div className="text-[9px] text-muted-foreground font-mono">SCORE</div>
        </div>
      </div>
      <div className="rounded-2xl border border-gold/30 bg-gold/5 px-4 py-3 text-center max-w-[180px]">
        <div className="text-[9px] font-mono text-gold mb-1">CERTIFICATE</div>
        <div className="font-display font-bold text-xs">ML Fundamentals</div>
        <div className="text-[10px] text-muted-foreground mt-1">Issued by Upskilled</div>
        <div className="mt-2 flex justify-center gap-3 text-[9px] font-mono text-muted-foreground">
          <span>⏱ 24h</span><span>✓ 6 projects</span>
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
    Icon: BookOpen, Visual: LearnVisual,
  },
  {
    n: "02", tag: "Step 02 — Practice",
    headline: "Write Real Code. Analyze Real Data.",
    body: "Hands-on Jupyter Labs where learners write real code, analyze real data, and build real projects — with the AI Tutor guiding every step. This is the step other platforms skip.",
    Icon: Code2, Visual: PracticeVisual,
  },
  {
    n: "03", tag: "Step 03 — Apply",
    headline: "Passive Knowledge Becomes Active Capability",
    body: "Real-world projects that mirror actual job tasks. This is the step that traditional platforms skip entirely. This is where passive knowledge becomes active capability.",
    Icon: FolderKanban, Visual: ApplyVisual,
  },
  {
    n: "04", tag: "Step 04 — Succeed",
    headline: "Certifications Backed by Demonstrated Competency",
    body: "Career matches in the Jobs Portal, and analytics reports that prove program ROI to administrators, executives, and accreditation bodies.",
    Icon: Trophy, Visual: SucceedVisual,
  },
];

export function Journey() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Use IntersectionObserver with a center-of-screen rootMargin
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(i); },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-16 items-start">

          {/* ── LEFT: sticky static text ── */}
          <div className="lg:sticky lg:top-32">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="text-xs tracking-[0.25em] text-gold font-mono">THE LEARNING JOURNEY</div>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05]">
                Four steps from learning to{" "}
                <span className="text-gold text-glow-gold">proven, employable capability.</span>
              </h2>
              <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
                Real learning doesn't happen when someone watches a video. It happens when they
                practice, experiment, fail, improve — and eventually master a skill.
              </p>

              {/* Step dots */}
              <div className="mt-10 flex items-center gap-2.5">
                {steps.map((_, i) => (
                  <motion.button key={i}
                    onClick={() => {
                      setActiveIndex(i);
                      cardRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    animate={{ width: i === activeIndex ? 28 : 8, opacity: i === activeIndex ? 1 : 0.3 }}
                    transition={{ duration: 0.3 }}
                    className="h-1.5 rounded-full bg-gold cursor-pointer"
                  />
                ))}
                <span className="ml-2 font-mono text-xs text-muted-foreground">
                  {String(activeIndex + 1).padStart(2, "0")} / 04
                </span>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: scrolling cards — active is large+bright, inactive are compact+dim ── */}
          <div className="space-y-4">
            {steps.map((s, i) => {
              const SI = s.Icon;
              const isActive = activeIndex === i;
              return (
                <div key={s.n} ref={(el) => { cardRefs.current[i] = el; }}>
                  <motion.div
                    layout
                    onClick={() => {
                      setActiveIndex(i);
                      cardRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    animate={{
                      opacity: isActive ? 1 : 0.45,
                      scale: isActive ? 1 : 0.98,
                    }}
                    transition={{ duration: 0.4 }}
                    className={`relative rounded-2xl overflow-hidden cursor-pointer transition-colors duration-400 ${
                      isActive
                        ? "glass-gold shadow-[0_0_50px_-10px_rgba(255,208,0,0.35)]"
                        : "glass"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute -top-20 -right-20 size-72 rounded-full bg-gold/8 blur-3xl pointer-events-none" />
                    )}

                    {/* Card header — always visible */}
                    <div className="relative p-6 flex items-start gap-4">
                      {/* Number */}
                      <div className={`shrink-0 grid place-items-center rounded-xl border-2 font-display font-bold text-xl transition-all duration-300 ${
                        isActive ? "border-gold text-gold bg-gold/10" : "border-white/15 text-white/25"
                      }`} style={{ width: 48, height: 48 }}>
                        {i + 1}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className={`text-[10px] font-mono tracking-widest mb-1 transition-colors ${
                          isActive ? "text-gold" : "text-muted-foreground/50"
                        }`}>
                          {s.tag.toUpperCase()}
                        </div>
                        <h3 className={`font-display font-bold text-lg leading-snug transition-colors ${
                          isActive ? "text-foreground" : "text-foreground/40"
                        }`}>
                          {s.headline}
                        </h3>
                        <motion.p
                          animate={{ opacity: isActive ? 1 : 0, height: isActive ? "auto" : 0 }}
                          transition={{ duration: 0.35 }}
                          className="text-sm text-muted-foreground leading-relaxed overflow-hidden"
                          style={{ marginTop: isActive ? 8 : 0 }}
                        >
                          {s.body}
                        </motion.p>
                      </div>

                      <div className={`shrink-0 grid place-items-center size-9 rounded-xl transition-all duration-300 ${
                        isActive ? "bg-gold text-black" : "glass text-white/20"
                      }`}>
                        <SI className="size-4" />
                      </div>
                    </div>

                    {/* Visual — only when active, fixed height so card doesn't grow infinitely */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 240 }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden px-6 pb-6"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="w-full h-full rounded-xl overflow-hidden" style={{ height: 210 }}>
                            <s.Visual />
                          </div>
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
