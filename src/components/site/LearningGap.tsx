import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const competitors = ["Moodle", "Canvas", "Blackboard", "TalentLMS", "Docebo", "Cornerstone", "LinkedIn Learning", "Coursera for Business"];

const differentiators = [
  {
    n: "01",
    title: "Integrated JupyterHub Labs",
    body: "Learners write real code, analyze real datasets, build real models — inside the lesson. No separate tools. No environment setup. The AI Tutor is embedded in every notebook. This is the capability gap that no other LMS has closed.",
  },
  {
    n: "02",
    title: "Six AI Tools, All Native",
    body: "AI Tutor · AI Quiz Generator · AI Auto-Grading · AI Doubt Solver · AI Content Assistant · AI Learning Intelligence. Not bolted on. Not behind a premium tier. Built into every interaction across every lesson, lab, and assessment.",
  },
  {
    n: "03",
    title: "Measurable Skill Outcomes",
    body: "Every assessment, lab completion, and course progression generates evidence of actual competency. Not just attendance. Evidence that holds up to accreditation review, regulatory audit, and L&D budget defense.",
  },
  {
    n: "04",
    title: "Integrated Jobs Portal",
    body: "Learning connects directly to career outcomes. Learners are matched to opportunities based on demonstrated skills. Universities prove graduate employability. Companies build internal succession pipelines. The learning-to-career loop finally closes.",
  },
];

export function LearningGap() {
  return (
    <section id="platform" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <div className="text-xs tracking-[0.25em] text-gold font-mono">WHY UPSKILLED EXISTS</div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]"
          >
            Every other platform delivers content.{" "}
            <span className="text-gold text-glow-gold">Upskilled builds capability.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 space-y-4 text-muted-foreground max-w-2xl"
          >
            <p>
              The difference is not a feature list. The difference is architecture. Traditional
              LMS software was built to host and deliver content.
            </p>
            <p>
              These platforms measure whether someone{" "}
              <span className="text-foreground font-medium">clicked through a course</span> — not
              whether that person can actually do the job. Upskilled was built around a
              fundamentally different belief.
            </p>
          </motion.div>
        </div>

        {/* Competitor strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-2"
        >
          {competitors.map((c) => (
            <span key={c} className="text-xs glass rounded-full px-3 py-1.5 text-muted-foreground line-through decoration-white/20">
              {c}
            </span>
          ))}
        </motion.div>

        {/* Four differentiators */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative rounded-2xl glass p-6 overflow-hidden group hover:bg-white/[0.04] transition"
            >
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="font-display text-4xl font-bold text-white/8">{d.n}</div>
              <h3 className="mt-3 font-display text-lg font-semibold">{d.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="#features"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="group mt-10 inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm hover:bg-white/5 transition"
        >
          See How It Works
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </motion.a>
      </div>
    </section>
  );
}