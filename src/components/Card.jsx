import React from 'react';

export default function Card({ children, className = '', style = {}, onClick, variant = 'default', glow = false }) {
  const baseClass = onClick ? 'glass-card glass-card-interactive' : 'glass-card';
  const glowStyle = glow ? { boxShadow: '0 0 30px var(--primary-glow), var(--shadow-md)' } : {};

  return (
    <div 
      className={`${baseClass} ${className}`} 
      style={{ padding: 'var(--space-md)', ...glowStyle, ...style }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
