import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "CEO, FinEdge",
    text: "CodeCrafters delivered our banking platform on time with exceptional quality. Their attention to detail and engineering rigor is unmatched.",
  },
  {
    name: "Priya Raman",
    role: "CTO, MediCore",
    text: "Working with CodeCrafters felt like having an in-house team. They understood our vision and shipped a beautiful, performant product.",
  },
  {
    name: "Daniel Chen",
    role: "Founder, ShopVerse",
    text: "From design to deployment, every step was seamless. Our conversion rate doubled after the rebuild. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full glass text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold">
            Loved by <span className="text-gradient">founders & teams</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-strong rounded-2xl p-7 relative overflow-hidden"
            >
              <Quote
                size={48}
                className="absolute -top-2 -right-2 text-[oklch(0.65_0.25_295/0.2)]"
              />
              <p className="text-foreground/90 leading-relaxed relative">
                "{t.text}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-primary flex items-center justify-center font-semibold text-primary-foreground">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
