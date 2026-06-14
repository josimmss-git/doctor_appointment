"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const name = e.target.name.value;
      const image = e.target.image.value;
      const email = e.target.email.value;
      const password = e.target.password.value;

      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, image }),
      });

 

      if (data.error) {
        toast.error(data.error);
        return;
      }

      toast.success("Registration successful!");
      router.push("/login");

    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false); // ✅ সবসময় false হবে
    }
  };

  const handleGoogleSignUp = async () => {
    await signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-10 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Register</h1>

        <form onSubmit={onSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <input
              name="name"
              type="text"
              required
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm mt-1 focus:outline-none focus:border-blue-400"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="text-sm text-gray-600">Image URL</label>
            <input
              name="image"
              type="text"
              placeholder="https://..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm mt-1 focus:outline-none focus:border-blue-400"
            />
          </div>

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
              placeholder="Min 8 chars, 1 uppercase, 1 number"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm mt-1 focus:outline-none focus:border-blue-400"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded-lg text-sm hover:bg-blue-600 transition disabled:opacity-50"
          >
            {loading ? "Loading..." : "Register"}
          </button>

        </form>

        {/* OR */}
        <p className="text-center text-gray-400 my-4">OR</p>

        {/* Google */}
        <button
          onClick={handleGoogleSignUp}
          className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg text-sm hover:bg-gray-50 transition"
        >
          🌐 Register with Google
        </button>

        {/* Login link */}
        <p className="text-center text-sm text-gray-400 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}