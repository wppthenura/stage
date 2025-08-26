import Post from "./Post";
import AddPost from "./AddPost";

export default function Feed() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Feed Column */}
      <div className="flex flex-col items-center w-full max-w-[1050px]">
        {/* Add Post Section */}
        <AddPost />

        {/* Posts */}
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
    </div>
  );
}
