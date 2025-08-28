import React from "react";
import myPic from "../../assets/my.jpeg";
import { UserPlus } from "lucide-react";

const Rightbar = () => {
  const suggestedUsers = [
    { id: 1, name: "Person 1", color: "bg-yellow-500" },
    { id: 2, name: "Person 2", color: "bg-blue-500" },
    { id: 3, name: "Person 3", color: "bg-green-600" },
    { id: 4, name: "Person 4", color: "bg-lime-400" },
    { id: 5, name: "Person 5", color: "bg-purple-600" },
  ];

  const popularPosts = [
    "https://placekitten.com/200/200",
    "https://placebear.com/200/200",
    "https://picsum.photos/200/200?1",
    "https://picsum.photos/200/200?2",
    "https://picsum.photos/200/200?3",
    "https://picsum.photos/200/200?4",
  ];

  // 🔑 Shared container style (same as Post.tsx)
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
    <div>
      {/* ✅ Profile Section (kept simpler) */}
      <div
        style={{
          ...cardStyle,
          flexDirection: "row",
          alignItems: "center",
          gap: "12px",
          marginTop: "0", // first card flush at top
        }}
      >
        <img
          src={myPic}
          alt="Profile"
          style={{
            width: "3rem",
            height: "3rem",
            borderRadius: "50%",
            objectFit: "cover",
            border: "1px solid #e5e7eb",
          }}
        />
        <div>
          <h2 style={{ fontWeight: 600, color: "#1f2937" }}>Pulindu Thenura</h2>
          <p style={{ fontSize: "14px", color: "#6b7280" }}>pulindu.thenura</p>
        </div>
      </div>

      {/* ✅ Suggested for you Section */}
      <div style={cardStyle}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "12px",
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
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {suggestedUsers.map((user) => (
            <div
              key={user.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "4px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  className={`w-[2rem] h-[2rem] rounded-full ${user.color}`}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                  }}
                />
                <p style={{ fontWeight: 500, fontSize: "14px", color: "#1f2937" }}>
                  {user.name}
                </p>
              </div>
              <button
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  padding: "4px",
                }}
              >
                <UserPlus style={{ width: "16px", height: "16px", color: "#4b5563" }} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Popular Posts Section */}
      <div style={cardStyle}>
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
          {popularPosts.map((post, idx) => (
            <img
              key={idx}
              src={post}
              alt={`Post ${idx}`}
              style={{
                width: "100%",
                height: "96px",
                objectFit: "cover",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget.style.transform = "scale(1.05)"),
                (e.currentTarget.style.boxShadow =
                  "0 4px 8px rgba(0,0,0,0.15)"))
              }
              onMouseLeave={(e) =>
                ((e.currentTarget.style.transform = "scale(1)"),
                (e.currentTarget.style.boxShadow =
                  "0 2px 4px rgba(0,0,0,0.05)"))
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
