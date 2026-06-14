"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function MyProfile() {
  const { data: session, update } = useSession();
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", photo: "" });

  const user = session?.user;

  const openModal = () => {
    setForm({ name: user?.name || "", photo: user?.image || "" });
    setShowModal(true);
  };

  const handleSubmit = async () => {
    // session update করো
    await update({ name: form.name, image: form.photo });
    toast.success("Profile updated successfully!");
    setShowModal(false);
  };

  if (!user) return <p className="text-gray-400">লোড হচ্ছে...</p>;

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="bg-white rounded-xl border border-gray-100 p-8 text-center shadow-sm">

        {/* Photo */}
        <img
          src={user.image || `https://ui-avatars.com/api/?name=${user.name}`}
          alt={user.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
        />

        {/* Name & Email */}
        <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
        <p className="text-sm text-gray-400 mt-1">{user.email}</p>

        {/* Update Button */}
        <button
          onClick={openModal}
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition"
        >
          ✏️ Update Profile
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Update Profile</h2>

            <div className="mb-3">
              <label className="text-xs text-gray-400">Email (readonly)</label>
              <input
                value={user.email}
                readOnly
                className="w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-400 cursor-not-allowed"
              />
            </div>

            <div className="mb-3">
              <label className="text-xs text-gray-500">Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
              />
            </div>

            <div className="mb-5">
              <label className="text-xs text-gray-500">Photo URL</label>
              <input
                value={form.photo}
                onChange={(e) => setForm({ ...form, photo: e.target.value })}
                placeholder="https://..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 border border-gray-300 text-gray-600 py-2 rounded-lg text-sm hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}