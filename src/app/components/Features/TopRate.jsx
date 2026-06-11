"use client"

import { useState, useEffect } from "react";
import PhotoCard from "@/components/PhotoCard";

export default function TopRatedPage() {
  const [doctors, setDoctors] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/alldoctor")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        setFiltered(data);
      });
  }, []);

  // ✅ SearchBar থেকে search পাবে
  const handleSearch = ({ query, specialty }) => {
    const result = doctors.filter((doc) => {
      const matchName = doc.name.toLowerCase().includes(query.toLowerCase());
      const matchSpecialty = specialty === "" || doc.specialty === specialty;
      return matchName && matchSpecialty;
    });
    setFiltered(result);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
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