import { Ellipsis, Heart, MessageCircle, Send, Bookmark } from "lucide-react";

export default function Post({
  username,
  likes,
  caption,
}: {
  username: string;
  likes: number;
  caption: string;
}) {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-3 py-3">
          <div className="w-9 h-9 rounded-full bg-gray-300 overflow-hidden" />
          <span className="font-medium">{username}</span>
        </div>
        <Ellipsis className="w-5 h-5" />
      </div>

      {/* OUTLINED IMAGE FRAME (no image) */}
      <div className="w-full border border-gray-300 rounded-md overflow-hidden">
        <div className="w-full h-[640px] bg-white" />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-2 sm:px-4 pt-3">
        <div className="flex gap-5">
          <Heart className="w-7 h-7 cursor-pointer" />
          <MessageCircle className="w-7 h-7 cursor-pointer" />
          <Send className="w-7 h-7 cursor-pointer" />
        </div>
        <Bookmark className="w-7 h-7 cursor-pointer" />
      </div>

      {/* Meta */}
      <div className="px-4 pt-2 pb-8 text-sm">
        <div className="font-semibold">{likes} likes</div>
        <div className="mt-1">
          <span className="font-semibold">{username}</span>{" "}
          <span>{caption}</span>
        </div>
        <button className="mt-2 text-gray-500">View all comments</button>
      </div>
    </div>
  );
}
