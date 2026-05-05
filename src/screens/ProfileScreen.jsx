import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, IdCard, Users, Settings, LogOut, FileText, 
  ChevronRight, Shield, Bell, Moon, HelpCircle, Camera,
  Check, X, User, Phone, Mail, Award
} from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function ProfileScreen() {
  const nav = useNavigate();
  
  // ── STATE ──────────────────────────────────────────────────
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('railone_user');
    return saved ? JSON.parse(saved) : {
      name: 'Arjun Sharma',
      phone: '+91 9876543210',
      email: 'arjun.sharma@example.com',
      avatar: 'https://i.pravatar.cc/150?img=11',
      memberType: 'Premium Member'
    };
  });

  const [editForm, setEditForm] = useState({ ...user });

  useEffect(() => {
    localStorage.setItem('railone_user', JSON.stringify(user));
  }, [user]);

  const handleSave = () => {
    setUser({ ...editForm });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm({ ...user });
    setIsEditing(false);
  };

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
        
        {/* Header */}
        <div className="flex-row items-center justify-between mb-8 animate-slide-up">
          <div className="flex-row items-center gap-4">
            <button onClick={() => nav('/dashboard')} className="icon-btn">
              <ArrowLeft size={20} />
            </button>
            <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
              {isEditing ? 'Edit Profile' : 'Profile'}
            </h2>
          </div>
          {isEditing && (
            <div className="flex-row gap-2">
              <button onClick={handleCancel} className="icon-btn" style={{ background: 'rgba(239, 44, 44, 0.1)', color: 'var(--error)' }}>
                <X size={20} />
              </button>
              <button onClick={handleSave} className="icon-btn" style={{ background: 'var(--primary-glow)', color: 'var(--primary)' }}>
                <Check size={20} />
              </button>
            </div>
          )}
        </div>

        {/* ── PROFILE INFO / EDIT FORM ────────────────────────── */}
        <div className="flex-col items-center mb-10 animate-fade-in">
          <div style={{ position: 'relative', marginBottom: '16px' }}>
            <div style={{
              width: '100px', height: '100px', borderRadius: '50%', padding: '4.5px',
              background: 'var(--aurora-animated)', backgroundSize: '200% 200%',
              animation: 'aurora-flow 6s ease infinite',
              boxShadow: 'var(--shadow-aurora)',
            }}>
              <div style={{
                width: '100%', height: '100%', borderRadius: '50%',
                overflow: 'hidden', border: '3px solid var(--bg-primary)'
              }}>
                <img src={isEditing ? editForm.avatar : user.avatar} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            {isEditing ? (
              <label style={{
                position: 'absolute', bottom: '2px', right: '2px',
                width: '32px', height: '32px', borderRadius: '50%',
                background: 'var(--primary)', color: '#FFF',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: 'var(--shadow-md)', cursor: 'pointer', border: '2px solid var(--bg-primary)'
              }}>
                <Camera size={16} />
                <input 
                  type="text" 
                  placeholder="Avatar URL"
                  value={editForm.avatar}
                  onChange={(e) => setEditForm({ ...editForm, avatar: e.target.value })}
                  style={{ display: 'none' }} 
                />
              </label>
            ) : (
              <button 
                onClick={() => setIsEditing(true)}
                style={{
                  position: 'absolute', bottom: '2px', right: '2px',
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: 'var(--bg-card)', color: 'var(--text-primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: 'var(--shadow-sm)', cursor: 'pointer', border: '1px solid var(--border-primary)'
                }}
              >
                <Settings size={14} />
              </button>
            )}
          </div>

          {!isEditing ? (
            <>
              <h2 style={{ fontSize: '22px', fontWeight: 900, margin: '0 0 6px', color: 'var(--text-primary)', fontFamily: "'Outfit'" }}>
                {user.name}
              </h2>
              <span style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 600 }}>{user.phone}</span>
              <div style={{
                marginTop: '14px', padding: '6px 14px', borderRadius: 'var(--radius-full)',
                background: 'var(--primary-glow)', color: 'var(--primary)',
                fontSize: '11px', fontWeight: 800, letterSpacing: '0.8px', textTransform: 'uppercase',
                display: 'flex', alignItems: 'center', gap: '6px'
              }}>
                <Award size={12} />
                {user.memberType}
              </div>
            </>
          ) : (
            <div className="w-full" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}>
              <div className="flex-col gap-2">
                <label style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>Full Name</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', border: '1.5px solid var(--border-primary)', borderRadius: 'var(--radius-lg)', background: 'var(--bg-input)' }}>
                  <User size={18} color="var(--primary)" />
                  <input 
                    type="text" 
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', width: '100%' }}
                  />
                </div>
              </div>

              <div className="flex-col gap-2">
                <label style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>Phone Number</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', border: '1.5px solid var(--border-primary)', borderRadius: 'var(--radius-lg)', background: 'var(--bg-input)' }}>
                  <Phone size={18} color="var(--primary)" />
                  <input 
                    type="text" 
                    value={editForm.phone}
                    onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                    style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', width: '100%' }}
                  />
                </div>
              </div>

              <div className="flex-col gap-2">
                <label style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>Email Address</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', border: '1.5px solid var(--border-primary)', borderRadius: 'var(--radius-lg)', background: 'var(--bg-input)' }}>
                  <Mail size={18} color="var(--primary)" />
                  <input 
                    type="email" 
                    value={editForm.email}
                    onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                    style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', width: '100%' }}
                  />
                </div>
              </div>

              <div className="flex-col gap-2">
                <label style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>Avatar URL</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', border: '1.5px solid var(--border-primary)', borderRadius: 'var(--radius-lg)', background: 'var(--bg-input)' }}>
                  <Camera size={18} color="var(--primary)" />
                  <input 
                    type="text" 
                    placeholder="https://..."
                    value={editForm.avatar}
                    onChange={(e) => setEditForm({ ...editForm, avatar: e.target.value })}
                    style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)', width: '100%' }}
                  />
                </div>
              </div>
              
              <button 
                onClick={handleSave}
                className="aurora-card press-scale"
                style={{
                  marginTop: '12px', padding: '16px', borderRadius: 'var(--radius-xl)', border: 'none',
                  color: '#FFF', fontSize: '16px', fontWeight: 800, cursor: 'pointer',
                  boxShadow: 'var(--shadow-aurora)'
                }}
              >
                SAVE CHANGES
              </button>
            </div>
          )}
        </div>

        {/* ── SECTIONS ────────────────────────────────────────── */}
        {!isEditing && (
          <>
            {sections.map(section => (
              <div key={section.title} className="mb-8 animate-slide-up">
                <span style={{
                  fontSize: '11px', fontWeight: 800, color: 'var(--text-tertiary)',
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
                      transition: 'background var(--dur-fast)'
                    }}
                      onMouseOver={e => e.currentTarget.style.background = 'var(--bg-secondary)'} 
                      onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <div style={{
                        width: '40px', height: '40px', borderRadius: '12px',
                        background: 'var(--bg-input)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                      }}>
                        {item.icon}
                      </div>
                      <span style={{ flex: 1, fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)' }}>{item.title}</span>
                      <div className="flex-row items-center gap-3">
                        {item.status && <span style={{ fontSize: '12px', color: item.statusColor || 'var(--text-tertiary)', fontWeight: 700 }}>{item.status}</span>}
                        <ChevronRight size={18} color="var(--text-tertiary)" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <button onClick={() => nav('/login')} className="press-scale" style={{
              width: '100%', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              borderRadius: 'var(--radius-xl)', background: 'var(--bg-card)', border: '1px solid var(--border-primary)',
              color: 'var(--error)', fontWeight: 800, fontSize: '16px', cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)', transition: 'background var(--dur-fast)',
              marginBottom: '40px'
            }}
            onMouseOver={e => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.05)'} 
            onMouseOut={e => e.currentTarget.style.background = 'var(--bg-card)'}
            >
              <LogOut size={20} />
              Sign Out
            </button>
          </>
        )}
      </div>
      <BottomNav active="profile" />
    </div>
  );
}
