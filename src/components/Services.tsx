import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Smartphone,
  Database,
  Cog,
  Palette,
} from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Frontend Development",
    desc: "Pixel-perfect interfaces with modern frameworks.",
    tags: ["React", "Angular", "Vue.js", "TypeScript"],
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Robust APIs and scalable server architectures.",
    tags: ["Node.js", "Python", "Java", ".NET"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native-quality apps for iOS and Android.",
    tags: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    icon: Database,
    title: "Database & Cloud",
    desc: "Reliable data layers and cloud infrastructure.",
    tags: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "AWS", "Azure", "GCP"],
  },
  {
    icon: Cog,
    title: "DevOps & Deployment",
    desc: "CI/CD pipelines and container orchestration.",
    tags: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Research-driven design that delights users.",
    tags: ["Figma", "Adobe XD"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full glass text-xs uppercase tracking-widest text-muted-foreground mb-4">
            What We Do
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold">
            Services that <span className="text-gradient">power growth</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            End-to-end engineering across the full product lifecycle.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, tags }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative neon-border rounded-2xl p-6 sm:p-7 overflow-hidden transition-all hover:glow-purple"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[oklch(0.65_0.25_295/0.2)] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 glow-blue">
                  <Icon size={22} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-md glass text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
