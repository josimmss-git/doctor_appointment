"use client";

import { useState } from "react";
import { Button } from "@heroui/react";

const BookingModal = ({ doctor }) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const bookingData = {
      userEmail: form.email.value,
      doctorName: doctor.name,
      patientName: form.patientName.value,
      gender: form.gender.value,
      phone: form.phone.value,
      appointmentDate: form.date.value,
      appointmentTime: form.time.value,
    };

    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    });

    if (res.ok) {
      alert("Appointment booked successfully!");
      setOpen(false);
      form.reset();
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)} color="primary">
        Book Appointment
      </Button>

      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-[400px]">
            
            <h2 className="text-xl font-bold mb-4">
              Book Appointment
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">

              <input
                name="patientName"
                placeholder="Patient Name"
                className="w-full border p-2 rounded"
                required
              />

              <input
                name="email"
                placeholder="Email"
                className="w-full border p-2 rounded"
                required
              />

              <input
                name="phone"
                placeholder="Phone"
                className="w-full border p-2 rounded"
                required
              />

              <select
                name="gender"
                className="w-full border p-2 rounded"
              >
                <option>Male</option>
                <option>Female</option>
              </select>

              <input
                type="date"
                name="date"
                className="w-full border p-2 rounded"
                required
              />

              <input
                type="time"
                name="time"
                className="w-full border p-2 rounded"
                required
              />

              <div className="flex gap-2">
                <Button type="submit" className="w-full">
                  Confirm
                </Button>

                <Button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-full"
                  color="danger"
                >
                  Cancel
                </Button>
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingModal;