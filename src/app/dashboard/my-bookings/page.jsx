"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import BookingCard from "@/app/components/bookings/BookingCard";
import UpdateModal from "@/app/components/bookings/UpdateModal";
import toast from "react-hot-toast";

export default function MyBookings() {
  const { data: session, isPending } = authClient.useSession();

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const userEmail = session?.user?.email;
  


useEffect(() => {
  if (!userEmail) return;

  fetch(`http://localhost:8000/appointments?email=${encodeURIComponent(userEmail)}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("Bookings data:", data); // ← যোগ করুন
      setBookings(data);
      setLoading(false);
    })
    .catch((err) => {
      console.log("Error:", err); // ← এটাও যোগ করুন
      setLoading(false);
    });
}, [userEmail]);



  const handleDelete = async (id) => {
    const confirm = window.confirm("Delete করবেন?");
    if (!confirm) return;

    await fetch(`http://localhost:8000/appointments/${id}`, {
      method: "DELETE",
    });

    setBookings((prev) => prev.filter((b) => b._id !== id));
    toast.success("Appointment deleted successfully!");
  };

  const handleUpdate = (booking) => {
    setSelectedBooking(booking);
  };

  const handleUpdated = (updatedBooking) => {
    setBookings((prev) =>
      prev.map((b) => (b._id === updatedBooking._id ? updatedBooking : b))
    );
  };

  if (isPending || loading) {
    return <p className="text-gray-400">লোড হচ্ছে...</p>;
  }

  console.log("Session Email:", userEmail);

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

      {selectedBooking && (
        <UpdateModal
          booking={selectedBooking}
          onClose={() => setSelectedBooking(null)}
          onUpdated={handleUpdated}
        />
      )}
    </div>
  );
}


