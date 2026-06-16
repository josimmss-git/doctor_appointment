"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/signin");
    }
  }, [isPending, session, router]);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">লোড হচ্ছে...</p>
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 p-6 flex flex-col gap-2">
        <h2 className="text-lg font-bold text-cyan-600 mb-4">Dashboard</h2>
        <Link href="/dashboard" className="text-sm text-gray-600 hover:text-cyan-600 py-2 px-3 rounded-lg hover:bg-gray-50">
          🏠 Home
        </Link>
        <Link href="/dashboard/my-bookings" className="text-sm text-gray-600 hover:text-cyan-600 py-2 px-3 rounded-lg hover:bg-gray-50">
          📅 My Bookings
        </Link>
        <Link href="/dashboard/my-profile" className="text-sm text-gray-600 hover:text-cyan-600 py-2 px-3 rounded-lg hover:bg-gray-50">
          👤 My Profile
        </Link>
        <button
          onClick={() => authClient.signOut().then(() => router.push("/signin"))}
          className="mt-auto text-sm text-red-400 hover:text-red-600 py-2 px-3 rounded-lg hover:bg-red-50 text-left"
        >
          🚪 Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-50">
        {children}
      </main>
    </div>
  );
}