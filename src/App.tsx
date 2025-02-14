import "./App.css";
import Navbar from "./components/ui/Navbar";
import { HeroContent } from "./components/pages/HeroSection";
import { Model3D } from "./components/ui/3DModel";
import { TaglineSection } from "./components/pages/TagLineSection";
import { IntroSection } from "./components/pages/IntroSection";
import { BentoGrid } from "./components/ui/BentoGrid";
import { bentoSections } from "./data/bentoSections";

function App() {
  return (
    <div className="text-white min-h-screen overflow-x-hidden w-full">
      <section className="relative flex flex-col w-full h-full items-stretch justify-start bg-[#05050A]  min-h-screen ">
        <Navbar />
        <HeroContent />
        <div className="lg:pl-40  z-10">
          <button className="bg-white text-sm text-black rounded-full max-w-[146px] py-2 px-4 mt-12 z-10 cursor-pointer ">
            Register Now
          </button>
        </div>
        <Model3D />
      </section>
      <TaglineSection />
      <IntroSection />
      <BentoGrid sections={bentoSections} />
    </div>
  );
}

export default App;
