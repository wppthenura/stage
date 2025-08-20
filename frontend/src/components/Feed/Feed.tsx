import Post from "./Post";

export default function Feed() {
  // Single post like your mock
  return (
    <div className="py-10">
      <Post
        username="pulindu.thenura"
        likes={100}
        caption="Launch yourself higher"
      />
    </div>
  );
}
