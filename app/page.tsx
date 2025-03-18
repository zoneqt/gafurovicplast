import Footer from "@/components/footer";
import GoogleMap from "@/components/google-map";
import About from "@/sections/about";
import Hero from "@/sections/hero";
import Services from "@/sections/services";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-backgroundAlt">
        <div className="rounded-[25px] bg-background relative mt-[-25px] z-[40]">
          <About />
          <Services />
        </div>
        <GoogleMap embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.647983225642!2d17.44320367666861!3d44.062217825880225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475fa700195c4c1d%3A0x9e45df29496fb02!2sGafurovi%C4%87%20Plast%20d.o.o!5e1!3m2!1sen!2sba!4v1742302340323!5m2!1sen!2sba" />
        <Footer />
      </div>
    </>
  );
}
