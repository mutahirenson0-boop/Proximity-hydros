import { useState } from "react";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="bg-white rounded-xl shadow-2xl p-4 w-64 border border-gray-100">
          <div className="flex justify-between items-start mb-3">
            <p className="font-bold text-sm uppercase">Chat with Us</p>
            <button
              onClick={() => setOpen(false)}
              className="font-bold text-gray-400"
            >
              X
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Hello! How can we help you today?
          </p>
          <a
            href="https://wa.me/254710441076"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 text-white text-center py-2 rounded-lg text-sm font-bold hover:bg-green-600"
          >
            Open WhatsApp Chat
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all relative"
      >
        <span className="text-white font-bold text-lg">WA</span>
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25"></span>
      </button>
    </div>
  );
}