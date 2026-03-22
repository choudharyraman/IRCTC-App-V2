import React, { useState } from 'react';

export default function IconButton({ icon, onClick, label }) {
  const [pressed, setPressed] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <button
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
        onTouchStart={() => setPressed(true)}
        onTouchEnd={() => setPressed(false)}
        onClick={onClick}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'var(--bg-page)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--accent-primary)',
          boxShadow: pressed ? 'var(--shadow-active)' : '5px 5px 10px var(--shadow-dark), -5px -5px 10px var(--shadow-light)',
          transform: pressed ? 'scale(0.96)' : 'scale(1)',
          transition: 'box-shadow 0.15s ease, transform 0.1s ease'
        }}
      >
        {icon}
      </button>
      {label && (
        <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 500 }}>
          {label}
        </span>
      )}
    </div>
  );
}
