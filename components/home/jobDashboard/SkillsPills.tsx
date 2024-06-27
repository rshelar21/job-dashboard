import React from "react";
import Image from "next/image";
import { ISkills } from "@/interfaces/skills";

interface ISkillsProps {
  skill: ISkills;
}

const SkillsPills: React.FC<ISkillsProps> = ({ skill }) => {
  return (
    <div className="bg-white border border-gray-150 px-1.5 py-1 flex gap-1 w-fit rounded-md cursor-pointer">
      <Image src={skill?.icon} width={16} height={16} alt={skill?.name} />
      <span className="text-slate-200 font-medium text-xs">{skill?.name}</span>
    </div>
  );
};

export default SkillsPills;
