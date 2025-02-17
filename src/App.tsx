import "./App.css";
import Navbar from "./components/ui/Navbar";
import { HeroSection } from "./components/pages/HeroSection";
import { Model3D } from "./components/ui/3DModel";
import { TaglineSection } from "./components/pages/TagLineSection";
import { IntroSection } from "./components/pages/IntroSection";
import { BentoGrid } from "./components/ui/BentoGrid";
import { bentoSections } from "./data/bentoSections";
import { useInView } from "react-intersection-observer";
import Marquee from "react-fast-marquee";
import Accordian from "./components/ui/Accordian";
import Footer from "./components/ui/Footer";
import useAssetsLoader from "./hooks/useAssetsLoader";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "./assets/loading-animation.json";
import { AnimatePresence, motion } from "motion/react";

function App() {
  const isAssetsLoading = useAssetsLoader();
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    console.log(isAssetsLoading, !animationCompleted);
  }, [isAssetsLoading, animationCompleted]);

  const { ref: modelRef, inView: modelInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const shouldShowContent = !isAssetsLoading && animationCompleted;

  return (
    <div className="relative min-h-screen w-full bg-[#05050A] text-white z-[200]">
      <AnimatePresence>
        {!shouldShowContent && (
          <motion.div
            key="loader"
            initial={{ y: 0 }}
            animate={{  y: 0 }}
            exit={{  y: "-100vh" }}
            transition={{ duration: 1, ease: [0.5, 1, 0.89, 1] }}
            className="absolute top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-[#05050A] z-[200]"
          >
            <Lottie
              loop={false}
              animationData={loadingAnimation}
              onComplete={() => setAnimationCompleted(true)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {shouldShowContent && (
        <>
          <section className="relative flex h-full min-h-screen w-full flex-col items-stretch justify-start bg-[#05050A] px-5 lg:px-40">
            <Navbar />
            <HeroSection />
          </section>
          <Marquee
            className="z-30 w-screen border-y border-white bg-linear-to-r from-white to-[#999999] text-xl text-black"
            speed={40}
            autoFill
          >
            <div className="flex items-center justify-center gap-2 px-4">
              <p>Transform Tomorrow, Today</p>
              <span className="h-3 w-3 rounded-full bg-black"></span>
            </div>
          </Marquee>
          <div
            ref={modelRef}
            className="absolute top-0 left-0 z-0 hidden h-screen w-full md:block"
          >
            {modelInView && <Model3D />}
          </div>
          <IntroSection />
          <TaglineSection />
          <BentoGrid sections={bentoSections} />
          <section className="my-24 flex w-full flex-col items-center justify-center bg-[#05050A] px-5 lg:px-40">
            <h1 className="relative bg-gradient-to-r from-[#ffffff80] via-white to-[#ffffff80] bg-clip-text text-center text-4xl font-light tracking-[-1.4px] text-transparent sm:text-5xl md:text-left">
              The backbone of Define
            </h1>
            <h2 className="font-light text-[#f1f7fea0]">
              The ones who support the Hackathon
            </h2>
            <div className="grid grid-cols-4 gap-4 py-8">
              <img src="sponsorDummy.png" alt="Define Logo" />
              <img src="sponsorDummy.png" alt="Define Logo" />
              <img src="sponsorDummy.png" alt="Define Logo" />
              <img src="sponsorDummy.png" alt="Define Logo" />
            </div>
            <div className="sm:text-md flex items-center justify-center gap-8 py-12 text-sm">
              <h2 className="font-light text-[#f1f7fea0]">
                Would like to extend your support?
              </h2>
              <a className="sm:text-md cursor-pointer rounded-full bg-white px-4 py-2 text-center text-xs text-black">
                View Sponsorship Guide
              </a>
            </div>
          </section>
          <section className="my-24 flex w-full flex-col items-center justify-center bg-[#05050A]">
            <h1 className="relative bg-gradient-to-r from-[#ffffff80] via-white to-[#ffffff80] bg-clip-text text-center text-4xl font-light tracking-[-1.4px] text-transparent sm:text-5xl md:text-left">
              Frequently asked
            </h1>
            <Accordian />
          </section>
          <section className="my-40 flex w-full flex-col items-center justify-center gap-5 bg-[#05050A]">
            <h1 className="relative bg-gradient-to-r from-[#ffffff80] via-white to-[#ffffff80] bg-clip-text text-center text-4xl font-light tracking-[-1.4px] text-transparent sm:text-5xl md:text-left">
              What are you waiting for?
            </h1>
            <button className="cursor-pointer rounded-full bg-white px-4 py-2 text-black">
              Register Now
            </button>
          </section>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
