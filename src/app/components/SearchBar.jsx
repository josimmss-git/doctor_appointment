"use client"

import { useState } from "react";

export default function SearchBar({ onSearch, specialties = [] }) {
  const [query, setQuery] = useState("");
  const [specialty, setSpecialty] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.({ query: value, specialty });
  };

  const handleSpecialty = (e) => {
    const value = e.target.value;
    setSpecialty(value);
    onSearch?.({ query, specialty: value });
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 max-w-6xl mx-auto px-6 mb-4">
      <input
        type="text"
        placeholder="🔍 Doctor এর নাম লিখুন..."
        value={query}
        onChange={handleSearch}
        className="border rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <select
        value={specialty}
        onChange={handleSpecialty}
        className="border rounded-xl px-4 py-3 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
      >
        <option value="">All Specialties</option>
        {specialties.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
    </div>
  );
}