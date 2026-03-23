import React from 'react';
import { Home, Ticket, Wallet, User as UserIcon } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

export default function BottomNav({ active = 'home' }) {
  const navigate = useNavigate();

  const items = [
    { id: 'home', icon: <Home size={24} />, label: 'Home', path: '/dashboard' },
    { id: 'bookings', icon: <Ticket size={24} />, label: 'Bookings', path: '/bookings' },
    { id: 'wallet', icon: <Wallet size={24} />, label: 'R-Wallet', path: '/wallet' },
    { id: 'profile', icon: <UserIcon size={24} />, label: 'Profile', path: '/profile' }
  ];

  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      maxWidth: '640px',
      background: 'var(--bg-page)',
      borderTop: '1px solid rgba(184, 197, 214, 0.4)',
      boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '0.75rem 0',
      zIndex: 100
    }}>
      {items.map(item => (
        <div key={item.id} onClick={() => navigate(item.path)} className="flex-col items-center" style={{ cursor: 'pointer', color: active === item.id ? 'var(--accent-primary)' : 'var(--text-secondary)' }}>
          {item.icon}
          <span style={{ fontSize: '0.75rem', marginTop: '0.25rem', fontWeight: active === item.id ? 600 : 500 }}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
