import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Cpu, Wrench, MessageCircle, FileText, Video } from "lucide-react";

const reasons = [
  { icon: Award, title: "6+ Years Experience", desc: "Trainer with deep SAP PP implementation expertise" },
  { icon: Cpu, title: "Real-Time Scenarios", desc: "Business cases from live manufacturing projects" },
  { icon: Wrench, title: "Hands-On Practice", desc: "Practical training on SAP systems, not just slides" },
  { icon: MessageCircle, title: "Interview Prep", desc: "Crack SAP PP interviews with guided preparation" },
  { icon: FileText, title: "Resume Support", desc: "Build a consultant-ready resume with project details" },
  { icon: Video, title: "Recording Access", desc: "Revisit any session with lifetime recording access" },
];

const transition = { type: "spring" as const, duration: 0.6, bounce: 0 };

export default function WhyChooseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-wrapper" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={transition}
        className="text-center mb-16"
      >
        <p className="text-xs font-mono-code text-primary uppercase tracking-widest mb-4">Why Choose Us</p>
        <h2 className="heading-display text-3xl lg:text-4xl">The Blueprint Advantage</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...transition, delay: 0.1 + i * 0.08 }}
            className="group p-6 rounded-2xl border border-border/40 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 bg-card"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <r.icon size={22} strokeWidth={1.5} className="text-primary" />
            </div>
            <h3 className="font-display font-bold text-foreground mb-2">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
