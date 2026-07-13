import Hero from "../components/WebPageComponents/Hero";
import Features from "../components/WebPageComponents/Features";
import About from "../components/WebPageComponents/About";
import Stats from "../components/WebPageComponents/Stats";
import Services from "../components/WebPageComponents/Services";
import Projects from "../components/WebPageComponents/Projects";
import Testimonials from "../components/WebPageComponents/Testimonials";
import CTA from "../components/ServicePageComponents/CTA";

export default function WebPage() {
  return (
    <div className="font-sans text-dark-navy bg-white leading-relaxed overflow-x-hidden m-0 p-0 box-border">
      <Hero />

      <Features />
      <About />
      <Stats />
      <Services />
      <Projects />
      <Testimonials />

      <CTA />
    </div>
  );
}