import React from 'react';
import { Home, Ticket, Wallet, User as UserIcon } from 'lucide-react';

export default function BottomNav({ active = 'home' }) {
  const items = [
    { id: 'home', icon: <Home size={24} />, label: 'Home' },
    { id: 'bookings', icon: <Ticket size={24} />, label: 'Bookings' },
    { id: 'wallet', icon: <Wallet size={24} />, label: 'R-Wallet' },
    { id: 'profile', icon: <UserIcon size={24} />, label: 'Profile' }
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      width: '100%',
      maxWidth: '420px',
      background: 'var(--bg-color)',
      borderTop: '1px solid rgba(255,255,255,0.4)',
      boxShadow: '0 -4px 12px rgba(184, 197, 214, 0.3)',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '0.75rem 0',
      zIndex: 100
    }}>
      {items.map(item => (
        <div key={item.id} className="flex-col items-center" style={{ cursor: 'pointer', color: active === item.id ? 'var(--text-dark)' : 'var(--text-light)' }}>
          {item.icon}
          <span style={{ fontSize: '0.75rem', marginTop: '0.25rem', fontWeight: active === item.id ? 600 : 400 }}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
