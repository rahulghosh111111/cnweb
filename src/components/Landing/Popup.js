import React from "react";
import Link from "next/link";

const Popup = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
    <div
      className="relative rounded-3xl shadow-2xl w-full max-w-xl flex flex-col items-center border-2 border-orange-600 animate-pop px-8 py-10"
      style={{
        background: "rgba(20,20,20,0.75)",
        backdropFilter: "blur(18px) saturate(160%)",
        WebkitBackdropFilter: "blur(18px) saturate(160%)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      }}
    >
      <button
        className="absolute top-4 right-4 text-gray-400 hover:text-orange-400 text-3xl font-bold transition cursor-pointer"
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>
      <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-2 text-center drop-shadow-lg tracking-wide bungee-font">
        पंजीकरण फॉर्म
      </h2>
      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center tracking-wide">
        Registration Form
      </h3>
      <p className="text-lg sm:text-xl text-gray-200 mb-8 text-center max-w-lg">
        Unlock your potential. Join Coding Ninjas KIIT and be part of something
        amazing!
        <br />
        अपनी क्षमता को उजागर करें। Coding Ninjas KIIT से जुड़ें और कुछ अद्भुत का
        हिस्सा बनें!
      </p>
      <Link
        href="/recruitment2025"
        className="inline-block px-12 py-4 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-bold text-xl rounded-full shadow-xl hover:scale-105 hover:from-orange-600 hover:to-orange-800 transition-all duration-200 focus:ring-4 focus:ring-orange-400 focus:outline-none cursor-pointer"
      >
        Register Now / अभी रजिस्टर करें
      </Link>
    </div>
    <style jsx global>{`
      @keyframes pop {
        0% {
          transform: scale(0.8);
          opacity: 0;
        }
        80% {
          transform: scale(1.05);
          opacity: 1;
        }
        100% {
          transform: scale(1);
        }
      }
      .animate-pop {
        animation: pop 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      }
      .bungee-font {
        font-family: "Bungee", cursive, sans-serif;
      }
    `}</style>
  </div>
);

export default Popup;
