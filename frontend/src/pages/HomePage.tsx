import Sidebar from "../components/Sidebar/Sidebar";
import Feed from "../components/Feed/Feed";
import Rightbar from "../components/Rightbar/Rightbar";

const HomePage = () => {
  return (
    <div className="flex bg-gray-50 h-screen overflow-hidden">
      {/* Left Sidebar */}
      <aside
        className="bg-white h-screen sticky top-0"
        style={{
          width: "18rem",
          marginLeft: "2rem",
        }}
      >
        <Sidebar />
      </aside>

      {/* Feed */}
      <main
        className="bg-gray-50 flex-1 flex justify-center h-screen overflow-y-auto"
        style={{
          marginLeft: "2rem",
          marginRight: "2rem",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE 10+
        }}
      >
        {/* Center column to constrain Feed width */}
        <div className="w-full max-w-[1050px] flex flex-col items-center">
          <Feed />
        </div>
      </main>

      {/* Right Sidebar */}
      <aside
        className="bg-white p-4 h-screen sticky top-0"
        style={{
          width: "20rem",
          marginLeft: "2rem",
          marginRight: "2rem",
        }}
      >
        <Rightbar />
      </aside>
    </div>
  );
};

export default HomePage;


