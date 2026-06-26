import { motion } from "framer-motion";
import logoWhite from "@/assets/Upskilledai_Horizontal _white.svg";

interface LogoProps {
  className?: string;
  /** Height in px — defaults to 36 for nav, pass 44 for footer */
  height?: number;
}

export function Logo({ className = "", height = 36 }: LogoProps) {
  return (
    <motion.a
      href="#top"
      className={`inline-flex items-center ${className}`}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      aria-label="Upskilled AI — Home"
    >
      <img
        src={logoWhite}
        alt="Upskilled AI"
        style={{ height: `${height}px`, width: "auto", maxWidth: "none", display: "block" }}
        draggable={false}
      />
    </motion.a>
  );
}
