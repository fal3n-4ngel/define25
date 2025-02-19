import Marquee from "react-fast-marquee";

export const IntroSection = () => {
  return (
    <section className="md:items-left relative flex h-full w-full flex-col items-center justify-center gap-7 overflow-x-clip overflow-y-visible bg-[#05050A] px-5 pt-30 text-center lg:px-40">
      <div className="relative mx-auto w-fit pb-2 text-center">
        <h1 className="relative bg-gradient-to-r from-[#ffffff80] via-white to-[#ffffff80] bg-clip-text text-center text-4xl font-light tracking-[-1.4px] text-transparent sm:text-5xl md:text-left">
          Define isn't just another hackathon.
        </h1>
        <div className="absolute bottom-1 left-1/2 h-[1px] w-[50%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8f8f8fab] to-transparent"></div>
      </div>
      <h2 className="p-2 text-center text-[20px] leading-[27px] font-extralight tracking-[0.9px] text-[#F1F7FEBD]">
        What does innovation mean to you? A groundbreaking app? A clever
        solution to a real-world problem? At DefineHack, we challenge you to
        define it. Join us for 24 intense hours of coding, collaboration, and
        creation. Transform your wildest ideas into tangible projects,
        surrounded by a community of passionate engineers. This isn't just a
        hackathon; it's an experience.
      </h2>

      <div className="absolute top-0 max-w-[100vw] -translate-y-1/2">
        <Marquee className="relative" speed={40} autoFill>
          <div className="inline-flex h-[75px] w-fit items-center -ms-[0.1px]">
            <div className="flex w-fit items-center border-y border-white bg-[radial-gradient(243.33%_421.3%_at_-29.34%_-115.03%,rgba(0,107,214,0.30)_0%,rgba(73,100,255,0.30)_38.54%,rgba(0,107,214,0.30)_100%)] p-2 text-xl">
              <div className="relative mx-5 w-10">
                <img
                  src="/lightning.png"
                  alt="lightning"
                  className="absolute top-1/2 left-1/2 w-20 -translate-x-1/2 -translate-y-1/2"
                />
              </div>

              <div className="flex items-center text-white">
                8th & 9th March
              </div>

              <div className="relative mx-5 w-10">
                <img
                  src="/lightning.png"
                  alt="lightning"
                  className="absolute top-1/2 left-1/2 w-20 -translate-x-1/2 -translate-y-1/2"
                />
              </div>

              <div className="flex items-center text-white">
                build for the real world
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </section>
  );
};
