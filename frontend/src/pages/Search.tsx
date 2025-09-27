import Sidebar from "../components/Sidebar/Sidebar";

export default function SearchPage() {
  return (
    <div className="flex bg-gray-50 h-screen overflow-hidden">
      {/* Left Sidebar (same style as HomePage) */}
      <aside
        className="bg-white h-screen sticky top-0"
        style={{
          width: "18rem",
          marginLeft: "2rem",
        }}
      >
        <Sidebar />
      </aside>

      {/* Main Search Area */}
      <main
        className="flex-1 flex items-center justify-center h-screen bg-gray-50"
        style={{
          marginLeft: "2rem",
          marginRight: "2rem",
        }}
      >
        {/* Search bar (compact like ChatGPT’s) */}
        <div className="w-[300px]">
          <input
            type="text"
            placeholder="Search Stage..."
            className="w-full rounded-lg px-4 py-2 text-base shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-500
                       bg-white border border-gray-200"
          />
        </div>
      </main>
    </div>
  );
}
