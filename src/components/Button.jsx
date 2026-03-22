import React, { useState } from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  loading = false, 
  disabled = false, 
  icon 
}) {
  const [pressed, setPressed] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle mock success animation for prototype
  const handleClick = (e) => {
    if (loading || disabled) return;
    
    // Pass original click
    if (onClick) onClick(e);
  };

  const getStyle = () => {
    if (disabled) {
      return {
        background: '#A0AEC0',
        boxShadow: 'none',
        color: '#FFFFFF',
        cursor: 'not-allowed',
        opacity: 0.7
      };
    }

    if (success) {
      return {
        background: 'var(--success)',
        color: '#FFFFFF',
        transform: 'scale(1.02)'
      };
    }

    if (variant === 'primary') {
      return {
        background: 'var(--accent-primary-gradient)',
        color: '#FFFFFF',
        boxShadow: pressed ? 'inset 2px 2px 6px rgba(0,0,0,0.2)' : '4px 4px 10px var(--shadow-dark), -2px -2px 6px var(--shadow-light)',
        transform: pressed ? 'scale(0.98)' : 'scale(1)'
      };
    }

    // Default variant (Standard raised button, matching background)
    return {
      background: 'var(--bg-page)',
      color: 'var(--text-primary)',
      boxShadow: pressed ? 'var(--shadow-active)' : 'var(--shadow-raised)',
      transform: pressed ? 'scale(0.98)' : 'scale(1)'
    };
  };

  return (
    <button
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      onClick={handleClick}
      disabled={disabled || loading}
      style={{
        height: '56px',
        width: '100%',
        borderRadius: '12px',
        border: 'none',
        fontSize: '16px',
        fontWeight: 600,
        fontFamily: 'Inter',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        cursor: (disabled || loading) ? 'not-allowed' : 'pointer',
        transition: 'all 0.15s ease-out',
        ...getStyle()
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
      
      {/* Inline style for the spinner keyframe */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}} />
    </button>
  );
}
