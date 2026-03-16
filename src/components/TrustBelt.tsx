export default function TrustBelt() {
  const sectors = ["AUTOMOTIVE", "PHARMA", "FMCG", "CHEMICALS", "AEROSPACE", "MANUFACTURING", "ELECTRONICS"];
  const doubled = [...sectors, ...sectors];

  return (
    <section className="py-8 border-y border-border overflow-hidden">
      <div className="marquee flex gap-12 whitespace-nowrap">
        {doubled.map((s, i) => (
          <span key={i} className="text-sm font-mono-code text-muted-foreground/50 uppercase tracking-widest">
            {s} <span className="mx-4 text-border">•</span>
          </span>
        ))}
      </div>
    </section>
  );
}
