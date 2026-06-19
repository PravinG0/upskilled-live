import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function NeuralNet() {
  // animated SVG neural network with floating particles
  const nodes = [
    { x: 50, y: 200 }, { x: 50, y: 320 }, { x: 50, y: 440 },
    { x: 250, y: 140 }, { x: 250, y: 280 }, { x: 250, y: 420 }, { x: 250, y: 560 },
    { x: 450, y: 200 }, { x: 450, y: 360 }, { x: 450, y: 520 },
    { x: 650, y: 280 }, { x: 650, y: 440 },
    { x: 820, y: 360 },
  ];
  const layers = [
    nodes.slice(0, 3),
    nodes.slice(3, 7),
    nodes.slice(7, 10),
    nodes.slice(10, 12),
    nodes.slice(12, 13),
  ];
  const labels = ["Learn", "Practice", "Apply", "Succeed", "Capability"];
  const edges: Array<[number, number]> = [];
  for (let i = 0; i < layers.length - 1; i++) {
    const a = layers[i], b = layers[i + 1];
    const aStart = nodes.indexOf(a[0]);
    const bStart = nodes.indexOf(b[0]);
    for (let ai = 0; ai < a.length; ai++)
      for (let bi = 0; bi < b.length; bi++) edges.push([aStart + ai, bStart + bi]);
  }
  return (
    <svg viewBox="0 0 900 720" className="absolute inset-0 w-full h-full" aria-hidden>
      <defs>
        <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD000" stopOpacity="1" />
          <stop offset="100%" stopColor="#FFD000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lineGrad" x1="0" x2="1">
          <stop offset="0%" stopColor="#FFD000" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#FFD000" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#FFD000" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {edges.map(([i, j], k) => {
        const a = nodes[i], b = nodes[j];
        return (
          <motion.line
            key={k}
            x1={a.x} y1={a.y} x2={b.x} y2={b.y}
            stroke="url(#lineGrad)"
            strokeWidth={1}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.4 + k * 0.012, ease: "easeOut" }}
          />
        );
      })}
      {/* pulse signals along edges */}
      {edges.slice(0, 18).map(([i, j], k) => {
        const a = nodes[i], b = nodes[j];
        return (
          <motion.circle
            key={`p-${k}`}
            r={2.5}
            fill="#FFD000"
            initial={{ cx: a.x, cy: a.y, opacity: 0 }}
            animate={{ cx: [a.x, b.x], cy: [a.y, b.y], opacity: [0, 1, 0] }}
            transition={{ duration: 2 + (k % 3), repeat: Infinity, delay: k * 0.18, ease: "easeInOut" }}
          />
        );
      })}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={22} fill="url(#nodeGrad)" opacity={0.4} />
          <motion.circle
            cx={n.x} cy={n.y} r={6}
            fill="#FFD000"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 + i * 0.05, type: "spring", stiffness: 200, damping: 12 }}
          />
          <motion.circle
            cx={n.x} cy={n.y} r={6}
            fill="none" stroke="#FFD000" strokeOpacity={0.6}
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: [1, 2.4], opacity: [0.6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.18 }}
          />
        </g>
      ))}
      {/* layer labels at top of each column */}
      {layers.map((layer, li) => {
        const x = layer[0].x;
        return (
          <motion.text
            key={li}
            x={x}
            y={80}
            textAnchor="middle"
            fontFamily="Space Grotesk, sans-serif"
            fontSize="13"
            fontWeight={600}
            fill="rgba(255,255,255,0.55)"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 80 }}
            transition={{ delay: 1.2 + li * 0.12 }}
          >
            {labels[li].toUpperCase()}
          </motion.text>
        );
      })}
    </svg>
  );
}

