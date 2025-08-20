const PopularPosts = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Popular Posts</h2>
      <div className="grid grid-cols-3 gap-2">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <img
              key={i}
              src="https://via.placeholder.com/120"
              alt={`Popular post ${i + 1}`}
              className="w-full h-24 object-cover rounded-md"
            />
          ))}
      </div>
    </div>
  );
};

export default PopularPosts;
