import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Factory, Car, Pill, ShoppingCart, ArrowRight } from "lucide-react";

const industries = [
  { icon: Factory, label: "Manufacturing Industry" },
  { icon: Car, label: "Automotive Companies" },
  { icon: Pill, label: "Pharma Industry" },
  { icon: ShoppingCart, label: "FMCG Companies" },
];

const transition = { type: "spring" as const, duration: 0.6, bounce: 0 };

function MRPCard() {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="surface-glass rounded-2xl p-6 cursor-pointer max-w-sm mx-auto"
    >
      <p className="text-xs font-mono-code text-muted-foreground mb-3 uppercase tracking-wider">Hover to see the magic</p>
      <motion.div
        animate={hovered ? { scale: 1.02 } : { scale: 1 }}
        transition={transition}
        className={`p-5 rounded-xl border transition-colors duration-500 ${
          hovered ? "bg-primary/5 border-primary/30" : "bg-secondary/60 border-border/40"
        }`}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className={`font-mono-code text-xs px-2 py-0.5 rounded ${
            hovered ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"
          } transition-colors duration-500`}>
            {hovered ? "Production Order" : "Planned Order"}
          </span>
          <ArrowRight size={14} strokeWidth={1.5} className="text-muted-foreground" />
          <span className="font-mono-code text-xs text-muted-foreground">{hovered ? "Released" : "Pending"}</span>
        </div>
        <p className="font-semibold text-foreground">{hovered ? "CO01 — Order Created" : "MD04 — Stock/Req List"}</p>
        <p className="text-sm text-muted-foreground mt-1">
          {hovered
            ? "Production order is now ready for execution"
            : "Planned order awaiting conversion"}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function WhyLearnSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-learn" className="section-wrapper" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={transition}
        >
          <p className="text-xs font-mono-code text-primary uppercase tracking-widest mb-4">Why Learn SAP PP</p>
          <h2 className="heading-display text-3xl lg:text-4xl mb-6">
            Stop learning theory.<br />Start planning production.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            SAP Production Planning (SAP PP) is one of the most important modules in SAP ERP, used by manufacturing companies worldwide to manage production planning and execution.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...transition, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-xl border border-border/40 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <ind.icon size={18} strokeWidth={1.5} className="text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{ind.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ ...transition, delay: 0.2 }}
        >
          <MRPCard />
        </motion.div>
      </div>
    </section>
  );
}
