import { motion } from "framer-motion";
import { Code2, Globe, Rocket, Shield } from "lucide-react";

const pillars = [
  { icon: Rocket, title: "Startup DNA", text: "Move fast, ship quality." },
  { icon: Shield, title: "Secure by Design", text: "Enterprise-grade security." },
  { icon: Globe, title: "Cloud Native", text: "Built for global scale." },
  { icon: Code2, title: "Modern Stack", text: "Latest frameworks & tools." },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-3 py-1 rounded-full glass text-xs uppercase tracking-widest text-muted-foreground mb-4">
            About Us
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold leading-tight">
            A modern software studio from{" "}
            <span className="text-gradient">Coimbatore</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
            CodeCrafters is a premium digital engineering team specializing in
            frontend, backend, cloud, mobile, and enterprise application
            development. We blend craft and technology to ship products that
            feel effortless, perform brilliantly, and scale gracefully.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Based at Hope College, Coimbatore — partnering with founders and
            enterprises across the globe.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-4"
        >
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              whileHover={{ y: -6 }}
              className="neon-border rounded-2xl p-6 transition-all hover:glow-purple"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 glow-blue">
                <Icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
