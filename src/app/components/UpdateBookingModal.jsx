"use client";
import { useState } from "react";

export default function UpdateBookingModal({ booking, onClose, onUpdate }) {
  const [form, setForm] = useState({
    patientName: booking.patientName,
    gender: booking.gender,
    phone: booking.phone,
    appointmentDate: booking.appointmentDate,
    appointmentTime: booking.appointmentTime,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(`/api/bookings/${booking._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      onUpdate({ ...booking, ...form });
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">Update Appointment</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Read-only */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input value={booking.userEmail} readOnly
              className="w-full border rounded-lg px-3 py-2 mt-1 text-sm bg-gray-100 text-gray-500" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Doctor</label>
            <input value={booking.doctorName} readOnly
              className="w-full border rounded-lg px-3 py-2 mt-1 text-sm bg-gray-100 text-gray-500" />
          </div>

          {/* Editable */}
          {[
            { label: "Patient Name", name: "patientName", type: "text" },
            { label: "Phone", name: "phone", type: "text" },
            { label: "Date", name: "appointmentDate", type: "date" },
            { label: "Time", name: "appointmentTime", type: "time" },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <label className="text-sm font-medium text-gray-700">{label}</label>
              <input type={type} name={name} value={form[name]}
                onChange={handleChange} required
                className="w-full border rounded-lg px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            </div>
          ))}

          <div>
            <label className="text-sm font-medium text-gray-700">Gender</label>
            <select name="gender" value={form.gender} onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <button type="submit" disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-lg text-sm transition disabled:opacity-60">
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}