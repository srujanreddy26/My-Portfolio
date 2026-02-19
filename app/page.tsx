import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Experience />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </>
  );
}
