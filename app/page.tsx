import Navbar from "@/components/common/Navbar";
import TabMenu from "@/components/common/TabMenu";
import JobDashboard from "@/components/home/jobDashboard/JobDashboard"

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <TabMenu />
      <JobDashboard />
    </div>
  );
}
