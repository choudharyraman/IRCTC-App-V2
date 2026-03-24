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
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--glass-border)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-primary)',
          boxShadow: pressed ? 'none' : 'var(--glass-shadow)',
          transform: pressed ? 'scale(0.96)' : 'scale(1)',
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
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
