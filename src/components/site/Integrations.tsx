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
          <div className="relative h-[440px] rounded-3xl glass overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30" />
            {/* center hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-24 rounded-2xl glass-gold grid place-items-center text-center glow-gold">
              <div>
                <div className="text-[10px] font-mono text-gold">CORE</div>
                <div className="font-display font-bold">Upskilled</div>
              </div>
            </div>
            {/* orbits */}
            {[
              { r: 110, n: 6, dur: 28 },
              { r: 170, n: 8, dur: 40, reverse: true },
            ].map((o, oi) => (
              <motion.div
                key={oi}
                animate={{ rotate: o.reverse ? -360 : 360 }}
                transition={{ duration: o.dur, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2"
                style={{ width: o.r * 2, height: o.r * 2, transform: `translate(-50%,-50%)` }}
              >
                <div className="relative w-full h-full rounded-full border border-dashed border-white/10">
                  {Array.from({ length: o.n }).map((_, i) => {
                    const a = (i / o.n) * Math.PI * 2;
                    const x = o.r + Math.cos(a) * o.r;
                    const y = o.r + Math.sin(a) * o.r;
                    const label = tech[(oi * 6 + i) % tech.length];
                    return (
                      <motion.div
                        key={i}
                        animate={{ rotate: o.reverse ? 360 : -360 }}
                        transition={{ duration: o.dur, repeat: Infinity, ease: "linear" }}
                        className="absolute"
                        style={{ left: x, top: y, transform: "translate(-50%,-50%)" }}
                      >
                        <div className="whitespace-nowrap rounded-full glass px-3 py-1 text-[11px] font-medium hover:glass-gold hover:text-gold transition">
                          {label}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
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
