import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { UserPlus } from "lucide-react";

interface Profile {
  id: string;
  username: string | null;
  avatar_url: string | null;
  email: string | null;
}

interface Post {
  id: string;
  caption: string;
}

const Rightbar = () => {
  const [currentUser, setCurrentUser] = useState<Profile | null>(null);
  const [suggestedUsers, setSuggestedUsers] = useState<Profile[]>([]);
  const [popularPosts, setPopularPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // ✅ Get active session
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const userId = session.user.id;

      // ✅ Fetch current user profile
      const { data: profile } = await supabase
        .from("profiles")
        .select("id, username, avatar_url")
        .eq("id", userId)
        .single();

      setCurrentUser({
        id: userId,
        username: profile?.username || null,
        avatar_url: profile?.avatar_url || null,
        email: session.user.email ?? null,
      });

      // ✅ Fetch suggested users
      const { data: users } = await supabase
        .from("profiles")
        .select("id, username, avatar_url")
        .neq("id", userId)
        .limit(5);

      if (users) {
        const enriched = users.map((u) => ({
          ...u,
          email: null, // not needed for suggested users
        }));
        setSuggestedUsers(enriched);
      }

      // ✅ Fetch popular posts
      const { data: posts } = await supabase
        .from("posts")
        .select("id, caption")
        .order("likes", { ascending: false })
        .limit(6);

      if (posts) setPopularPosts(posts);
    };

    fetchData();
  }, []);

  const cardStyle: React.CSSProperties = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    border: "1px solid #e5e7eb",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    marginTop: "20px",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* ✅ Top: current user's profile */}
      {currentUser && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <img
            src={currentUser.avatar_url || "https://via.placeholder.com/80"}
            alt="Profile"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              marginBottom: "10px",
            }}
          />
          <div style={{ lineHeight: "1" }}>
            <h2 style={{ fontWeight: 600, color: "#1f2937", margin: 0 }}>
              {currentUser.username || currentUser.email}
            </h2>
            <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>
              {currentUser.email}
            </p>
          </div>
        </div>
      )}

      {/* ✅ Suggested users */}
      <div style={{ marginBottom: "20px", marginTop: "10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
          }}
        >
          <h3 style={{ fontWeight: 600, fontSize: "14px", color: "#1f2937" }}>
            Suggested for you
          </h3>
          <button
            style={{
              fontSize: "12px",
              color: "#6b7280",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            See all
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {suggestedUsers.map((user) => (
            <div
              key={user.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "2px 0",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {/* Avatar bubble */}
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={user.avatar_url || "https://via.placeholder.com/30"}
                    alt={user.username || "user"}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontWeight: 500, fontSize: "14px", color: "#1f2937" }}>
                    {user.username || "Anonymous"}
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#6b7280",
                      lineHeight: "1.2",
                    }}
                  >
                    Suggested for you
                  </span>
                </div>
              </div>

              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#254CAF",
                }}
              >
                <UserPlus style={{ width: "16px", height: "16px" }} />
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>

      <div style={{ flexGrow: 0.03 }} />

      {/* ✅ Popular posts */}
      <div style={{ marginTop: "auto", marginBottom: "20px", ...cardStyle }}>
        <h3
          style={{
            fontWeight: 600,
            fontSize: "14px",
            color: "#1f2937",
            marginBottom: "12px",
          }}
        >
          Popular posts
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
          }}
        >
          {popularPosts.map((post) => (
            <div
              key={post.id}
              style={{
                width: "100%",
                height: "96px",
                backgroundColor: "#f3f4f6",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                color: "#6b7280",
              }}
            >
              {post.caption || "No caption"}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
