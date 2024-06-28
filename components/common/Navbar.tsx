"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiMessageSquare } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import { PiBellSimpleLight } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Navbar: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  return (
    <>
      <div className="w-full sticky top-0 z-40 bg-white px-5 sm:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-primary bg-gray-neutral px-6 flex justify-center items-center h-[60px]">
            Logo
          </div>

          <div className=" w-full flex justify-center">
            <div
              className="hidden md:flex gap-x-[68px] justify-between items-center
   rounded-[36px] overflow-hidden p-2 pr-6 font-medium text-xl  border border-gray-100"
            >
              <div
                className="bg-primary border-orange-light border-2 rounded-full px-3 py-3 font-medium text-xl cursor-pointer
            flex gap-2 justify-center items-center text-white 
            "
              >
                <FiBriefcase className="w-5 h-5" />
                <div className="text-xl">Jobs</div>
              </div>
              <div className=" flex gap-2 justify-center items-center cursor-pointer relative -ml-1">
                <FiMessageSquare className="w-6 h-6 text-gray-200 " />
                <span className=" text-gray-200 text-xl">Messages</span>
                <div className="rounded-full bg-primary absolute w-1.5 h-1.5 left-[1rem] top-0.5 z-10" />
              </div>
              <div className="flex gap-2 justify-center items-center cursor-pointer -ml-1">
                <Image
                  src="/assets/icons/coins-hand.svg"
                  width={24}
                  height={24}
                  alt="coins-hand"
                />
                <span className=" text-gray-200 text-xl">Payments</span>
              </div>
            </div>
          </div>

          <div className="flex gap-x-2 items-center">
            <div className="relative">
              <div className="rounded-full bg-primary absolute w-1.5 h-1.5 right-1.5 z-10" />
              <PiBellSimpleLight className="text-black w-8 h-7" />
            </div>
            <div>
              <Image
                src="/assets/images/atlassian-logo.svg"
                width={40}
                height={40}
                alt="atlassian"
                className="rounded-full"
              />
            </div>
            <MdKeyboardArrowDown className="text-black w-6 h-6" />

            <div
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              className="md:hidden cursor-pointer"
            >
              <RiMenu2Fill className="text-black w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {isOpenMenu && (
        <div
          className="bg-white w-full h-full inset-0 absolute
      z-50 bg-opacity-60 backdrop-filter backdrop-blur-[2px]
      p-4 flex items-center justify-center
      "
        >
          <div
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <RxCross2 className="w-5 h-5" />
          </div>

          <div className="flex flex-col gap-4 text-primary font-semibold text-base text-center">
            <p className="underline decoration-primary underline-offset-2">
              Jobs
            </p>
            <p className="underline decoration-primary underline-offset-2">
              Messages
            </p>
            <p className="underline decoration-primary underline-offset-2">
              Payments
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
