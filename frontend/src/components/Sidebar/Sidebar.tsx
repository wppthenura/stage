import { Home, Search, Bell, Flame, Menu, MessageCircle } from "lucide-react";

const Item = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <div className="flex items-center gap-[1rem] cursor-pointer hover:text-gray-700">
    <Icon className="w-6 h-6" />
    <span className="text-lg font-inter">{label}</span>
  </div>
);

export default function Sidebar() {
  return (
    <div className="h-screen w-[250px] relative bg-white">
      {/* Top Logo */}
      <div
        className="absolute"
        style={{
          top: '2.5rem', // adjust vertical
          left: '3.5rem', // adjust horizontal
        }}
      >
        <div className="font-[Carattere] text-[3rem] italic">Stage</div>
      </div>

      {/* Nav Section */}
      <div
        className="absolute"
        style={{
          top: '10rem', // adjust vertical
          left: '3rem', // adjust horizontal
        }}
      >
        <nav className="flex flex-col items-start gap-[2rem] text-[2rem]">
          <Item icon={Home} label="Home" />
          <Item icon={Search} label="Search" />
          <Item icon={Bell} label="Notification" />
          <Item icon={Flame} label="Trending" />
          <Item icon={Menu} label="More" />
        </nav>
      </div>

      {/* Messages Button */}
<div
  className="absolute"
  style={{
    top: '45rem',       // vertical position — change to move up/down
    left: '4rem',       // horizontal position — change to move left/right
    width: '15rem',     // button width — adjust as needed
  }}
>
  <button
    className="flex items-center justify-center gap-2 py-5 rounded-full border border-gray-300 shadow-[0_6px_0_rgba(0,0,0,0.1)] hover:shadow-[0_8px_0_rgba(0,0,0,0.12)] transition-all duration-200"
    style={{
      padding: '1rem',   // adjust vertical size (py)
      fontSize: '1.25rem',  // adjust text size
    }}
  >
    <MessageCircle
      className="w-10 h-10"
      style={{
        width: '2.5rem',    // icon width
        height: '1.5rem',   // icon height
      }}
    />
    <span
      className="font-inter"
      style={{
        fontSize: '1.5rem',  // text size
      }}
    >
      Messages
    </span>
  </button>
</div>


      {/* Footer */}
      <div
        className="absolute text-xs text-gray-500"
        style={{
          bottom: '1rem', // adjust vertical
          left: '1rem', // adjust horizontal
        }}
      >
        © 2025 Stage
      </div>
    </div>
  );
}
