"use client";

import { useEffect } from 'react';

function AIBotIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14" fill="#0A66C2" />
      <ellipse cx="16" cy="20" rx="8" ry="5" fill="#fff" />
      <circle cx="12" cy="15" r="2" fill="#fff" />
      <circle cx="20" cy="15" r="2" fill="#fff" />
      <rect x="14" y="10" width="4" height="2" rx="1" fill="#fff" />
      <rect x="10" y="23" width="12" height="2" rx="1" fill="#fff" />
    </svg>
  );
}

export function ToggleButton({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  // Optional: focus trap or accessibility
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <button
      aria-label={isOpen ? 'Close sidebar' : 'Open AI Assistant'}
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center transition-all duration-200 focus:outline-none"
    >
      {isOpen ? (
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" /></svg>
      ) : (
        <AIBotIcon />
      )}
    </button>
  );
} 