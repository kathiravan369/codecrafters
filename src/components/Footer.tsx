import { Github, Linkedin, Twitter, Instagram, ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo-mark.png";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socials = [
    { Icon: Github, label: "GitHub" },
    { Icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com/in/code-crafters-869856408" },
    // { Icon: Twitter, label: "Twitter" },
    // { Icon: Instagram, label: "Instagram" },
  ];

  const quickLinks = [
    ["About", "#about"],
    ["Services", "#services"],
    ["Portfolio", "#portfolio"],
    ["Contact", "#contact"],
  ];

  const contactInfo = [
    // { Icon: MapPin, text: "Hope College, Coimbatore" },
    { Icon: Mail, text: "thecodecrafters.dev@gmail.com" },
    // { Icon: Phone, text: "+91 98765 43210" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[oklch(0.08_0.02_270)] mt-20">
      {/* Animated background glows */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <motion.div
        aria-hidden
        className="absolute -top-40 -left-40 h-96 w-96 rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.65 0.25 295 / 0.25), transparent 70%)",
        }}
        animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.7 0.2 240 / 0.22), transparent 70%)",
        }}
        animate={{ x: [0, -60, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute h-1 w-1 rounded-full bg-[oklch(0.7_0.2_240/0.6)]"
          style={{ left: `${(i * 83) % 100}%`, top: `${(i * 47) % 100}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 4 + (i % 5),
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Top neon divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.65_0.25_295/0.7)] to-transparent" />

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
        className="absolute top-8 right-6 sm:right-10 z-10 h-12 w-12 rounded-full glass-strong neon-border flex items-center justify-center text-foreground hover:glow-purple transition-all"
      >
        <motion.span
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowUp size={18} />
        </motion.span>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT — Giant brand identity */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <motion.img
                src={logo}
                alt="CodeCrafters"
                width={48}
                height={48}
                className="h-12 w-12"
                animate={{
                  filter: [
                    "drop-shadow(0 0 8px oklch(0.65 0.25 295 / 0.6))",
                    "drop-shadow(0 0 20px oklch(0.7 0.2 240 / 0.9))",
                    "drop-shadow(0 0 8px oklch(0.65 0.25 295 / 0.6))",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <span
                className="font-extrabold text-lg sm:text-xl tracking-tight"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                }}
              >
                <span
                  className="text-white"
                  style={{
                    textShadow: "0px 0px 10px rgba(255,255,255,0.35)",
                  }}
                >
                  Code
                </span>

                <span
                  className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-violet-400 bg-clip-text text-transparent"
                  style={{
                    textShadow: "0px 0px 25px rgba(168,85,247,0.45)",
                  }}
                >
                  Crafters
                </span>
              </span>{" "}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight"
            >
              <span className="text-foreground">Let&apos;s build</span>
              <br />
              <span className="shimmer-text">something great.</span>
            </motion.h2>

            <p className="mt-6 text-base text-muted-foreground max-w-md leading-relaxed">
              Innovative web solutions for ambitious teams. Crafted with care from Coimbatore.
            </p>

            {/* Socials */}
            <div className="mt-10 flex gap-3">
              {socials.map(({ Icon, label, link }, i) => (
                <motion.a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  whileHover={{ scale: 1.15, y: -4 }}
                  className="h-11 w-11 rounded-full glass neon-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:glow-purple transition-all"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* RIGHT — Links + contact */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:pl-10 lg:border-l lg:border-[oklch(1_0_0/0.06)]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map(([l, h]) => (
                  <li key={l}>
                    <a
                      href={h}
                      className="group relative inline-block text-lg font-medium text-foreground/90 hover:text-foreground transition-colors"
                    >
                      <span className="relative">
                        {l}
                        <span className="absolute left-0 -bottom-1 h-px w-0 bg-gradient-to-r from-[oklch(0.7_0.2_240)] to-[oklch(0.65_0.25_295)] transition-all duration-500 group-hover:w-full" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Contact
              </h4>
              <ul className="space-y-4">
                {contactInfo.map(({ Icon, text }) => (
                  <li key={text}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <span className="mt-0.5 h-8 w-8 rounded-lg glass flex items-center justify-center text-[oklch(0.7_0.2_240)] group-hover:glow-blue transition-all">
                        <Icon size={14} />
                      </span>
                      <span className="pt-1.5">{text}</span>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[oklch(1_0_0/0.1)] to-transparent" />

        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} CodeCrafters. All rights reserved.</p>
          <p>Built with passion in Coimbatore.</p>
        </div>
      </motion.div>
    </footer>
  );
}
