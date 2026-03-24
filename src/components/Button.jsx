import React, { useState } from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  loading = false, 
  disabled = false, 
  icon,
  className,
  style
}) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleClick = (e) => {
    if (loading || disabled) return;
    if (onClick) onClick(e);
  };

  const getStyle = () => {
    const base = {
       transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
       backdropFilter: 'blur(12px)',
       border: '1px solid transparent',
       transform: pressed ? 'scale(0.97)' : hovered ? 'scale(1.02)' : 'scale(1)',
    };

    if (disabled) {
      return { ...base, background: 'rgba(148, 163, 184, 0.5)', color: '#fff', cursor: 'not-allowed', opacity: 0.6 };
    }

    if (success) {
      return { ...base, background: 'var(--success)', color: '#FFFFFF' };
    }

    if (variant === 'primary') {
      return {
        ...base,
        background: hovered ? 'linear-gradient(135deg, #FFB057, #FFA23A)' : 'var(--accent-saffron)',
        color: '#FFFFFF',
        boxShadow: hovered ? '0 8px 24px -6px rgba(255, 153, 51, 0.5)' : '0 4px 12px -4px rgba(255, 153, 51, 0.3)',
      };
    }
    
    if (variant === 'secondary') {
       return {
         ...base,
         background: 'rgba(255, 255, 255, 0.1)',
         color: 'var(--text-primary)',
         border: '1px solid var(--glass-border)',
         boxShadow: hovered ? '0 8px 24px -6px rgba(0, 0, 0, 0.1)' : 'none',
       };
    }

    // Default variant (Glass surface)
    return {
      ...base,
      background: 'var(--glass-bg)',
      color: 'var(--text-primary)',
      border: '1px solid var(--glass-border)',
      boxShadow: hovered ? '0 8px 24px -8px rgba(0,0,0,0.1)' : '0 4px 12px -4px rgba(0,0,0,0.05)',
    };
  };

  return (
    <button
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      onClick={handleClick}
      disabled={disabled || loading}
      style={{
        height: '56px',
        width: '100%',
        borderRadius: '14px',
        fontSize: '16px',
        fontWeight: 600,
        fontFamily: 'Inter',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        cursor: (disabled || loading) ? 'not-allowed' : 'pointer',
        ...getStyle(),
        ...style
      }}
    >
      {loading ? (
        <span className="spinner" style={{
           display: 'inline-block', width: '20px', height: '20px', 
           border: '3px solid rgba(255,255,255,0.3)', borderTopColor: '#FFF', 
           borderRadius: '50%', animation: 'spin 0.8s linear infinite'
        }}></span>
      ) : icon ? (
        <>
          {icon}
          {children}
        </>
      ) : (
        children
      )}
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}} />
    </button>
  );
}
