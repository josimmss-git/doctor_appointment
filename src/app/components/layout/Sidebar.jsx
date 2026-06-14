import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md border-r min-h-screen p-5">
      <h1 className="text-2xl font-bold text-cyan-600">
        DoctorApp
      </h1>

      <nav className="mt-8 space-y-3">
        <Link href="/dashboard" className="block hover:bg-gray-100 p-2 rounded">
          Dashboard
        </Link>

        <Link href="/dashboard/my-bookings" className="block hover:bg-gray-100 p-2 rounded">
          My Bookings
        </Link>

        <Link href="/dashboard/my-profile" className="block hover:bg-gray-100 p-2 rounded">
          My Profile
        </Link>
      </nav>
    </aside>
  );
}