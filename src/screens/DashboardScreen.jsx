import React, { useState, useEffect } from 'react';
import { 
  Search, Train, Moon, Sun, Bell, 
  Wallet, Sparkles, Navigation, Utensils, CreditCard, 
  AlertTriangle, Smartphone, FileText, PlaneTakeoff, Building,
  ChevronRight, Shield, ArrowUpDown, Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function DashboardScreen() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(document.body.getAttribute('data-theme') || 'dark');
  const isDark = theme === 'dark';
  const [transitMode, setTransitMode] = useState('trains');
  
  // Load dynamic user data
  const [user] = useState(() => {
    const saved = localStorage.getItem('railone_user');
    return saved ? JSON.parse(saved) : {
      name: 'Arjun Sharma',
      avatar: 'https://i.pravatar.cc/150?img=11'
    };
  });

  const toggleTheme = () => {
    const next = isDark ? 'light' : 'dark';
    setTheme(next);
    document.body.setAttribute('data-theme', next);
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const quickActions = [
    { icon: Search,       label: 'PNR Status',  color: '#F59E0B', path: '/pnr' },
    { icon: Navigation,   label: 'Live Track',  color: '#10B981', path: '/live' },
    { icon: Utensils,     label: 'Food',        color: '#EF4444', path: '/food' },
    { icon: CreditCard,   label: 'R-Wallet',    color: '#8B5CF6', path: '/wallet' },
    { icon: AlertTriangle,label: 'Rail Madad',  color: '#F43F5E', path: '/madad' },
    { icon: Shield,       label: 'UTS',         color: '#3B82F6', path: '/uts' },
    { icon: Smartphone,   label: 'Recharge',    color: '#06B6D4', path: '/recharge' },
    { icon: FileText,     label: 'Bookings',    color: '#8B5CF6', path: '/bookings' },
  ];

  const modesConfig = {
    trains:  { label: 'Trains',  icon: Train,       path: '/search' },
    flights: { label: 'Flights', icon: PlaneTakeoff, path: '/flights' },
    hotels:  { label: 'Hotels',  icon: Building,    path: '/hotels' },
    buses:   { label: 'Buses',   icon: ArrowUpDown,  path: '/buses' },
  };

  return (
    <div className="app-container">
      <div className="screen-wrapper animate-fade-in" style={{ paddingBottom: '100px' }}>

        {/* ── AURORA BACKGROUND ORBS ──────────────────────── */}
        <div className="aurora-orb" style={{
          width: '320px', height: '320px',
          background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)',
          top: '-80px', right: '-80px',
          animationDelay: '0s',
        }} />
        <div className="aurora-orb" style={{
          width: '240px', height: '240px',
          background: 'radial-gradient(circle, rgba(245,158,11,0.18) 0%, transparent 70%)',
          bottom: '200px', left: '-60px',
          animationDelay: '4.5s',
        }} />

        {/* ── HEADER ──────────────────────────────────────── */}
        <div className="flex-row items-center justify-between mb-8 animate-slide-up">
          <div 
            className="flex-row items-center gap-3 press-scale" 
            onClick={() => navigate('/profile')}
            style={{ cursor: 'pointer' }}
          >
            {/* Avatar with aurora ring */}
            <div style={{
              padding: '2.5px', borderRadius: '50%',
              background: 'var(--aurora-animated)', backgroundSize: '200% 200%',
              animation: 'aurora-flow 6s ease infinite',
              boxShadow: 'var(--shadow-aurora)',
            }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '50%',
                overflow: 'hidden', border: '2.5px solid var(--bg-primary)'
              }}>
                <img src={user.avatar} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div className="flex-col" style={{ gap: '1px' }}>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.6px' }}>Welcome back</span>
              <h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>{user.name}</h2>
            </div>
          </div>

          <div className="flex-row items-center gap-2">
            <button onClick={() => {}} className="icon-btn" style={{ position: 'relative' }}>
              <Bell size={19} />
              {/* Live notification dot */}
              <span style={{
                position: 'absolute', top: '9px', right: '10px',
                width: '8px', height: '8px', borderRadius: '50%',
                background: 'var(--accent)', boxShadow: '0 0 6px var(--accent-glow)',
                animation: 'ping-dot 2s ease-in-out infinite',
              }} />
            </button>
            <button onClick={toggleTheme} className="icon-btn">
              {isDark
                ? <Sun size={19} color="#FCD34D" />
                : <Moon size={19} />}
            </button>
          </div>
        </div>

        {/* ── TRANSIT MODE SELECTOR ───────────────────────── */}
        <div className="flex-row gap-2 mb-4" style={{ overflowX: 'auto', scrollbarWidth: 'none', paddingBottom: '2px' }}>
          {Object.entries(modesConfig).map(([id, cfg]) => {
            const Icon = cfg.icon;
            const isActive = transitMode === id;
            return (
              <button
                key={id}
                onClick={() => { setTransitMode(id); if (id !== 'trains') navigate(cfg.path); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  padding: '9px 16px', borderRadius: 'var(--radius-full)', border: 'none',
                  background: isActive ? 'var(--primary)' : 'var(--bg-card)',
                  color: isActive ? '#FFF' : 'var(--text-secondary)',
                  fontWeight: 700, fontSize: '13px', cursor: 'pointer', flexShrink: 0,
                  boxShadow: isActive ? 'var(--shadow-aurora)' : 'var(--shadow-sm)',
                  border: isActive ? 'none' : '1px solid var(--border-primary)',
                  transition: 'all var(--dur-normal) var(--ease-out)',
                }}
              >
                <Icon size={14} />
                {cfg.label}
              </button>
            );
          })}
        </div>

        {/* ── AURORA HERO SEARCH CARD ──────────────────────── */}
        <div
          onClick={() => navigate(modesConfig[transitMode].path)}
          className="aurora-card mb-8 press-scale"
          style={{
            padding: 'var(--space-lg)',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-aurora)',
          }}
        >
          {/* Noise texture overlay */}
          <div style={{ position: 'absolute', inset: 0, borderRadius: 'var(--radius-2xl)', opacity: 0.03,
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

          {/* Header row */}
          <div className="flex-row items-center justify-between mb-5" style={{ position: 'relative', zIndex: 1 }}>
            <div className="flex-row items-center gap-2">
              <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Train size={16} color="#FFF" />
              </div>
              <span style={{ fontSize: '11px', fontWeight: 800, color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', letterSpacing: '1.2px' }}>Book Tickets</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.18)', padding: '5px 12px', borderRadius: 'var(--radius-full)', fontSize: '11px', fontWeight: 700, color: '#FFF', backdropFilter: 'blur(8px)' }}>
              <Sparkles size={10} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
              10,000+ Routes
            </div>
          </div>

          {/* From / To rows */}
          <div className="aurora-glass" style={{ padding: '18px 20px', position: 'relative', zIndex: 1 }}>
            <div className="flex-row items-center gap-4">
              <div className="flex-col justify-between" style={{ height: '52px', position: 'relative' }}>
                <div style={{ width: '11px', height: '11px', borderRadius: '50%', border: '2.5px solid rgba(255,255,255,0.7)', background: 'transparent', zIndex: 1 }} />
                <div style={{ position: 'absolute', left: '4.5px', top: '11px', bottom: '11px', width: '2px', background: 'rgba(255,255,255,0.25)', borderRadius: '1px' }} />
                <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 10px var(--accent-glow)', zIndex: 1 }} />
              </div>
              <div className="flex-col justify-between" style={{ flex: 1, height: '52px' }}>
                <span style={{ fontSize: '16px', fontWeight: 700, color: '#FFF' }}>Where from?</span>
                <span style={{ fontSize: '16px', fontWeight: 700, color: '#FFF' }}>Where to?</span>
              </div>
              <div style={{ width: '46px', height: '46px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)', flexShrink: 0 }}>
                <Search size={20} color="#FFF" />
              </div>
            </div>
          </div>
        </div>

        {/* ── QUICK ACTIONS ────────────────────────────────── */}
        <div className="mb-8">
          <div className="flex-row items-center justify-between mb-4">
            <h3 style={{ fontSize: 'var(--text-md)', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>Quick Actions</h3>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--primary)', fontWeight: 600, cursor: 'pointer' }}>View All</span>
          </div>

          <div className="quick-action-grid stagger">
            {quickActions.map((action, i) => {
              const Icon = action.icon;
              return (
                <div
                  key={i}
                  onClick={() => navigate(action.path)}
                  className="press-scale"
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
                >
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '16px',
                    background: 'var(--bg-card)', border: '1px solid var(--border-primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'box-shadow var(--dur-fast), border-color var(--dur-fast)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = `0 0 20px ${action.color}30`;
                    e.currentTarget.style.borderColor = `${action.color}40`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                    e.currentTarget.style.borderColor = 'var(--border-primary)';
                  }}
                  >
                    <Icon size={23} color={action.color} strokeWidth={2} />
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-secondary)', textAlign: 'center', lineHeight: '1.3' }}>
                    {action.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── R-WALLET CARD ────────────────────────────────── */}
        <div
          className="premium-card premium-card-interactive mb-6"
          onClick={() => navigate('/wallet')}
        >
          <div className="flex-row items-center justify-between w-full">
            <div className="flex-row items-center gap-4">
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--primary-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Wallet size={24} color="var(--primary)" />
              </div>
              <div className="flex-col" style={{ gap: '2px' }}>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>R-Wallet</span>
                <span style={{ fontSize: 'var(--text-xl)', fontWeight: 800, color: 'var(--text-primary)', fontFamily: "'Outfit'" }}>₹4,500</span>
              </div>
            </div>
            <button
              style={{
                padding: '9px 18px', borderRadius: 'var(--radius-full)', border: 'none',
                background: 'var(--primary)', color: '#FFF',
                fontSize: '13px', fontWeight: 700, cursor: 'pointer',
                boxShadow: 'var(--shadow-aurora)', transition: 'transform var(--dur-fast) var(--ease-spring)'
              }}
              onMouseDown={e => e.currentTarget.style.transform = 'scale(0.93)'}
              onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              + Add
            </button>
          </div>
        </div>

        {/* ── AI PLANNER BANNER (Aurora Hero) ─────────────── */}
        <div
          onClick={() => navigate('/ai-planner')}
          className="aurora-card mb-6 press-scale"
          style={{ padding: 'var(--space-lg)', cursor: 'pointer', boxShadow: 'var(--shadow-aurora)' }}
        >
          <div className="flex-row items-center gap-4" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              width: '52px', height: '52px', borderRadius: '16px',
              background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(12px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, animation: 'aurora-pulse 3s ease-in-out infinite',
            }}>
              <Sparkles size={26} color="#FFF" />
            </div>
            <div className="flex-col flex-1" style={{ gap: '4px' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '1px' }}>Powered by AI</span>
              <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 900, color: '#FFF', margin: 0 }}>AI Travel Planner</h4>
              <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.75)', margin: 0 }}>Craft your perfect trip in seconds.</p>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ChevronRight size={20} color="#FFF" />
            </div>
          </div>
        </div>

        {/* ── REFER & EARN ─────────────────────────────────── */}
        <div
          className="premium-card premium-card-interactive"
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', right: '-30px', top: '-30px', width: '130px', height: '130px', borderRadius: '50%', background: 'var(--accent-glow)', filter: 'blur(40px)', zIndex: 0 }} />
          <div className="flex-row items-center justify-between" style={{ position: 'relative', zIndex: 1 }}>
            <div className="flex-row items-center gap-4">
              <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={22} color="var(--accent)" />
              </div>
              <div className="flex-col" style={{ gap: '3px' }}>
                <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>Refer & Earn</h4>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', margin: 0 }}>Get ₹100 for each referral</p>
              </div>
            </div>
            <div style={{ padding: '8px 14px', borderRadius: 'var(--radius-full)', background: 'var(--accent-glow)', color: 'var(--accent)', fontSize: '13px', fontWeight: 700 }}>Share</div>
          </div>
        </div>

      </div>
      <BottomNav active="home" />
    </div>
  );
}
