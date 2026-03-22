import React, { useState } from 'react';

export default function Input({ 
  type = 'text', 
  label, 
  value, 
  onChange, 
  placeholder, 
  icon, 
  error, 
  hint 
}) {
  const [focused, setFocused] = useState(false);

  const containerStyle = {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  };

  // Injecting inline styles here to precisely match spec
  const inputStyle = {
    background: 'var(--bg-page)',
    border: 'none',
    borderRadius: '8px',
    height: '56px',
    padding: icon ? '0 16px 0 48px' : '0 16px',
    fontSize: '16px',
    color: 'var(--text-primary)',
    transition: 'box-shadow 0.2s ease, border 0.2s ease',
    width: '100%',
    outline: 'none',
    boxShadow: error 
      ? 'inset 3px 3px 7px #E8B4B4, inset -3px -3px 7px var(--shadow-light)'
      : focused 
        ? 'inset 4px 4px 9px var(--shadow-dark), inset -4px -4px 9px var(--shadow-light)'
        : 'var(--shadow-sunken)',
    borderLeft: error 
      ? '2px solid var(--error)' 
      : focused ? '2px solid var(--accent-primary)' : 'none'
  };

  return (
    <div style={containerStyle}>
      {label && (
        <label style={{ 
          fontSize: focused || value ? '12px' : '16px', 
          fontWeight: 500, 
          color: focused ? 'var(--accent-primary)' : 'var(--text-secondary)',
          transition: 'all 0.2s ease',
          marginBottom: '4px'
        }}>
          {label}
        </label>
      )}
      
      <div style={{ position: 'relative' }}>
        {icon && (
          <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)', display: 'flex' }}>
            {icon}
          </span>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={inputStyle}
        />
      </div>

      {error ? (
        <span style={{ fontSize: '12px', color: 'var(--error)' }}>{error}</span>
      ) : hint ? (
        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{hint}</span>
      ) : null}
    </div>
  );
}
