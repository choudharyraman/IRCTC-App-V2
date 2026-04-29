import React from 'react';
import { Home, Ticket, Wallet, User as UserIcon, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BottomNav({ active = 'home' }) {
  const navigate = useNavigate();

  const items = [
    { id: 'home', icon: Home, label: 'Home', path: '/dashboard' },
    { id: 'search', icon: Search, label: 'Search', path: '/search' },
    { id: 'bookings', icon: Ticket, label: 'Bookings', path: '/bookings' },
    { id: 'wallet', icon: Wallet, label: 'Wallet', path: '/wallet' },
    { id: 'profile', icon: UserIcon, label: 'Profile', path: '/profile' },
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      maxWidth: '480px',
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border-primary)',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '8px 0',
      paddingBottom: 'calc(8px + env(safe-area-inset-bottom))',
      zIndex: 100,
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
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
              padding: '4px 12px',
              borderRadius: 'var(--radius-md)',
              transition: 'all var(--duration-fast) var(--ease-smooth)',
              position: 'relative',
            }}
          >
            <div style={{
              width: '40px',
              height: '32px',
              borderRadius: 'var(--radius-lg)',
              background: isActive ? 'var(--primary-glow)' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all var(--duration-normal) var(--ease-spring)',
              marginBottom: '2px',
            }}>
              <Icon 
                size={22} 
                color={isActive ? 'var(--primary)' : 'var(--text-tertiary)'} 
                strokeWidth={isActive ? 2.5 : 1.8}
              />
            </div>
            <span style={{ 
              fontSize: '10px', 
              fontWeight: isActive ? 700 : 500,
              color: isActive ? 'var(--primary)' : 'var(--text-tertiary)',
              transition: 'all var(--duration-fast) var(--ease-smooth)',
              letterSpacing: '0.02em',
            }}>
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
