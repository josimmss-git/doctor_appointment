"use client"

import { useState, useEffect } from "react";
import PhotoCard from "./Features/PhotoCard";
import SearchBar from "./SearchBar";

export default function DoctorSection() {
  const [doctors, setDoctors] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [showAll, setShowAll] = useState(false); // ✅ সব দেখানোর জন্য

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch("/api/doctors");
        const data = await res.json();

        // ✅ Rating অনুযায়ী sort করে top 3 নিন
        const top3 = [...data]
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 3);

        setDoctors(data);
        setFiltered(top3);  // ✅ শুরুতে top 3 দেখাবে
        const unique = [...new Set(data.map((doc) => doc.specialty))];
        setSpecialties(unique);
      } catch (err) {
        console.log("Fetch Error:", err);
      }
    };

    fetchDoctors();
  }, []);

  // ✅ Search করলে সব doctor এ filter করবে
  const handleSearch = ({ query, specialty }) => {
    const result = doctors.filter((doc) => {
      const matchName = doc.name.toLowerCase().includes(query.toLowerCase());
      const matchSpecialty = specialty === "" || doc.specialty === specialty;
      return matchName && matchSpecialty;
    });
    setFiltered(result);
    setShowAll(true); // search করলে সব দেখাবে
  };

  // ✅ See All button click করলে
  const handleSeeAll = () => {
    setFiltered(doctors);
    setShowAll(true);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* Title */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          {showAll ? "All Doctors" : "⭐ Top Rated Doctors"}
        </h2>
        {/* ✅ See All button — showAll হলে লুকাবে */}
        {!showAll && (
          <button
            onClick={handleSeeAll}
            className="text-blue-600 hover:underline cursor-pointer font-medium"
          >
            See All →
          </button>
        )}
      </div>

      {/* SearchBar */}
      <SearchBar onSearch={handleSearch} specialties={specialties} />

      {/* Cards */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-400 mt-20 text-lg">
          😔 কোনো Doctor পাওয়া যায়নি
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((doctor) => (
            <PhotoCard key={doctor._id} photo={doctor} />
          ))}
        </div>
      )}
    </div>
  );
}