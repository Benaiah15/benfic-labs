import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Hero";
import { Projects } from "../components/sections/Projects";
import { About } from "../components/sections/About";
import { Experience } from "../components/sections/Experience";
import { TechStack } from "../components/sections/TechStack";
import { Contact } from "../components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative overflow-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Experience />
      <TechStack />
      <Contact />
    </main>
  );
}