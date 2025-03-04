import About from "@/sections/about";
import Hero from "@/sections/hero";
import Services from "@/sections/services";

export default function Home() {
  return (
    <>
      <Hero />
      <div>
        <div className="rounded-[25px] bg-background relative mt-[-25px] z-[40]">
          <About />
          <Services />
        </div>
      </div>
    </>
  );
}
