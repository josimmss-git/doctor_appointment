"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

export default function SignInPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // নিজে handle করবো
    });

    if (result?.error) {
      toast.error("Email or password wrong!");
      setLoading(false);
      return;
    }

    toast.success("Login successful!");
    router.push("/dashboard");
  };

  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-10 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>

        <form onSubmit={onSubmit} className="space-y-4">

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="john@example.com"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm mt-1 focus:outline-none focus:border-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              name="password"
              type="password"
              required
              minLength={8}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm mt-1 focus:outline-none focus:border-blue-400"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded-lg text-sm hover:bg-blue-600 transition disabled:opacity-50"
          >
            {loading ? "Loading..." : "Login"}
          </button>

        </form>

        {/* OR */}
        <p className="text-center text-gray-400 my-4">OR</p>

        {/* Google */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg text-sm hover:bg-gray-50 transition"
        >
          🌐 Login with Google
        </button>

        {/* Register link */}
        <p className="text-center text-sm text-gray-400 mt-4">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}