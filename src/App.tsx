import Navbar from "./components/ui/Navbar";
import { HeroSection } from "./components/pages/HeroSection";
import { Model3D } from "./components/ui/3DModel";
import { TaglineSection } from "./components/pages/TagLineSection";
import { IntroSection } from "./components/pages/IntroSection";
import { BentoGrid } from "./components/ui/BentoGrid";
import { useInView } from "react-intersection-observer";

import Accordian from "./components/ui/Accordian";
import Footer from "./components/ui/Footer";
import useAssetsLoader from "./hooks/useAssetsLoader";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "./assets/loading-animation.json";
import { AnimatePresence, motion } from "motion/react";
import PriceBanner from "./components/ui/PriceBanner";
import Marquee from "react-fast-marquee";

function App() {
  const isAssetsLoading = useAssetsLoader();
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    console.log(!isAssetsLoading, animationCompleted);
  }, [isAssetsLoading, animationCompleted]);

  const { ref: modelRef, inView: modelInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const shouldShowContent = animationCompleted;
  // const shouldShowContent = !isAssetsLoading && animationCompleted;

  return (
    <div className="relative z-[200] min-h-screen w-full overflow-x-hidden bg-[#05050A] text-white antialiased md:subpixel-antialiased">
      <AnimatePresence propagate>
        {!shouldShowContent && (
          <motion.div
            key="loader"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 1, ease: [0.5, 1, 0.89, 1] }}
            className="absolute top-0 left-0 z-[200] flex h-screen w-full items-center justify-center bg-[#05050A]"
          >
            <Lottie
              loop={false}
              animationData={loadingAnimation}
              onComplete={() => {
                setAnimationCompleted(true);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {shouldShowContent && (
        <>
          <section className="relative flex h-full min-h-screen w-full flex-col items-stretch justify-start bg-[#05050A] px-5 lg:px-40">
            <Navbar />
            <HeroSection />
            <div className="max-w-[100vw]"></div>
          </section>

          <div
            ref={modelRef}
            className="absolute top-0 left-0 z-0 hidden h-screen w-full md:block"
          >
            {modelInView && <Model3D />}
          </div>
          <IntroSection />
          <TaglineSection />
          <BentoGrid />
          <PriceBanner />
          <section className="my-24 flex w-full flex-col items-center justify-center px-5 lg:px-40">
            <h1 className="relative bg-gradient-to-r from-[#ffffff80] via-white to-[#ffffff80] bg-clip-text text-center text-4xl font-light tracking-[-1.4px] text-transparent sm:text-5xl md:text-left">
              The Define Timeline
            </h1>
            <h2 className="font-light text-[#f1f7fea0]">
              yep, some dates you need to keep in mind
            </h2>
            <motion.div className="mt-24 flex flex-col gap-2">
              {[
                {
                  date: "20th",
                  month: "February",
                  event: "Application Window begins",
                },
                {
                  date: "28th",
                  month: "February",
                  event: "Application Window closes",
                },
                {
                  date: "1st",
                  month: "March",
                  event: "Review/Assessment of Applications",
                },
                { date: "3rd", month: "March", event: "RSVPs will be sent" },
                { date: "8th", month: "March", event: "Hackathon Starts" },
                {
                  date: "9th",
                  month: "March",
                  event: "Presentation & Results Announcement",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="flex w-full items-center justify-between gap-10">
                    <div className="flex-1">
                      <h1 className="text-4xl">{item.date}</h1>
                      <h2 className="text-xl font-light">{item.month}</h2>
                    </div>
                    <div className="flex-2 text-end">
                      <p className="text-xl font-light">{item.event}</p>
                    </div>
                  </div>
                  <div className="mx-auto mb-5 h-[0.5px] w-full bg-white opacity-50"></div>
                </motion.div>
              ))}
            </motion.div>
          </section>
          <section className="my-24 flex w-full flex-col items-center justify-center bg-[#05050A] px-5 lg:px-40">
            <h1 className="relative bg-gradient-to-r from-[#ffffff80] via-white to-[#ffffff80] bg-clip-text text-center text-4xl font-light tracking-[-1.4px] text-transparent sm:text-5xl md:text-left">
              The Backbone of Define
            </h1>
            <h2 className="font-light text-[#f1f7fea0]">
              The ones who support the Hackathon
            </h2>
            <div className="flex flex-col items-center justify-center gap-15 mt-24">
              <div className="flex items-center justify-center gap-8">
                <div className="flex h-30 flex-col items-center justify-center">
                  <p>Title Sponsor</p>
                  <img
                    className="h-30 w-30 brightness-0 invert"
                    src="/sponsors/ayush.png"
                    alt="Ayush"
                  />
                </div>
                <div className="flex h-30 flex-col items-center justify-center">
                  <p>Gold Sponsor</p>
                  <img
                    className="h-30 w-30 p-5 brightness-0 invert"
                    src="/sponsors/ust.png"
                    alt="UST"
                  />
                </div>
              </div>
              <Marquee
                className="max-w-3xl"
                autoFill
                gradient
                gradientColor="#05050A"
                pauseOnHover
              >
                <div className="ms-5 flex gap-5">
                  <img
                    className="brightness-0 invert"
                    src="/sponsors/IBS_Software.svg"
                    alt="IBS Software"
                  />
                  <img src="/sponsors/ethindia.svg" alt="Define Logo" />
                  <img
                    className="brightness-0 invert"
                    src="/sponsors/balsamiq.svg"
                    alt="balsamiq"
                  />
                  <img
                    className="grayscale"
                    src="/sponsors/mbcetaa.png"
                    alt="MBCETAA"
                  />
                  <img
                    className="grayscale"
                    src="/sponsors/csi.png"
                    alt="CSI MBCET"
                  />
                  <img
                    className="grayscale"
                    src="/sponsors/vector_research.png"
                    alt="Vector Research"
                  />
                  <img
                    className="grayscale"
                    src="/sponsors/xyz.png"
                    alt="XYZ"
                  />
                </div>
              </Marquee>
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
          <section className="my-40 flex w-full flex-col items-center justify-center gap-5 bg-[#05050A] px-5 lg:px-40">
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
