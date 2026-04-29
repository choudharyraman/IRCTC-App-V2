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
    <div className="has-sidebar">
    <div className="screen-wrapper" style={{ paddingBottom: 'clamp(80px, 8vw, 40px)' }}>

      {/* ─── HEADER ─────────────────────────────────────── */}
      <div className="flex-row items-center justify-between mb-6" style={{ animation: 'slideDown 0.4s var(--ease-spring)' }}>
        <div className="flex-row items-center gap-3">
          <div style={{ 
            width: 'clamp(40px, 3vw, 52px)', height: 'clamp(40px, 3vw, 52px)', borderRadius: '50%', overflow: 'hidden', 
            border: '2px solid var(--primary)', padding: '2px',
            boxShadow: '0 0 20px var(--primary-glow)',
          }}>
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
          </div>
          <div className="flex-col">
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Welcome back</span>
            <h2 style={{ fontSize: 'var(--text-md)', margin: 0, fontWeight: 700 }}>Arjun Sharma</h2>
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
          padding: 'clamp(18px, 1.5vw, 32px)',
          marginBottom: 'var(--space-lg)',
          border: 'none', cursor: 'pointer',
          position: 'relative', overflow: 'hidden',
          boxShadow: '0 8px 32px var(--primary-glow)',
          transition: 'transform var(--duration-fast) var(--ease-spring)',
        }}
        onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
        onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <div style={{ position: 'absolute', right: '-30px', top: '-30px', width: 'clamp(80px, 8vw, 160px)', height: 'clamp(80px, 8vw, 160px)', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        <div style={{ position: 'absolute', right: '40px', bottom: '-20px', width: 'clamp(60px, 5vw, 100px)', height: 'clamp(60px, 5vw, 100px)', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
        
        <div className="flex-row items-center justify-between mb-3" style={{ position: 'relative', zIndex: 1 }}>
          <div className="flex-row items-center gap-2">
            <Train size={20} color="#FFF" />
            <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase', letterSpacing: '1px' }}>Book Tickets</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.15)', padding: 'clamp(4px, 0.4vw, 8px) clamp(8px, 0.8vw, 14px)', borderRadius: 'var(--radius-full)', fontSize: 'var(--text-xs)', fontWeight: 600, color: '#FFF' }}>
            <Sparkles size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
            10,000+ Routes
          </div>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)', position: 'relative', zIndex: 1, backdropFilter: 'blur(8px)' }}>
          <div className="flex-row items-center gap-3">
            <div style={{ flex: 1 }}>
              <div className="flex-row items-center gap-2 mb-2">
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FCD34D' }} />
                <span style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: '#FFF' }}>Where from?</span>
              </div>
              <div className="flex-row items-center gap-2">
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34D399' }} />
                <span style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: '#FFF' }}>Where to?</span>
              </div>
            </div>
            <div style={{
              width: 'clamp(40px, 3vw, 52px)', height: 'clamp(40px, 3vw, 52px)', borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Search size={20} color="#FFF" />
            </div>
          </div>
        </div>
      </div>

      {/* ─── QUICK ACTIONS ──────────────────────────────── */}
      <div className="mb-6">
        <div className="flex-row items-center justify-between mb-4">
          <h3 style={{ fontSize: 'var(--text-md)', fontWeight: 700, margin: 0 }}>Quick Actions</h3>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--primary)', fontWeight: 600, cursor: 'pointer' }}>View All</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(70px, 5vw, 100px), 1fr))', gap: 'var(--space-md)' }} className="stagger">
          {quickActions.map((action, i) => {
            const Icon = action.icon;
            return (
              <div 
                key={i}
                onClick={() => navigate(action.path)}
                style={{ 
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-sm)',
                  cursor: 'pointer', padding: 'var(--space-md) var(--space-xs)',
                  transition: 'transform var(--duration-fast)',
                }}
                onMouseDown={e => e.currentTarget.style.transform = 'scale(0.92)'}
                onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div style={{
                  width: 'clamp(44px, 3vw, 56px)', height: 'clamp(44px, 3vw, 56px)', borderRadius: 'var(--radius-lg)',
                  background: action.bg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all var(--duration-fast)',
                }}>
                  <Icon size={22} color={action.color} strokeWidth={1.8} />
                </div>
                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--text-secondary)', textAlign: 'center', lineHeight: '1.2' }}>
                  {action.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── TWO COLUMN SECTION (Desktop) ───────────────── */}
      <div className="desktop-two-col mb-6">
        {/* PROMO BANNER */}
        <div>
          <div 
            style={{
              background: promos[promoIndex].gradient, borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-lg)', display: 'flex', alignItems: 'center', gap: 'var(--space-md)',
              cursor: 'pointer', position: 'relative', overflow: 'hidden',
              transition: 'transform var(--duration-fast)',
              height: '100%',
            }}
            onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
            onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
            <div style={{
              width: 'clamp(44px, 3vw, 56px)', height: 'clamp(44px, 3vw, 56px)', borderRadius: 'var(--radius-lg)',
              background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              {React.createElement(promos[promoIndex].icon, { size: 24, color: '#FFF' })}
            </div>
            <div style={{ flex: 1, zIndex: 1 }}>
              <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: '#FFF', margin: '0 0 4px 0' }}>{promos[promoIndex].title}</h4>
              <p style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.85)', margin: 0 }}>{promos[promoIndex].subtitle}</p>
            </div>
            <ChevronRight size={20} color="rgba(255,255,255,0.6)" />
          </div>
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

        {/* WALLET BALANCE */}
        <div 
          className="glass-card glass-card-interactive"
          onClick={() => navigate('/wallet')}
          style={{ padding: 'var(--space-md)', display: 'flex', alignItems: 'center' }}
        >
          <div className="flex-row items-center justify-between w-full">
            <div className="flex-row items-center gap-3">
              <div style={{
                width: 'clamp(40px, 3vw, 52px)', height: 'clamp(40px, 3vw, 52px)', borderRadius: 'var(--radius-lg)',
                background: 'rgba(139,92,246,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Wallet size={22} color="#8B5CF6" />
              </div>
              <div className="flex-col">
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', fontWeight: 500 }}>R-Wallet Balance</span>
                <span style={{ fontSize: 'var(--text-xl)', fontWeight: 800, fontFamily: "'Outfit', sans-serif" }}>₹4,500</span>
              </div>
            </div>
            <div style={{
              padding: 'var(--space-sm) var(--space-md)', borderRadius: 'var(--radius-full)',
              background: 'var(--primary-glow)', color: 'var(--primary)',
              fontSize: 'var(--text-sm)', fontWeight: 650,
            }}>
              + Add
            </div>
          </div>
        </div>
      </div>

      {/* ─── ACTIVE BOOKING CARD ────────────────────────── */}
      <div className="mb-6">
        <h3 style={{ fontSize: 'var(--text-md)', fontWeight: 700, margin: '0 0 var(--space-md) 0' }}>Active Journey</h3>
        <div 
          className="glass-card glass-card-interactive"
          onClick={() => navigate('/live')}
          style={{ padding: 'var(--space-md)', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'var(--gradient-success)', borderRadius: '0 4px 4px 0' }} />
          
          <div className="flex-row items-center justify-between mb-3">
            <div className="flex-row items-center gap-2">
              <span className="badge badge-success">
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--success)' }} />
                On Time
              </span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', fontWeight: 500 }}>12951 • Rajdhani Express</span>
            </div>
          </div>

          <div className="flex-row items-center justify-between">
            <div className="flex-col items-start">
              <span style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, fontFamily: "'Outfit', sans-serif" }}>MMCT</span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>17:00</span>
            </div>
            <div className="flex-col items-center" style={{ flex: 1, padding: '0 var(--space-md)' }}>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginBottom: '4px' }}>15h 32m</span>
              <div style={{ width: '100%', height: '2px', background: 'var(--border-primary)', borderRadius: '1px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '35%', top: '-3px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--success)', boxShadow: '0 0 8px rgba(16,185,129,0.5)' }} />
              </div>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--success)', marginTop: '4px', fontWeight: 600 }}>105 km/h</span>
            </div>
            <div className="flex-col items-end">
              <span style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, fontFamily: "'Outfit', sans-serif" }}>NDLS</span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>08:32</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── TRENDING ROUTES ────────────────────────────── */}
      <div>
        <div className="flex-row items-center gap-2 mb-3">
          <TrendingUp size={16} color="var(--accent)" />
          <h3 style={{ fontSize: 'var(--text-md)', fontWeight: 700, margin: 0 }}>Trending Routes</h3>
        </div>
        <div className="desktop-three-col stagger">
          {[
            { from: 'New Delhi', to: 'Mumbai', price: '₹1,765', trains: '42 trains' },
            { from: 'Bengaluru', to: 'Chennai', price: '₹450', trains: '38 trains' },
            { from: 'Kolkata', to: 'Delhi', price: '₹1,250', trains: '28 trains' },
          ].map((route, i) => (
            <div 
              key={i}
              className="glass-card glass-card-interactive"
              onClick={() => navigate('/trains')}
              style={{ padding: 'var(--space-md)', display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}
            >
              <div style={{
                width: 'clamp(36px, 2.5vw, 48px)', height: 'clamp(36px, 2.5vw, 48px)', borderRadius: 'var(--radius-md)',
                background: `hsl(${220 + i * 30}, 70%, 95%)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Train size={18} color={`hsl(${220 + i * 30}, 70%, 50%)`} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 'var(--text-base)', fontWeight: 600 }}>{route.from} → {route.to}</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>{route.trains} available</div>
              </div>
              <div className="flex-col items-end">
                <span style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--primary)' }}>{route.price}</span>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>onwards</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="home" />
    </div>
    </div>
  );
}
