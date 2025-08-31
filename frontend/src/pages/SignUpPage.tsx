import React from "react";

export default function SignUpPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-50 relative">
      {/* Wrapper */}
      <div className="flex w-[90rem] h-[48rem]">
        {/* Left Side - Boxes */}
        <div className="flex-1 flex flex-col items-center justify-center gap-[3rem]">
          {/* Box 1 */}
          <div className="relative">
            <div className="bg-[#d9c76e] w-[12rem] h-[12rem] rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-[2rem] font-bold">Lets</span>
            </div>
            <span className="absolute -left-[2rem] top-1/2 -translate-y-1/2 -rotate-90 text-[0.9rem] tracking-wider">
              Make
            </span>
          </div>

          {/* Box 2 */}
          <div className="relative">
            <div className="bg-[#d89a9a] w-[13rem] h-[12rem] rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-[2rem] font-bold">Walk</span>
            </div>
            <span className="absolute -left-[3rem] top-1/2 -translate-y-1/2 -rotate-90 text-[0.9rem] tracking-wider">
              You
            </span>
          </div>

          {/* Box 3 */}
          <div className="relative">
            <div className="bg-[#c4c4c4] w-[18rem] h-[11rem] rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-[2rem] font-bold">Different</span>
            </div>
            <span className="absolute -right-[3rem] top-1/2 -translate-y-1/2 rotate-90 text-[0.9rem] tracking-wider">
              Professional
            </span>
          </div>
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="flex-1 flex flex-col items-center justify-center px-[5rem]">
          {/* Title */}
          <h1 className="text-[3rem] tracking-[0.6rem] font-light mb-[3rem]">
            SIGN UP
          </h1>

          {/* Form */}
          <form className="flex flex-col gap-[1.5rem] w-[22rem]">
            {/* Username */}
            <input
              type="text"
              placeholder="Username"
              className="border border-gray-400 rounded-md px-[1rem] py-[0.9rem] focus:outline-none focus:ring-2 focus:ring-[#2d3ebf] shadow-sm"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-400 rounded-md px-[1rem] py-[0.9rem] focus:outline-none focus:ring-2 focus:ring-[#2d3ebf] shadow-sm"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-400 rounded-md px-[1rem] py-[0.9rem] focus:outline-none focus:ring-2 focus:ring-[#2d3ebf] shadow-sm"
            />

            {/* Confirm Password */}
            <input
              type="password"
              placeholder="Confirm Password"
              className="border border-gray-400 rounded-md px-[1rem] py-[0.9rem] focus:outline-none focus:ring-2 focus:ring-[#2d3ebf] shadow-sm"
            />

            {/* Sign Up Button */}
            <button
              type="submit"
              className="bg-[#2d3ebf] text-white py-[0.9rem] rounded-full shadow-md hover:shadow-2xl hover:translate-y-[-0.15rem] transition-all duration-200"
            >
              Create Account
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center w-[22rem] my-[2rem]">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-[1rem] text-gray-500">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Google Sign In */}
          <button
            type="button"
            className="flex items-center justify-center gap-3 border border-gray-400 py-[0.9rem] w-[22rem] rounded-md shadow-sm hover:bg-gray-100 transition-all duration-200"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Sign up with Google</span>
          </button>

          {/* Already have an account */}
          <p className="text-[0.9rem] mt-[1.5rem]">
            Already have an account?{" "}
            <span className="text-[#2d3ebf] font-semibold cursor-pointer hover:underline">
              Log in
            </span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-[2rem] text-gray-500 text-[0.8rem] tracking-wide">
        © 2025 Stage
      </div>
    </div>
  );
}
