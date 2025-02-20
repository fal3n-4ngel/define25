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
    title: "Will I be able to make a project from multiple tracks?",
    subtitle: "Yes. Multiple tracks can be taken into consideration for the ideation of your project. ",
    size: "small",
  },
];


export type { Section, BentoSize };