import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Numpad from '../components/Numpad';

export default function AuthMpinScreen() {
  const navigate = useNavigate();
  const [pin, setPin] = useState('');

  const handleKey = (key) => {
    if (key === 'delete') {
       if (pin.length > 0) setPin(pin.slice(0, -1));
    } else {
       if (pin.length < 4) setPin(pin + key);
    }
  };

  useEffect(() => {
    if (pin.length === 4) {
       // Mock validation delay
       setTimeout(() => navigate('/dashboard'), 300);
    }
  }, [pin, navigate]);

  return (
    <div style={{ padding: '2rem', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Header / Avatar */}
      <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
         <div style={{ 
            width: '80px', height: '80px', borderRadius: '50%', background: 'var(--card-bg)', 
            boxShadow: 'var(--shadow-raised)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '1rem', border: '3px solid var(--bg-page)'
         }}>
            <span style={{ fontSize: '28px', fontWeight: 700, color: 'var(--accent-primary)' }}>AK</span>
         </div>
         <h1 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '4px' }}>Good morning, Arjun</h1>
         <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Enter your 4-digit mPIN</p>
      </div>

      {/* PIN Indicator */}
      <div style={{ display: 'flex', gap: '16px', marginTop: '2rem', marginBottom: '3rem' }}>
         {[0, 1, 2, 3].map((i) => (
            <div key={i} style={{
               width: '16px', height: '16px', borderRadius: '50%',
               background: pin.length > i ? 'var(--accent-primary)' : 'var(--bg-page)',
               boxShadow: pin.length > i ? 'none' : 'inset 2px 2px 5px var(--shadow-dark), inset -2px -2px 5px var(--shadow-light)',
               transition: 'all 0.15s ease-out'
            }}></div>
         ))}
      </div>

      {/* Numpad */}
      <div style={{ marginTop: 'auto', paddingBottom: '2rem', width: '100%' }}>
         <Numpad onKey={handleKey} onBiometric={() => navigate('/biometric')} />
      </div>

      <span style={{ fontSize: '14px', color: 'var(--accent-primary)', fontWeight: 500, cursor: 'pointer', paddingBottom: '1rem' }} onClick={() => navigate('/forgot')}>
         Forgot mPIN?
      </span>

    </div>
  );
}
