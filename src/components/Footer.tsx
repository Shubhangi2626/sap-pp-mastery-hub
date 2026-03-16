const links = [
  { label: "Home", href: "#home" },
  { label: "SAP PP Course", href: "#curriculum" },
  { label: "About Trainer", href: "#trainer" },
  { label: "Student Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#home" className="font-display text-xl font-bold text-foreground">
            SAP<span className="text-primary">PP</span>Training
          </a>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {links.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                {l.label}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} SAP PP Training. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
