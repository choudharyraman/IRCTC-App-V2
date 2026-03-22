import React from 'react';

export default function Input({ type = 'text', placeholder, value, onChange, className = '', icon }) {
  return (
    <div style={{ position: 'relative', width: '100%' }} className={className}>
      {icon && (
        <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dark)', display: 'flex' }}>
          {icon}
        </span>
      )}
      <input
        type={type}
        className="neu-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ paddingLeft: icon ? '48px' : '1.25rem' }}
      />
    </div>
  );
}
