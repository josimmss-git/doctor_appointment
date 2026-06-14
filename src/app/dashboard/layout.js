"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";

export default function DashboardLayout({ children }) {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn(); // login page এ পাঠাবে
    }
  }, [status]);

  // Loading
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">লোড হচ্ছে...</p>
      </div>
    );
  }

  // Login নেই
  if (!session) return null;

  // Login আছে
  return <>{children}</>;
}