"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logout successful! 👋");
    router.push("/");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="w-11/12 mx-auto">
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/doc logo.png"
              width={150}
              height={150}
              alt="logo"
              className="h-10 w-auto"
            />
            <h2 className="font-bold text-xl md:text-2xl">DocAppoint</h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/all-appointment">All Appointment</Link></li>
              <li><Link href="/dashboard">Dashboard</Link></li>
            </ul>

            <div className="flex items-center gap-4">
              {user ? (
                <>
                  <Avatar>
                    <Avatar.Image
                      alt={user?.name}
                      src={user?.image}
                      className="w-10 rounded-3xl"
                    />
                    <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                  </Avatar>

                  {/* ✅ Logout with toast */}
                  <Button
                    className="bg-red-500 rounded-2xl p-2 cursor-pointer text-white"
                    onPress={handleLogout}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <div className="flex items-center text-sm gap-4">
                  <Link href="/signup">Register</Link>
                  <Link
                    href="/signin"
                   
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col gap-4 text-center">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/all-appointment">All Appointment</Link></li>
              <li><Link href="/dashboard">Dashboard</Link></li>

              <li>
                {user ? (
                  <>
                    <Avatar>
                      <Avatar.Image
                        alt={user?.name}
                        src={user?.image}
                        className="w-10 rounded-3xl"
                      />
                      <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                    </Avatar>

                    {/* ✅ Mobile Logout with toast */}
                    <Button
                      className="bg-red-500 rounded-2xl p-2 cursor-pointer text-white"
                      onPress={handleLogout}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <div className="flex items-center justify-center text-sm gap-4">
                    <Link href="/signup">Register</Link>
                    <Link href="/signin">Login</Link>
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;