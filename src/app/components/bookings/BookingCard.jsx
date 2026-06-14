export default function BookingCard({ booking, onUpdate, onDelete }) {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 hover:shadow-md transition">

      {/* Doctor Name + Status */}
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-base font-semibold text-blue-800">
          {booking.doctorName}
        </h2>
        <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full capitalize">
          {booking.status}
        </span>
      </div>

      {/* Patient Info */}
      <div className="space-y-1 text-sm text-gray-600 mb-4">
        <p>👤 <span className="font-medium">{booking.patientName}</span></p>
        <p>📧 {booking.userEmail}</p>
        <p>📞 {booking.phone}</p>
        <p>⚧ {booking.gender}</p>
        <p>📅 {booking.appointmentDate} &nbsp; ⏰ {booking.appointmentTime}</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => onUpdate(booking)}
          className="flex-1 border border-gray-300 text-gray-700 py-1.5 rounded-lg text-sm hover:bg-gray-50 transition"
        >
          ✏️ Update
        </button>
        <button
          onClick={() => onDelete(booking._id)}
          className="flex-1 border border-red-300 text-red-600 py-1.5 rounded-lg text-sm hover:bg-red-50 transition"
        >
          🗑️ Delete
        </button>
      </div>

    </div>
  );
}