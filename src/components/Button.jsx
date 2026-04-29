import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  loading = false, 
  disabled = false, 
  icon,
  iconRight,
  className = '',
  style = {},
  size = 'md',
  fullWidth = true
}) {
  const sizes = {
    sm: { height: '40px', fontSize: '13px', padding: '0 16px', borderRadius: 'var(--radius-md)' },
    md: { height: '52px', fontSize: '15px', padding: '0 24px', borderRadius: 'var(--radius-lg)' },
    lg: { height: '56px', fontSize: '16px', padding: '0 32px', borderRadius: 'var(--radius-lg)' },
  };

  const variants = {
    primary: {
      background: 'var(--gradient-primary)',
      color: '#FFFFFF',
      border: 'none',
      boxShadow: '0 4px 20px var(--primary-glow)',
    },
    accent: {
      background: 'var(--gradient-saffron)',
      color: '#FFFFFF',
      border: 'none',
      boxShadow: '0 4px 20px var(--accent-glow)',
    },
    secondary: {
      background: 'var(--bg-card)',
      color: 'var(--text-primary)',
      border: '1.5px solid var(--border-primary)',
      backdropFilter: 'blur(16px)',
      boxShadow: 'var(--shadow-sm)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--primary)',
      border: '1.5px solid var(--primary)',
      boxShadow: 'none',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: 'none',
      boxShadow: 'none',
    },
    danger: {
      background: 'linear-gradient(135deg, #EF4444, #DC2626)',
      color: '#FFFFFF',
      border: 'none',
      boxShadow: '0 4px 20px rgba(239,68,68,0.25)',
    },
    success: {
      background: 'var(--gradient-success)',
      color: '#FFFFFF',
      border: 'none',
      boxShadow: '0 4px 20px rgba(16,185,129,0.25)',
    },
  };

  const sizeStyle = sizes[size] || sizes.md;
  const variantStyle = variants[variant] || variants.primary;

  return (
    <button
      className={className}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled || loading}
      style={{
        width: fullWidth ? '100%' : 'auto',
        fontFamily: "'Inter', sans-serif",
        fontWeight: 650,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'all var(--duration-fast) var(--ease-smooth)',
        letterSpacing: '0.01em',
        ...sizeStyle,
        ...variantStyle,
        ...(disabled ? { filter: 'grayscale(0.5)' } : {}),
        ...style,
      }}
      onMouseDown={e => { if (!disabled) e.currentTarget.style.transform = 'scale(0.97)'; }}
      onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
      onTouchStart={e => { if (!disabled) e.currentTarget.style.transform = 'scale(0.97)'; }}
      onTouchEnd={e => { e.currentTarget.style.transform = 'scale(1)'; }}
    >
      {loading ? (
        <span style={{
          display: 'inline-block', width: '20px', height: '20px',
          border: '2.5px solid rgba(255,255,255,0.3)', borderTopColor: '#FFF',
          borderRadius: '50%', animation: 'spin 0.7s linear infinite'
        }} />
      ) : (
        <>
          {icon && <span style={{ display: 'flex', flexShrink: 0 }}>{icon}</span>}
          <span>{children}</span>
          {iconRight && <span style={{ display: 'flex', flexShrink: 0 }}>{iconRight}</span>}
        </>
      )}
    </button>
  );
}
