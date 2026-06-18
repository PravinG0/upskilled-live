import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What is Upskilled?",
    a: "Upskilled is an enterprise learning platform that helps teams learn at the speed of AI without sacrificing rigor. It pairs hands-on courses with a live AI tutor, instructor-reviewed discussions, and AI-drafted grading, so learners can get help when they are stuck while instructors stay in control of what reaches the learner. The platform supports courses, live cohorts, certified learning paths, and structured team deployment.",
  },
  {
    q: "How is Upskilled different from traditional LMS platforms?",
    a: "Upskilled goes beyond basic course delivery by adding an instructor-controlled AI layer to the learning experience. Learners can ask questions inside lessons and receive cited answers grounded in course material, while instructors can review AI-supported discussions and grading before outputs reach students. This gives organizations faster learner support, stronger oversight, and a more auditable learning process than a content-only LMS.",
  },
  {
    q: "Does Upskilled support hands-on technical learning?",
    a: "Yes. Upskilled is built around hands-on courses and includes AI, machine learning, data science, probability, statistics, deep learning, and Frappe Learning course examples on the public platform. Learners can study through structured courses, join scheduled live cohorts, and follow certified learning paths that guide them from learning to completion.",
  },
  {
    q: "Can organizations post job opportunities on Upskilled?",
    a: "Yes. The platform includes a Jobs Portal, allowing career opportunities to be surfaced inside the Upskilled ecosystem. This supports the connection between learning, skills development, and employment outcomes — matching learners to roles based on demonstrated competency, not just course completion.",
  },
  {
    q: "Can educational institutions use Upskilled?",
    a: "Yes. Educational institutions can use Upskilled to deliver courses, run live cohorts, organize learning paths, and issue certificates on completion. The platform supports scheduled batches where learners study alongside peers, instructors host live classes, and questions can be answered in-thread. This makes it suitable for colleges, universities, bootcamps, and training providers that need structured, mentor-supported learning.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-28">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <div className="text-xs tracking-[0.25em] text-gold font-mono">FAQ</div>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Have questions? <span className="text-gold text-glow-gold">We have answers.</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Upskilled — platform capabilities, AI features,
            deployment options, and integrations.
          </p>
          <a
            href="#cta"
            className="mt-6 inline-flex items-center gap-2 rounded-full glass-gold text-gold px-5 py-2.5 text-sm hover:scale-[1.03] transition"
          >
            Book a 20-min Demo →
          </a>
        </div>

        <div className="mt-12 space-y-2">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-2xl glass overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
                >
                  <span className="font-display font-semibold text-base sm:text-lg">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="grid place-items-center size-8 rounded-full glass-gold text-gold shrink-0"
                  >
                    <Plus className="size-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 sm:px-6 pb-6 text-muted-foreground text-sm">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
