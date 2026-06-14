"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import BookingCard from "@/app/components/bookings/BookingCard";
import UpdateModal from "@/app/components/bookings/UpdateModal";
import toast from "react-hot-toast";

export default function MyBookings() {
  const { data: session } = useSession();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState(null);

  // ✅ session থেকে real email
  const userEmail = session?.user?.email;

  useEffect(() => {
    if (!userEmail) return;

    fetch(`http://localhost:8000/appointments/${encodeURIComponent(userEmail)}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
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

  if (loading) return <p className="text-gray-400">লোড হচ্ছে...</p>;
  if (bookings.length === 0) return <p className="text-gray-400">কোনো booking পাওয়া যায়নি।</p>;

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