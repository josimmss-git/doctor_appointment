"use client";

import { useEffect, useState } from "react";
import BookingCard from "@/app/components/bookings/BookingCard";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`${ NEXT_PUBLIC_SERVER_URL}/ appointments / test@gmail.com
  `)
      .then(res => res.json())
      .then(setBookings);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Bookings</h1>

      <div className="grid gap-4 md:grid-cols-2">
        {bookings.map((b) => (
          <BookingCard key={b._id} booking={b} />
        ))}
      </div>
    </div>
  );
}