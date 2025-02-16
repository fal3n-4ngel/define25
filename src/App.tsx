import "./App.css";
import Navbar from "./components/ui/Navbar";
import { HeroContent } from "./components/pages/HeroSection";
import { Model3D } from "./components/ui/3DModel";
import { TaglineSection } from "./components/pages/TagLineSection";
import { IntroSection } from "./components/pages/IntroSection";
import { BentoGrid } from "./components/ui/BentoGrid";
import { bentoSections } from "./data/bentoSections";
import { useInView } from "react-intersection-observer";

function App() {
  const { ref: modelRef, inView: modelInView } = useInView({
    triggerOnce:false,
    threshold: 0.1,
  });
  

  return (
    <div className="text-white min-h-screen overflow-x-hidden w-full bg-[#05050A]">
      <section className="relative flex flex-col w-full h-full items-stretch justify-start bg-[#05050A]  min-h-screen ">
        <Navbar />
        <HeroContent />
        <div className="lg:pl-40  z-10">
          <button className="bg-white text-sm text-black rounded-full max-w-[146px] py-2 px-4 mt-12 z-10 cursor-pointer ">
            Register Now
          </button>
        </div>
        <div ref={modelRef} className="absolute top-0 left-0 w-full h-full z-0">
          {modelInView && <Model3D />}
        </div>
      </section>
      <TaglineSection />
      <IntroSection />
      <BentoGrid sections={bentoSections} />
      <section className="bg-[#05050A] w-full min-h-screen"></section>
      <section className="bg-[#05050A] w-full min-h-screen"></section>
    </div>
  );
}

export default App;
