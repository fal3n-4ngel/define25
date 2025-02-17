import { BentoSection } from "../pages/BentoSection";
type BentoSize = "small" | "medium" | "large";
interface Section {
  id: number;
  title: string;
  subtitle: string;
  size: BentoSize;
}

interface BentoGridProps {
  sections: Section[];
}

export const BentoGrid: React.FC<BentoGridProps> = ({ sections }) => {
  return (
    <section className="flex flex-col w-full h-full my-24 bg-[#05050A] justify-center items-center min-h-screen gap-7 px-5 lg:px-40">
      <h1 className="text-4xl sm:text-5xl font-light tracking-[-1.4px] bg-gradient-to-r from-[#ffffff80] via-white to-[#ffffff80] bg-clip-text text-transparent">
        Beyond the Code
      </h1>
      <h2 className="text-[#f1f7fe] opacity-70 font-light text-sm">
        DefineHack is more than just coding.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px] max-w-7xl mx-auto">
        {sections.map((section) => (
          <BentoSection key={section.id} section={section} />
        ))}
      </div>
    </section>
  );
};

export type { Section, BentoGridProps };
