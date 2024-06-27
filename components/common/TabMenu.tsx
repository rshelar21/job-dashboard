import React from "react";

const TabMenu: React.FC = () => {
  return (
    <div className="px-5 sm:px-10 lg:px-0">
      <div
        className="w-full flex items-center text-xl font-medium border border-gray-neutral
     text-gray-350  lg:pl-[85px] gap-x-[50px] overflow-x-scroll whitespace-nowrap "
      >
        <div className="relative">
          <p className=" text-primary py-4 cursor-pointer">Job preview</p>
          <span className="absolute bottom-0 bg-primary h-[2px] w-[65px] left-5"></span>
        </div>
        <p className="py-4 cursor-pointer">Applicants</p>
        <p className="py-4 cursor-pointer">Match</p>
        <p className="py-4 cursor-pointer">Messages</p>
      </div>
    </div>
  );
};

export default TabMenu;
