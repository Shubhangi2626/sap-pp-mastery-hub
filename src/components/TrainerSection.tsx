import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { BadgeCheck, Briefcase, Users, FolderKanban } from "lucide-react";

const transition = { type: "spring" as const, duration: 0.6, bounce: 0 };

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 40;
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);
    return () => clearInterval(interval);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { icon: Briefcase, value: 6, suffix: "+", label: "Years Experience" },
  { icon: FolderKanban, value: 15, suffix: "+", label: "Projects Delivered" },
  { icon: Users, value: 500, suffix: "+", label: "Students Trained" },
];

export default function TrainerSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="trainer" className="section-wrapper" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Trainer Visual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={transition}
          className="flex flex-col items-center"
        >
          <div className="relative w-72 h-72 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
            <span className="text-8xl font-display font-extrabold text-primary/20">SW</span>
            {/* Verified badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 surface-glass rounded-full px-4 py-2 flex items-center gap-2">
              <BadgeCheck size={16} strokeWidth={1.5} className="text-primary" />
              <span className="text-xs font-semibold text-foreground whitespace-nowrap">Verified Consultant</span>
            </div>
          </div>

          <div className="flex gap-6 mt-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <s.icon size={18} strokeWidth={1.5} className="text-primary" />
                </div>
                <p className="font-display font-extrabold text-2xl text-foreground tabular-nums">
                  <CountUp target={s.value} suffix={s.suffix} />
                </p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ ...transition, delay: 0.15 }}
        >
          <p className="text-xs font-mono-code text-primary uppercase tracking-widest mb-4">Meet Your Trainer</p>
          <h2 className="heading-display text-3xl lg:text-4xl mb-2">Shubham Waghumbare</h2>
          <p className="text-muted-foreground font-medium mb-6">SAP PP Consultant | 6+ Years Experience</p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Shubham is an experienced SAP PP Consultant with more than 6 years of experience in SAP Production Planning implementation and support projects. He has worked on multiple real-time SAP projects in manufacturing environments.
          </p>

          <div className="space-y-3 mb-8">
            {[
              "SAP PP Implementation Projects",
              "SAP Production Support",
              "Manufacturing Process Optimization",
              "Integration with SAP MM and SAP QM",
            ].map((exp) => (
              <div key={exp} className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                {exp}
              </div>
            ))}
          </div>

          <div className="surface-glass rounded-2xl p-6">
            <p className="font-display font-bold text-foreground mb-3">Training Philosophy</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              "The focus of this training is practical knowledge and real project experience, not just theoretical concepts. Students learn real industry scenarios with hands-on SAP practice."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
