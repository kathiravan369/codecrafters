import { motion } from "framer-motion";
import { Zap, Lock, TrendingUp, Sparkles, Cloud, Search } from "lucide-react";

const features = [
  { icon: Zap, title: "Fast Development", text: "Ship MVPs in weeks, not months." },
  { icon: Lock, title: "Secure Architecture", text: "Built with security best practices." },
  { icon: TrendingUp, title: "Scalable Systems", text: "Architectures that grow with you." },
  { icon: Sparkles, title: "Modern UI/UX", text: "Beautiful, accessible interfaces." },
  { icon: Cloud, title: "Cloud Ready", text: "Deploy anywhere with confidence." },
  { icon: Search, title: "SEO Optimized", text: "Built to rank from day one." },
];

const stats = [
  { n: "2+", l: "Projects Delivered" },
  { n: "2+", l: "Happy Clients" },
  { n: "15+", l: "Tech Experts" },
  { n: "99%", l: "Client Retention" },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full glass text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Why CodeCrafters
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold">
            Engineered for <span className="text-gradient">excellence</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="neon-border rounded-2xl p-6 text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-gradient">{s.n}</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-2">{s.l}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 hover:glow-blue transition-all"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <Icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
