import React from "react";

export default function LoginPage() {
  return (
    <div className="h-screen w-full relative bg-gray-50 overflow-hidden">
      {/* ================= LEFT SIDE BOXES ================= */}
      {/* Box 1 */}
      <div
        className="absolute flex items-center justify-center bg-[#d9c76e] rounded-lg shadow-lg"
        style={{
          top: "5rem", // vertical move
          left: "5rem", // horizontal move
          width: "12rem", // box width
          height: "12rem", // box height
        }}
      >
        <span
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Lets
        </span>
        <span
          className="absolute -rotate-90 tracking-wider"
          style={{
            top: "50%",
            left: "-10rem",
            fontSize: "0.9rem",
          }}
        >
          Make
        </span>
      </div>

      {/* Box 2 */}
      <div
        className="absolute flex items-center justify-center bg-[#d89a9a] rounded-lg shadow-lg"
        style={{
          top: "20rem",
          left: "6rem",
          width: "13rem",
          height: "12rem",
        }}
      >
        <span
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Walk
        </span>
        <span
          className="absolute -rotate-90 tracking-wider"
          style={{
            top: "50%",
            left: "-3rem",
            fontSize: "0.9rem",
          }}
        >
          You
        </span>
      </div>

      {/* Box 3 */}
      <div
        className="absolute flex items-center justify-center bg-[#c4c4c4] rounded-lg shadow-lg"
        style={{
          top: "35rem",
          left: "8rem",
          width: "18rem",
          height: "11rem",
        }}
      >
        <span
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Different
        </span>
        <span
          className="absolute rotate-90 tracking-wider"
          style={{
            top: "50%",
            right: "-3rem",
            fontSize: "0.9rem",
          }}
        >
          Professional
        </span>
      </div>

      {/* ================= RIGHT SIDE LOGIN ================= */}
      {/* Title */}
      <h1
        className="absolute font-light tracking-[0.6rem]"
        style={{
          top: "8rem",
          right: "12rem",
          fontSize: "3rem",
        }}
      >
        STAGE
      </h1>

      {/* Login Form */}
      <form
        className="absolute flex flex-col"
        style={{
          top: "15rem",
          right: "10rem",
          width: "22rem",
          gap: "1.5rem",
        }}
      >
        {/* Username */}
        <input
          type="text"
          placeholder="Username or Email"
          className="border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d3ebf] shadow-sm"
          style={{
            padding: "0.9rem 1rem",
            fontSize: "1rem",
          }}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d3ebf] shadow-sm"
          style={{
            padding: "0.9rem 1rem",
            fontSize: "1rem",
          }}
        />

        {/* Login Button */}
        <button
          type="submit"
          className="bg-[#2d3ebf] text-white rounded-full shadow-md hover:shadow-2xl hover:translate-y-[-0.15rem] transition-all duration-200"
          style={{
            padding: "0.9rem",
            fontSize: "1.2rem",
          }}
        >
          Log in
        </button>
      </form>

      {/* Forgot Password */}
      <p
        className="absolute text-gray-600 cursor-pointer hover:underline"
        style={{
          top: "30rem",
          right: "10rem",
          fontSize: "0.9rem",
        }}
      >
        Forgot your password?
      </p>

      {/* OR Divider */}
      <div
        className="absolute flex items-center"
        style={{
          top: "34rem",
          right: "10rem",
          width: "22rem",
        }}
      >
        <div className="flex-grow h-px bg-gray-300"></div>
        <span
          style={{
            padding: "0 1rem",
            fontSize: "0.9rem",
            color: "#555",
          }}
        >
          OR
        </span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      {/* Signup */}
      <p
        className="absolute"
        style={{
          top: "38rem",
          right: "10rem",
          fontSize: "0.9rem",
        }}
      >
        Don’t have an account?{" "}
        <span className="text-[#2d3ebf] font-semibold cursor-pointer hover:underline">
          Sign up
        </span>
      </p>

      {/* Footer */}
      <div
        className="absolute text-gray-500 tracking-wide"
        style={{
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "0.8rem",
        }}
      >
        © 2025 Stage
      </div>
    </div>
  );
}
