export type SkillGroup = {
  category: string;
  icon: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages & Frameworks",
    icon: "layout",
    skills: ["C++", "Python", "JavaScript", "TypeScript", "React.js", "Next.js", "Express.js"],
  },
  {
    category: "Styling & Motion",
    icon: "sparkles",
    skills: ["Tailwind CSS", "Framer Motion", "CSS/Sass"],
  },
  {
    category: "Backend & Data",
    icon: "database",
    skills: ["Node.js", "MongoDB", "SQL", "RESTful APIs", "Prisma"],
  },
  {
    category: "Tools & Workflow",
    icon: "wrench",
    skills: ["Git", "GitHub", "Figma", "Postman"],
  },
];
