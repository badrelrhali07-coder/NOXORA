"use client";

import { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {open && (
        <div className="mb-4 w-80 rounded-3xl bg-black/80 backdrop-blur-xl border border-white/10 p-6 shadow-xl">

          <h3 className="text-xl font-bold mb-4">
            🤖 NOXORA AI
          </h3>

          <p className="text-gray-400 mb-4">
            Ask me about AI, technology and news.
          </p>

          <input
            type="text"
            placeholder="Write your question..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 outline-none text-white"
          />

          <button className="mt-4 w-full bg-white text-black py-3 rounded-full font-semibold">
            Send
          </button>

        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-16 h-16 rounded-full bg-white text-black text-2xl hover:scale-110 transition"
      >
        🤖
      </button>

    </div>
  );
}