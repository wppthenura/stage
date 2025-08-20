const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-3 border-b bg-white sticky top-0 z-10">
      {/* Logo */}
      <h1 className="text-2xl font-bold">Stage</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search"
        className="hidden sm:block bg-gray-100 text-sm rounded-md px-3 py-1 outline-none"
      />

      {/* Icons */}
      <div className="flex space-x-4">
        <span>🏠</span>
        <span>💬</span>
        <span>➕</span>
        <span>❤️</span>
        <span>👤</span>
      </div>
    </header>
  );
};

export default Header;