function Particles() {
  const items = Array.from({ length: 28 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((_, i) => {
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const size = 1 + (i % 3);
        const dur = 8 + (i % 7);
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gold/70"
            style={{ left: `${left}%`, top: `${top}%`, width: size, height: size, filter: "blur(0.5px)" }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.9, 0.2] }}
            transition={{ duration: dur, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
          />
        );
      })}
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const tx = useTransform(sx, (v) => v * 12);
  const ty = useTransform(sy, (v) => v * 12);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - (r.left + r.width / 2)) / (r.width / 2));
      my.set((e.clientY - (r.top + r.height / 2)) / (r.height / 2));
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section id="top" ref={ref} className="relative isolate overflow-hidden pt-36 sm:pt-44 pb-24">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 noise" />
      <Particles />
      {/* moving gradient blobs */}
      <motion.div
        className="absolute -top-40 -right-40 size-[40rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,208,0,0.35), transparent 60%)", x: tx, y: ty }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 size-[36rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,208,0,0.18), transparent 60%)", x: useTransform(tx, (v) => -v), y: useTransform(ty, (v) => -v) }}
      />

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground"
        >
          <span className="relative inline-flex">
            <span className="size-1.5 rounded-full bg-gold" />
            <span className="absolute inset-0 rounded-full bg-gold pulse-ring" />
          </span>
          AI-POWERED LEARNING PLATFORM
        </motion.div>

        <div className="mt-8 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          <div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              <motion.span
                className="block"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              >
                AI-Powered learning
              </motion.span>
              <motion.span
                className="block"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.28, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              >
                management
              </motion.span>
              <motion.span
                className="block"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.41, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              >
                software for{" "}
                <span className="text-gold text-glow-gold">Modern</span>
              </motion.span>
              <motion.span
                className="block text-gold text-glow-gold"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.54, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              >
                Learning
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-6 max-w-xl space-y-4 text-base sm:text-lg text-muted-foreground"
            >
              <p>
                Upskilled is AI-powered <strong className="text-foreground font-semibold">learning management software</strong> that
                combines AI tutors, integrated coding labs, automated assessments, career pathways,
                and learning intelligence to build real-world skills — and prove real-world outcomes.
              </p>
              <p className="font-semibold text-foreground">
                As a modern learning management system, Upskilled helps institutions and
                organizations move beyond static training content and build measurable capability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#cta"
                className="group relative inline-flex items-center gap-2 rounded-full bg-gold text-black font-semibold px-6 py-3 text-sm hover:scale-[1.03] active:scale-95 transition-transform glow-gold overflow-hidden"
              >
                <span className="relative z-10">Start Free Trial →</span>
                <span className="absolute inset-0 shine" />
              </a>
              <a
                href="#cta"
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm text-foreground hover:bg-white/5 transition-colors"
              >
                Book a Demo
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-10 flex flex-wrap gap-2"
            >
              {["AI-Powered Learning", "Integrated Jupyter Labs", "Automated Assessments", "Career Pathways", "Learning Intelligence", "SOC 2 · HIPAA · ISO 27001"].map((tag) => (
                <span key={tag} className="text-[11px] font-mono glass rounded-full px-3 py-1 text-muted-foreground">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Neural network visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="relative h-[420px] sm:h-[520px] lg:h-[600px] rounded-3xl glass overflow-hidden"
            style={{ x: useTransform(tx, (v) => -v * 0.6), y: useTransform(ty, (v) => -v * 0.6) }}
          >
            <div className="absolute inset-0 grid-bg opacity-50" />
            <NeuralNet />
            <div className="absolute top-4 left-4 flex items-center gap-2 text-[10px] tracking-widest text-muted-foreground font-mono">
              <span className="size-1.5 rounded-full bg-gold animate-pulse" />
              LIVE · AI LEARNING GRAPH
            </div>
            <div className="absolute bottom-4 right-4 rounded-lg glass-gold px-3 py-2 text-xs">
              <div className="font-mono text-gold">capability.score</div>
              <div className="font-display text-lg font-bold">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                >
                  98.4
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
