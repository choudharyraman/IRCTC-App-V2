import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, IdCard, Users, Settings, LogOut, FileText, ChevronRight, Shield, Bell, Moon, HelpCircle } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function ProfileScreen() {
  const nav = useNavigate();

  const sections = [
    { title: 'Account', items: [
      { icon: <IdCard size={20} color="var(--accent)"/>, title: 'Aadhaar Verification', status: 'Verified', statusColor: 'var(--success)' },
      { icon: <Users size={20} color="var(--primary)"/>, title: 'Master Passenger List', status: '4 Saved' },
      { icon: <Shield size={20} color="var(--success)"/>, title: 'Travel Insurance', status: 'Active' },
    ]},
    { title: 'Preferences', items: [
      { icon: <Bell size={20} color="#F43F5E"/>, title: 'Notifications' },
      { icon: <Moon size={20} color="#8B5CF6"/>, title: 'Appearance' },
      { icon: <Settings size={20} color="var(--text-secondary)"/>, title: 'App Settings' },
    ]},
    { title: 'Support', items: [
      { icon: <HelpCircle size={20} color="#06B6D4"/>, title: 'Help & FAQ' },
      { icon: <FileText size={20} color="var(--text-secondary)"/>, title: 'Terms & Conditions' },
    ]},
  ];

  return (
    <div className="app-container">
      <div className="screen-wrapper" style={{ paddingBottom: '100px' }}>
        <div className="flex-row items-center gap-4 mb-8">
          <button onClick={() => nav('/dashboard')} className="icon-btn">
            <ArrowLeft size={20} />
          </button>
          <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>Profile</h2>
        </div>

        {/* Avatar */}
        <div className="flex-col items-center mb-10">
          <div style={{
            width: '96px', height: '96px', borderRadius: '50%', padding: '4px',
            background: 'var(--border-primary)', marginBottom: '16px',
            boxShadow: 'var(--shadow-md)'
          }}>
            <img src="https://i.pravatar.cc/150?img=11" alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '50%', border: '4px solid var(--bg-primary)', objectFit: 'cover' }} />
          </div>
          <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 800, margin: '0 0 4px', color: 'var(--text-primary)' }}>Arjun Sharma</h2>
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', fontWeight: 500 }}>+91 9876543210</span>
          <div style={{
            marginTop: '12px', padding: '6px 12px', borderRadius: 'var(--radius-full)',
            background: 'var(--primary-glow)', color: 'var(--primary)',
            fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase'
          }}>
            Premium Member
          </div>
        </div>

        {/* Sections */}
        {sections.map(section => (
          <div key={section.title} className="mb-8">
            <span style={{
              fontSize: '12px', fontWeight: 700, color: 'var(--text-tertiary)',
              textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px',
              display: 'block', paddingLeft: '16px'
            }}>
              {section.title}
            </span>
            <div className="premium-card" style={{ padding: 0, overflow: 'hidden' }}>
              {section.items.map((item, i) => (
                <div key={item.title} style={{
                  padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer',
                  borderBottom: i < section.items.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                  transition: 'background var(--duration-fast)'
                }}
                  onMouseOver={e => e.currentTarget.style.background = 'var(--bg-card-hover)'} 
                  onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '12px',
                    background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    {item.icon}
                  </div>
                  <span style={{ flex: 1, fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)' }}>{item.title}</span>
                  <div className="flex-row items-center gap-3">
                    {item.status && <span style={{ fontSize: '13px', color: item.statusColor || 'var(--text-tertiary)', fontWeight: 600 }}>{item.status}</span>}
                    <ChevronRight size={18} color="var(--text-tertiary)" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <button onClick={() => nav('/login')} style={{
          width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          borderRadius: 'var(--radius-xl)', background: 'var(--bg-card)', border: '1px solid var(--border-primary)',
          color: 'var(--error)', fontWeight: 700, fontSize: '16px', cursor: 'pointer',
          boxShadow: 'var(--shadow-sm)', transition: 'background var(--duration-fast)'
        }}
        onMouseOver={e => e.currentTarget.style.background = 'var(--bg-card-hover)'} 
        onMouseOut={e => e.currentTarget.style.background = 'var(--bg-card)'}
        >
          <LogOut size={20} />
          Sign Out
        </button>
      </div>
      <BottomNav active="profile" />
    </div>
  );
}
