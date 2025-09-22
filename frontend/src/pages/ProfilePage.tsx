import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Sidebar from "../components/Sidebar/Sidebar";

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
  likes_count?: number;
  comments_count?: number;
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
        .select("id, caption, media_url, created_at") // later add likes_count, comments_count
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      if (postsError) {
        console.error("Posts fetch error:", postsError);
      } else {
        // Mock likes/comments for now
        const withExtras = (postsData || []).map((p) => ({
          ...p,
          likes_count: Math.floor(Math.random() * 100), // placeholder
          comments_count: Math.floor(Math.random() * 20), // placeholder
        }));
        setPosts(withExtras);
      }

      setLoading(false);
    };

    loadProfile();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!currentUser) return <div>No profile found</div>;

  return (
    <div style={{ display: "flex" }}>
      {/* ✅ Sidebar always present */}
      <Sidebar />

      {/* ✅ Main profile section */}
      <div style={{ flex: 1, maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
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
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              marginRight: "40px",
              border: "2px solid #e5e7eb",
            }}
          />
          <div>
            <h1 style={{ margin: "0 0 10px 0", fontSize: "26px" }}>
              {currentUser.username || currentUser.email}
            </h1>
            <p style={{ color: "#6b7280", margin: "0" }}>{currentUser.email}</p>
            <div style={{ marginTop: "15px", display: "flex", gap: "30px" }}>
              <span><strong>{posts.length}</strong> posts</span>
              <span><strong>0</strong> followers</span>
              <span><strong>0</strong> following</span>
            </div>
          </div>
        </div>

        {/* ✅ Posts Grid with hover overlay */}
        <div>
          {posts.length === 0 ? (
            <p>No posts yet</p>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "5px",
              }}
            >
              {posts.map((post) => (
                <div
                  key={post.id}
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "1 / 1",
                    backgroundColor: "#f3f4f6",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                >
                  {post.media_url ? (
                    <img
                      src={post.media_url}
                      alt={post.caption}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
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

                  {/* Overlay on hover */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(0,0,0,0.4)",
                      color: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      opacity: 0,
                      backdropFilter: "blur(2px)",
                      transition: "opacity 0.3s ease",
                    }}
                    className="post-overlay"
                  >
                    <p style={{ margin: "0 0 10px 0", fontWeight: "bold" }}>
                      {post.caption || "Untitled"}
                    </p>
                    <div style={{ display: "flex", gap: "15px", fontSize: "14px" }}>
                      <span>❤️ {post.likes_count}</span>
                      <span>💬 {post.comments_count}</span>
                    </div>
                  </div>

                  <style>
                    {`
                      .post-overlay:hover {
                        opacity: 1 !important;
                      }
                      div:hover > .post-overlay {
                        opacity: 1 !important;
                      }
                    `}
                  </style>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
