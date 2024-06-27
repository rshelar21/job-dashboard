import React from "react";
import Image from "next/image";
import { skillsList } from "@/constants/index";
import SkillsPills from "./SkillsPills";
import { IoLocationOutline } from "react-icons/io5";

const JobHeader: React.FC = () => {
  return (
    <div className="w-full ">
      {/*  header */}
      <div className="pt-[48px] pb-8 w-full flex flex-col gap-y-[22px] px-5 sm:px-10 lg:pl-20">
        <div className="flex w-full items-center gap-3 flex-wrap ">
          <h3 className="text-gray-500 font-bold text-3xl  ">
            Senior Product Designer
          </h3>
          <span className="bg-gray-100 w-1 h-1 rounded-full hidden md:inline-block" />
          <p className="text-gray-350 font-medium text-sm">posted 2 days ago</p>
          <div className="bg-green-100 flex items-center border border-green-200 rounded-full gap-1 py-1 px-1.5">
            <span className="bg-green-300 w-1.5 h-1.5 rounded-full" />
            <p className="text-green-400 font-Inter font-medium text-[10px]">
              Open
            </p>
          </div>
        </div>

        <div className="flex gap-4 items-start sm:items-center flex-col sm:flex-row">
          <div className="flex gap-x-1 text-gray-600 items-center">
            <IoLocationOutline className="w-6 h-6" />
            <span className="font-medium text-lg leading-8">Delaware, USA</span>
          </div>
          <span className="bg-gray-100 w-1 h-1 rounded-full hidden sm:inline-block" />
          <div className="flex gap-x-1 text-gray-600 items-center">
            <Image
              src="/assets/icons/coins.svg"
              width={20}
              height={20}
              alt="coins"
            />
            <span className="font-medium text-lg">$300k-$400k</span>
          </div>
        </div>
      </div>

      {/* skills */}
      <div className="border-y border-gray-neutral pt-8 pb-8 w-full px-5 sm:px-10 lg:pl-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 w-full
        max-w-[800px]
        ">
          <div className="w-full max-w-[170px] ">
            <h3 className="text-gray-550 font-medium text-sm">
              Skills Required
            </h3>
            <div className="pt-2 flex flex-col gap-y-2">
              {skillsList?.map((item, index) => (
                <SkillsPills skill={item} key={`${item?.id}-${index}`} />
              ))}
            </div>
          </div>
          <div className="w-full max-w-[170px]">
            <h3 className="text-gray-550 font-medium text-sm">
              Preferred Language
            </h3>
            <div className="pt-[6px]">
              <p className="text-gray-500 text-base font-semibold">English</p>
            </div>
          </div>
          <div className="w-full max-w-[170px]">
            <h3 className="text-gray-550 font-medium text-sm">Type</h3>
            <div className="pt-[6px]">
              <p className="text-gray-500 text-base font-semibold">Full time</p>
            </div>
          </div>
          <div className="w-full max-w-[170px]">
            <h3 className="text-gray-550 font-medium text-sm">
              Years of Experience
            </h3>
            <div className="pt-[6px]">
              <p className="text-gray-500 text-base font-semibold">
                3+ Years of Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobHeader;
