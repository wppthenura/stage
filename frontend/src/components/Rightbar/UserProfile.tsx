const UserProfile = () => {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <img
        src="https://via.placeholder.com/50"
        alt="User"
        className="w-12 h-12 rounded-full"
      />
      <div>
        <p className="font-semibold">pulindu_thenura</p>
        <p className="text-gray-500 text-sm">View Profile</p>
      </div>
    </div>
  );
};

export default UserProfile;
