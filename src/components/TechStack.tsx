import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const techs = [
  "React",
  "Next.js",
  "Vue",
  "Angular",
  "TypeScript",
  "Node.js",
  "Python",
  "Java",
  ".NET",
  "Go",
  "GraphQL",
  "REST",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Redis",
  "AWS",
  "Azure",
  "GCP",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "GitHub Actions",
  "Figma",
  "React Native",
  "Flutter",
  "Swift",
  "Kotlin",
];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    el.addEventListener("mousemove", handler);
    return () => el.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section
      id="tech"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #020617 0%, #0F172A 50%, #020617 100%)",
      }}
    >
      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Radial gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 20%, oklch(0.7 0.2 240 / 0.18), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, oklch(0.65 0.25 295 / 0.18), transparent 60%)",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              background: i % 2 === 0 ? "oklch(0.82 0.15 210)" : "oklch(0.65 0.25 295)",
              boxShadow:
                i % 2 === 0 ? "0 0 12px oklch(0.82 0.15 210)" : "0 0 12px oklch(0.65 0.25 295)",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 4 + (i % 5),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Mouse-reactive glow */}
      <div
        className="absolute pointer-events-none transition-opacity duration-300"
        style={{
          left: mouse.x - 200,
          top: mouse.y - 200,
          width: 400,
          height: 400,
          background: "radial-gradient(circle, oklch(0.7 0.2 260 / 0.18), transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-5 neon-border">
            Our Tech Stack
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Powered by the <span className="text-gradient">best tools</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground">
            Modern technologies powering scalable digital products
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
          {techs.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.025, duration: 0.4 }}
              whileHover={{ y: -4, scale: 1.06 }}
              className="group relative px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-medium text-white/80 hover:text-white cursor-default transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.18 0.03 270 / 0.6), oklch(0.14 0.03 270 / 0.4))",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid oklch(1 0 0 / 0.08)",
              }}
            >
              <span className="relative z-10">{t}</span>
              {/* Glow on hover */}
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow:
                    "0 0 20px oklch(0.7 0.2 240 / 0.5), 0 0 40px oklch(0.65 0.25 295 / 0.3)",
                  border: "1px solid oklch(0.7 0.2 260 / 0.6)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
