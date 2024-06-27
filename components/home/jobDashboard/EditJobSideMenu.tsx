import React from "react";
import Image from "next/image";
import { LuPencil } from "react-icons/lu";
import { menuList } from "@/constants/index";

const EditJobSideMenu: React.FC = () => {
  return (
    <div className="col-span-1 border-l border-gray-neutral bg-white_lite pt-9 px-4">
      <div className="bg-white w-full flex flex-col gap-y-6">
        <div className="flex gap-4 flex-col sm:flex-row">
          <button
            className="flex items-center text-primary w-full justify-center py-3 rounded-lg
          border border-primary gap-x-2.5
          "
          >
            <Image
              src="/assets/icons/bin.svg"
              width={20}
              height={20}
              alt="delete"
            />
            <span>Delete Job</span>
          </button>
          <button
            className="flex items-center text-white w-full bg-primary 
          border-2 border-orange-100 justify-center py-3 rounded-lg gap-x-2.5"
          >
            <LuPencil className="w-4 h-4 text-white" />
            <span>Edit Job</span>
          </button>
        </div>

        <div className="p-3">
          {menuList.map((item, index) => (
            <div
              className="border-b pb-4 border-gray-neutral last:border-0 last:pb-0 cursor-pointer
            "
              key={`${item.id}-${index}`}
            >
              <div className="flex justify-between">
                <div className="text-gray-700 flex items-center gap-x-2.5 p-2.5">
                  {item?.icon}
                  <h4 className=" font-medium text-base">{item?.title}</h4>
                </div>
                <div className="px-2.5 py-1.5">
                  <span className="font-semibold text-gray-500 text-xl">
                    {item?.count}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditJobSideMenu;
