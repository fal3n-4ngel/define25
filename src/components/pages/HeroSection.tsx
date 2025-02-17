import { VersionBadge } from "../ui/VersionBadge";

export const HeroSection = () => {
  return (
    <div className="z-10 flex w-full flex-1 flex-col items-center justify-center text-center md:w-[50%] md:items-start md:text-left">
      <video
        autoPlay
        muted
        loop
        className="outline-0 border-0 md:hidden max-w-[150px]"
        src="/final.webm"
      />
      <VersionBadge />
      <h1 className="tracking-none scroll-m-20 bg-gradient-to-r from-white via-gray-300 to-gray-600 bg-clip-text py-2 text-5xl leading-none text-transparent select-none lg:text-7xl">
        Define <br />
        Hackathon
      </h1>
      <h2 className="py-1 text-2xl lg:text-3xl/10">8th & 9th March</h2>
      <h3 className="bg-gradient-to-r from-[#ffffff80] via-white to-[#ffffff80] bg-clip-text pb-2 text-xl tracking-[-1.4px] text-transparent">
        Mar Baselios College Of Engineering & Technology, Trivandrum.
      </h3>
      <p className="text-md py-2 text-[#f1f7fe] opacity-70 select-none lg:text-lg">
        Compete with the brightest minds across India, build impactful
        solutions, and ignite your engineering spirit.
      </p>
      <button className="mt-6 max-w-[146px] cursor-pointer rounded-full bg-white p-2 text-sm text-black">
        Register Now
      </button>
    </div>
  );
};
