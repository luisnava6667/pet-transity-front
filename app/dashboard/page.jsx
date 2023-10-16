import CardGrandeDashboard from "../components/CardGrandeDashboard";
import CardUsuarioDashboard from "../components/CardUsuarioDashboard";
import InformacionCasaDashboard from "../components/InformacionCasaDashboard";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

const Page = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full bg-[#CCC4BB]">
        <TopBar />
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex w-[65.4rem] gap-4 ">
            <CardUsuarioDashboard />
            <InformacionCasaDashboard />
          </div>
          <CardGrandeDashboard />
        </div>
      </div>
    </div>
  );
};

export default Page;
