import { Home, Search, Bell, Flame, Menu, MessageCircle } from "lucide-react";

const Item = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <div className="flex items-center gap-[1rem] px-2 cursor-pointer hover:text-gray-700">
    <Icon className="w-6 h-6" />
    <span className="text-lg">{label}</span>
  </div>
);
export default function Sidebar() {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between py-8">
      {/* Top Logo */}
      <div className="px-6">
        <div className="italic font-serif text-4xl">Stage</div>
      </div>

      {/* Centered Nav with left-aligned items */}
      <div className="flex flex-col flex-grow justify-center">
        <nav className="flex flex-col items-start gap-[2rem] px-6">
          <Item icon={Home} label="Home" />
          <Item icon={Search} label="Search" />
          <Item icon={Bell} label="Notification" />
          <Item icon={Flame} label="Trending" />
          <Item icon={Menu} label="More" />
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="px-6">
        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-gray-300 shadow-[0_6px_0_rgba(0,0,0,0.1)] hover:shadow-[0_8px_0_rgba(0,0,0,0.12)] active:translate-y-[1px]">
          <MessageCircle className="w-5 h-5" />
          <span className="text-lg">Messages</span>
        </button>

        <div className="text-xs text-gray-500 mt-8 text-center">
          © 2025 Stage
        </div>
      </div>
    </div>
  );
}
