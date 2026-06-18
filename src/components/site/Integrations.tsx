import { motion } from "framer-motion";

const categories = [
  "Video Conferencing", "Identity Providers", "HR & Workforce", "Business Intelligence",
  "CRM Platforms", "Content Libraries", "Enterprise Apps", "Custom Integrations",
];

const tech = [
  "Zoom", "Google Workspace", "Microsoft Teams", "Slack",
  "Salesforce", "SAP SuccessFactors", "Workday", "LTI 1.3",
  "SCORM / xAPI / AICC", "SSO — SAML & OAuth", "Webhooks", "Zapier",
  "REST API", "Tableau & Power BI",
];

// Shorter labels for the orbit rings to avoid overlap
const innerLabels = ["Zoom", "Slack", "Salesforce", "Workday", "Webhooks", "Zapier"];
const outerLabels = ["LTI 1.3", "REST API", "Microsoft Teams", "Google Workspace", "SAP SuccessFactors", "SCORM / xAPI", "SSO / SAML", "Tableau & BI"];

export function Integrations() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <div className="text-xs tracking-[0.25em] text-gold font-mono">INTEGRATIONS</div>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Connect Learning Across Your <span className="text-gold text-glow-gold">Technology Ecosystem.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Upskilled integrates with your existing business and education technology stack to
            create a connected, seamless learning experience.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-[1fr_1.2fr] gap-8">
          {/* categories */}
          <div className="grid sm:grid-cols-2 gap-3">
            {categories.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-xl glass px-4 py-3 text-sm flex items-center gap-3"
              >
                <span className="size-1.5 rounded-full bg-gold" />
                {c}
              </motion.div>
            ))}
          </div>

          {/* ecosystem orbit */}
          <div className="relative rounded-3xl glass overflow-hidden flex items-center justify-center py-16">
            <div className="absolute inset-0 grid-bg opacity-30" />

            {/* orbits wrapper */}
            <div className="relative flex items-center justify-center" style={{ width: 360, height: 360 }}>

              {/* dashed orbit rings */}
              {[130, 200].map((r) => (
                <div
                  key={r}
                  className="absolute rounded-full border border-dashed border-white/10"
                  style={{ width: r * 2, height: r * 2 }}
                />
              ))}

              {/* center hub */}
              <div className="relative z-10 size-24 rounded-2xl glass-gold grid place-items-center text-center glow-gold">
                <div>
                  <div className="text-[10px] font-mono text-gold">CORE</div>
                  <div className="font-display font-bold">Upskilled</div>
                </div>
              </div>

              {/* inner ring — r=130, 6 labels, slow */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="absolute"
                style={{ width: 260, height: 260 }}
              >
                {innerLabels.map((label, i) => {
                  const deg = (i / innerLabels.length) * 360;
                  return (
                    <motion.div
                      key={label}
                      className="absolute inset-0 flex items-start justify-center"
                      style={{ rotate: deg }}
                    >
                      <motion.div
                        animate={{ rotate: [-(deg), -(deg + 360)] }}
                        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                        className="-translate-y-1/2"
                      >
                        <div className="whitespace-nowrap rounded-full glass px-2.5 py-0.5 text-[10px] font-medium text-foreground/80 hover:glass-gold hover:text-gold transition">
                          {label}
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* outer ring — r=200, 8 labels, slower & reverse */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
                className="absolute"
                style={{ width: 400, height: 400 }}
              >
                {outerLabels.map((label, i) => {
                  const deg = (i / outerLabels.length) * 360;
                  return (
                    <motion.div
                      key={label}
                      className="absolute inset-0 flex items-start justify-center"
                      style={{ rotate: deg }}
                    >
                      <motion.div
                        animate={{ rotate: [-(deg), -(deg - 360)] }}
                        transition={{ duration: 44, repeat: Infinity, ease: "linear" }}
                        className="-translate-y-1/2"
                      >
                        <div className="whitespace-nowrap rounded-full glass px-2.5 py-0.5 text-[10px] font-medium text-foreground/80 hover:glass-gold hover:text-gold transition">
                          {label}
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>

            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="text-xs glass rounded-full px-3 py-1 text-muted-foreground hover:text-gold transition">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}