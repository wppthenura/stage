import { Plus, UserPlus } from "lucide-react";

function UserProfile() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-gray-300" />
      <div>
        <div className="text-gray-400 text-sm">pulindu.thenura</div>
        <div className="text-lg font-semibold leading-tight">Pulindu Thenura</div>
        <button className="text-blue-600 text-sm">View Profile</button>
      </div>
    </div>
  );
}

function NewPost() {
  return (
    <button className="w-full mt-6 flex items-center justify-center gap-3 py-4 rounded-2xl border border-gray-300 hover:bg-gray-50">
      <span className="text-lg">New Post</span>
      <span className="p-1 rounded-md border border-gray-300">
        <Plus className="w-5 h-5" />
      </span>
    </button>
  );
}

function Suggestions() {
  const people = ["Person 1", "Person 2", "Person 3", "Person 4", "Person 5"];
  const dots = ["bg-rose-300","bg-sky-300","bg-green-300","bg-yellow-300","bg-purple-300"];

  return (
    <div className="mt-6 rounded-2xl border border-gray-300">
      <div className="flex items-center justify-between px-5 py-3">
        <div className="text-sm text-gray-600">Suggested for you</div>
        <button className="text-sm">See all</button>
      </div>
      <div className="px-4 pb-3">
        {people.map((p, i) => (
          <div key={p} className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full ${dots[i]}`} />
              <div className="text-sm">{p}</div>
            </div>
            <button className="flex items-center gap-1 text-sm px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-50">
              <UserPlus className="w-4 h-4" />
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function PopularPosts() {
  return (
    <div className="mt-6 rounded-2xl border border-gray-300">
      <div className="flex items-center justify-between px-5 py-3">
        <div className="text-sm font-medium text-gray-700">Popular posts</div>
        <button className="text-sm">See all</button>
      </div>
      <div className="grid grid-cols-3 gap-3 p-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="w-full aspect-square rounded-lg border border-gray-300 bg-white"
          />
        ))}
      </div>
    </div>
  );
}

export default function Rightbar() {
  return (
    <div className="space-y-6">
      <UserProfile />
      <NewPost />
      <Suggestions />
      <PopularPosts />
    </div>
  );
}
