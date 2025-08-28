import React from "react";
import myPic from "../../assets/my.jpeg";
import { UserPlus } from "lucide-react";

const Rightbar = () => {
  const suggestedUsers = [
    { id: 1, name: "Person 1", color: "bg-yellow-500", reason: "Because this account follows them" },
    { id: 2, name: "Person 2", color: "bg-blue-500", reason: "Suggested for you" },
    { id: 3, name: "Person 3", color: "bg-green-600", reason: "Viewed your profile" },
    { id: 4, name: "Person 4", color: "bg-lime-400", reason: "Liked your posts" },
    { id: 5, name: "Person 5", color: "bg-purple-600", reason: "Actively posting" },
  ];

  const popularPosts = [
    "https://picsum.photos/200/200?5",
    "https://placebear.com/200/200",
    "https://picsum.photos/200/200?1",
    "https://picsum.photos/200/200?2",
    "https://picsum.photos/200/200?3",
    "https://picsum.photos/200/200?4",
  ];

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%", // take full height of sidebar
      }}
    >
      {/* ✅ Top content (profile + suggestions) */}
      <div>
        {/* Profile */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "30px", // increased for more spacing
          }}
        >
          <img
            src={myPic}
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
              Pulindu Thenura
            </h2>
            <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>
              pulindu.thenura
            </p>
          </div>
        </div>

        {/* Suggested for you */}
        <div style={{ marginBottom: "20px", marginTop: "10px" /* push it down slightly */ }}>
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
                  {/* Circular frame like Post.tsx */}
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
                    <div
                      className={`${user.color}`}
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                      }}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontWeight: 500, fontSize: "14px", color: "#1f2937" }}>
                      {user.name}
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#6b7280",
                        lineHeight: "1.2",
                      }}
                    >
                      {user.reason}
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
      </div>

      <div style={{ flexGrow: 0.03 }} />

      {/* ✅ Popular posts (sticks to bottom) */}
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
