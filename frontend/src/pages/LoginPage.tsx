import React, { useState } from "react";
import { signInWithEmail, signInWithGoogle } from "../utils/authHelpers";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const { error } = await signInWithEmail(email, password);
    if (error) {
      setErrorMsg(error.message);
    } else {
      console.log("✅ Logged in successfully");
      // TODO: redirect to Home page
    }

    setLoading(false);
  }

  async function handleGoogleLogin() {
    const { error } = await signInWithGoogle();
    if (error) {
      setErrorMsg(error.message);
    }
  }

  return (
    <div className="h-screen w-full relative bg-gray-50 overflow-hidden">
      {/* ================= LEFT SIDE BOXES ================= */}

      {/* Box 3 */}
      <div
        className="absolute flex items-center justify-center bg-[#c4c4c4] rounded-lg shadow-lg"
        style={{ top: "31rem", left: "17rem", width: "22rem", height: "11rem" }}
      >
        <span style={{ fontSize: "5rem", fontWeight: "bold" }}>Different</span>
        <span
          className="absolute rotate-270 tracking-wider"
          style={{ top: "50%", right: "-3rem", fontSize: "0.9rem" }}
        >
          Professional
        </span>
      </div>

      {/* Box 2 */}
      <div
        className="absolute flex items-center justify-center bg-[#d89a9a] rounded-lg shadow-lg"
        style={{ top: "20rem", left: "32rem", width: "13rem", height: "12rem" }}
      >
        <span style={{ fontSize: "5rem", fontWeight: "bold" }}>Walk</span>
        <span
          className="absolute -rotate-90 tracking-wider"
          style={{ top: "50%", left: "-1.5rem", fontSize: "0.9rem" }}
        >
          You
        </span>
      </div>

      {/* Box 1 */}
      <div
        className="absolute flex items-center justify-center bg-[#d9c76e] rounded-lg shadow-lg"
        style={{ top: "10rem", left: "23rem", width: "12rem", height: "12rem" }}
      >
        <span style={{ fontSize: "5rem", fontWeight: "bold" }}>Lets</span>
        <span
          className="absolute -rotate-90 tracking-wider"
          style={{ top: "50%", left: "-1.7rem", fontSize: "0.9rem" }}
        >
          Make
        </span>
      </div>

      {/* ================= RIGHT SIDE LOGIN ================= */}
      {/* Title */}
      <h1
        className="absolute font-light tracking-[0.6rem]"
        style={{ top: "13rem", right: "30rem", fontSize: "3rem" }}
      >
        STAGE
      </h1>

      {/* Login Form */}
      <form
        onSubmit={handleLogin}
        className="absolute flex flex-col"
        style={{ top: "20rem", right: "25.5rem", width: "22rem", gap: "0.5rem" }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d3ebf] shadow-sm"
          style={{ padding: "0.9rem 1rem", fontSize: "1rem" }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d3ebf] shadow-sm"
          style={{ padding: "0.9rem 1rem", fontSize: "1rem" }}
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-[#2d3ebf] text-white rounded-full shadow-md hover:shadow-2xl hover:translate-y-[0.1rem] transition-all duration-200 disabled:opacity-50"
          style={{ padding: "0.9rem", fontSize: "1.2rem" }}
        >
          {loading ? "Logging in..." : "Log in"}
        </button>

        {errorMsg && (
          <p className="text-red-600 text-sm mt-2">{errorMsg}</p>
        )}
      </form>

      {/* Forgot Password */}
      <p
        className="absolute text-gray-600 cursor-pointer hover:underline"
        style={{ top: "30.75rem", right: "32.3rem", fontSize: "0.9rem" }}
      >
        Forgot your password?
      </p>

      {/* OR Divider */}
      <div
        className="absolute flex items-center"
        style={{ top: "34rem", right: "25.47rem", width: "22rem" }}
      >
        <div className="flex-grow h-px bg-gray-300"></div>
        <span style={{ padding: "0 1rem", fontSize: "0.9rem", color: "#555" }}>
          OR
        </span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      {/* Google Login */}
      <button
        onClick={handleGoogleLogin}
        className="absolute flex items-center justify-center border border-gray-400 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        style={{
          top: "36rem",
          right: "25.5rem",
          width: "22rem",
          padding: "0.9rem",
          fontSize: "1rem",
          gap: "0.5rem",
        }}
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          style={{ width: "1.5rem", height: "1.5rem" }}
        />
        Log in with Google
      </button>

      {/* Signup */}
      <p
        className="absolute"
        style={{ top: "39rem", right: "30.5rem", fontSize: "0.9rem" }}
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
