import Sidebar from "../components/Sidebar/Sidebar";
import Feed from "../components/Feed/Feed";
import Rightbar from "../components/Rightbar/Rightbar";

const HomePage = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Left Sidebar */}
      <aside className="w-[18%] bg-white">
        <Sidebar />
      </aside>

      {/* Feed */}
      <main className="flex-1 flex justify-center bg-gray-50">
        <div className="w-[600px] max-w-full">
          <Feed />
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-[25%] border-l border-gray-200 bg-white p-4 hidden lg:block">
        <Rightbar />
      </aside>
    </div>
  );
};

export default HomePage;
