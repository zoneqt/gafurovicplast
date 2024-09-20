import FeaturedWork from "@/sections/featured-work";
import About from "@/sections/about";
import Contact from "@/sections/contact";
import Hero from "@/sections/hero";
import TechStack from "@/sections/tech-stack";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <FeaturedWork />
      <Contact />
    </>
  );
}
