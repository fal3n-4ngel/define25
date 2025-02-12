type BentoSize = 'small' | 'medium' | 'large';


interface Section {
  id: number;
  title: string;
  subtitle: string;
  size: BentoSize;
}

export const bentoSections: Section[] = [
  {
    id: 1,
    title: "Beyond the Code",
    subtitle: "DefineHack is more than just coding.",
    size: "large",
  },
  {
    id: 2,
    title: "Expanding Your Skillsets",
    subtitle: "Learn new technologies, refine your coding abilities, and gain practical experience.",
    size: "medium",
  },
  {
    id: 3,
    title: "Expanding Your Skillsets",
    subtitle: "Learn new technologies, refine your coding abilities, and gain practical experience.",
    size: "medium",
  },
  {
    id: 4,
    title: "Expanding Your Skill",
    subtitle: "Learn new technologies, refine your coding abilities, and gain practical experience.",
    size: "small",
  },
  {
    id: 5,
    title: "Expanding Your Skillsets",
    subtitle: "Learn new technologies, refine your coding abilities, and gain practical experience.",
    size: "small",
  },
];


export type { Section, BentoSize };