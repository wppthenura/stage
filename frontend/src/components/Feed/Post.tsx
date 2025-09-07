// src/components/Feed/Post.tsx
import { Ellipsis, Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import React from "react";

interface PostProps {
  username: string;
  likes: number;
  caption: string;
  media_url?: string | null;
  avatar_url?: string | null;
  width?: string;
  borderRadius?: string;
  shadow?: string;
  border?: string;
  bgColor?: string;
}

export default function Post({
  username,
  likes,
  caption,
  media_url = null,
  avatar_url = null,
  width = "1050px",
  borderRadius = "10px",
  shadow = "0 4px 6px rgba(0,0,0,0.1)",
  border = "1px solid #e5e7eb",
  bgColor = "#fff",
}: PostProps) {
  // helper to pick if media is video
  const isVideo = media_url ? /\.(mp4|webm|ogg)$/i.test(media_url) : false;

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
          >
            {avatar_url ? (
              <img src={avatar_url} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : null}
          </div>
          <span style={{ fontWeight: 500 }}>{username}</span>
        </div>
        <Ellipsis style={{ width: "20px", height: "20px", cursor: "pointer" }} />
      </div>

      {/* Media Frame */}
      <div
        style={{
          width: "100%",
          height: "640px",
          backgroundColor: "#f9fafb",
          borderTop: border,
          borderBottom: border,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {media_url ? (
          isVideo ? (
            <video src={media_url} controls style={{ maxWidth: "100%", maxHeight: "640px" }} />
          ) : (
            <img src={media_url} alt="post media" style={{ maxWidth: "100%", maxHeight: "640px", objectFit: "contain" }} />
          )
        ) : (
          <div style={{ color: "#9ca3af" }}>No media</div>
        )}
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
        <div style={{ fontWeight: 600 }}>{likes ?? 0} likes</div>
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
