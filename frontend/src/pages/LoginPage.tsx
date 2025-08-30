import React from "react";

export default function LoginPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-50 relative">
      <div className="flex w-[85%] max-w-7xl h-[80%]">
        {/* Left Side - Boxes */}
        <div className="flex-1 flex flex-col items-center justify-center gap-8">
          {/* Box 1 */}
          <div className="relative">
            <div className="bg-[#d9c76e] w-[10rem] h-[10rem] rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-[1.875rem] font-bold">Lets</span>
            </div>
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 text-[0.875rem] tracking-wider">
              Make
            </span>
          </div>

          {/* Box 2 */}
          <div className="relative">
            <div className="bg-[#d89a9a] w-[11rem] h-[10rem] rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-[1.875rem] font-bold">Walk</span>
            </div>
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 text-[0.875rem] tracking-wider">
              You
            </span>
          </div>

          {/* Box 3 */}
          <div className="relative">
            <div className="bg-[#c4c4c4] w-[16rem] h-[9rem] rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-[1.875rem] font-bold">Different</span>
            </div>
            <span className="absolute -right-8 top-1/2 -translate-y-1/2 rotate-90 text-[0.875rem] tracking-wider">
              Professional
            </span>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex-1 flex flex-col items-center justify-center px-[3rem]">
          {/* Title */}
          <h1 className="text-[2.5rem] tracking-[0.6rem] font-light mb-[2.5rem]">
            STAGE
          </h1>

          {/* Form */}
          <form className="flex flex-col gap-[1.25rem] w-full max-w-sm">
            <input
              type="text"
              placeholder="Username or Email"
              className="border border-gray-400 rounded-md px-[1rem] py-[0.75rem] focus:outline-none focus:ring-2 focus:ring-[#2d3ebf] shadow-sm"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-400 rounded-md px-[1rem] py-[0.75rem] focus:outline-none focus:ring-2 focus:ring-[#2d3ebf] shadow-sm"
            />

            <button
              type="submit"
              className="bg-[#2d3ebf] text-white py-[0.75rem] rounded-full shadow-md hover:shadow-xl transition-all duration-200"
            >
              Log in
            </button>
          </form>

          {/* Forgot password */}
          <p className="text-[0.875rem] text-gray-600 mt-[0.75rem] cursor-pointer hover:underline">
            Forgot your password?
          </p>

          {/* OR Divider */}
          <div className="flex items-center w-full max-w-sm my-[1.5rem]">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-[0.75rem] text-gray-500">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Signup */}
          <p className="text-[0.875rem]">
            Don’t have an account?{" "}
            <span className="text-[#2d3ebf] font-semibold cursor-pointer hover:underline">
              Sign up
            </span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-[1.25rem] text-gray-500 text-[0.75rem] tracking-wide">
        © 2025 Stage
      </div>
    </div>
  );
}
