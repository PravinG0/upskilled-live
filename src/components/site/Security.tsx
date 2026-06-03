import { motion } from "framer-motion";
import { ShieldCheck, Lock, KeyRound, ScrollText, Building, Network } from "lucide-react";

const standards = [
  { k: "SOC 2", v: "Demonstrate strong security controls and operational integrity." },
  { k: "HIPAA Ready", v: "Support healthcare learning environments with secure data handling." },
  { k: "ISO 27001 Aligned", v: "Maintain information security through globally recognized standards." },
];

const features = [
  { Icon: KeyRound, k: "Role-Based Access Control", v: "Granular permissions per feature and tenant." },
  { Icon: ScrollText, k: "Audit Logging", v: "Complete tamper-evident logs for compliance." },
  { Icon: Lock, k: "Secure Authentication", v: "MFA, SSO — SAML 2.0 & OAuth 2.0." },
  { Icon: ShieldCheck, k: "Data Protection", v: "Encryption at rest and in transit." },
  { Icon: Network, k: "Multi-Tenant Architecture", v: "Full row-level data isolation per organization." },
  { Icon: Building, k: "Private Cloud Deployment", v: "On-premises options for strict compliance needs." },
];

export function Security() {
  return (
    <section id="security" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <div className="text-xs tracking-[0.25em] text-gold font-mono">SECURITY & COMPLIANCE</div>
          <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Security and Governance Built for{" "}
            <span className="text-gold text-glow-gold">Enterprise Requirements.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Protect learner data and maintain compliance through enterprise-grade security
            controls and deployment flexibility.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-[1fr_1.4fr] gap-8 items-stretch">
          {/* Shield visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl glass p-8 overflow-hidden grid place-items-center min-h-[420px]"
          >
            <div className="absolute inset-0 grid-bg opacity-30" />
            <svg viewBox="0 0 300 320" className="w-56 h-auto relative">
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
            {/* orbiting badges */}
            {["SOC 2", "HIPAA", "ISO 27001", "MFA", "SSO", "AES-256"].map((t, i) => {
              const a = (i / 6) * Math.PI * 2;
              return (
                <motion.div
                  key={t}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute left-1/2 top-1/2"
                  style={{ transform: `rotate(${(i / 6) * 360}deg) translateY(-170px)` }}
                >
                  <div className="rounded-full glass-gold px-3 py-1 text-[10px] font-mono text-gold -rotate-[var(--r)]"
                    style={{ ["--r" as never]: `${(i / 6) * 360}deg` }}>
                    {t}
                  </div>
                </motion.div>
              );
            })}
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
