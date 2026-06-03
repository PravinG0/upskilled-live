import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What is Upskilled?",
    a: "Upskilled is an AI-powered learning platform that combines learning management, integrated Jupyter labs, automated assessments, career development tools, and learning analytics to support workforce development and education. It is built on open-source Frappe Framework and is available via self-hosted, managed cloud, or private cloud deployment.",
  },
  {
    q: "How is Upskilled different from traditional LMS platforms?",
    a: "Unlike traditional LMS platforms that primarily focus on content delivery, Upskilled enables learners to practice skills through integrated Jupyter labs, receive AI-powered guidance in real time, and demonstrate competency through practical learning experiences. Instructors save up to 80% of their grading time through AI auto-grading.",
  },
  {
    q: "Does Upskilled support hands-on technical learning?",
    a: "Yes. Upskilled includes integrated Jupyter-powered coding labs that allow learners to write code, execute programs, analyze data, and complete practical exercises directly within the platform. An AI tutor is embedded in every notebook to provide hints, explain errors, and guide learners without them needing to leave the lesson.",
  },
  {
    q: "Can organizations post job opportunities on Upskilled?",
    a: "Yes. Upskilled includes a built-in Jobs module where organizations, colleges, universities, and training providers can publish job opportunities. Learners can discover relevant openings aligned with their skills, certifications, and learning progress — creating a complete learning-to-career pathway.",
  },
  {
    q: "Can educational institutions use Upskilled?",
    a: "Yes. Colleges, universities, bootcamps, and training providers can use Upskilled to deliver academic learning, technical training, certification programs, and blended learning experiences. The integrated Jupyter labs are especially well-suited for STEM and computer science programs.",
  },
  {
    q: "What deployment options are available?",
    a: "Organizations can choose from three deployment models: Cloud (managed on Frappe Cloud), Private Cloud (fully managed in your own environment), or Self-Hosted (free Community Edition on your own infrastructure). Enterprise customers can also deploy on-premises for strict data residency and compliance requirements.",
  },
  {
    q: "Is Upskilled secure?",
    a: "Yes. Upskilled supports enterprise-grade security controls and compliance standards including SOC 2, HIPAA, and ISO 27001 alignment. Security features include role-based access control, audit logging, MFA, SSO, data encryption, multi-tenant architecture, and private cloud deployment options.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-28">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <div className="text-xs tracking-[0.25em] text-gold font-mono">FREQUENTLY ASKED QUESTIONS</div>
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
            Book a 20-min Demo
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
