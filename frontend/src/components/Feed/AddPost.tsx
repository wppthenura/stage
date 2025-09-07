// src/components/Feed/AddPost.tsx
import { Plus } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

interface AddPostProps {
  onPostAdded?: () => void;
  width?: string;
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
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // create & cleanup local preview URL
    if (!file) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    setFile(f);
  };

  const handleSubmit = async () => {
    if (!caption.trim() && !file) {
      alert("Please add a caption or choose a media file.");
      return;
    }
    setLoading(true);

    // get session
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      alert("You must be logged in to post.");
      setLoading(false);
      return;
    }
    const userId = session.user.id;

    let publicUrl: string | null = null;

    try {
      if (file) {
        const fileExt = file.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;
        // path inside bucket
        const filePath = `${userId}/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("post-media")
          .upload(filePath, file, { cacheControl: "3600", upsert: false });

        if (uploadError) {
          console.error("Upload error:", uploadError);
          alert("File upload failed. See console for details.");
          setLoading(false);
          return;
        }

        // get public url (bucket must be public)
        const { data: publicData } = supabase.storage
          .from("post-media")
          .getPublicUrl(filePath);

        publicUrl = publicData?.publicUrl ?? null;
      }

      // Insert post row (store the publicUrl in media_url)
      const insertPayload: any = {
        caption: caption || null,
        likes: 0,
        user_id: userId,
        media_url: publicUrl,
      };

      const { error: insertError } = await supabase
        .from("posts")
        .insert([insertPayload]);

      if (insertError) {
        console.error("Insert error:", insertError);
        alert("Could not create post. See console for details.");
        setLoading(false);
        return;
      }

      // success: clear & notify parent
      setCaption("");
      setFile(null);
      setOpenForm(false);
      onPostAdded?.();
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred. See console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: "100%", marginBottom: "20px" }}>
      {/* Styled button (your original appearance) */}
      <button
        style={{
          width,
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
        onClick={() => setOpenForm((s) => !s)}
      >
        <span>{label}</span>
        <Plus style={{ width: iconSize, height: iconSize }} />
      </button>

      {/* Inline form */}
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
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <textarea
            placeholder="Write a caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            style={{
              width: "100%",
              minHeight: "80px",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              padding: "8px",
              fontSize: "14px",
              resize: "vertical",
            }}
          />

          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
              style={{ display: "inline-block" }}
            />

            <div style={{ display: "flex", gap: "8px", alignItems: "center", marginLeft: "auto" }}>
              <button
                onClick={() => {
                  setCaption("");
                  setFile(null);
                  fileInputRef.current && (fileInputRef.current.value = "");
                }}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#6b7280",
                  padding: "8px",
                }}
              >
                Cancel
              </button>

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
          </div>

          {/* preview */}
          {previewUrl && (
            <div style={{ marginTop: "6px", maxHeight: "320px", overflow: "hidden", borderRadius: "8px" }}>
              {/\.(mp4|webm|ogg)$/i.test(file?.name || "") ? (
                <video src={previewUrl} controls style={{ width: "100%", maxHeight: "320px", objectFit: "cover" }} />
              ) : (
                <img src={previewUrl} alt="preview" style={{ width: "100%", maxHeight: "320px", objectFit: "cover" }} />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
