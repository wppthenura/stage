// /src/pages/ProfilePage.tsx
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { supabase } from "../lib/supabaseClient";

interface Post {
  id: string;
  caption: string;
  media_url: string;
  created_at: string;
}

export default function ProfilePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUserAndPosts = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;
      setUser(user);

      // Fetch posts by this user
      const { data, error } = await supabase
        .from("posts")
        .select("id, caption, media_url, created_at")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching posts:", error.message);
      } else {
        setPosts(data || []);
      }
    };

    getUserAndPosts();
  }, []);

  return (
    <div className="flex bg-gray-50 h-screen overflow-hidden">
      {/* Sidebar (same as HomePage) */}
      <aside
        className="bg-white h-screen sticky top-0"
        style={{ width: "18rem", marginLeft: "2rem" }}
      >
        <Sidebar />
      </aside>

      {/* Profile Main Section */}
      <main
        className="bg-gray-50 flex-1 flex justify-center h-screen overflow-y-auto"
        style={{
          marginLeft: "2rem",
          marginRight: "2rem",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="w-full max-w-[1050px] flex flex-col items-center py-8">
          {/* Profile Header */}
          <div className="w-full flex items-center gap-10 border-b border-gray-200 pb-8">
            {/* Avatar */}
            <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-200">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* User Info */}
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold font-poppins">
                {user?.user_metadata?.username || "My Profile"}
              </h1>
              <p className="text-gray-600 font-poppins">
                {user?.email || "No bio available"}
              </p>

              <div className="flex gap-6 text-gray-700 font-poppins">
                <span>
                  <strong>{posts.length}</strong> Posts
                </span>
                <span>
                  <strong>180</strong> Followers
                </span>
                <span>
                  <strong>200</strong> Following
                </span>
              </div>

              <button
                className="bg-gray-900 text-white px-6 py-2 rounded-lg shadow 
                           hover:bg-gray-800 transition"
              >
                Edit Profile
              </button>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="w-full grid grid-cols-3 gap-6 mt-8">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div
                  key={post.id}
                  className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden cursor-pointer 
                             hover:opacity-90 transition"
                >
                  <img
                    src={post.media_url}
                    alt={post.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))
            ) : (
              <div className="text-gray-500 font-poppins mt-10">
                No posts yet
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
