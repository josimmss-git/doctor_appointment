"use client";

import { useState } from "react";
import PhotoCard from "@/app/components/Features/PhotoCard";

export default function DoctorList({ doctors }) {
  const [query, setQuery] = useState("");
  const [specialty, setSpecialty] = useState("");

 
  const specialties = [...new Set(doctors.map((d) => d.specialty))];

 
  const filtered = doctors.filter((doc) => {
    const matchName = doc.name.toLowerCase().includes(query.toLowerCase());
    const matchSpecialty = specialty === "" || doc.specialty === specialty;
    return matchName && matchSpecialty;
  });

  return (
    <div className="max-w-6xl mx-auto p-6">
      
      {/* 🔍 Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="🔍 Write Doctors Name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <select
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <option value="">All Specialty</option>
          {specialties.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* 📋 Doctor List */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-400 mt-20 text-lg">
          😔There is Unavailable
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