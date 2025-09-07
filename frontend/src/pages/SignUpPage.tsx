import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signUpWithEmail, signInWithGoogle } from "../utils/authHelpers";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignUp(e: React.FormEvent) {
  e.preventDefault();
  setErrorMsg("");
  setLoading(true);

  if (password !== confirmPassword) {
    setErrorMsg("Passwords do not match");
    setLoading(false);
    return;
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    setErrorMsg(error.message);
  } else {
    console.log("✅ Sign up successful", data);
    // Redirect to HomePage
    navigate("/login"); // using useNavigate from react-router-dom
  }

  setLoading(false);
}

  async function handleGoogleSignUp() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    setErrorMsg(error.message);
  } else {
    console.log("✅ Google sign in success", data);
    // Supabase automatically creates a user entry for Google
    // You can redirect to HomePage
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

      {/* ================= RIGHT SIDE SIGNUP ================= */}
      <h1
        className="absolute font-light tracking-[0.6rem]"
        style={{ top: "10rem", right: "30rem", fontSize: "3rem" }}
      >
        STAGE
      </h1>

      <form
        onSubmit={handleSignUp}
        className="absolute flex flex-col"
        style={{ top: "19rem", right: "25.5rem", width: "22rem", gap: "0.5rem" }}
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

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d3ebf] shadow-sm"
          style={{ padding: "0.9rem 1rem", fontSize: "1rem" }}
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-[#2d3ebf] text-white rounded-full shadow-md hover:shadow-2xl hover:translate-y-[0.1rem] transition-all duration-200 disabled:opacity-50"
          style={{ padding: "0.9rem", fontSize: "1.2rem" }}
        >
          {loading ? "Signing up..." : "Sign up"}
        </button>

        {errorMsg && (
          <p className="text-red-600 text-sm mt-2">{errorMsg}</p>
        )}
      </form>

      {/* OR Divider */}
      <div
        className="absolute flex items-center"
        style={{ top: "38rem", right: "25.47rem", width: "22rem" }}
      >
        <div className="flex-grow h-px bg-gray-300"></div>
        <span style={{ padding: "0 1rem", fontSize: "0.9rem", color: "#555" }}>
          OR
        </span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      {/* Google Signup */}
      <button
        onClick={handleGoogleSignUp}
        className="absolute flex items-center justify-center border border-gray-400 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
        style={{
          top: "40rem",
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
        Sign up with Google
      </button>

      {/* Already have account? */}
<div className="absolute" style={{ top: "44.5rem", right: "30.5rem", fontSize: "0.9rem" }}>
  Already have an account?{" "}
  <Link to="/login" className="text-[#2d3ebf] font-semibold cursor-pointer hover:underline">
    Log in
  </Link>
</div>


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
