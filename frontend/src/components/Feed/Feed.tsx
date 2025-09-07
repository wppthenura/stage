import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import Post from "./Post";
import AddPost from "./AddPost";

export default function Feed() {
  const [posts, setPosts] = useState<any[]>([]);

  const getPosts = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("id, caption, likes, profiles(username, avatar_url)")
      .order("created_at", { ascending: false });

    if (!error && data) setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center w-full max-w-[1050px]">
        <AddPost onPostAdded={getPosts} />

        {posts.map((post) => (
          <Post
            key={post.id}
            username={post.profiles?.username || "unknown"}
            likes={post.likes}
            caption={post.caption}
          />
        ))}
      </div>
    </div>
  );
}
