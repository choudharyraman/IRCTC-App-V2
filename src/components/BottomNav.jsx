import React from 'react';
import { Home, Ticket, Wallet, User, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BottomNav({ active = 'home' }) {
  const navigate = useNavigate();

  const items = [
    { id: 'home', icon: Home, label: 'Home', path: '/dashboard' },
    { id: 'search', icon: Search, label: 'Search', path: '/search' },
    { id: 'bookings', icon: Ticket, label: 'Bookings', path: '/bookings' },
    { id: 'wallet', icon: Wallet, label: 'Wallet', path: '/wallet' },
    { id: 'profile', icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'calc(100% - 48px)',
      maxWidth: '400px',
      background: 'var(--bg-card)',
      border: '1px solid var(--border-primary)',
      borderRadius: 'var(--radius-full)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 24px',
      zIndex: 100,
      boxShadow: 'var(--shadow-lg)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)'
    }}>
      {items.map(item => {
        const isActive = active === item.id;
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            onClick={() => navigate(item.path)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              gap: '4px'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all var(--duration-fast)',
              color: isActive ? 'var(--primary)' : 'var(--text-tertiary)'
            }}>
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            </div>
            {isActive && (
              <div style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: 'var(--primary)',
                boxShadow: '0 0 8px var(--primary-glow)'
              }} />
            )}
          </div>
        );
      })}
    </div>
  );
}
