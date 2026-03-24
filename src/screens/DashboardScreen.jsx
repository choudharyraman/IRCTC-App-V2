import React, { useState, useEffect } from 'react';
import { 
  MapPin, Calendar, Clock, Utensils, AlertTriangle, 
  CreditCard, Search, ArrowRight, Train, Zap, Shield, Moon, Sun, Ticket
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function DashboardScreen() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(document.body.getAttribute('data-theme') || 'dark'); // Default deep slate

  // The reference UI implies a permanent OLED/Slate background
  // If light mode is toggled, we can fallback to a soft ivory, but dark mode is identical to the target image
  const isDark = theme === 'dark';

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  // Pastel Color Palette from Reference Image
  const colors = {
    yellow: '#FDE047',  // Progress (Book Ticket)
    orange: '#FB923C',  // Time (PNR Status)
    green: '#86EFAC',   // Streak (Live Tracking)
    purple: '#D8B4FE',  // Level (R-Wallet)
    blue: '#93C5FD',    // Badges (Food)
    pink: '#F9A8D4',    // Rail Madad
    slate: isDark ? '#2A2D3E' : '#FFFFFF',  // Secondary / Leaderboard block
    bg: isDark ? '#1C1C24' : '#F8FAFC'      // Base canvas
  };

  // Text colors inside pastel boxes must be intense Dark Slate/Black
  const darkText = '#020617';

  return (
    <div className="screen-wrapper" style={{ 
       paddingBottom: '100px', 
       background: colors.bg, 
       minHeight: '100vh',
       transition: 'background 0.3s ease'
    }}>
      
      {/* Header Profile & Theme Toggle */}
      <div className="flex-row items-center justify-between" style={{ 
          position: 'sticky', 
          top: 0, 
          zIndex: 50, 
          background: colors.bg, 
          padding: '16px 24px', 
          margin: '-32px -24px 24px -24px', // Offset .screen-wrapper padding
          boxShadow: isDark ? '0 8px 24px rgba(0,0,0,0.5)' : '0 8px 24px rgba(0,0,0,0.05)'
      }}>
        <div className="flex-row items-center gap-3">
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', border: `2px solid ${colors.slate}` }}>
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="flex-col">
            <span style={{ fontSize: '12px', color: isDark ? '#94A3B8' : '#64748B', fontWeight: 600 }}>Welcome back,</span>
            <h2 style={{ fontSize: '18px', margin: 0, fontWeight: 700, color: isDark ? '#F8FAFC' : '#0F172A' }}>Arjun Sharma</h2>
          </div>
        </div>
        
        <button onClick={toggleTheme} style={{ width: '40px', height: '40px', borderRadius: '50%', background: colors.slate, display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer', transition: 'transform 0.2s', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
           {isDark ? <Sun size={18} color="#FDE047" /> : <Moon size={18} color="#0F172A" />}
        </button>
      </div>

      {/* Primary Hero Interaction - Bright Yellow */}
      <div 
         className="cursor-pointer" 
         onClick={() => navigate('/train-list')}
         style={{ 
            background: colors.yellow, 
            borderRadius: '28px', 
            padding: '24px', 
            marginBottom: '16px',
            boxShadow: '0 8px 24px rgba(253, 224, 71, 0.2)',
            transform: 'scale(1)',
            transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
         }}
         onMouseOver={e => e.currentTarget.style.transform = 'scale(0.98)'}
         onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
      >
         <div className="flex-row items-center justify-between mb-4">
            <span style={{ fontSize: '11px', fontWeight: 800, color: darkText, letterSpacing: '1px', textTransform: 'uppercase' }}>Ticketing</span>
            <div style={{ background: 'rgba(0,0,0,0.05)', padding: '8px', borderRadius: '50%' }}>
               <ArrowRight size={18} color={darkText} />
            </div>
         </div>

         <div className="flex-row items-end justify-between">
            <div>
               <div className="flex-row items-center gap-3 mb-2">
                  <Ticket size={28} color={darkText} />
                  <h2 style={{ color: darkText, fontSize: '36px', fontWeight: 800, margin: 0, lineHeight: 1 }}>Book</h2>
               </div>
               <span style={{ color: darkText, fontSize: '13px', fontWeight: 600, opacity: 0.8 }}>Over 10,000 active routes</span>
            </div>
         </div>
      </div>

      <h3 style={{ fontSize: '18px', marginBottom: '16px', fontWeight: 700, color: isDark ? '#F8FAFC' : '#0F172A', marginTop: '8px' }}>RailOne Analytics</h3>
      
      {/* 2x2 Bento Matrix Exactly matching the reference layout constraints */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', width: '100%', marginBottom: '16px' }}>
         
         {/* Live Tracking - Green Box (Streak equivalence) */}
         <div className="cursor-pointer" onClick={() => navigate('/live')} style={{ background: colors.green, borderRadius: '24px', padding: '20px', display: 'flex', flexDirection: 'column', height: '140px' }}>
            <div className="flex-row justify-between mb-1">
               <span style={{ fontSize: '11px', fontWeight: 800, color: darkText, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Tracking</span>
               <MapPin size={16} color={darkText} />
            </div>
            <h3 style={{ fontSize: '28px', fontWeight: 800, color: darkText, margin: '8px 0', lineHeight: 1 }}>Live</h3>
            <p style={{ fontSize: '11px', color: darkText, fontWeight: 600, opacity: 0.8, lineHeight: 1.3, marginTop: 'auto' }}>GPS radar & smart alarms active</p>
         </div>

         {/* PNR Status - Orange Box (Time equivalence) */}
         <div className="cursor-pointer" onClick={() => navigate('/pnr')} style={{ background: colors.orange, borderRadius: '24px', padding: '20px', display: 'flex', flexDirection: 'column', height: '140px' }}>
            <div className="flex-row justify-between mb-1">
               <span style={{ fontSize: '11px', fontWeight: 800, color: darkText, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Prediction</span>
               <Search size={16} color={darkText} />
            </div>
            <h3 style={{ fontSize: '28px', fontWeight: 800, color: darkText, margin: '8px 0', lineHeight: 1 }}>PNR</h3>
            <p style={{ fontSize: '11px', color: darkText, fontWeight: 600, opacity: 0.8, lineHeight: 1.3, marginTop: 'auto' }}>AI validation & alternatives</p>
         </div>

         {/* R-Wallet - Purple Box (Level equivalence) */}
         <div className="cursor-pointer" onClick={() => navigate('/wallet')} style={{ background: colors.purple, borderRadius: '24px', padding: '20px', display: 'flex', flexDirection: 'column', height: '140px' }}>
            <div className="flex-row justify-between mb-1">
               <span style={{ fontSize: '11px', fontWeight: 800, color: darkText, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Balance</span>
               <CreditCard size={16} color={darkText} />
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 800, color: darkText, margin: '8px 0', lineHeight: 1 }}>₹4,500</h3>
            <p style={{ fontSize: '11px', color: darkText, fontWeight: 600, opacity: 0.8, lineHeight: 1.3, marginTop: 'auto' }}>Zero fee deductions</p>
         </div>

         {/* Food - Blue Box (Badges equivalence) */}
         <div className="cursor-pointer" onClick={() => navigate('/food')} style={{ background: colors.blue, borderRadius: '24px', padding: '20px', display: 'flex', flexDirection: 'column', height: '140px' }}>
            <div className="flex-row justify-between mb-1">
               <span style={{ fontSize: '11px', fontWeight: 800, color: darkText, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Catering</span>
               <Utensils size={16} color={darkText} />
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 800, color: darkText, margin: '8px 0', lineHeight: 1 }}>Orders</h3>
            <div className="flex-row gap-2" style={{ marginTop: 'auto' }}>
               <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🍕</div>
               <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>☕</div>
            </div>
         </div>
      </div>

      {/* Secondary Actions - Stacked Dark Slates */}
      <div 
         className="cursor-pointer flex-row items-center justify-between" 
         onClick={() => navigate('/madad')}
         style={{ background: colors.slate, padding: '20px', borderRadius: '24px', marginBottom: '12px' }}
      >
         <div className="flex-row items-center gap-4">
            <div style={{ background: colors.pink, padding: '12px', borderRadius: '50%' }}><AlertTriangle size={20} color={darkText} /></div>
            <div className="flex-col">
               <span style={{ fontSize: '15px', fontWeight: 700, color: isDark ? '#F8FAFC' : '#0F172A' }}>Rail Madad</span>
               <span style={{ fontSize: '12px', color: isDark ? '#94A3B8' : '#64748B' }}>Rapid Grievance Redressal</span>
            </div>
         </div>
         <ArrowRight size={20} color={isDark ? '#64748B' : '#94A3B8'} />
      </div>

      <div 
         className="cursor-pointer flex-row items-center justify-between" 
         onClick={() => navigate('/uts')}
         style={{ background: colors.slate, padding: '20px', borderRadius: '24px' }}
      >
         <div className="flex-row items-center gap-4">
            <div style={{ background: '#E2E8F0', padding: '12px', borderRadius: '50%' }}><Shield size={20} color={darkText} /></div>
            <div className="flex-col">
               <span style={{ fontSize: '15px', fontWeight: 700, color: isDark ? '#F8FAFC' : '#0F172A' }}>UTS Unreserved</span>
               <span style={{ fontSize: '12px', color: isDark ? '#94A3B8' : '#64748B' }}>Local & Sub-Urban Tickets</span>
            </div>
         </div>
         <ArrowRight size={20} color={isDark ? '#64748B' : '#94A3B8'} />
      </div>

      <BottomNav active="home" />

    </div>
  );
}
