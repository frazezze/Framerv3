import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IntroPills from "./components/IntroPills";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CaseStudies from "./components/CaseStudies";
import Founder from "./components/Founder";
import Pricing from "./components/Pricing";
import Traits from "./components/Traits";
import FAQ from "./components/FAQ";
import Connect from "./components/Connect";

export default function App() {
  return (
    <div className="relative min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <IntroPills />
        <Process />
        <Testimonials />
        <CaseStudies />
        <Founder />
        <Pricing />
        <Traits />
        <FAQ />
        <Connect />
      </main>
    </div>
  );
}
