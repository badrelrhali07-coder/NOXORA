"use client";

import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");

  return (
    <section className="px-8 py-10">

      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-6">
          🔍 Search NOXORA
        </h2>

        <div className="flex gap-4">

          <input
            type="text"
            placeholder="Search AI, technology, business..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 outline-none text-white"
          />

          <button
            className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition"
          >
            Search
          </button>

        </div>

      </div>

    </section>
  );
}