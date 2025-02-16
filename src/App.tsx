import "./App.css";
import Navbar from "./components/ui/Navbar";
import { HeroContent } from "./components/pages/HeroSection";
import { Model3D } from "./components/ui/3DModel";
// import { TaglineSection } from "./components/pages/TagLineSection";
// import { IntroSection } from "./components/pages/IntroSection";
// import { BentoGrid } from "./components/ui/BentoGrid";
// import { bentoSections } from "./data/bentoSections";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
//import Marquee from "react-fast-marquee";
function App() {
  const { ref: modelRef, inView: modelInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="text-white min-h-screen overflow-x-hidden w-full bg-[#05050A]">
      <section className="relative flex flex-col w-full h-full items-stretch justify-start bg-[#05050A]  min-h-screen ">
        <Navbar />
        <HeroContent />
        <div className="lg:pl-40  z-10 pt-10">
          <button
            className="apply-button"
            data-hackathon-slug="definehack-3"
            data-button-theme="dark-inverted"
            style={{ height: '44px', width: '312px' }}
          />
        </div>
        <div ref={modelRef} className="absolute top-0 left-0 w-full h-full z-0">
          {modelInView && <Model3D />}
        </div>
      </section>
      <section className="bg-[#05050A] w-full flex  flex-col justify-center items-center">
        <h1 className="font-extralight tracking-tight  text-[56px] text-white">The backbone of Define</h1>
        <h2 className="text-[#f1f7fea0] font-light">The ones who support the Hackathon</h2>
        <div className="grid grid-cols-1 py-4">
          <a href="https://devfolio.co"><img src="DEVFOLIO LOGO.svg" alt="DEVFOLIO LOGO" className="w-40 h-fit py-4 px-8 bg-white rounded-xl" /></a>
       
        </div>
        <div className="flex gap-8 justify-center items-center py-12">
          <h2 className="text-[#f1f7fea0] font-light">Would like to extend your support?</h2>
          <a className="bg-white rounded-full px-4 py-2 text-black cursor-pointer">View Sponsorship Guide</a>
        </div>
      </section>
      {/* <Marquee
        className="border-y border-white bg-black w-full text-xl"
        gradientColor="#05050A"
        gradient={true}
        speed={40}
      >
        <div className="flex items-center gap-8 py-4 px-4">
          POWERED BY <div className="w-2" /> UST GLOBAL <div className="w-2" />x{" "}
          <div className="w-2" /> Ministry of Ayurveda, Yoga & Naturopathy,
          Unani, Siddha and Homoeopathy
          <div className="w-8" /> 
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
      <section className="bg-[#05050A] w-full min-h-screen"></section> */}
    </div>
  );
}

export default App;
