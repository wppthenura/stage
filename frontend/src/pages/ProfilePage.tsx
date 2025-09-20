import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

interface Profile {
  id: string;
  username: string | null;
  avatar_url: string | null;
  email: string | null;
}

interface Post {
  id: string;
  caption: string;
  media_url: string | null;
  created_at: string;
}

const ProfilePage: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<Profile | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      setLoading(true);

      // ✅ 1. Get session
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setLoading(false);
        return;
      }

      const userId = session.user.id;

      // ✅ 2. Get profile
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("id, username, avatar_url")
        .eq("id", userId)
        .single();

      if (profileError) {
        console.error("Profile fetch error:", profileError);
      } else {
        setCurrentUser({
          id: userId,
          username: profile?.username || null,
          avatar_url: profile?.avatar_url || null,
          email: session.user.email ?? null,
        });
      }

      // ✅ 3. Get posts by this user
      const { data: postsData, error: postsError } = await supabase
        .from("posts")
        .select("id, caption, media_url, created_at")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      if (postsError) {
        console.error("Posts fetch error:", postsError);
      } else {
        setPosts(postsData || []);
      }

      setLoading(false);
    };

    loadProfile();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!currentUser) return <div>No profile found</div>;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      {/* ✅ Top Profile Info */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <img
          src={currentUser.avatar_url || "https://via.placeholder.com/100"}
          alt="Profile"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            marginRight: "20px",
            border: "2px solid #e5e7eb",
          }}
        />
        <div>
          <h1 style={{ margin: "0 0 5px 0", fontSize: "24px" }}>
            {currentUser.username || currentUser.email}
          </h1>
          <p style={{ color: "#6b7280", margin: "0" }}>
            {currentUser.email}
          </p>
          <div style={{ marginTop: "10px", display: "flex", gap: "20px" }}>
            <span><strong>{posts.length}</strong> posts</span>
            <span><strong>0</strong> followers</span>
            <span><strong>0</strong> following</span>
          </div>
        </div>
      </div>

      {/* ✅ User’s Posts */}
      <div>
        <h2 style={{ fontSize: "20px", marginBottom: "15px" }}>My Posts</h2>
        {posts.length === 0 ? (
          <p>No posts yet</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "15px",
            }}
          >
            {posts.map((post) => (
              <div
                key={post.id}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                }}
              >
                {post.media_url ? (
                  <img
                    src={post.media_url}
                    alt={post.caption}
                    style={{ width: "100%", height: "150px", objectFit: "cover" }}
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "150px",
                      backgroundColor: "#f3f4f6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#9ca3af",
                      fontSize: "14px",
                    }}
                  >
                    No image
                  </div>
                )}
                <div style={{ padding: "10px" }}>
                  <p style={{ margin: 0, fontSize: "14px" }}>{post.caption}</p>
                  <span style={{ fontSize: "12px", color: "#6b7280" }}>
                    {new Date(post.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
