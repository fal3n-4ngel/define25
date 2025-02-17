export const IntroSection = () => {
  return (
    <section className="md:items-left flex h-full w-full flex-col items-center justify-center gap-7 bg-[#05050A] px-5 pt-30 text-center">
      <div className="relative mx-auto w-fit pb-2 text-center">
        <h1 className="relative bg-gradient-to-r from-[#ffffff80] via-white to-[#ffffff80] bg-clip-text text-center text-4xl font-light tracking-[-1.4px] text-transparent md:text-left">
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
    </section>
  );
};
