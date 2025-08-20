const Suggestions = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Suggested for you</h2>
      <div className="flex flex-col gap-3">
        {["emma", "jack", "maria"].map((user) => (
          <div key={user} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src="https://via.placeholder.com/35"
                alt={user}
                className="w-9 h-9 rounded-full"
              />
              <span className="font-medium">{user}</span>
            </div>
            <button className="text-blue-500 text-sm font-semibold">Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
