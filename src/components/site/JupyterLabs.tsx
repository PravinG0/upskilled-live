import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
  { t: "import", c: "import upskilled as us", k: "kw" },
  { t: "from", c: "from upskilled.ai import Tutor", k: "kw" },
  { t: "var", c: "tutor = Tutor(course='ML-101')", k: "fn" },
  { t: "comment", c: "# Hands-on lab — no setup required", k: "cm" },
  { t: "var", c: "model = tutor.suggest_model(data)", k: "fn" },
  { t: "var", c: "score = model.fit(X, y).evaluate()", k: "fn" },
  { t: "print", c: "print(f'Capability: {score:.2%}')", k: "out" },
];

export function JupyterLabs() {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    let current = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    function showNext() {
      current += 1;
      if (current <= codeLines.length) {
        setShown(current);
        timeoutId = setTimeout(showNext, 1800);
      } else {
        // All lines shown — wait 3 seconds then restart
        timeoutId = setTimeout(() => {
          current = 0;
          setShown(0);
          timeoutId = setTimeout(showNext, 400);
        }, 3000);
      }
    }

    timeoutId = setTimeout(showNext, 800);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs tracking-[0.25em] text-gold font-mono">BUILT-IN JUPYTER LABS</div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Stop Switching Between <br />
            <span className="text-gold text-glow-gold">Learning and Doing.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl">
            Most platforms teach coding. <span className="text-foreground font-medium">Upskilled lets learners code.</span>{" "}
            Integrated Jupyter Labs allow learners to write code, run programs, analyze data,
            build projects, and experiment with ideas without leaving the learning experience.
          </p>
          <p className="mt-4 text-muted-foreground max-w-xl">
            No separate tools. No setup headaches. No disconnected workflows. Just seamless
            learning and practical application in a single environment.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Python", "R", "SQL", "PyTorch", "TensorFlow", "pandas", "scikit-learn"].map((t) => (
              <span key={t} className="text-xs font-mono px-3 py-1 rounded-full glass">
                {t}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl glass overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-black/40">
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-white/20" />
              <span className="size-2.5 rounded-full bg-white/20" />
              <span className="size-2.5 rounded-full bg-gold" />
            </div>
            <div className="text-[10px] font-mono text-muted-foreground">capability_lab.ipynb</div>
            <div className="text-[10px] font-mono text-gold flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-gold animate-pulse" /> running
            </div>
          </div>
          <div className="p-5 font-mono text-[12.5px] space-y-2 min-h-[360px]">
            {codeLines.slice(0, shown).map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex gap-4"
              >
                <span className="text-muted-foreground/40 w-4 text-right">{i + 1}</span>
                <span
                  className={
                    l.k === "kw" ? "text-gold" :
                    l.k === "fn" ? "text-white" :
                    l.k === "cm" ? "text-muted-foreground/60" :
                    "text-gold"
                  }
                >
                  {l.c}
                </span>
              </motion.div>
            ))}
            {shown >= codeLines.length && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 rounded-lg glass-gold p-3"
              >
                <div className="text-[10px] text-gold font-mono">OUT [7]</div>
                <div className="mt-1 text-white">Capability: 96.40%</div>
                <div className="mt-3 h-20 relative overflow-hidden rounded">
                  {/* fake bar chart */}
                  <div className="absolute inset-0 flex items-end gap-1.5 px-2 pb-2">
                    {[40, 55, 38, 70, 62, 80, 74, 92, 88, 96].map((h, k) => (
                      <motion.div
                        key={k}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.05 * k, duration: 0.6, ease: "easeOut" }}
                        className="flex-1 bg-gradient-to-t from-gold/30 to-gold rounded-t"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          {/* AI suggestion popover */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-5 right-5 max-w-[220px] rounded-xl glass-gold p-3"
          >
            <div className="text-[10px] tracking-widest text-gold font-mono">AI TUTOR</div>
            <div className="mt-1 text-xs text-white">
              Try a RandomForest — your data has non-linear interactions.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
