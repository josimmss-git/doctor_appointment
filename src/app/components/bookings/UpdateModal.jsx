export default function UpdateModal() {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          Update Appointment
        </h2>

        <input className="w-full border p-2 mb-3 rounded" placeholder="Name" />
        <input className="w-full border p-2 mb-3 rounded" placeholder="Phone" />

        <button className="w-full bg-cyan-500 text-white py-2 rounded">
          Save Changes
        </button>
      </div>
    </div>
  );
}