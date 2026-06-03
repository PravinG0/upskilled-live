import { Logo } from "./Logo";

export function Footer() {
  const cols = [
    { h: "Platform", items: ["AI Tutor", "Jupyter Labs", "Assessments", "Analytics"] },
    { h: "Solutions", items: ["Enterprise", "Higher Ed", "Compliance", "Technical Training"] },
    { h: "Company", items: ["About", "Careers", "Blog", "Contact"] },
    { h: "Resources", items: ["Docs", "API", "Security", "Status"] },
  ];
  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid lg:grid-cols-[1.4fr_3fr] gap-10">
          <div>
            <Logo className="text-2xl" />
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              The platform where learning becomes capability. AI-powered learning, integrated
              coding labs, and measurable outcomes.
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
          <div>© {new Date().getFullYear()} Upskilled.ai · All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
