import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CodeCrafters — Innovative Web Solutions | Coimbatore" },
      {
        name: "description",
        content:
          "CodeCrafters builds next-generation web, mobile, and cloud applications. Premium software studio based in Hope College, Coimbatore.",
      },
      { property: "og:title", content: "CodeCrafters — Innovative Web Solutions" },
      {
        property: "og:description",
        content:
          "Scalable, secure, high-performance web and mobile applications for startups and enterprises.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <TechStack />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
