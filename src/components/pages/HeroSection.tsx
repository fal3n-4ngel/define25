import { VersionBadge } from "../ui/VersionBadge";

export const HeroContent = () => {
    return (
      <div className=" flex flex-col justify-center mt-18  lg:pl-40 z-10  pointer-events-none">
        
        <VersionBadge />
        <h1 className="scroll-m-20 text-[96px] font-[400px] tracking-none bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent leading-none">
          Define <br />
          Hackathon
        </h1>
        <p className="text-md text-[#f1f7fe] opacity-70">
          Compete with the brightest minds across India, build <br /> 
          impactful solutions, and ignite your engineering spirit.
        </p>
       
      </div>
    );
  };
  