import React, { useState, useEffect } from 'react';
import { 
  MapPin, Calendar, Utensils, AlertTriangle, CreditCard, Search, 
  ArrowRight, Train, Shield, Moon, Sun, Ticket, Bell, ChevronRight,
  Wallet, ArrowUpDown, Clock, Sparkles, Zap, Star, TrendingUp,
  Navigation, FileText, Smartphone
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function DashboardScreen() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(document.body.getAttribute('data-theme') || 'dark');
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  // Promotional banners
  const promos = [
    { title: 'Tatkal Bookings', subtitle: 'Book faster with auto-fill', gradient: 'linear-gradient(135deg, #FF6B35, #F7931A)', icon: Zap },
    { title: 'Travel Insurance', subtitle: 'Protect your journey for ₹35', gradient: 'linear-gradient(135deg, #10B981, #059669)', icon: Shield },
    { title: 'Refer & Earn', subtitle: 'Get ₹100 for each referral', gradient: 'linear-gradient(135deg, #8B5CF6, #6366F1)', icon: Star },
  ];

  const [promoIndex, setPromoIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setPromoIndex(i => (i + 1) % promos.length), 4000);
    return () => clearInterval(timer);
  }, []);

  // Quick Actions grid
  const quickActions = [
    { icon: Search, label: 'PNR Status', color: '#F59E0B', bg: 'rgba(245,158,11,0.12)', path: '/pnr' },
    { icon: Navigation, label: 'Live Track', color: '#10B981', bg: 'rgba(16,185,129,0.12)', path: '/live' },
    { icon: Utensils, label: 'Food', color: '#EF4444', bg: 'rgba(239,68,68,0.12)', path: '/food' },
    { icon: CreditCard, label: 'R-Wallet', color: '#8B5CF6', bg: 'rgba(139,92,246,0.12)', path: '/wallet' },
    { icon: AlertTriangle, label: 'Rail Madad', color: '#F43F5E', bg: 'rgba(244,63,94,0.12)', path: '/madad' },
    { icon: Shield, label: 'UTS', color: '#3B82F6', bg: 'rgba(59,130,246,0.12)', path: '/uts' },
    { icon: Smartphone, label: 'Recharge', color: '#06B6D4', bg: 'rgba(6,182,212,0.12)', path: '/recharge' },
    { icon: FileText, label: 'Bookings', color: '#6366F1', bg: 'rgba(99,102,241,0.12)', path: '/bookings' },
  ];

  return (
    <div className="screen-wrapper" style={{ paddingBottom: '90px' }}>

      {/* ─── HEADER ─────────────────────────────────────── */}
      <div className="flex-row items-center justify-between mb-6" style={{ animation: 'slideDown 0.4s var(--ease-spring)' }}>
        <div className="flex-row items-center gap-3">
          <div style={{ 
            width: '44px', height: '44px', borderRadius: '50%', overflow: 'hidden', 
            border: '2px solid var(--primary)', padding: '2px',
            boxShadow: '0 0 20px var(--primary-glow)',
          }}>
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
          </div>
          <div className="flex-col">
            <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Welcome back</span>
            <h2 style={{ fontSize: '17px', margin: 0, fontWeight: 700 }}>Arjun Sharma</h2>
          </div>
        </div>
        
        <div className="flex-row items-center gap-2">
          <button onClick={() => {}} className="icon-btn" style={{ position: 'relative' }}>
            <Bell size={20} />
            <span style={{ position: 'absolute', top: '8px', right: '8px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--error)', border: '2px solid var(--bg-primary)' }} />
          </button>
          <button onClick={toggleTheme} className="icon-btn">
            {isDark ? <Sun size={20} color="#FCD34D" /> : <Moon size={20} />}
          </button>
        </div>
      </div>

      {/* ─── HERO SEARCH CARD ───────────────────────────── */}
      <div 
        onClick={() => navigate('/search')}
        className="glass-card-interactive"
        style={{ 
          background: 'var(--gradient-primary)', 
          borderRadius: 'var(--radius-2xl)', 
          padding: '24px',
          marginBottom: '20px',
          border: 'none',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 8px 32px var(--primary-glow)',
          transition: 'transform var(--duration-fast) var(--ease-spring)',
        }}
        onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
        onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {/* Decorative circles */}
        <div style={{ position: 'absolute', right: '-30px', top: '-30px', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        <div style={{ position: 'absolute', right: '40px', bottom: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
        
        <div className="flex-row items-center justify-between mb-3" style={{ position: 'relative', zIndex: 1 }}>
          <div className="flex-row items-center gap-2">
            <Train size={20} color="#FFF" />
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase', letterSpacing: '1px' }}>Book Tickets</span>
          </div>
          <div style={{ 
            background: 'rgba(255,255,255,0.15)', padding: '6px 12px', borderRadius: 'var(--radius-full)',
            fontSize: '11px', fontWeight: 600, color: '#FFF',
          }}>
            <Sparkles size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
            10,000+ Routes
          </div>
        </div>

        {/* Search Preview */}
        <div style={{ 
          background: 'rgba(255,255,255,0.12)', borderRadius: 'var(--radius-lg)', 
          padding: '16px', position: 'relative', zIndex: 1, backdropFilter: 'blur(8px)',
        }}>
          <div className="flex-row items-center gap-3">
            <div style={{ flex: 1 }}>
              <div className="flex-row items-center gap-2 mb-2">
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FCD34D' }} />
                <span style={{ fontSize: '15px', fontWeight: 600, color: '#FFF' }}>Where from?</span>
              </div>
              <div className="flex-row items-center gap-2">
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34D399' }} />
                <span style={{ fontSize: '15px', fontWeight: 600, color: '#FFF' }}>Where to?</span>
              </div>
            </div>
            <div style={{
              width: '44px', height: '44px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
            }}>
              <Search size={20} color="#FFF" />
            </div>
          </div>
        </div>
      </div>

      {/* ─── QUICK ACTIONS ──────────────────────────────── */}
      <div className="mb-6">
        <div className="flex-row items-center justify-between mb-4">
          <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0 }}>Quick Actions</h3>
          <span style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: 600, cursor: 'pointer' }}>View All</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }} className="stagger">
          {quickActions.map((action, i) => {
            const Icon = action.icon;
            return (
              <div 
                key={i}
                onClick={() => navigate(action.path)}
                style={{ 
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
                  cursor: 'pointer', padding: '12px 4px',
                  transition: 'transform var(--duration-fast)',
                }}
                onMouseDown={e => e.currentTarget.style.transform = 'scale(0.92)'}
                onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div style={{
                  width: '48px', height: '48px', borderRadius: 'var(--radius-lg)',
                  background: action.bg, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  transition: 'all var(--duration-fast)',
                }}>
                  <Icon size={22} color={action.color} strokeWidth={1.8} />
                </div>
                <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-secondary)', textAlign: 'center', lineHeight: '1.2' }}>
                  {action.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── PROMO BANNER ───────────────────────────────── */}
      <div style={{ marginBottom: '24px' }}>
        <div 
          style={{
            background: promos[promoIndex].gradient,
            borderRadius: 'var(--radius-xl)',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform var(--duration-fast)',
          }}
          onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
          onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
          <div style={{
            width: '48px', height: '48px', borderRadius: 'var(--radius-lg)',
            background: 'rgba(255,255,255,0.2)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            {React.createElement(promos[promoIndex].icon, { size: 24, color: '#FFF' })}
          </div>
          <div style={{ flex: 1, zIndex: 1 }}>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#FFF', margin: '0 0 4px 0' }}>{promos[promoIndex].title}</h4>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.85)', margin: 0 }}>{promos[promoIndex].subtitle}</p>
          </div>
          <ChevronRight size={20} color="rgba(255,255,255,0.6)" />
        </div>
        {/* Dots */}
        <div className="flex-row justify-center gap-2 mt-3">
          {promos.map((_, i) => (
            <div key={i} style={{
              width: i === promoIndex ? '20px' : '6px', height: '6px',
              borderRadius: 'var(--radius-full)',
              background: i === promoIndex ? 'var(--primary)' : 'var(--border-primary)',
              transition: 'all var(--duration-normal) var(--ease-spring)',
            }} />
          ))}
        </div>
      </div>

      {/* ─── ACTIVE BOOKING CARD ────────────────────────── */}
      <div className="mb-6">
        <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 12px 0' }}>Active Journey</h3>
        <div 
          className="glass-card glass-card-interactive"
          onClick={() => navigate('/live')}
          style={{ padding: '16px', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ 
            position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px',
            background: 'var(--gradient-success)', borderRadius: '0 4px 4px 0',
          }} />
          
          <div className="flex-row items-center justify-between mb-3">
            <div className="flex-row items-center gap-2">
              <span className="badge badge-success">
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--success)' }} />
                On Time
              </span>
              <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: 500 }}>12951 • Rajdhani Express</span>
            </div>
          </div>

          <div className="flex-row items-center justify-between">
            <div className="flex-col items-start">
              <span style={{ fontSize: '22px', fontWeight: 800, fontFamily: "'Outfit', sans-serif" }}>MMCT</span>
              <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>17:00</span>
            </div>
            <div className="flex-col items-center" style={{ flex: 1, padding: '0 12px' }}>
              <span style={{ fontSize: '10px', color: 'var(--text-tertiary)', marginBottom: '4px' }}>15h 32m</span>
              <div style={{ width: '100%', height: '2px', background: 'var(--border-primary)', borderRadius: '1px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '35%', top: '-3px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--success)', boxShadow: '0 0 8px rgba(16,185,129,0.5)' }} />
              </div>
              <span style={{ fontSize: '10px', color: 'var(--success)', marginTop: '4px', fontWeight: 600 }}>105 km/h</span>
            </div>
            <div className="flex-col items-end">
              <span style={{ fontSize: '22px', fontWeight: 800, fontFamily: "'Outfit', sans-serif" }}>NDLS</span>
              <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>08:32</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── WALLET BALANCE ─────────────────────────────── */}
      <div 
        className="glass-card glass-card-interactive mb-6"
        onClick={() => navigate('/wallet')}
        style={{ padding: '16px' }}
      >
        <div className="flex-row items-center justify-between">
          <div className="flex-row items-center gap-3">
            <div style={{
              width: '44px', height: '44px', borderRadius: 'var(--radius-lg)',
              background: 'rgba(139,92,246,0.12)', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
            }}>
              <Wallet size={22} color="#8B5CF6" />
            </div>
            <div className="flex-col">
              <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: 500 }}>R-Wallet Balance</span>
              <span style={{ fontSize: '20px', fontWeight: 800, fontFamily: "'Outfit', sans-serif" }}>₹4,500</span>
            </div>
          </div>
          <div style={{
            padding: '8px 16px', borderRadius: 'var(--radius-full)',
            background: 'var(--primary-glow)', color: 'var(--primary)',
            fontSize: '13px', fontWeight: 650,
          }}>
            + Add
          </div>
        </div>
      </div>

      {/* ─── TRENDING ROUTES ────────────────────────────── */}
      <div>
        <div className="flex-row items-center gap-2 mb-3">
          <TrendingUp size={16} color="var(--accent)" />
          <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0 }}>Trending Routes</h3>
        </div>
        <div className="flex-col gap-3 stagger">
          {[
            { from: 'New Delhi', to: 'Mumbai', price: '₹1,765', trains: '42 trains' },
            { from: 'Bengaluru', to: 'Chennai', price: '₹450', trains: '38 trains' },
            { from: 'Kolkata', to: 'Delhi', price: '₹1,250', trains: '28 trains' },
          ].map((route, i) => (
            <div 
              key={i}
              className="glass-card glass-card-interactive"
              onClick={() => navigate('/trains')}
              style={{ padding: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}
            >
              <div style={{
                width: '40px', height: '40px', borderRadius: 'var(--radius-md)',
                background: `hsl(${220 + i * 30}, 70%, 95%)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Train size={18} color={`hsl(${220 + i * 30}, 70%, 50%)`} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: 600 }}>{route.from} → {route.to}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>{route.trains} available</div>
              </div>
              <div className="flex-col items-end">
                <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--primary)' }}>{route.price}</span>
                <span style={{ fontSize: '10px', color: 'var(--text-tertiary)' }}>onwards</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="home" />
    </div>
  );
}
