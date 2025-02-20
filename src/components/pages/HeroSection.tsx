import { VersionBadge } from "../ui/VersionBadge";
import { useEffect } from "react";
import { motion } from "motion/react";

export const HeroSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Add styles to handle the devfolio button content
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .apply-button {
        overflow: hidden !important;
      }
      .apply-button > div {
        height: 44px !important;
        overflow: hidden !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div id="home" className="z-10 flex min-h-[90vh] w-full flex-1 flex-col items-center justify-center  text-center md:items-start md:text-left lg:pl-16">
      <motion.video
        initial={{ scale: "50%" }}
        animate={{ scale: "100%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        autoPlay
        muted
        loop
        className="max-w-[150px] border-0 outline-0 md:hidden"
        src="/final.webm"
      />
      <VersionBadge />
      <motion.div
        initial={{ y: "10%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeIn" }}
      >
        <h1 className="tracking-none scroll-m-20 bg-gradient-to-r from-white via-gray-300 to-gray-600 bg-clip-text py-2 text-5xl leading-none text-transparent select-none lg:text-7xl">
          Define <br />
          Hackathon
        </h1>
        <h2 className="py-1 text-2xl lg:text-3xl/10">8th & 9th March</h2>
        <h3 className="text-base font-extralight tracking-wide">
          Department of Computer Science & Engineering,
        </h3>
        <h3 className="pb-2 text-xl font-light tracking-wide">
          Mar Baselios College Of Engineering & Technology (Autonomous),
          Trivandrum.
        </h3>

        <div className=" mt-6 flex w-full justify-center md:justify-start">
          <button
            className="apply-button  h-fit w-fit overflow-hidden"
            data-hackathon-slug="definehack-3"
            data-button-theme="dark-inverted"
          />
        </div>
      </motion.div>
    </div>
  );
};
