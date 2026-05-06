import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, MapPin, MessageCircle, Send, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);

  const [mouse, setMouse] = useState({
    x: -9999,
    y: -9999,
  });

  // =========================
  // EMAIL JS SEND FUNCTION
  // =========================
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setLoading(true);

      await emailjs.sendForm(
        "service_codecrafters@dev",
        "template_lsp10t6",
        formRef.current,
        "5GTZyltHMR07i3RRx",
      );

      alert("Message sent successfully!");

      formRef.current.reset();
    } catch (error) {
      console.log(error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // TILT EFFECT
  // =========================
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const rotateX = useSpring(useTransform(tiltY, [-50, 50], [-6, 6]), {
    stiffness: 150,
    damping: 15,
  });

  const rotateY = useSpring(useTransform(tiltX, [-50, 50], [6, -6]), {
    stiffness: 150,
    damping: 15,
  });

  useEffect(() => {
    const el = sectionRef.current;

    if (!el) return;

    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();

      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    el.addEventListener("mousemove", handler);

    return () => el.removeEventListener("mousemove", handler);
  }, []);

  const inputCls =
    "mt-1.5 w-full bg-input/40 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 hover:border-primary/40";

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "thecodecrafters.dev@gmail.com",
      href: "mailto:thecodecrafters.dev@gmail.com",
    },
    // {
    //   icon: MapPin,
    //   label: "Location",
    //   value: "Hope College, Coimbatore",
    // },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* GLOW */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.25), transparent 70%)",
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.25), transparent 70%)",
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* MOUSE GLOW */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: mouse.x - 250,
          top: mouse.y - 250,
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(168,85,247,0.15), transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[11px] uppercase tracking-[0.25em] text-gray-300 mb-5">
            <Sparkles size={12} className="text-purple-400" />
            Contact
          </motion.span>

          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              extraordinary
            </span>
          </h2>

          <p className="mt-4 text-gray-400">
            Tell us about your project. We'll get back within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* CONTACT FORM */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();

              tiltX.set(e.clientX - rect.left - rect.width / 2);
              tiltY.set(e.clientY - rect.top - rect.height / 2);
            }}
            onMouseLeave={() => {
              tiltX.set(0);
              tiltY.set(0);
            }}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              transformPerspective: 1200,
            }}
            className="lg:col-span-3 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 space-y-5 relative overflow-hidden"
          >
            {/* NAME + EMAIL */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs text-gray-400">Name</label>

                <input
                  name="user_name"
                  type="text"
                  required
                  className={inputCls}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400">Email</label>

                <input
                  name="user_email"
                  type="email"
                  required
                  className={inputCls}
                  placeholder="you@company.com"
                />
              </div>
            </div>

            {/* SUBJECT */}
            <div>
              <label className="text-xs text-gray-400">Subject</label>

              <input name="subject" className={inputCls} placeholder="What's it about?" />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-xs text-gray-400">Message</label>

              <textarea
                name="message"
                rows={5}
                required
                className={`${inputCls} resize-none`}
                placeholder="Tell us about your project..."
              />
            </div>

            {/* BUTTON */}
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 text-white font-medium overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {loading ? "Sending..." : "Send Message"}

                <motion.span
                  animate={{
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Send size={16} />
                </motion.span>
              </span>
            </motion.button>
          </motion.form>

          {/* CONTACT INFO */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {contactItems.map(({ icon: Icon, label, value, href }) => {
              const Wrap: React.ElementType = href ? motion.a : motion.div;

              return (
                <Wrap
                  key={label}
                  {...(href ? { href } : {})}
                  whileHover={{
                    x: 6,
                    scale: 1.02,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 flex items-center gap-4"
                >
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <Icon size={18} className="text-white" />
                  </div>

                  <div>
                    <div className="text-xs text-gray-400">{label}</div>

                    <div className="font-medium text-sm text-white">{value}</div>
                  </div>
                </Wrap>
              );
            })}

            {/* WHATSAPP */}
            <motion.a
              href="https://wa.me/917010295566"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                x: 6,
                scale: 1.02,
              }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 flex items-center gap-4"
            >
              <div className="h-11 w-11 shrink-0 rounded-xl bg-green-500 flex items-center justify-center">
                <MessageCircle size={18} className="text-white" />
              </div>

              <div>
                <div className="text-xs text-gray-400">WhatsApp</div>

                <div className="font-medium text-sm text-white">Chat with us</div>
              </div>
            </motion.a>

            {/* MAP */}
            {/* <div className="rounded-2xl overflow-hidden h-48 border border-white/10">
              <iframe
                title="CodeCrafters location"
                src="https://www.google.com/maps?q=Hope+College+Coimbatore&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
