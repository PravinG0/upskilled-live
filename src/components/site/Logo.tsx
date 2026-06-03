import { motion } from "framer-motion";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <motion.a
      href="#top"
      className={`group inline-flex items-baseline gap-0 font-display font-bold tracking-tight ${className}`}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      aria-label="Upskilled AI"
    >
      <span className="text-gold text-glow-gold lowercase">upskilled</span>
      <span className="text-foreground lowercase">.ai</span>
      <span className="ml-1 inline-block size-1.5 rounded-full bg-gold shadow-[0_0_12px_var(--gold)] floaty" />
    </motion.a>
  );
}
