import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "This SAP PP training helped me understand real project scenarios. The practical examples were very helpful for interviews.",
    name: "Rahul M.",
    role: "SAP PP Consultant",
    rating: 5,
  },
  {
    text: "One of the best SAP PP trainings. Concepts explained clearly with real industry cases. Highly recommend for beginners.",
    name: "Priya S.",
    role: "Manufacturing Analyst",
    rating: 5,
  },
  {
    text: "Interview preparation sessions helped me crack SAP PP interviews. The trainer's real project experience made all the difference.",
    name: "Amit K.",
    role: "SAP Consultant",
    rating: 5,
  },
  {
    text: "Real project examples made it easy to understand production planning concepts. The hands-on approach was excellent.",
    name: "Sneha D.",
    role: "Production Planner",
    rating: 5,
  },
];

const transition = { type: "spring" as const, duration: 0.5, bounce: 0 };

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-wrapper">
      <div className="text-center mb-16">
        <p className="text-xs font-mono-code text-primary uppercase tracking-widest mb-4">Student Reviews</p>
        <h2 className="heading-display text-3xl lg:text-4xl mb-3">What Our Students Say</h2>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span className="font-display font-bold text-foreground text-lg">4.9/5</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-primary text-primary" />
            ))}
          </div>
          <span>Student Rating</span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto relative" ref={containerRef}>
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={transition}
          className="surface-glass rounded-2xl p-8 md:p-12 relative"
        >
          <Quote size={48} strokeWidth={1} className="absolute top-6 right-6 text-primary/10" />
          <div className="flex gap-0.5 mb-4">
            {[...Array(testimonials[current].rating)].map((_, i) => (
              <Star key={i} size={16} className="fill-primary text-primary" />
            ))}
          </div>
          <p className="text-lg text-foreground leading-relaxed mb-6">"{testimonials[current].text}"</p>
          <div>
            <p className="font-display font-bold text-foreground">{testimonials[current].name}</p>
            <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
          </div>
        </motion.div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary/50 transition-colors duration-300"
          >
            <ChevronLeft size={18} strokeWidth={1.5} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-6" : "bg-border"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary/50 transition-colors duration-300"
          >
            <ChevronRight size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
