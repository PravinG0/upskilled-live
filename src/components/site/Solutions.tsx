import { motion } from "framer-motion";
import { Users, Building2, ShieldCheck, TrendingUp, GraduationCap, Cpu, Award, FlaskConical } from "lucide-react";

const trainingTypes = [
  { Icon: Users, title: "Employee Onboarding", body: "Accelerate readiness through structured onboarding journeys. 40% faster time-to-productivity — every new hire, every time, at any scale." },
  { Icon: Building2, title: "Corporate Training", body: "Deliver scalable learning programs that support workforce development and employee growth across any size organization." },
  { Icon: ShieldCheck, title: "Compliance Training", body: "Maintain audit readiness through certifications, assessments, automated reporting, and compliance tracking. One missed gap can cost more than your entire L&D budget." },
  { Icon: TrendingUp, title: "Workforce Upskilling", body: "Develop future-ready teams through practical learning experiences and skill-based development pathways. The teams that don't upskill are the ones that get left behind." },
  { Icon: GraduationCap, title: "Higher Education", body: "Deliver engaging academic learning experiences that combine theory with hands-on coding lab practice. Graduates who can't perform reflect on the institution that trained them." },
  { Icon: Cpu, title: "Technical Training", body: "Enable learners to develop programming, data science, AI, cloud, and tech skills through integrated coding labs. Not video. Not theory. Practice." },
  { Icon: Award, title: "Certification Programs", body: "Create structured certification pathways with assessments, competency validation, and credential management that employers actually recognize." },
  { Icon: FlaskConical, title: "Data Science Labs", body: "Live Jupyter notebooks, in-notebook AI tutor, auto-graded code review — scale to thousands without scaling your manual effort." },
];

export function Solutions() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-4xl">
          <div className="text-xs tracking-[0.25em] text-gold font-mono">SOLUTIONS</div>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.02]">
            Built for every organization that{" "}
            <span className="text-gold text-glow-gold">can't afford to fall behind.</span>
          </h2>
        </div>

        {/* Single highlighted tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 text-xl sm:text-2xl font-semibold text-gold text-glow-gold"
        >
          50 learners or 50,000 — Upskilled scales to every organization.
        </motion.p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trainingTypes.map((t, i) => {
            const TI = t.Icon;
            return (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
                className="group relative rounded-2xl p-6 overflow-hidden cursor-pointer border-2 border-white/8 hover:border-gold/40"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  transition: "transform 0.12s ease, box-shadow 0.12s ease, border-color 0.12s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translate(4px, -4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "-12px 12px 0 rgba(255,208,0,0.35)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                <div className="grid place-items-center size-11 rounded-xl glass-gold text-gold">
                  <TI className="size-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
