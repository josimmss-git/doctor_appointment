"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function BookingModal({ doctor, userEmail }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    patientName: "",
    gender: "",
    phone: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/bookings", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    ...form,
    userEmail,
    doctorName: doctor.name,
  }),
});

      if (res.ok) {
        toast.success("Appointment booked successfully!");
        setIsOpen(false);
        setForm({
          patientName: "",
          gender: "",
          phone: "",
          appointmentDate: "",
          appointmentTime: "",
        });
      } else {
        toast.error("Booking failed. Try again.");
      }
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="mt-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg cursor-pointer transition"
      >
        Booking Now
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-1">Book Appointment</h2>
            <p className="text-sm text-gray-500 mb-4">
              {doctor.name} —{" "}
              <span className="text-blue-500">{doctor.specialty}</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Read-only fields */}
              <div>
                <label className="text-sm font-medium text-gray-700">Your Email</label>
                <input
                  value={userEmail}
                  readOnly
                  className="w-full border rounded-lg px-3 py-2 mt-1 text-sm bg-gray-100 text-gray-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Doctor</label>
                <input
                  value={doctor.name}
                  readOnly
                  className="w-full border rounded-lg px-3 py-2 mt-1 text-sm bg-gray-100 text-gray-500"
                />
              </div>

              {/* Editable fields */}
              <div>
                <label className="text-sm font-medium text-gray-700">Patient Name</label>
                <input
                  name="patientName"
                  value={form.patientName}
                  onChange={handleChange}
                  required
                  placeholder="Full name"
                  className="w-full border rounded-lg px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Gender</label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="">Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="01XXXXXXXXX"
                  className="w-full border rounded-lg px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-gray-700">Date</label>
                  <input
                    type="date"
                    name="appointmentDate"
                    value={form.appointmentDate}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full border rounded-lg px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Time</label>
                  <input
                    type="time"
                    name="appointmentTime"
                    value={form.appointmentTime}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <p className="text-sm text-gray-500">
                  Fee:{" "}
                  <span className="text-green-600 font-bold">৳{doctor.fee}</span>
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg text-sm transition disabled:opacity-60"
                >
                  {loading ? "Booking..." : "Confirm"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}