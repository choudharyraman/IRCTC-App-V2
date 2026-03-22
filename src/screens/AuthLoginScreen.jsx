import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SegmentedControl from '../components/SegmentedControl';
import Input from '../components/Input';
import Button from '../components/Button';
import IconButton from '../components/IconButton';
import { Fingerprint, Grid, MessageSquare, Eye, EyeOff } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';

export default function AuthLoginScreen() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0); // 0 = Sign in, 1 = Create account
  const [showPassword, setShowPassword] = useState(false);
  
  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="screen-wrapper">
      
      <div style={{ position: 'absolute', top: '24px', right: '24px', zIndex: 10 }}>
        <ThemeToggle />
      </div>

      {/* Zone 1: App Identity */}
      <div className="flex-col items-center mb-6 mt-2">
        <div className="neuro-card" style={{ width: '64px', height: '64px', background: 'var(--accent-primary-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', marginBottom: '16px' }}>
           <span style={{ fontSize: '28px', color: 'white', fontWeight: 700 }}>R</span>
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '0 0 4px 0' }}>RailOne</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>India's railway, reimagined.</p>
      </div>

      {/* Dynamic Tatkal Banner */}
      <div 
         onClick={() => navigate('/tatkal')}
         style={{ background: 'linear-gradient(90deg, #FF9933, #E53E3E)', padding: '12px', borderRadius: '12px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', marginBottom: '24px', boxShadow: '0 4px 12px rgba(255, 153, 51, 0.3)' }}
      >
         <span style={{ fontSize: '14px', fontWeight: 600, color: 'white' }}>Tatkal mode active</span>
         <span style={{ fontSize: '12px', color: 'white', background: 'rgba(0,0,0,0.2)', padding: '4px 8px', borderRadius: '12px' }}>Enter pre-auth →</span>
      </div>

      {/* Zone 2: Auth Toggle */}
      <div style={{ marginBottom: '24px' }}>
        <SegmentedControl 
           tabs={['Sign in', 'Create account']} 
           activeTab={activeTab} 
           onChange={(idx) => {
              setActiveTab(idx);
              if (idx === 1) navigate('/register');
           }} 
        />
      </div>

      {/* Zone 3: Input Fields */}
      <div className="flex-col gap-4 mb-2">
        <Input 
           label="Mobile Number or User ID" 
           placeholder="Enter details" 
        />
        <Input 
           type={showPassword ? 'text' : 'password'}
           label="Password" 
           placeholder="Enter password"
           icon={
             <div onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
             </div>
           }
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4px' }}>
           <span 
             style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: 500, cursor: 'pointer' }}
             onClick={() => navigate('/forgot')}
           >
             Forgot password?
           </span>
        </div>
      </div>

      {/* Zone 4: Primary CTA */}
      <div style={{ marginTop: '24px', marginBottom: '32px' }}>
        <Button onClick={handleLogin}>Sign in</Button>
      </div>

      {/* Zone 5: Alt Auth Row */}
      <div className="flex-col items-center">
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginBottom: '24px' }}>
           <div style={{ flex: 1, height: '1px', background: 'rgba(184, 197, 214, 0.5)' }}></div>
           <span style={{ padding: '0 12px', fontSize: '12px', color: 'var(--text-secondary)' }}>or sign in faster with</span>
           <div style={{ flex: 1, height: '1px', background: 'rgba(184, 197, 214, 0.5)' }}></div>
        </div>
        
        <div className="flex-row items-center gap-4">
           <IconButton icon={<Fingerprint size={24} />} label="Biometric" onClick={() => navigate('/biometric')} />
           <IconButton icon={<Grid size={24} />} label="mPIN" onClick={() => navigate('/mpin')} />
           <IconButton icon={<MessageSquare size={24} />} label="OTP" onClick={() => navigate('/otp')} />
        </div>
      </div>

      {/* Zone 6: Footer */}
      <div style={{ marginTop: 'auto', textAlign: 'center', paddingTop: '32px' }}>
         <span style={{ fontSize: '14px', color: 'var(--accent-primary)', fontWeight: 600, cursor: 'pointer' }} onClick={() => navigate('/dashboard')}>
            Browse without logging in →
         </span>
         <div className="flex-row justify-center mt-6" style={{ gap: '16px' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Terms</span>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Privacy</span>
         </div>
         <p style={{ fontSize: '10px', color: 'var(--text-secondary)', marginTop: '8px', opacity: 0.5 }}>v5.0.1</p>
      </div>

    </div>
  );
}
