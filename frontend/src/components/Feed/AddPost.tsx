import { Plus } from "lucide-react";
import React from "react";

interface AddPostProps {
  width?: string;          // e.g., "300px" or "100%"
  height?: string;         // e.g., "50px"
  paddingX?: string;       // e.g., "16px"
  paddingY?: string;       // e.g., "12px"
  borderRadius?: string;   // e.g., "12px" (curveness)
  shadow?: string;         // e.g., "0 4px 6px rgba(0,0,0,0.1)"
  border?: string;         // e.g., "1px solid #e5e7eb"
  bgColor?: string;        // e.g., "#fff"
  textColor?: string;      // e.g., "#6b7280"
  fontSize?: string;       // e.g., "16px"
  fontWeight?: number;     // e.g., 500
  hoverShadow?: string;    // e.g., "0 6px 8px rgba(0,0,0,0.15)"
  hoverScale?: number;     // e.g., 1.01
  activeScale?: number;    // e.g., 0.98
  transitionDuration?: string; // e.g., "0.2s"
  gap?: string;            // e.g., "8px"
  iconSize?: string;       // e.g., "16px"
  label?: string;          // e.g., "Add New Post"
}

export default function AddPost({
  width = "100%",
  height,
  paddingX = "16px",
  paddingY = "12px",
  borderRadius = "24px",
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
}: AddPostProps) {

  return (
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
        cursor: "",
        transition: `all ${transitionDuration} `,
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
    >
      <span>{label}</span>
      <Plus style={{ width: iconSize, height: iconSize }} />
    </button>
  );
}
