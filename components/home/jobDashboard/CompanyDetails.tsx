import React from "react";
import Image from "next/image";

const DetailsCard: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <div className="w-full flex flex-col gap-y-2">
      <h4 className="text-gray-550 font-medium text-sm">{title}</h4>
      <p className="text-gray-500 text-base font-medium">{description}</p>
    </div>
  );
};

const CompanyDetails: React.FC = () => {
  return (
    <div className="pt-8 pb-8 w-full border-t border-gray-neutral px-5 sm:px-10 lg:pl-20">
      <div className="flex flex-col gap-y-4 w-full">
        <div className="flex items-center gap-x-3">
          <Image
            src="/assets/images/atlassian-logo.svg"
            width={40}
            height={40}
            alt="atlassian"
          />
          <h3 className="text-gray-700 font-medium text-xl">Atlassian</h3>
        </div>
    
        <div className="flex w-full gap-x-12 max-w-3xl">
          <div className="w-full flex flex-col gap-y-6">
            <DetailsCard title="Company Name" description="1k - 2k Employees" />
            <DetailsCard
              title="Sector"
              description="Information Technology, Infrastructure"
            />
            <DetailsCard title="Founded In" description="2019" />
          </div>
          <div className="w-full flex flex-col gap-y-6">
            <DetailsCard title="Type" description="Private" />
            <DetailsCard title="Funding" description="Bootstrapped" />
            <DetailsCard
              title="Founded By"
              description="Scott Farquhar, Mike Cannon-Brookes"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
