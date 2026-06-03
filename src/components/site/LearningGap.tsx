import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function LearningGap() {
  return (
    <section id="platform" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.25em] text-gold font-mono"
            >
              THE LEARNING GAP
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]"
            >
              Knowledge Is Everywhere. <span className="text-gold text-glow-gold">Capability Is Rare.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 space-y-4 text-muted-foreground max-w-xl"
            >
              <p>
                Organizations spend billions on learning. Students complete courses. Employees
                earn certifications. Training programs grow every year.
              </p>
              <p>
                Yet one challenge remains:{" "}
                <span className="text-foreground font-medium">
                  how do you know if someone can actually perform?
                </span>
              </p>
              <p>
                Most learning platforms stop at content delivery. Upskilled closes the gap between
                learning and performance — because learning should create{" "}
                <span className="text-gold">capability</span>, not just completions.
              </p>
            </motion.div>
            <motion.a
              href="#features"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="group mt-8 inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm hover:bg-white/5 transition"
            >
              See How It Works
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>

          {/* Visualization: bar that grows from completion -> capability */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl glass p-8 overflow-hidden"
          >
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="relative space-y-6">
              {[
                { label: "Courses Completed", value: 92, soft: true },
                { label: "Certifications Earned", value: 78, soft: true },
                { label: "On-the-job Performance", value: 31, soft: true },
                { label: "Measured Capability with Upskilled", value: 96, soft: false },
              ].map((row, i) => (
                <div key={row.label}>
                  <div className="flex items-baseline justify-between text-sm">
                    <span className={row.soft ? "text-muted-foreground" : "text-foreground"}>
                      {row.label}
                    </span>
                    <span className={`font-mono ${row.soft ? "text-muted-foreground" : "text-gold"}`}>
                      {row.value}%
                    </span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${row.value}%` }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1.1, delay: 0.2 + i * 0.15, ease: [0.2, 0.8, 0.2, 1] }}
                      className={`h-full rounded-full ${
                        row.soft ? "bg-white/30" : "bg-gold shadow-[0_0_24px_var(--gold)]"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
