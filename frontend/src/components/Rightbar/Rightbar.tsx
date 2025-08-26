import React from "react";
import myPic from "../../assets/my.jpeg"; // ✅ profile picture

const Rightbar = () => {
  const suggestedUsers = [
    { id: 1, name: "Jane Doe", username: "@jane", color: "bg-pink-500" },
    { id: 2, name: "Mike Ross", username: "@mike", color: "bg-blue-500" },
    { id: 3, name: "Sophia Lee", username: "@sophia", color: "bg-green-500" },
  ];

  const popularPosts = [
    "https://placekitten.com/200/150",
    "https://placebear.com/200/150",
    "https://picsum.photos/200/150?1",
  ];

  return (
    <div className="space-y-6">
      {/* ✅ Profile Section */}
      <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-4">
        <img
          src={myPic}
          alt="Profile"
          className="w-[3rem] h-[3rem] rounded-full object-cover border border-gray-200"
        />
        <div>
          <h2 className="font-semibold text-gray-800">Pulindu Thenura</h2>
          <p className="text-sm text-gray-500">@pulinduthenura</p>
        </div>
      </div>

      {/* ✅ Suggested for you Section */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h3 className="font-semibold text-gray-800 mb-3">Suggested for you</h3>
        <div className="space-y-3">
          {suggestedUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-[2.5rem] h-[2.5rem] rounded-full ${user.color} flex items-center justify-center text-white font-bold`}
                >
                  {user.name[0]}
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-800">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500">{user.username}</p>
                </div>
              </div>
              <button className="px-3 py-1 text-sm rounded-full bg-blue-500 text-white hover:bg-blue-600 transition">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Popular Posts Section */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h3 className="font-semibold text-gray-800 mb-3">Popular Posts</h3>
        <div className="grid grid-cols-2 gap-3">
          {popularPosts.map((post, idx) => (
            <img
              key={idx}
              src={post}
              alt={`Post ${idx}`}
              className="w-full h-[6rem] object-cover rounded-lg shadow-sm hover:shadow-md transition-transform transform hover:scale-105"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
