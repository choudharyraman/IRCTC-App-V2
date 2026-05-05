import React from 'react';

export default function TravelLogo({ className = '', style = {}, color = '#000' }) {
  // Using an abstract icon to simulate the one in the reference image
  return (
    <div className={`flex flex-col items-center justify-center ${className}`} style={style}>
      <div className="flex items-center">
        <span style={{ fontSize: '32px', fontWeight: 800, color: color, fontFamily: "'Outfit', sans-serif", letterSpacing: '2px' }}>
          TRAVEL
        </span>
        <svg width="24" height="32" viewBox="0 0 24 32" fill="none" style={{ marginLeft: '4px', marginTop: '-8px' }}>
          <path d="M4 28V8L16 2L20 8V28" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 16H20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 28V16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {/* Decorative curved underline */}
      <svg width="120" height="12" viewBox="0 0 120 12" fill="none" style={{ marginTop: '-4px' }}>
        <path d="M10 8 Q 60 -4 110 8" stroke="#FCD34D" strokeWidth="3" strokeLinecap="round"/>
        <path d="M10 8 Q 60 -4 110 8" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/>
        <defs>
          <linearGradient id="paint0_linear" x1="10" y1="8" x2="110" y2="8" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F59E0B" />
            <stop offset="1" stopColor="#EF4444" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
