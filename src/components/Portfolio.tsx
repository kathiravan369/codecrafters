import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import rajsundariImg from "@/assets/rajsundari.png";
import finedgeImg from "@/assets/finedge.png";
import medicoreImg from "@/assets/medicore.png";
import shopverseImg from "@/assets/shopverse.png";
import cloudpilotImg from "@/assets/cloudpilot.png";
import edustreamImg from "@/assets/edustream.png";

const projects = [
  {
    title: "Raj Sundari Infrastructure",
    category: "Real Estate · Infrastructure",
    gradient: "from-[oklch(0.72_0.16_75)] to-[oklch(0.58_0.12_45)]",
    link: "https://rajsundariinfrastructure.com/",
    image: rajsundariImg,
  },
  {
    title: "FinEdge Banking",
    category: "Fintech · Web Platform",
    gradient: "from-[oklch(0.7_0.2_240)] to-[oklch(0.65_0.25_295)]",
    link: "https://rajsundariinfrastructure.com/",
    image: finedgeImg,
  },
  {
    title: "MediCore Health",
    category: "Healthcare · Mobile App",
    gradient: "from-[oklch(0.75_0.18_180)] to-[oklch(0.7_0.2_240)]",
    link: "#contact",
    image: medicoreImg,
  },
  {
    title: "ShopVerse",
    category: "E-Commerce · Headless",
    gradient: "from-[oklch(0.65_0.25_295)] to-[oklch(0.6_0.25_330)]",
    link: "#contact",
    image: shopverseImg,
  },
  {
    title: "CloudPilot",
    category: "SaaS · DevOps Dashboard",
    gradient: "from-[oklch(0.7_0.2_240)] to-[oklch(0.75_0.18_200)]",
    link: "#contact",
    image: cloudpilotImg,
  },
  {
    title: "EduStream",
    category: "EdTech · Learning Platform",
    gradient: "from-[oklch(0.68_0.22_280)] to-[oklch(0.7_0.2_240)]",
    link: "#contact",
    image: edustreamImg,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-block px-3 py-1 rounded-full glass text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Our Work
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold">
              Featured <span className="text-gradient">projects</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A glimpse into the products we've crafted with our partners.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const isExternal = p.link.startsWith("http");
            return (
              <motion.a
                key={p.title}
                href={p.link}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -8 }}
                className="group relative neon-border rounded-2xl overflow-hidden aspect-[4/3] block"
              >
                {/* Background Image */}
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-40 mix-blend-overlay`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between">
                  <div>
                    <p className="text-xs text-white/70 uppercase tracking-wider">{p.category}</p>
                    <h3 className="font-display text-xl font-semibold text-white mt-1">
                      {p.title}
                    </h3>
                  </div>
                  <div className="h-10 w-10 rounded-full glass-strong flex items-center justify-center group-hover:bg-gradient-primary transition-all">
                    <ArrowUpRight size={18} className="text-white" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
