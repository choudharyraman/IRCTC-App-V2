import React from 'react';

export default function Button({ children, variant = 'default', className = '', onClick, type = 'button', icon }) {
  // Variants: 'default', 'primary' (saffron), 'success' (green), 'icon'
  let btnClass = 'neu-btn';
  
  if (variant === 'primary') btnClass += ' neu-btn-primary';
  if (variant === 'success') btnClass += ' neu-btn-success';
  if (variant === 'icon') btnClass = 'neu-btn neu-icon-btn';
  
  return (
    <button 
      className={`${btnClass} ${className}`}
      onClick={onClick}
      type={type}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
}
