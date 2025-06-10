'use client';
import React from 'react';

const redirectButton = () => {
    window.location.href = '/events';
};

export default function Button({ children }) {
  return (
    <button  onClick= {redirectButton} className="bg-[#b84f2e] hover:bg-[#e06a3c] text-white px-6 py-2 rounded-lg font-bold text-lg shadow transition-all duration-200">
      {children}
    </button>
  );
}
