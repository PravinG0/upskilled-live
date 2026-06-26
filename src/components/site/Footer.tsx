import { Logo } from "./Logo";

export function Footer() {
  const cols = [
    {
      h: "Platform",
      items: ["Why Upskilled", "How It Works", "AI Tools", "Jobs Portal", "Outcomes", "Security"],
    },
    {
      h: "Solutions",
      items: ["Employee Onboarding", "Corporate Training", "Compliance Training", "Higher Education", "Technical Training", "Certifications"],
    },
    {
      h: "Company",
      items: ["Education Sector", "Corporate Sector", "FAQ", "Live Demo", "Sign In"],
    },
    {
      h: "Resources",
      items: ["Docs", "API", "Security", "GitHub"],
    },
  ];
  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid lg:grid-cols-[1.4fr_3fr] gap-10">
          <div>
            <Logo height={44} />
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              AI-powered learning management software that builds real-world skills and proves
              real-world outcomes. Built on open-source Frappe framework.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              <a href="https://ailabs.upskilled.ai" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition">
                ailabs.upskilled.ai ↗
              </a>
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["SOC 2", "HIPAA", "ISO 27001"].map((b) => (
                <span key={b} className="text-[10px] font-mono px-2 py-1 rounded-full glass-gold text-gold">
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {cols.map((c) => (
              <div key={c.h}>
                <div className="text-xs tracking-widest font-mono text-gold">{c.h.toUpperCase()}</div>
                <ul className="mt-4 space-y-2">
                  {c.items.map((it) => (
                    <li key={it}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                        {it}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <div>© 2026 Upskilled AI · AI-Powered Learning Management Software · Built on Frappe Framework · Open Source</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Security</a>
            <a href="#" className="hover:text-foreground">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
