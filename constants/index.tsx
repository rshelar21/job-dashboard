import { LuPencil } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { TbUserCheck } from "react-icons/tb";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { ISkills } from "@/interfaces/skills";

export const menuList = [
  {
    id: 101,
    title: "Applicants",
    count: 400,
    icon: <FiUsers className="w-5 h-5" />,
  },
  {
    id: 102,
    title: "Matches",
    count: 100,
    icon: <TbUserCheck className="w-5 h-5" />,
  },
  {
    id: 103,
    title: "Messages",
    count: 147,
    icon: <FiMessageSquare className="w-5 h-5" />,
  },
  {
    id: 104,
    title: "Views",
    count: 800,
    icon: <MdOutlineRemoveRedEye className="w-5 h-5" />,
  },
];

export const jobData = [
  {
    id: 1,
    title: "About",
    numberedList: true,
    list: [
      {
        description: "Handle the UI/UX research design",
        id: 11,
      },
      {
        description:
          "Work on researching on latest web applications designs & trends",
        id: 12,
      },
      {
        description: "Work on conceptualizing and visualizing",
        id: 13,
      },
      {
        description:
          "Work on creating graphics content and other graphic related works",
        id: 14,
      },
    ],
  },
  {
    id: 5,
    title: "Benefits",
    numberedList: false,
    list: [
      {
        description: "Health insurance",
        id: 51,
      },
      {
        description: "Provident Fund",
        id: 52,
      },
    ],
  },
  {
    id: 6,
    title: "Schedule",
    numberedList: false,
    list: [
      {
        description: "Day shift",
        id: 61,
      },
    ],
  },
  {
    id: 7,
    title: "Supplemental pay types",
    numberedList: false,
    list: [
      {
        description: "Supplemental pay types",
        id: 71,
      },
      {
        description: "Yearly bonus",
        id: 71,
      },
    ],
  },
  {
    id: 8,
    title: "Work Location",
    subTitle: "In person",
  },
];

export const skillsList: ISkills[] = [
  {
    id: 1,
    name: "Figma",
    icon: "/assets/icons/figma.svg",
  },
  {
    id: 2,
    name: "Adobe Illustrator",
    icon: "/assets/icons/adobe-ai.svg",
  },
  {
    id: 3,
    name: "Adobe XD",
    icon: "/assets/icons/adobe-xd.svg",
  },
];
