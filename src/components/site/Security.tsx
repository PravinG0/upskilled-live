import { motion } from "framer-motion";
import { ShieldCheck, Lock, KeyRound, ScrollText, Building, Network } from "lucide-react";

const standards = [
  { k: "SOC 2", v: "Security, availability, and confidentiality verified." },
  { k: "HIPAA Ready", v: "Healthcare data handling compliant." },
  { k: "ISO 27001 Aligned", v: "International information security management." },
];

const features = [
  { Icon: KeyRound, k: "Role-Based Access Control", v: "Granular permissions by role, department, program." },
  { Icon: ScrollText, k: "Audit Logging", v: "Tamper-evident records for every regulatory requirement." },
  { Icon: Lock, k: "MFA + SSO", v: "SAML 2.0 & OAuth 2.0 at enterprise scale." },
  { Icon: ShieldCheck, k: "Multi-Tenant Architecture", v: "Full data isolation per organization at row level." },
  { Icon: Network, k: "Private Cloud / On-Premises", v: "For institutions requiring data residency compliance." },
  { Icon: Building, k: "Enterprise Governance", v: "Policy controls, compliance tracking, full reporting." },
];

export function Security() {
  return (
    <section id="security" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <div className="text-xs tracking-[0.25em] text-gold font-mono">SECURITY & COMPLIANCE</div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Built for the institutions{" "}
            <span className="text-gold text-glow-gold">regulators actually audit.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Universities face accreditation inspections. Hospitals face HIPAA audits. Financial
            institutions face regulatory reviews. In every one of these environments, your
            training management system is a compliance asset — or a compliance liability.
            Upskilled is built to be an asset. SOC 2 verified. HIPAA compliant. ISO 27001
            certified. Open-source and self-hostable for institutions requiring complete data
            sovereignty.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-[1fr_1.4fr] gap-8 items-stretch">
          {/* Shield visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl glass flex items-center justify-center min-h-[420px]"
          >
            <div className="absolute inset-0 grid-bg opacity-30 rounded-3xl" />

            {/* orbit + shield wrapper — extra padding so badges don't clip */}
            <div className="relative flex items-center justify-center" style={{ width: 360, height: 360 }}>

              {/* dashed orbit ring — sits centered in the 360px wrapper */}
              <div
                className="absolute rounded-full border border-dashed border-white/20"
                style={{ width: 300, height: 300 }}
              />

              {/* shield SVG — centered */}
              <svg viewBox="0 0 300 320" className="w-36 h-auto relative z-10">
                <defs>
                  <linearGradient id="sg" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#FFD000" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#FFD000" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M150 10 L280 60 L280 170 C280 240 220 290 150 310 C80 290 20 240 20 170 L20 60 Z"
                  fill="url(#sg)"
                  stroke="#FFD000"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                  style={{ filter: "drop-shadow(0 0 12px #FFD000)" }}
                />
                <motion.path
                  d="M100 160 L140 200 L210 130"
                  fill="none"
                  stroke="#FFD000"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.7 }}
                />
              </svg>

              {/* badges — each anchored at center, pushed to ring edge via translateY, then orbit */}
              {["SOC 2", "HIPAA", "ISO 27001", "MFA", "SSO", "AES-256"].map((t, i) => {
                const deg = (i / 6) * 360 - 90;
                return (
                  <motion.div
                    key={t}
                    className="absolute flex items-center justify-center"
                    style={{ width: 300, height: 300, rotate: deg }}
                    animate={{ rotate: [deg, deg + 360] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  >
                    {/* badge sits at top edge of the 300px ring */}
                    <motion.div
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{ rotate: -deg }}
                      animate={{ rotate: [-deg, -(deg + 360)] }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="rounded-full glass-gold px-3 py-1 text-[10px] font-mono text-gold whitespace-nowrap">
                        {t}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* lists */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-3 gap-3">
              {standards.map((s, i) => (
                <motion.div
                  key={s.k}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl glass-gold p-5"
                >
                  <div className="font-display font-bold text-gold">{s.k}</div>
                  <div className="mt-2 text-xs text-muted-foreground">{s.v}</div>
                </motion.div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((f, i) => {
                const FI = f.Icon;
                return (
                  <motion.div
                    key={f.k}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-2xl glass p-5 flex gap-4"
                  >
                    <div className="grid place-items-center size-10 rounded-xl glass-gold text-gold shrink-0">
                      <FI className="size-5" />
                    </div>
                    <div>
                      <div className="font-display font-semibold">{f.k}</div>
                      <div className="text-xs text-muted-foreground mt-1">{f.v}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
