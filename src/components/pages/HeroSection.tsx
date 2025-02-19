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
  return (
    <div className="z-10 flex w-full flex-1 flex-col items-center justify-center text-center md:w-[50%] md:items-start md:text-left">
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
        <h3 className=" text-base font-extralight tracking-wide">
          Department of Computer Science & Engineering,
        </h3>
        <h3 className="pb-2 text-xl font-light tracking-wide">
          Mar Baselios College Of Engineering & Technology (Autonomous), Trivandrum.
        </h3>
        {/* <p className="text-md py-2 text-[#f1f7fe] opacity-70 select-none lg:text-lg">
        Compete with the brightest minds across India, build impactful
        solutions, and ignite your engineering spirit.
      </p> */}

        <div className="mt-6 flex w-full h-fit md:justify-start justify-center">
          <button
            className="apply-button"
            data-hackathon-slug="definehack-3"
            data-button-theme="dark-inverted"
            style={{ height: "44px", width: "312px" }}
          />
        </div>
      </motion.div>
      
    </div>
  );
};
