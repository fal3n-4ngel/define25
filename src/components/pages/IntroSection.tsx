import Marquee from "react-fast-marquee";

export const IntroSection = () => {
  return (
    <section id="about" className="md:items-left relative flex h-full w-full flex-col items-center justify-center gap-7 overflow-x-clip overflow-y-visible bg-[#05050A] px-5 pt-30 text-center lg:px-40">
      <div className="relative mx-auto w-fit pb-2 text-center">
        <h1 className="relative bg-gradient-to-r from-[#ffffff80] via-white to-[#ffffff80] bg-clip-text text-center text-4xl font-light tracking-[-1.4px] text-transparent sm:text-5xl md:text-left">
          Define isn't just another hackathon.
        </h1>
        <div className="absolute bottom-1 left-1/2 h-[1px] w-[50%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8f8f8fab] to-transparent"></div>
      </div>
      <h2 className="p-2 text-center text-[20px] leading-[27px] font-extralight tracking-[0.9px] text-[#F1F7FEBD]">
        At DefineHack, innovation isn’t a one-size-fits-all. You define it. All
        in the span of 24 hours, take your audacious ideas, code it and make ‘em
        pretty with design! To us, this isn’t about a game-changing solution or
        a breakthrough app, it’s about a community of innovators creating the
        future!
      </h2>

      <div className="absolute top-0 max-w-[100vw] -translate-y-1/2">
        <Marquee className="relative" speed={40} autoFill>
          <div className="-ms-[0.1px] inline-flex h-[75px] w-fit items-center">
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
                Tranform Tommorow , Today
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </section>
  );
};
