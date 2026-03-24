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

  const inputStyle = {
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    height: '56px',
    padding: icon ? '0 16px 0 48px' : '0 16px',
    fontSize: '16px',
    color: 'var(--text-primary)',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    width: '100%',
    outline: 'none',
    boxShadow: error 
      ? '0 0 0 2px var(--error)'
      : focused 
        ? '0 0 0 2px var(--accent-primary)'
        : 'none',
    border: error 
      ? '1px solid transparent' 
      : focused ? '1px solid transparent' : '1px solid var(--glass-border)'
  };

  return (
    <div style={containerStyle}>
      {label && (
        <label style={{ 
          fontSize: focused || value ? '12px' : '16px', 
          fontWeight: 600, 
          color: focused ? 'var(--accent-primary)' : 'var(--text-secondary)',
          transition: 'all 0.2s ease',
          marginBottom: '4px'
        }}>
          {label}
        </label>
      )}
      
      <div style={{ position: 'relative' }}>
        {icon && (
          <span style={{ 
             position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', 
             color: focused ? 'var(--accent-primary)' : 'var(--text-secondary)', 
             display: 'flex', transition: 'color 0.2s ease' 
          }}>
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
          className="glass-input"
        />
      </div>

      {error ? (
        <span style={{ fontSize: '12px', color: 'var(--error)', fontWeight: 500 }}>{error}</span>
      ) : hint ? (
        <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 500 }}>{hint}</span>
      ) : null}
    </div>
  );
}
