export default function BookingCard({ booking, onUpdate, onDelete }) {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 hover:shadow-md transition">

      <div className="flex justify-between items-start mb-2">
        <h2 className="text-base font-medium text-blue-800">
          {booking.doctorName}
        </h2>
        <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-md">
          Confirmed
        </span>
      </div>

      <p className="text-sm text-gray-500 mb-2">
        Patient: {booking.patientName}
      </p>

      <p className="text-sm text-gray-700 mb-4">
        📅 {booking.appointmentDate} &nbsp; ⏰ {booking.appointmentTime}
      </p>

      <div className="flex gap-2">
        <button
          onClick={() => onUpdate(booking)}
          className="flex-1 flex items-center justify-center gap-1 border border-gray-300 text-gray-700 px-3 py-1.5 rounded-lg text-sm hover:bg-gray-50 transition"
        >
          ✏️ Update
        </button>
        <button
          onClick={() => onDelete(booking._id)}
          className="flex-1 flex items-center justify-center gap-1 border border-red-300 text-red-600 px-3 py-1.5 rounded-lg text-sm hover:bg-red-50 transition"
        >
          🗑️ Delete
        </button>
      </div>

    </div>
  );
}