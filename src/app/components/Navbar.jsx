"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

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
            <h2 className="font-bold text-xl md:text-2xl">
              DocAppoint
            </h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/all-appointment">
                  All Appointment
                </Link>
              </li>

              <li>
                <Link href="/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
  
        <div className="flex gap-4">
    
          <ul className="flex items-center  text-sm gap-4">
            <li>
              <Link href={"/signup"}>Register</Link>
            </li>
            <li>
              <Link href={"/signin"}>Login</Link>
            </li> 
            </ul>
      

              </div>
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
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/all-appointment">
                All Appointment
              </Link>
            </li>

            <li>
              <Link href="/dashboard">
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                href="/login"
                className="block border rounded py-2"
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                href="/Register"
                className="block bg-cyan-500 text-white rounded py-2"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}
    
    </nav>
  );
};

export default Navbar;