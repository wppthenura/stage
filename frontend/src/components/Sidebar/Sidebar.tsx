import { Home, Search, Bell, Flame, Menu, MessageCircle } from "lucide-react";
const Item = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <div className="flex items-center gap-[1rem] cursor-pointer hover:text-gray-700">
    <Icon className="w-6 h-6" />
    <span className="text-lg font-poppins">{label}</span>
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
        <nav className="flex flex-col items-start gap-[2rem] text-[1.7rem]">
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
    top: '35rem',       // vertical position
    left: '2rem',       // horizontal position
    width: '18rem',     // same width
  }}
>
  <button
    className="flex items-center justify-center gap-5 py-5 rounded-full 
               bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] 
               hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)] 
               transform hover:scale-105 
               transition-all duration-200 ease-out 
               cursor-pointer"
    style={{
      padding: '1rem 3rem',   // same padding
      fontSize: '1.25rem',    // same font size
      border: 'none',         // no outline
    }}
  >
    <span
      className="font-poppins text-gray-800"
      style={{
        fontSize: '1.5rem',
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
