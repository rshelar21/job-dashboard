import React from "react";
import EditJobSideMenu from "./EditJobSideMenu";
import JobHeader from "./JobHeader";
import JobDescription from "./JobDescription";
import CompanyDetails from "./CompanyDetails";

const JobDashboard: React.FC = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0px,_3fr)_minmax(0px,_360px)] ">
        <div className="col-span-1">
          <JobHeader />
          <JobDescription />
          <CompanyDetails />
        </div>
        <EditJobSideMenu />
      </div>
    </div>
  );
};

export default JobDashboard;
