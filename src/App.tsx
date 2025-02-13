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
      <Navbar />
      <section className="flex w-full h-full items-stretch bg-[#05050A]">
        <HeroContent />
        <Model3D />
      </section>
      <TaglineSection />
      <IntroSection />
      <BentoGrid sections={bentoSections} />
    </div>
  );
}

export default App;
