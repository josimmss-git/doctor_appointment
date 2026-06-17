"use client";

import Link from "next/link";
import { useState } from "react";

export default function NotFound() {
  const [shaking, setShaking] = useState(false);

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4">

      <div className="animate-bounce text-7xl mb-4">🚀</div>

      <h1 className="text-8xl font-bold">404</h1>

      <p className="text-2xl font-semibold mt-2">এই পেজটা হাওয়া হয়ে গেছে! 💨</p>
      <p className="text-gray-400 mt-1 mb-6">আমরা সারা মহাবিশ্ব খুঁজলাম... পেলাম না।</p>

      <div className="bg-gray-100 rounded-xl p-4 text-left text-sm font-mono text-gray-500 mb-6">
        <p>&gt; searching for page...</p>
        <p>&gt; not here.</p>
        <p>&gt; still not here.</p>
        <p>&gt; gave up. <span className="animate-ping">_</span></p>
      </div>

      <div className="flex gap-3">
        <Link href="/" className="btn mt-4">
          🏠 বাড়ি যাই
        </Link>

        <button
          onClick={() => {
            setShaking(true);
            setTimeout(() => setShaking(false), 600);
          }}
          className={`btn mt-4 ${shaking ? "animate-shake" : ""}`}
        >
          🔄 আবার চেষ্টা করি
        </button>
      </div>

      <p className="text-gray-400 text-xs mt-8">এই পেজটা সম্ভবত চা খেতে গেছে ☕</p>
    </div>
  );
}