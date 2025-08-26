import { Ellipsis, Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import React from "react";

interface PostProps {
  username: string;
  likes: number;
  caption: string;
  width?: string;          // e.g., "1050px"
  borderRadius?: string;   // e.g., "10px"
  shadow?: string;         // e.g., "0 4px 6px rgba(0,0,0,0.1)"
  border?: string;         // e.g., "1px solid #e5e7eb"
  bgColor?: string;        // e.g., "#fff"
}

export default function Post({
  username,
  likes,
  caption,
  width = "1050px",
  borderRadius = "10px",
  shadow = "0 4px 6px rgba(0,0,0,0.1)",
  border = "1px solid #e5e7eb",
  bgColor = "#fff",
}: PostProps) {
  return (
    <div
      style={{
        width,
        backgroundColor: bgColor,
        borderRadius,
        boxShadow: shadow,
        border,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        marginTop: "20px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "#d1d5db",
              overflow: "hidden",
            }}
          />
          <span style={{ fontWeight: 500 }}>{username}</span>
        </div>
        <Ellipsis style={{ width: "20px", height: "20px", cursor: "pointer" }} />
      </div>

      {/* Media Frame (image/video container) */}
      <div
        style={{
          width: "100%",
          height: "640px",
          backgroundColor: "#f9fafb",
          borderTop: border,
          borderBottom: border,
        }}
      >
        {/* Replace this div with <img /> or <video /> later */}
      </div>

      {/* Actions */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
        }}
      >
        <div style={{ display: "flex", gap: "20px" }}>
          <Heart style={{ width: "28px", height: "28px", cursor: "pointer" }} />
          <MessageCircle style={{ width: "28px", height: "28px", cursor: "pointer" }} />
          <Send style={{ width: "28px", height: "28px", cursor: "pointer" }} />
        </div>
        <Bookmark style={{ width: "28px", height: "28px", cursor: "pointer" }} />
      </div>

      {/* Meta Section */}
      <div style={{ padding: "0 16px 20px 16px", fontSize: "14px" }}>
        <div style={{ fontWeight: 600 }}>{likes} likes</div>
        <div style={{ marginTop: "6px" }}>
          <span style={{ fontWeight: 600 }}>{username}</span>{" "}
          <span>{caption}</span>
        </div>
        <button
          style={{
            marginTop: "8px",
            color: "#6b7280",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          View all comments
        </button>
      </div>
    </div>
  );
}
