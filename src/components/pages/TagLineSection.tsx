export const TaglineSection = () => {
  return (
    <section className="flex flex-col w-full h-full bg-[#05050A] justify-center items-center pt-20">
      <div className="overflow-hidden relative border border-white/10 px-52 py-24 rounded-[24px] shadow-2xl flex justify-center items-center">
        <img
          src="Logo Faded.png"
          alt="Define Logo"
          className="absolute top-0 pl mx-auto"
        />
        <h1 className="font-extralight tracking-tight leading-[117px] text-[56px] text-white">
          24 Hours.&nbsp;&nbsp;&nbsp; Endless Possibilities.
        </h1>
      </div>
    </section>
  );
};
