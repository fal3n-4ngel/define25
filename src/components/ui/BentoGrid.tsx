interface Section {
  id: number;
  title: string;
  subtitle: string;
}

export const BentoGrid: React.FC = () => {
  const getSectionClassName = (id: Section["id"]): string => {
    const baseClasses =
      "group relative rounded-xl transition-all duration-300 hover:bg-zinc-800 border-[2px] border-[#ffffff30] overflow-hidden";

    const sizeClasses: Record<number, string> = {
      1: "md:col-span-1 md:row-span-2 bg-[radial-gradient(305.58%_213.83%_at_11.29%_8.03%,rgba(129,69,253,0.14)_6.08%,rgba(69,2,173,0.14)_100%)]",
      2: "md:col-span-1 md:row-span-1 lg:col-span-2 bg-[radial-gradient(243.33%_421.3%_at_-29.34%_-115.03%,rgba(196,46,9,0.30)_0%,rgba(249,109,22,0.30)_38.54%,rgba(196,46,9,0.30)_100%)]",
      3: "md:row-span-2 lg:row-span-1 bg-[linear-gradient(219deg,rgba(9,53,196,0.30)_-349.33%,rgba(14,134,199,0.30)_5.35%,rgba(9,53,196,0.30)_203.65%)]",
      4: "md:col-span-1 md:row-span-2 bg-[radial-gradient(243.33%_421.3%_at_-29.34%_-115.03%,rgba(0,107,214,0.30)_0%,rgba(73,100,255,0.30)_38.54%,rgba(0,107,214,0.30)_100%)]",
      5: "md:col-span-1 md:row-span-1 lg:col-span-2 bg-[radial-gradient(243.33%_421.3%_at_-29.34%_-115.03%,rgba(0,164,170,0.30)_0%,rgba(4,123,62,0.30)_38.54%,rgba(0,164,170,0.30)_100%)]",
    };

    return `${baseClasses} ${sizeClasses[id] || ""}`;
  };

  return (
    <section className="relative py-24 flex h-full min-h-screen w-full flex-col items-center justify-center gap-7 bg-[#05050A] px-5 lg:px-40 bg-[url('/matrix.png')] bg-repeat before:absolute before:inset-0 before:bg-black/30 before:z-0">
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#05050A] to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#05050A] to-transparent"></div>
      <h1 className="bg-gradient-to-r from-[#ffffff80] via-white to-[#ffffff80] bg-clip-text text-4xl font-light tracking-[-1.4px] text-transparent sm:text-5xl">
        Beyond the Code
      </h1>
      <h2 className="text-[20px] leading-[27px] font-light text-[#f1f7fe] opacity-70">
        DefineHack is more than just coding.
      </h2>
      <div className="mx-auto grid w-full max-w-5xl auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* {sections.map((section) => (

          <BentoSection key={section.id} section={section} />
        ))} */}
        <div className={getSectionClassName(1)}>
          <div className="flex h-full flex-col justify-between">
            <div className="p-6">
              <h1 className="text-[26px]">Expanding Your Skillsets</h1>
              <p className="text-[15px] font-light tracking-[0.6px] leading-[18px]">
                Learn new technologies, refine your coding abilities, and gain
                practical experience.
              </p>
            </div>
            <div className="hidden h-full flex-col items-center justify-center sm:flex">
              <div className="relative">
                <img src="/plus_shape.png" alt="" />
                <img
                  className="absolute top-0 -right-10 h-20 w-20 scale-50"
                  src="/star_mixer.png"
                  alt=""
                />
                <img
                  className="absolute bottom-0 -left-10 h-20 w-20 scale-75"
                  src="/star_mixer.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className={getSectionClassName(2)}>
          <div className="flex h-full justify-between">
            <div className="pt-6 pl-6">
              <h1 className="text-[26px]">Networking with Professionals</h1>
              <p className="text-[15px] font-light tracking-[0.6px] leading-[18px]">
                Connect with mentors, judges, and potential employers from
                leading tech companies.
              </p>
            </div>
            <img
              className="hidden pt-6 pr-2 sm:block"
              src="/round_shape.png"
              alt=""
            />
          </div>
        </div>
        <div className={getSectionClassName(3)}>
          <div className="relative h-full w-full overflow-hidden">
            <img
              className="absolute -top-4 right-0 hidden sm:block"
              src="/star_shape.png"
              alt=""
            />
            <img
              className="absolute -bottom-8 left-0 scale-75 -rotate-45 hidden sm:block"
              src="/star_shape.png"
              alt=""
            />
            <div className="flex flex-col gap-2 p-6">
              <h1 className="text-[26px]">
                Winning <br></br> Awesome Prizes
              </h1>
              <p className="text-[15px] font-light tracking-[0.6px] leading-[18px]">
                Compete for a range of prizes and recognition for your
                ingenuity.
              </p>
            </div>
          </div>
        </div>
        <div className={getSectionClassName(4)}>
          <div className="flex h-full flex-col justify-between overflow-hidden relative">
            <div className="p-6">
              <h1 className="text-[26px]">Expanding Your Skillsets</h1>
              <p className="text-[15px] font-light tracking-[0.6px] leading-[18px]">
                Learn new technologies, refine your coding abilities, and gain
                practical experience.
              </p>
            </div>
            <div className="h-full flex-col items-center justify-center hidden sm:flex">
              <div className="relative">
                <img src="/lightning.png" alt="" />
                <img
                  className="absolute top-0 -left-12 h-30 -rotate-[30deg]"
                  src="/lightning.png"
                  alt=""
                />
                <img
                  className="absolute -right-12 bottom-0 h-30 -rotate-[30deg]"
                  src="/lightning.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className={getSectionClassName(5)}>
          <div className="flex h-full justify-between">
            <div className="pt-6 pl-6">
              <h1 className="text-[26px]">Building Your Portfolio</h1>
              <p className="text-[15px] font-light tracking-[0.6px] leading-[18px]">
              Showcase your projects to a wider audience and boost your career prospects.
              </p>
            </div>
            <img className="pt-6 pr-2 hidden sm:block" src="/stair.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export type { Section };
