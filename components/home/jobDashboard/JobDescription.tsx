import React from "react";
import { jobData } from "@/constants/index";

const JobDescription: React.FC = () => {
  return (
    <div className="py-8 px-5 sm:px-10 lg:pl-20">
      <p className="text-gray-550 font-medium text-sm">About the job</p>
      <div className="pt-2 flex flex-col gap-y-1">
        {jobData?.map((item, index) => (
          <div className="text-gray-500 text-base font-medium">
            {item?.title !== "About" && (
              <>
                <span className="">{item?.title}</span>
                {item?.subTitle && <span className="">: {item?.subTitle}</span>}
              </>
            )}
            <>
              {item?.list?.map((listItem, index) => (
                <div className="flex items-center">
                  {item.numberedList ? (
                    <>
                      <span className="pr-1">{index + 1}.</span>
                      <p className="">{listItem?.description}</p>
                    </>
                  ) : (
                    <>
                      <span className="bg-gray-500 w-1 h-1 rounded-full inline-block ml-2 mr-1" />
                      <p className="">{listItem?.description}</p>
                    </>
                  )}
                </div>
              ))}
            </>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDescription;
