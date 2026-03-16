import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const transition = { type: "spring" as const, duration: 0.6, bounce: 0 };

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you shortly with course details.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-wrapper" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={transition}
        >
          <p className="text-xs font-mono-code text-primary uppercase tracking-widest mb-4">Get Started</p>
          <h2 className="heading-display text-3xl lg:text-4xl mb-4">Start Your SAP PP Journey Today</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Interested in learning SAP PP? Fill the form and we will contact you with course details.
          </p>

          <div className="space-y-5">
            {[
              { icon: Mail, label: "info@sappptraining.com" },
              { icon: Phone, label: "+91 XXXXX XXXXX" },
              { icon: MapPin, label: "India (Online Training Available Worldwide)" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <c.icon size={18} strokeWidth={1.5} className="text-primary" />
                </div>
                {c.label}
              </div>
            ))}
          </div>

          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={transition}
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-whatsapp text-primary-foreground font-semibold text-sm shadow-lg shadow-whatsapp/25"
          >
            <Calendar size={18} strokeWidth={1.5} />
            Chat on WhatsApp
          </motion.a>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ ...transition, delay: 0.15 }}
        >
          <form onSubmit={handleSubmit} className="surface-glass rounded-2xl p-8 space-y-5">
            <h3 className="font-display font-bold text-xl text-foreground mb-2">Secure My Spot</h3>
            {[
              { key: "name" as const, label: "Full Name", type: "text" },
              { key: "email" as const, label: "Email Address", type: "email" },
              { key: "phone" as const, label: "Phone Number", type: "tel" },
            ].map((f) => (
              <div key={f.key}>
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">{f.label}</label>
                <input
                  type={f.type}
                  required
                  value={form[f.key]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-300"
                />
              </div>
            ))}
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Message (Optional)</label>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-300 resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={transition}
              className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25"
            >
              Secure My Spot
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
