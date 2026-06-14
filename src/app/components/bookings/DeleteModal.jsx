export default function DeleteModal() {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl text-center">
        <p className="mb-4">Are you sure to delete?</p>

        <div className="flex gap-3 justify-center">
          <button className="px-4 py-2 bg-gray-300 rounded">
            Cancel
          </button>

          <button className="px-4 py-2 bg-red-500 text-white rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}