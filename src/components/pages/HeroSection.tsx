import { VersionBadge } from "../ui/VersionBadge";

export const HeroContent = () => {
    return (
      <div className="flex-1 flex flex-col justify-center p-10 lg:pl-40">
        <VersionBadge />
        <h1 className="scroll-m-20 text-[96px] font-[400px] tracking-none bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent leading-none">
          Define <br />
          Hackathon
        </h1>
        <p className="text-md text-[#f1f7fe] opacity-70">
          Compete with the brightest minds across India, build <br /> 
          impactful solutions, and ignite your engineering spirit.
        </p>
        <button className="bg-white text-sm text-black rounded-full w-[146px] py-2 px-4 mt-12">
          Register Now
        </button>
      </div>
    );
  };
  