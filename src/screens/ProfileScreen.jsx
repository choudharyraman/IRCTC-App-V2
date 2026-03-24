import React from 'react';
import BottomNav from '../components/BottomNav';
import { ArrowLeft, IdCard, Users, Settings, LogOut, FileText, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProfileScreen() {
  const navigate = useNavigate();

  return (
    <div className="screen-wrapper" style={{ paddingBottom: '90px', background: 'var(--bg-page)' }}>
      
      {/* Header */}
      <div className="flex-row items-center gap-4 mb-8">
        <button 
           className="neuro-icon-btn" 
           style={{ width: '40px', height: '40px', background: 'var(--bg-page)', boxShadow: 'var(--shadow-raised)', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
           onClick={() => navigate('/dashboard')}
        >
          <ArrowLeft size={20} color="var(--text-primary)" />
        </button>
        <h2 style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>My Profile</h2>
      </div>

      {/* Avatar & Info */}
      <div className="flex-col items-center mb-8">
         <div className="neuro-raised" style={{ width: '100px', height: '100px', borderRadius: '50%', padding: '4px', marginBottom: '16px' }}>
            <img src="https://ui-avatars.com/api/?name=Arjun+K&background=4B7EFF&color=FFF" alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
         </div>
         <h1 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 4px 0' }}>Arjun K.</h1>
         <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>+91 9876543210</span>
      </div>

      <div className="flex-col gap-4">
         <ProfileOption icon={<IdCard size={20} className="text-saffron" />} title="Aadhaar Verification" status="Verified" />
         <ProfileOption icon={<Users size={20} className="text-navy" />} title="Master Passenger List" status="Saved (4)" />
         <ProfileOption icon={<FileText size={20} className="text-green" />} title="Terms & Conditions" />
         <ProfileOption icon={<Settings size={20} className="text-navy" />} title="App Settings" />
      </div>

      <button onClick={() => navigate('/login')} className="neuro-card" style={{ marginTop: '32px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--error)', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
         <LogOut size={20} /> Logout securely
      </button>

      <BottomNav active="profile" />
    </div>
  );
}

function ProfileOption({ icon, title, status }) {
   return (
      <div className="neuro-card" style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
         <div className="flex-row items-center gap-4">
            <div style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', background: 'var(--bg-page)', boxShadow: 'var(--shadow-sunken)' }}>
               {icon}
            </div>
            <span style={{ fontSize: '15px', fontWeight: 600 }}>{title}</span>
         </div>
         <div className="flex-row items-center gap-2">
            {status && <span style={{ fontSize: '12px', color: 'var(--success)' }}>{status}</span>}
            <ChevronRight size={16} color="var(--text-secondary)" />
         </div>
      </div>
   );
}
