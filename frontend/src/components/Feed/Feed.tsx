import Post from "./Post";
import AddPost from "./AddPost";

export default function Feed() {
  return (
    <div className="py-10 w-full max-w-xl mx-auto flex flex-col gap-6">
      {/* Add Post Section */}
      <AddPost />

      {/* Example Posts */}
      <Post
        username="pulindu.thenura"
        likes={100}
        caption="Launch yourself higher"
      />
      <Post
        username="person_2"
        likes={230}
        caption="Beautiful day 🌸"
      />
    </div>
  );
}
