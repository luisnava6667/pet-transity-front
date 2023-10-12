import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

const Page = () => {
  return (
    <div className="flex">
      <Sidebar />
      <TopBar />
    </div>
  );
};

export default Page;
