export default function Navbar() {
  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <input
        placeholder="Search doctor..."
        className="border px-4 py-2 rounded-lg w-1/3"
      /> 
      <img
        src="https://i.pravatar.cc/40"
        className="w-10 h-10 rounded-full"
      /> 
    </div>
  );
}