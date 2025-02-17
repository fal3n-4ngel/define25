export const TaglineSection = () => {
  return (
    <section className="relative mx-auto my-12 flex h-full w-fit flex-col items-center justify-center overflow-hidden rounded-[24px] border border-white/10 bg-[#05050A] py-12 text-center md:w-full md:max-w-[80vw] md:py-24">
      <div className="absolute top-0 left-1/2 h-[1px] w-[50%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8f8f8fab] to-transparent"></div>

      <img
        src="Logo Faded.png"
        alt="Define Logo"
        className="pl absolute top-0 mx-auto"
      />
      <h1 className="text-[2rem] leading-none font-extralight tracking-tight text-white md:text-[4.5rem]">
        24 Hours.&nbsp;&nbsp;&nbsp; Endless Possibilities.
      </h1>
    </section>
  );
};
