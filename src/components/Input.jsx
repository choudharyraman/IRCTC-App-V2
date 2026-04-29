import React, { useState } from 'react';

export default function Input({ 
  type = 'text', 
  label, 
  value, 
  onChange, 
  placeholder, 
  icon, 
  iconRight,
  error, 
  hint,
  className = '',
  style = {},
  ...rest
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className={className} style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', gap: '6px', ...style }}>
      {label && (
        <label style={{ 
          fontSize: '13px', 
          fontWeight: 600, 
          color: focused ? 'var(--primary)' : error ? 'var(--error)' : 'var(--text-secondary)',
          transition: 'color var(--duration-fast) var(--ease-smooth)',
          marginLeft: '4px'
        }}>
          {label}
        </label>
      )}
      
      <div style={{ position: 'relative' }}>
        {icon && (
          <span style={{ 
            position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', 
            color: focused ? 'var(--primary)' : 'var(--text-tertiary)', 
            display: 'flex', transition: 'color var(--duration-fast) var(--ease-smooth)',
            zIndex: 2
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
          style={{
            background: 'var(--bg-input)',
            borderRadius: 'var(--radius-md)',
            height: '52px',
            padding: icon ? '0 16px 0 48px' : '0 16px',
            paddingRight: iconRight ? '48px' : '16px',
            fontSize: '15px',
            fontFamily: "'Inter', sans-serif",
            color: 'var(--text-primary)',
            transition: 'all var(--duration-fast) var(--ease-smooth)',
            width: '100%',
            outline: 'none',
            border: error 
              ? '1.5px solid var(--error)' 
              : focused 
                ? '1.5px solid var(--primary)' 
                : '1.5px solid var(--border-primary)',
            boxShadow: focused ? '0 0 0 3px var(--primary-glow)' : 'none',
          }}
          {...rest}
        />
        {iconRight && (
          <span style={{ 
            position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', 
            color: 'var(--text-tertiary)', 
            display: 'flex', cursor: 'pointer',
            zIndex: 2
          }}>
            {iconRight}
          </span>
        )}
      </div>

      {error ? (
        <span style={{ fontSize: '12px', color: 'var(--error)', fontWeight: 500, marginLeft: '4px' }}>{error}</span>
      ) : hint ? (
        <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: 500, marginLeft: '4px' }}>{hint}</span>
      ) : null}
    </div>
  );
}
