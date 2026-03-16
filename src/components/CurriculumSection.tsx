import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const modules = [
  { num: "01", title: "Introduction to SAP", topics: ["What is ERP", "Introduction to SAP", "SAP Modules Overview", "Navigation in SAP"] },
  { num: "02", title: "Organization Structure", topics: ["Company Code", "Plant", "Storage Location", "Business Area"] },
  { num: "03", title: "SAP PP Master Data", topics: ["Material Master", "Bill of Material (BOM)", "Work Center", "Routing"] },
  { num: "04", title: "Demand Management", topics: ["Planned Independent Requirements", "Consumption Mode", "Forecasting"] },
  { num: "05", title: "Material Requirement Planning", topics: ["MRP Concepts", "MRP Run", "Planning Strategies", "MRP Exception Messages"] },
  { num: "06", title: "Production Orders", topics: ["Planned Order Creation", "Conversion to Production Order", "Order Release", "Order Confirmation"] },
  { num: "07", title: "Capacity Planning", topics: ["Work Center Capacity", "Capacity Planning Concepts", "Capacity Evaluation"] },
  { num: "08", title: "Integration with Other Modules", topics: ["SAP MM Integration", "SAP QM Integration", "Goods Issue / Goods Receipt"] },
  { num: "09", title: "Real-Time Project Scenarios", topics: ["End-to-End Production Cycle", "Business Case Study"] },
  { num: "10", title: "Interview Preparation", topics: ["SAP PP Interview Questions", "Resume Preparation", "Project Explanation"] },
];

const transition = { type: "spring" as const, duration: 0.5, bounce: 0 };

function ModuleCard({ mod, index }: { mod: typeof modules[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ ...transition, delay: index * 0.05 }}
      className={`group border rounded-2xl transition-all duration-300 cursor-pointer ${
        open ? "border-primary/50 ring-2 ring-primary/10 bg-card" : "border-border/40 bg-card hover:border-primary/30 hover:-translate-y-1"
      }`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center gap-5 p-6">
        <span className="text-2xl font-display font-extrabold text-primary/30 tabular-nums w-10 shrink-0">{mod.num}</span>
        <span className="font-display font-bold text-foreground flex-1">{mod.title}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={transition}>
          <ChevronDown size={20} strokeWidth={1.5} className="text-muted-foreground" />
        </motion.div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={transition}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pl-[4.75rem]">
              <div className="space-y-3">
                {mod.topics.map((t, i) => (
                  <motion.div
                    key={t}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...transition, delay: i * 0.08 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                    {t}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function CurriculumSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="curriculum" className="section-wrapper" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={transition}
        className="text-center mb-6"
      >
        <p className="text-xs font-mono-code text-primary uppercase tracking-widest mb-4">The Blueprint</p>
        <h2 className="heading-display text-3xl lg:text-4xl mb-4">SAP PP Course Curriculum</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">10 comprehensive modules covering everything from SAP basics to real-time project scenarios and interview preparation.</p>
      </motion.div>

      <div className="flex items-center justify-center gap-6 mb-12">
        {[
          { label: "Duration", value: "6–8 Weeks" },
          { label: "Mode", value: "Live Online" },
          { label: "Sessions", value: "1.5–2 Hrs" },
        ].map((d) => (
          <div key={d.label} className="text-center px-6 py-3 rounded-xl border border-border/40 bg-card">
            <p className="text-xs text-muted-foreground font-mono-code uppercase">{d.label}</p>
            <p className="font-display font-bold text-foreground mt-1">{d.value}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {modules.map((mod, i) => (
          <ModuleCard key={mod.num} mod={mod} index={i} />
        ))}
      </div>
    </section>
  );
}
