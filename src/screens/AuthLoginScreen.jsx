import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Train, Plane, Bus, Building, Map, Coffee, ArrowLeft, ChevronRight } from 'lucide-react';

export default function AuthLoginScreen() {
  const nav = useNavigate();
  const [pin, setPin] = useState(['', '', '', '']);
  const [otpBooking, setOtpBooking] = useState(false);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleLogin = (e) => {
    e.preventDefault();
    nav('/dashboard');
  };

  const handlePinChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newPin = [...pin];
    newPin[index] = value.slice(-1);
    setPin(newPin);
    if (value !== '' && index < 3) inputRefs[index + 1].current.focus();
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && pin[index] === '' && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const appLinks = [
    { icon: Plane,    label: 'Air Ticket', color: '#3B82F6' },
    { icon: Bus,      label: 'Bus',        color: '#10B981' },
    { icon: Building, label: 'Hotel',      color: '#F59E0B' },
    { icon: Train,    label: 'UTS',        color: '#8B5CF6' },
    { icon: Map,      label: 'Tourism',    color: '#EF4444' },
    { icon: Coffee,   label: 'Food',       color: '#F97316' },
  ];

  return (
    <div style={{
      width: '100%', minHeight: '100vh', background: 'var(--bg-primary)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      fontFamily: "'IBM Plex Sans', sans-serif", overflowX: 'hidden', position: 'relative'
    }}>
      {/* ── AURORA ORBS ─────────────────────────────────── */}
      <div style={{
        position: 'fixed', top: '-120px', right: '-80px', width: '400px', height: '400px',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none', animation: 'aurora-pulse 10s ease-in-out infinite', zIndex: 0
      }} />
      <div style={{
        position: 'fixed', bottom: '80px', left: '-80px', width: '280px', height: '280px',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.18) 0%, transparent 70%)',
        filter: 'blur(50px)', pointerEvents: 'none', animation: 'aurora-pulse 8s ease-in-out infinite 4s', zIndex: 0
      }} />

      {/* ── HEADER LOGOS ────────────────────────────────── */}
      <div style={{ width: '100%', maxWidth: '480px', padding: '28px 24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        {/* IR logo */}
        <div style={{
          width: '48px', height: '48px', borderRadius: '50%',
          background: 'var(--aurora-animated)', backgroundSize: '200% 200%',
          animation: 'aurora-flow 6s ease infinite',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: 'var(--shadow-aurora)'
        }}>
          <Train size={22} color="#FFF" />
        </div>

        <h1 style={{ fontSize: 'var(--text-md)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', fontFamily: "'Outfit'" }}>SIGN IN</h1>

        {/* IRCTC logo */}
        <div style={{
          width: '48px', height: '48px', borderRadius: '50%', padding: '3px',
          background: 'var(--aurora-animated)', backgroundSize: '200% 200%',
          animation: 'aurora-flow 6s ease infinite 2s',
          boxShadow: 'var(--shadow-aurora)'
        }}>
          <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '13px', fontWeight: 900, color: 'var(--primary)', fontFamily: "'Outfit'" }}>IR</span>
          </div>
        </div>
      </div>

      {/* ── LOGIN CARD ───────────────────────────────────── */}
      <div style={{
        width: '100%', maxWidth: '480px', padding: '24px', position: 'relative', zIndex: 1
      }}>
        <div style={{
          background: 'var(--bg-card)', border: '1px solid var(--border-primary)',
          borderRadius: 'var(--radius-2xl)', padding: '32px 24px',
          boxShadow: 'var(--shadow-lg)', marginBottom: '16px'
        }}>
          {/* Greeting */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', margin: '0 0 6px', fontWeight: 500 }}>Welcome back</p>
            <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 800, color: 'var(--text-primary)', margin: 0, fontFamily: "'Outfit'" }}>@raman_0303</h2>
          </div>

          <p style={{ fontSize: '13px', color: 'var(--text-tertiary)', textAlign: 'center', marginBottom: '20px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Enter your 4-digit PIN</p>

          {/* PIN inputs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginBottom: '28px' }}>
            {pin.map((digit, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="password"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handlePinChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                style={{
                  width: '60px', height: '68px', borderRadius: '16px',
                  border: `2px solid ${digit ? 'var(--accent)' : 'var(--border-primary)'}`,
                  background: digit ? 'var(--accent-glow)' : 'var(--bg-input)',
                  fontSize: '24px', fontWeight: 800, textAlign: 'center', color: 'var(--text-primary)',
                  outline: 'none', transition: 'all var(--dur-fast) var(--ease-spring)',
                  boxShadow: digit ? 'var(--shadow-amber)' : 'none',
                }}
                onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 4px var(--primary-glow)'; }}
                onBlur={(e) => { e.target.style.borderColor = digit ? 'var(--accent)' : 'var(--border-primary)'; e.target.style.boxShadow = digit ? 'var(--shadow-amber)' : 'none'; }}
              />
            ))}
          </div>

          {/* Helper links */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '28px' }}>
            <span style={{ fontSize: '13px', color: 'var(--primary)', fontWeight: 600, cursor: 'pointer' }}>Forgot PIN?</span>
            <span style={{ fontSize: '13px', color: 'var(--error)', fontWeight: 600, cursor: 'pointer' }}>Change User?</span>
          </div>

          {/* OTP toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <div
              onClick={() => setOtpBooking(!otpBooking)}
              style={{
                width: '24px', height: '24px', borderRadius: '7px', flexShrink: 0,
                border: `2px solid ${otpBooking ? 'var(--primary)' : 'var(--border-primary)'}`,
                background: otpBooking ? 'var(--primary)' : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                transition: 'all var(--dur-fast) var(--ease-spring)',
              }}
            >
              {otpBooking && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>}
            </div>
            <span style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: 500 }}>Booking with OTP</span>
          </div>

          {/* Login CTA — Aurora gradient */}
          <button
            onClick={handleLogin}
            style={{
              width: '100%', padding: '17px', borderRadius: 'var(--radius-full)', border: 'none',
              background: 'var(--aurora-animated)', backgroundSize: '200% 200%',
              animation: 'aurora-flow 6s ease infinite',
              color: '#FFF', fontSize: '15px', fontWeight: 800, cursor: 'pointer',
              boxShadow: 'var(--shadow-aurora)', letterSpacing: '1px',
              transition: 'transform var(--dur-fast) var(--ease-spring)',
            }}
            onMouseDown={e => e.currentTarget.style.transform = 'scale(0.97)'}
            onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            LOGIN
          </button>
        </div>

        {/* ── MORE APPS ──────────────────────────────────── */}
        <div style={{
          background: 'var(--bg-card)', border: '1px solid var(--border-primary)',
          borderRadius: 'var(--radius-2xl)', padding: '24px', marginBottom: '16px',
          boxShadow: 'var(--shadow-md)'
        }}>
          <h3 style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.8px', margin: '0 0 20px' }}>More Apps of IRCTC</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px 8px' }}>
            {appLinks.map(({ icon: Icon, label, color }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <div className="press-scale" style={{
                  width: '54px', height: '54px', borderRadius: '16px',
                  background: `${color}15`, border: `1px solid ${color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'box-shadow var(--dur-fast)',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = `0 0 20px ${color}30`}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                >
                  <Icon size={22} color={color} />
                </div>
                <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-secondary)', textAlign: 'center' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── FOOTER ─────────────────────────────────────── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 8px' }}>
          <button onClick={() => nav(-1)} style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-tertiary)', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '0.5px' }}>← BACK</button>
          <button style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-tertiary)', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '0.5px' }}>USER GUIDE</button>
        </div>

        {/* Agent Login */}
        <button style={{
          width: '100%', marginTop: '12px', padding: '15px', borderRadius: 'var(--radius-full)',
          background: 'transparent', color: 'var(--error)',
          border: '1.5px solid var(--error)', fontSize: '13px', fontWeight: 700,
          cursor: 'pointer', letterSpacing: '0.8px',
          transition: 'background var(--dur-fast)',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'var(--error-bg)'}
        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          AGENT LOGIN USING OTP
        </button>
      </div>
    </div>
  );
}
