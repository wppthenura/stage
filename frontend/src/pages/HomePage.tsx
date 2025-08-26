import Sidebar from "../components/Sidebar/Sidebar";
import Feed from "../components/Feed/Feed";
import Rightbar from "../components/Rightbar/Rightbar";

const HomePage = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Left Sidebar */}
      <aside
        className="bg-white"
        style={{
          width: "18rem",   // ⬅️ adjust sidebar width
          marginLeft: "2rem", // ⬅️ push it right
        }}
      >
        <Sidebar />
      </aside>

      {/* Feed */}
      <main
        className="bg-gray-50"
        style={{
          width: "38rem",     // ⬅️ feed width
          marginLeft: "20rem", // ⬅️ spacing from left sidebar
          marginRight: "4rem", // ⬅️ spacing from right sidebar
        }}
      >
        <Feed />
      </main>

      {/* Right Sidebar */}
      <aside
        className="bg-white p-4 lg:block"
        style={{
          width: "20rem",     // ⬅️ right sidebar width
          marginLeft: "15rem", // ⬅️ spacing from feed/
          marginRight: "0rem", // ⬅️ push inward from edge
        }}
      >
        <Rightbar />
      </aside>
    </div>
  );
};

export default HomePage;
