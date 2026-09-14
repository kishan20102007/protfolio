import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CreativeShowcase } from "@/components/CreativeShowcase";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import { FreelanceCTA } from "@/components/FreelanceCTA";
import { Hero } from "@/components/Hero";
import { InteractiveExperiences } from "@/components/InteractiveExperiences";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { WhatICanBuild } from "@/components/WhatICanBuild";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";

export default function Home() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-[#071018]"
      >
        Skip to content
      </a>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Skills />
        <Projects />
        <WhatICanBuild />
        <CreativeShowcase />
        <InteractiveExperiences />
        <Process />
        <WhyWorkWithMe />
        <FreelanceCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
