import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import TravelLogo from '../components/TravelLogo';

export default function AuthRegistrationScreen() {
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => { e.preventDefault(); nav('/dashboard'); };

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #3d09a4 0%, #17033d 100%)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Inter', sans-serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Background Watermarks */}
      <div style={{
        position: 'absolute',
        top: '25%',
        left: '-15%',
        fontSize: '140px',
        fontWeight: 900,
        color: 'rgba(255,255,255,0.015)',
        transform: 'rotate(-45deg)',
        fontFamily: "'Outfit', sans-serif",
        pointerEvents: 'none',
        zIndex: 0
      }}>
        TRAVEL
      </div>
      <div style={{
        position: 'absolute',
        bottom: '5%',
        right: '-5%',
        fontSize: '120px',
        fontWeight: 900,
        color: 'rgba(255,255,255,0.015)',
        fontFamily: "'Outfit', sans-serif",
        pointerEvents: 'none',
        zIndex: 0
      }}>
        TRAVEL
      </div>

      <div style={{ padding: '60px 24px 20px', display: 'flex', justifyContent: 'center', zIndex: 1 }}>
        <TravelLogo color="#FFFFFF" style={{ transform: 'scale(1.1)' }} />
      </div>

      <div style={{ flex: 1, padding: '20px 32px 40px', display: 'flex', flexDirection: 'column', zIndex: 1 }}>
        <h2 style={{ 
          fontSize: '22px', 
          fontWeight: 800, 
          textAlign: 'center', 
          color: '#FFF', 
          margin: '0 0 30px', 
          fontFamily: "'Outfit', sans-serif",
          letterSpacing: '1px',
          fontStyle: 'italic'
        }}>
          REGISTER
        </h2>

        {/* Inputs with custom weave styling */}
        <div style={{ position: 'relative', marginBottom: '30px' }}>
          
          {/* Weaving lines SVG for 4 inputs */}
          <svg style={{ position: 'absolute', top: '-10px', left: '-10px', width: 'calc(100% + 20px)', height: 'calc(100% + 20px)', pointerEvents: 'none' }} viewBox="0 0 300 240" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gradReg1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
              <linearGradient id="gradReg2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <linearGradient id="gradReg3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
              <linearGradient id="gradReg4" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
            </defs>
            {/* Input 1 */}
            <path d="M 160 15 L 280 15 A 15 15 0 0 1 295 30 L 295 45 A 15 15 0 0 1 280 60 L 20 60" fill="none" stroke="url(#gradReg1)" strokeWidth="2.5" />
            {/* Input 2 */}
            <path d="M 20 60 A 15 15 0 0 0 5 75 L 5 90 A 15 15 0 0 0 20 105 L 280 105" fill="none" stroke="url(#gradReg2)" strokeWidth="2.5" />
            {/* Input 3 */}
            <path d="M 280 105 A 15 15 0 0 1 295 120 L 295 135 A 15 15 0 0 1 280 150 L 20 150" fill="none" stroke="url(#gradReg3)" strokeWidth="2.5" />
            {/* Input 4 */}
            <path d="M 20 150 A 15 15 0 0 0 5 165 L 5 180 A 15 15 0 0 0 20 195 L 280 195 A 15 15 0 0 1 295 210" fill="none" stroke="url(#gradReg4)" strokeWidth="2.5" />
          </svg>

          {/* User Name */}
          <div style={{ position: 'relative', marginBottom: '25px', paddingLeft: '40px' }}>
            <svg style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', opacity: 0.7 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <input type="text" placeholder="User Name" style={{
              width: '100%', padding: '10px 0', background: 'transparent', border: 'none', color: '#FFF', fontSize: '15px', outline: 'none'
            }} />
          </div>

          {/* Email */}
          <div style={{ position: 'relative', marginBottom: '25px', paddingLeft: '40px' }}>
            <svg style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', opacity: 0.7 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <input type="email" placeholder="Email" style={{
              width: '100%', padding: '10px 0', background: 'transparent', border: 'none', color: '#FFF', fontSize: '15px', outline: 'none'
            }} />
          </div>

          {/* Mobile Number */}
          <div style={{ position: 'relative', marginBottom: '25px', paddingLeft: '40px' }}>
            <svg style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', opacity: 0.7 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            <input type="tel" placeholder="Mobile Number" style={{
              width: '100%', padding: '10px 0', background: 'transparent', border: 'none', color: '#FFF', fontSize: '15px', outline: 'none'
            }} />
          </div>

          {/* Password */}
          <div style={{ position: 'relative', paddingLeft: '40px' }}>
            <svg style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', opacity: 0.7 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            <input type={showPassword ? 'text' : 'password'} placeholder="Password" style={{
              width: '100%', padding: '10px 0', background: 'transparent', border: 'none', color: '#FFF', fontSize: '15px', outline: 'none'
            }} />
            <div onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: 'rgba(255,255,255,0.5)' }}>
              {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px', marginTop: '10px' }}>
          <button 
            onClick={handleRegister} 
            style={{
              background: '#FFFFFF',
              color: '#3d09a4',
              fontSize: '14px',
              fontWeight: 700,
              padding: '12px 24px',
              borderRadius: '30px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
            }}
          >
            Create Account
          </button>
        </div>

        <div style={{ textAlign: 'center', marginBottom: 'auto', marginTop: '40px' }}>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>
            Already have an account? <span onClick={() => nav('/login')} style={{ color: '#FCD34D', fontWeight: 700, cursor: 'pointer' }}>Login</span>
          </span>
        </div>

      </div>
    </div>
  );
}
