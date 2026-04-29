import React from 'react';
import { Home, Ticket, Wallet, User as UserIcon, Search, Train } from 'lucide-react';
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
    <>
      {/* ─── DESKTOP SIDEBAR (≥1024px) ────────────────── */}
      <nav className="sidebar-nav">
        {/* Brand */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          marginBottom: 'var(--space-xl)', padding: '8px 0',
        }}>
          <div style={{
            width: 'clamp(36px, 2.5vw, 44px)', height: 'clamp(36px, 2.5vw, 44px)',
            borderRadius: 'var(--radius-md)', background: 'var(--gradient-primary)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 16px var(--primary-glow)',
          }}>
            <Train size={22} color="#FFF" />
          </div>
          <div>
            <h1 style={{ fontSize: 'var(--text-lg)', fontWeight: 800, margin: 0, fontFamily: "'Outfit'" }}>RailOne</h1>
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>SuperApp</span>
          </div>
        </div>

        <span style={{
          fontSize: 'var(--text-xs)', fontWeight: 650, color: 'var(--text-tertiary)',
          textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px',
          paddingLeft: '12px',
        }}>
          Navigation
        </span>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
          {items.map(item => {
            const isActive = active === item.id;
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => navigate(item.path)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: 'clamp(10px, 0.8vw, 14px) clamp(12px, 1vw, 16px)',
                  borderRadius: 'var(--radius-md)', cursor: 'pointer',
                  background: isActive ? 'var(--primary-glow)' : 'transparent',
                  transition: 'all var(--duration-fast) var(--ease-smooth)',
                }}
                onMouseOver={e => { if (!isActive) e.currentTarget.style.background = 'var(--bg-input)'; }}
                onMouseOut={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
              >
                <Icon
                  size={20}
                  color={isActive ? 'var(--primary)' : 'var(--text-tertiary)'}
                  strokeWidth={isActive ? 2.5 : 1.8}
                />
                <span style={{
                  fontSize: 'var(--text-base)', fontWeight: isActive ? 650 : 500,
                  color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                }}>
                  {item.label}
                </span>
                {isActive && (
                  <div style={{
                    marginLeft: 'auto', width: '6px', height: '6px',
                    borderRadius: '50%', background: 'var(--primary)',
                    boxShadow: '0 0 8px var(--primary-glow)',
                  }} />
                )}
              </div>
            );
          })}
        </div>

        {/* Sidebar Footer */}
        <div style={{
          padding: '16px', background: 'var(--bg-input)',
          borderRadius: 'var(--radius-md)', marginTop: 'auto',
        }}>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', fontWeight: 500 }}>
            RailOne v2.0 • © 2026
          </span>
        </div>
      </nav>

      {/* ─── MOBILE/TABLET BOTTOM NAV (<1024px) ───────── */}
      <div className="bottom-nav" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-primary)',
        justifyContent: 'space-around', alignItems: 'center',
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
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                cursor: 'pointer', padding: '4px 12px',
                borderRadius: 'var(--radius-md)',
                transition: 'all var(--duration-fast) var(--ease-smooth)',
              }}
            >
              <div style={{
                width: '40px', height: '32px', borderRadius: 'var(--radius-lg)',
                background: isActive ? 'var(--primary-glow)' : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
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
                fontSize: '10px', fontWeight: isActive ? 700 : 500,
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
    </>
  );
}
