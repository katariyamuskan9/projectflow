"use client";

import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  }

  return (
    <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg border border-slate-100">

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#312E81]">
          ProjectFlow
        </h2>

        <h1 className="text-2xl font-bold mt-6 text-slate-900">
          Welcome Back! 👋
        </h1>

        <p className="text-sm text-slate-500 mt-2">
          Sign in to continue to ProjectFlow.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label className="block text-sm font-medium mb-2">
            Email
          </label>

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 pr-16 text-sm outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-sm text-indigo-600"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-2 text-slate-600">
            <input type="checkbox" />
            Remember me
          </label>

          <a href="/forgot-password" className="text-indigo-600">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-[#312E81] hover:bg-[#4338CA] text-white py-3 rounded-lg font-semibold transition"
        >
          Sign In
        </button>

      </form>

      <p className="text-center text-sm text-slate-500 mt-6">
        Don't have an account?{" "}
        <a href="/register" className="text-indigo-600 font-semibold">
          Sign up
        </a>
      </p>

    </div>
  );
}