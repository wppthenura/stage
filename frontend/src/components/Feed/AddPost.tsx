import { Plus } from "lucide-react";
import React, { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

interface AddPostProps {
  onPostAdded?: () => void; // callback to refresh Feed
  width?: string;
  height?: string;
  paddingX?: string;
  paddingY?: string;
  borderRadius?: string;
  shadow?: string;
  border?: string;
  bgColor?: string;
  textColor?: string;
  fontSize?: string;
  fontWeight?: number;
  hoverShadow?: string;
  hoverScale?: number;
  activeScale?: number;
  transitionDuration?: string;
  gap?: string;
  iconSize?: string;
  label?: string;
  marginLeft?: string;
}

export default function AddPost({
  onPostAdded,
  width = "1050px",
  height,
  paddingX = "16px",
  paddingY = "12px",
  borderRadius = "10px",
  shadow = "0 4px 6px rgba(0,0,0,0.1)",
  border = "1px solid #e5e7eb",
  bgColor = "#fff",
  textColor = "#6b7280",
  fontSize = "16px",
  fontWeight = 500,
  hoverShadow = "0 6px 8px rgba(0,0,0,0.15)",
  hoverScale = 1.01,
  activeScale = 0.98,
  transitionDuration = "0.2s",
  gap = "8px",
  iconSize = "16px",
  label = "Add New Post",
  marginLeft = "0px",
}: AddPostProps) {
  const [openForm, setOpenForm] = useState(false);
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!caption.trim()) return;

    setLoading(true);
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      alert("You must be logged in to post");
      setLoading(false);
      return;
    }

    const userId = session.user.id;

    const { error } = await supabase.from("posts").insert([
      {
        caption,
        likes: 0,
        user_id: userId,
      },
    ]);

    if (error) {
      console.error("Error adding post:", error);
    } else {
      setCaption("");
      setOpenForm(false);
      onPostAdded?.(); // tell Feed to refresh posts
    }
    setLoading(false);
  };

  return (
    <div style={{ width: "100%", marginBottom: "20px" }}>
      {/* Your existing styled button */}
      <button
        style={{
          width,
          height,
          padding: `${paddingY} ${paddingX}`,
          borderRadius,
          boxShadow: shadow,
          border,
          backgroundColor: bgColor,
          color: textColor,
          fontSize,
          fontWeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap,
          cursor: "pointer",
          transition: `all ${transitionDuration} ease-in-out`,
          marginLeft,
        }}
        onMouseEnter={(e) => {
          const target = e.currentTarget as HTMLButtonElement;
          target.style.transform = `scale(${hoverScale})`;
          target.style.boxShadow = hoverShadow;
        }}
        onMouseLeave={(e) => {
          const target = e.currentTarget as HTMLButtonElement;
          target.style.transform = "scale(1)";
          target.style.boxShadow = shadow;
        }}
        onMouseDown={(e) => {
          const target = e.currentTarget as HTMLButtonElement;
          target.style.transform = `scale(${activeScale})`;
        }}
        onMouseUp={(e) => {
          const target = e.currentTarget as HTMLButtonElement;
          target.style.transform = `scale(${hoverScale})`;
        }}
        onClick={() => setOpenForm(!openForm)}
      >
        <span>{label}</span>
        <Plus style={{ width: iconSize, height: iconSize }} />
      </button>

      {/* Post form (shown only when button clicked) */}
      {openForm && (
        <div
          style={{
            marginTop: "12px",
            padding: "12px",
            border: "1px solid #e5e7eb",
            borderRadius: "10px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            display: "flex",
            gap: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Write a caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            style={{
              flex: 1,
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              padding: "8px",
              fontSize: "14px",
            }}
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              backgroundColor: "#254CAF",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "8px 16px",
              cursor: "pointer",
            }}
          >
            {loading ? "Posting..." : "Post"}
          </button>
        </div>
      )}
    </div>
  );
}
