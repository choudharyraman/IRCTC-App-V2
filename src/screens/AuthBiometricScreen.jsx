import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fingerprint, Check } from 'lucide-react';

export default function AuthBiometricScreen() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  // Mocking native biometric interaction
  useEffect(() => {
    const t = setTimeout(() => {
       setSuccess(true);
       setTimeout(() => navigate('/dashboard'), 1500);
    }, 2500);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="screen-wrapper" style={{ alignItems: 'center', justifyContent: 'center' }}>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
         <div 
           className="neuro-card flex-col items-center justify-center relative" 
           style={{ 
             width: '100%', 
             maxWidth: '300px', 
             padding: '40px 20px', 
             textAlign: 'center' 
           }}
         >
            {/* Animating rings */}
            {!success && (
               <>
                 <div style={{ position: 'absolute', width: '100px', height: '100px', borderRadius: '50%', border: '2px solid var(--accent-primary)', opacity: 0.3, animation: 'pulse-ring 1.6s infinite ease-out' }}></div>
                 <div style={{ position: 'absolute', width: '100px', height: '100px', borderRadius: '50%', border: '2px solid var(--accent-primary)', opacity: 0.3, animation: 'pulse-ring 1.6s infinite ease-out', animationDelay: '0.8s' }}></div>
               </>
            )}

            <div style={{ 
               width: '80px', height: '80px', borderRadius: '50%', 
               background: success ? 'var(--success)' : 'var(--accent-primary-gradient)', 
               display: 'flex', alignItems: 'center', justifyContent: 'center',
               boxShadow: 'var(--glass-shadow)',
               zIndex: 2,
               transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
               transform: success ? 'scale(1.1)' : 'scale(1)'
            }}>
               {success ? <Check size={40} color="white" /> : <Fingerprint size={40} color="white" />}
            </div>

            <h2 style={{ fontSize: '18px', fontWeight: 600, marginTop: '32px', marginBottom: '8px' }}>
               {success ? 'Identity Verified' : 'Confirm Identity'}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
               {success ? 'Logging you into RailOne...' : 'Touch sensor or use Face ID to sign in instantly'}
            </p>
         </div>
      </div>

      <div style={{ width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '16px', paddingBottom: '2rem' }}>
         <span style={{ fontSize: '14px', color: 'var(--accent-primary)', fontWeight: 600, cursor: 'pointer' }} onClick={() => navigate('/mpin')}>
            Use mPIN instead
         </span>
         <span style={{ fontSize: '14px', color: 'var(--text-secondary)', cursor: 'pointer' }} onClick={() => navigate('/login')}>
            Use password instead
         </span>
      </div>

    </div>
  );
}
