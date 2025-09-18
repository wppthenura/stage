// src/pages/ProfilePage.tsx
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { Home, Search, Bell, Flame, Menu } from "lucide-react";

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ fetch profile
  const getProfile = async () => {
    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession();

    if (sessionError) {
      console.error("Session error:", sessionError.message);
      setLoading(false);
      return;
    }
    if (!session) {
      console.warn("No active session");
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", session.user.id) // 👈 check column name in your `profiles` table
      .single();

    if (error) {
      console.error("Profile fetch error:", error.message);
      setLoading(false);
      return;
    }

    setProfile(data);
    getPosts(session.user.id); // ✅ fetch posts after profile loads
  };

  // ✅ fetch posts with public URLs
  const getPosts = async (userId: string) => {
    const { data, error } = await supabase
      .from("posts")
      .select("id, media_url, caption")
      .eq("user_id", userId) // 👈 make sure `posts.user_id` matches
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Posts fetch error:", error.message);
      setLoading(false);
      return;
    }

    const enriched =
      data?.map((post) => {
        if (!post.media_url) return post;
        const { data: urlData } = supabase.storage
          .from("post-media") // 👈 your bucket name
          .getPublicUrl(post.media_url);
        return { ...post, media_url: urlData.publicUrl };
      }) || [];

    setPosts(enriched);
    setLoading(false);
  };

  useEffect(() => {
    getProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-500">
        Loading profile...
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-500">
        No profile found.
      </div>
    );
  }

  return (
    <div className="flex w-full min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 p-6 border-r bg-white flex flex-col justify-between">
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl font-bold tracking-wide">STAGE</h1>
          <nav className="flex flex-col gap-6 text-lg">
            <a className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
              <Home size={22} /> home
            </a>
            <a className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
              <Search size={22} /> search
            </a>
            <a className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
              <Bell size={22} /> explore
            </a>
            <a className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
              <Flame size={22} /> reels
            </a>
            <a className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
              <Menu size={22} /> messages
            </a>
          </nav>
        </div>
        <p className="text-sm text-gray-400">© 2025 Stage</p>
      </aside>

      {/* Main Profile Content */}
      <main className="flex-1 flex flex-col items-center py-8">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center w-full max-w-4xl">
          <div className="w-32 h-32 rounded-full overflow-hidden border">
            {profile?.avatar_url ? (
              <img
                src={profile.avatar_url}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>
          <div className="flex items-center gap-4 mt-4">
            <h2 className="text-xl font-semibold">{profile?.username}</h2>
            <button className="px-4 py-1 text-sm bg-gray-100 border rounded hover:bg-gray-200">
              Edit Profile
            </button>
            <button className="px-4 py-1 text-sm bg-gray-100 border rounded hover:bg-gray-200">
              View archive
            </button>
            <button className="px-2 py-1 text-sm">⋮</button>
          </div>
          <p className="mt-2 text-gray-600 text-sm max-w-xl">
            {profile?.bio ||
              "I am the developer of this Software “Stage”. I am a Software engineering Undergraduate at the University of NSBM."}
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-3 gap-4 mt-8 w-full max-w-4xl">
          {posts.length === 0 ? (
            <p className="text-gray-500 text-sm col-span-3 text-center">
              No posts yet.
            </p>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                className="aspect-square bg-gray-200 rounded-lg overflow-hidden"
              >
                {post.media_url ? (
                  post.media_url.match(/\.(mp4|webm|ogg)$/i) ? (
                    <video
                      src={post.media_url}
                      className="w-full h-full object-cover"
                      muted
                      loop
                    />
                  ) : (
                    <img
                      src={post.media_url}
                      alt="post"
                      className="w-full h-full object-cover"
                    />
                  )
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    No media
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
