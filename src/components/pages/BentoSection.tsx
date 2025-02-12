
interface Section {
    id: 1 | 2 | 4 | 5 | number; 
    title: string;
    subtitle: string;
  }
  
  interface BentoSectionProps {
    section: Section;
  }
  
  export const BentoSection: React.FC<BentoSectionProps> = ({ section }) => {
    const getSectionClassName = (id: Section['id']): string => {
      const baseClasses =
        "group relative rounded-xl bg-white/[0.01] p-6 transition-all duration-300 hover:bg-zinc-800 border-[0.1px] border-[#ffffff10]";
      
      const sizeClasses: Record<number, string> = {
        1: "col-span-1 row-span-2",
        2: "col-span-2 row-span-1",
        4: "md:col-span-1 md:row-span-2",
        5: "md:col-span-2 md:row-span-1",
      };
  
      return `${baseClasses} ${sizeClasses[id] || ""}`;
    };
  
    return (
      <a href="#" className={getSectionClassName(section.id)}>
        <div className="relative h-full w-full">
          <div className="flex flex-col gap-2">
            <h2 className="text-[24px] leading-[10px] mb-4">{section.title}</h2>
            <p className="text-gray-400 text-[12px] leading-[16px]">
              {section.subtitle}
            </p>
          </div>
        </div>
        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 transition-all duration-300 group-hover:ring-white/20" />
      </a>
    );
  };
  
  // Export the types
  export type { Section, BentoSectionProps };