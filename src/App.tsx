import "./App.css";
import Navbar from "./components/ui/Navbar";
import { HeroContent } from "./components/pages/HeroSection";
import { Model3D } from "./components/ui/3DModel";
import { TaglineSection } from "./components/pages/TagLineSection";
import { IntroSection } from "./components/pages/IntroSection";
import { BentoGrid } from "./components/ui/BentoGrid";
import { bentoSections } from "./data/bentoSections";
import { useInView } from "react-intersection-observer";
import Marquee from "react-fast-marquee";
function App() {
  const { ref: modelRef, inView: modelInView } = useInView({
    triggerOnce: false,
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
      <Marquee
        className="border-y border-white bg-black w-full text-xl"
        gradientColor="#05050A"
        gradient={true}
        speed={40}
      >
        <div className="flex items-center gap-8 py-4 px-4">
          POWERED BY <div className="w-2" /> UST GLOBAL <div className="w-2" />x{" "}
          <div className="w-2" /> Ministry of Ayurveda, Yoga & Naturopathy,
          Unani, Siddha and Homoeopathy
          <div className="w-8" /> {/* Spacer between repetitions */}
        </div>
      </Marquee>
      <TaglineSection />
      <IntroSection />
      <BentoGrid sections={bentoSections} />
      <section className="bg-[#05050A] w-full flex  flex-col justify-center items-center">
      <h1 className="font-extralight tracking-tight  text-[56px] text-white">The backbone of Define</h1>
      <h2 className="text-[#f1f7fea0] font-light">The ones who support the Hackathon</h2>
      <div className="grid grid-cols-4 py-8 gap-4">
        <img src="sponsorDummy.png" alt="Define Logo" />
        <img src="sponsorDummy.png" alt="Define Logo" />
        <img src="sponsorDummy.png" alt="Define Logo" />
        <img src="sponsorDummy.png" alt="Define Logo" />
      </div>
      <div className="flex gap-8 justify-center items-center py-12">
      <h2 className="text-[#f1f7fea0] font-light">Would like to extend your support?</h2>
      <a className="bg-white rounded-full px-4 py-2 text-black cursor-pointer">View Sponsorship Guide</a>
      </div>
      </section>
      <section className="bg-[#05050A] w-full min-h-screen"></section>
    </div>
  );
}

export default App;
