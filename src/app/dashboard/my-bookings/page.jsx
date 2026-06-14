"use client";

import { useEffect, useState } from "react";
import BookingCard from "@/app/components/bookings/BookingCard";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const userEmail = "test@gmail.com"; // পরে auth থেকে নিবে

  // ডেটা লোড
  useEffect(() => {
    fetch(`http://localhost:8000/appointments/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [userEmail]);

  // Delete
  const handleDelete = async (id) => {
    const confirm = window.confirm("Delete করবেন?");
    if (!confirm) return;

    await fetch(`http://localhost:8000/appointments/${id}`, {
      method: "DELETE",
    });

    // UI থেকে সরিয়ে দাও
    setBookings((prev) => prev.filter((b) => b._id !== id));
  };

  // Update (এখন console, পরে modal বসাবে)
  const handleUpdate = (booking) => {
    console.log("Update করবো:", booking);
    // এখানে পরে UpdateModal খুলবে
  };

  // Loading
  if (loading) {
    return <p className="text-gray-400">লোড হচ্ছে...</p>;
  }

  // কোনো booking নেই
  if (bookings.length === 0) {
    return <p className="text-gray-400">কোনো booking পাওয়া যায়নি।</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Bookings</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {bookings.map((b) => (
          <BookingCard
            key={b._id}
            booking={b}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
}