import { motion } from "framer-motion";
import { Calendar, Download, Radio, Briefcase, MessageSquare, HeartHandshake } from "lucide-react";

const transition = { type: "spring" as const, duration: 0.7, bounce: 0 };

const highlights = [
  { icon: Radio, label: "Live Online Training" },
  { icon: Briefcase, label: "Real-Time Project Scenarios" },
  { icon: MessageSquare, label: "Interview Preparation" },
  { icon: HeartHandshake, label: "Lifetime Learning Support" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      {/* Gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="section-wrapper w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-xs font-medium text-muted-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Next Batch Starting Soon
            </div>

            <h1 className="heading-display text-5xl lg:text-6xl leading-[1.05] mb-6">
              Master <span className="text-primary">SAP PP</span> with Real-Time Industry Training
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-10">
              Learn SAP Production Planning from an experienced SAP PP Consultant with real project scenarios, practical examples, and interview preparation.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={transition}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25"
              >
                <Calendar size={18} strokeWidth={1.5} />
                Book Free Demo Class
              </motion.a>
              <motion.a
                href="#curriculum"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={transition}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-primary/50 transition-colors duration-300"
              >
                <Download size={18} strokeWidth={1.5} />
                Download Syllabus
              </motion.a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...transition, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <h.icon size={16} strokeWidth={1.5} className="text-primary" />
                  </div>
                  {h.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Live Class Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="surface-glass rounded-2xl p-8 relative">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-mono-code font-medium text-accent uppercase tracking-wider">Live Class</span>
              </div>
              <div className="space-y-5">
                <div className="p-4 rounded-xl bg-secondary/60 border border-border/40">
                  <p className="text-xs text-muted-foreground font-mono-code mb-1">T-CODE: MD01</p>
                  <p className="font-semibold text-foreground">MRP Run — Total Planning</p>
                  <p className="text-sm text-muted-foreground mt-1">Execute MRP for plant-level material requirements</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/60 border border-border/40">
                  <p className="text-xs text-muted-foreground font-mono-code mb-1">T-CODE: CO01</p>
                  <p className="font-semibold text-foreground">Create Production Order</p>
                  <p className="text-sm text-muted-foreground mt-1">Convert planned order to production order</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/60 border border-border/40">
                  <p className="text-xs text-muted-foreground font-mono-code mb-1">T-CODE: CO11N</p>
                  <p className="font-semibold text-foreground">Order Confirmation</p>
                  <p className="text-sm text-muted-foreground mt-1">Confirm production order operations</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-mono-code">Module 6 — Production Orders</span>
                <span className="font-mono-code">45 min remaining</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
