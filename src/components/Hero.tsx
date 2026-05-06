import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import orb from "@/assets/hero-orb.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background grid + glows */}
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[oklch(0.7_0.2_240/0.25)] blur-[120px]" />
      <div className="absolute top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[oklch(0.65_0.25_295/0.3)] blur-[140px]" />

      {/* Floating particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[oklch(0.82_0.15_210)]"
          style={{
            left: `${(i * 53) % 100}%`,
            top: `${(i * 37) % 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 4 + (i % 5),
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight">
            Building <span className="text-gradient">Next-Generation</span> Digital Solutions
          </h1>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
            We create scalable, secure, and high-performance web and mobile applications for
            startups, enterprises, and modern businesses.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium glow-purple hover:scale-105 transition-transform"
            >
              Get Started
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass text-foreground font-medium hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
            {[
              ["2+", "Projects"],
              ["2+", "Clients"],
              ["5★", "Rated"],
            ].map(([n, l]) => (
              <div key={l} className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-gradient">{n}</div>
                <div className="text-xs text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 bg-[oklch(0.65_0.25_295/0.3)] blur-[100px] rounded-full" />
          <motion.img
            src={orb}
            alt="Futuristic 3D digital orb"
            width={520}
            height={520}
            className="relative w-[300px] sm:w-[420px] lg:w-[520px] h-auto"
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
