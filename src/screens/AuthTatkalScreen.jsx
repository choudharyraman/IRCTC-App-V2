import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { ArrowLeft, Clock } from 'lucide-react';

export default function AuthTatkalScreen() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(262); // 4 mins 22 sec

  useEffect(() => {
    if (timeLeft <= 0) return;
    const t = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft]);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const isReady = timeLeft === 0;

  return (
    <div className="screen-wrapper" style={{ 
       background: 'linear-gradient(160deg, #0A192F, #112240)', color: 'white'
    }}>
      
      {/* Header */}
      <div className="flex-row items-center gap-4 mb-6">
        <button 
           style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
           onClick={() => navigate('/login')}
        >
          <ArrowLeft size={20} color="white" />
        </button>
        <div className="flex-col">
           <h2 style={{ fontSize: '18px', fontWeight: 600, margin: 0, color: 'white' }}>Tatkal Pre-Auth</h2>
           <span style={{ fontSize: '12px', color: '#8892B0' }}>Session warmed & locked</span>
        </div>
      </div>

      {/* Giant Countdown Clock */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem 0', flex: 1 }}>
         <Clock size={48} color={isReady ? '#48BB78' : '#FF9933'} style={{ marginBottom: '16px' }} />
         <span style={{ fontSize: '16px', color: '#CCD6F6', fontWeight: 600, marginBottom: '8px' }}>
            {isReady ? 'Tatkal Window Open!' : 'Tatkal opens in'}
         </span>
         <div style={{ fontSize: '48px', fontWeight: 700, color: isReady ? '#48BB78' : 'white', letterSpacing: '2px', fontVariantNumeric: 'tabular-nums' }}>
            00:{mins.toString().padStart(2,'0')}:{secs.toString().padStart(2,'0')}
         </div>
      </div>

      {/* Pre-filled Details */}
      <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '16px', marginBottom: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
         <div className="flex-row justify-between items-center mb-2">
            <span style={{ fontSize: '14px', color: '#CCD6F6', fontWeight: 600 }}>12951 • MUMBAI RAJDHANI</span>
            <span style={{ fontSize: '12px', color: '#8892B0', background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '8px' }}>3A</span>
         </div>
         <span style={{ fontSize: '13px', color: '#8892B0' }}>Mumbai (MMCT) → New Delhi (NDLS)</span>
      </div>

      <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '16px', marginBottom: '32px', border: '1px solid rgba(255,255,255,0.1)' }}>
         <span style={{ fontSize: '14px', color: '#CCD6F6', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Passengers (2)</span>
         <div className="flex-row justify-between mb-1">
            <span style={{ fontSize: '13px', color: '#8892B0' }}>Arjun K. (28)</span>
            <span style={{ fontSize: '13px', color: '#8892B0' }}>Lower Berth pref</span>
         </div>
         <div className="flex-row justify-between">
            <span style={{ fontSize: '13px', color: '#8892B0' }}>Priya K. (24)</span>
            <span style={{ fontSize: '13px', color: '#8892B0' }}>Upper Berth pref</span>
         </div>
      </div>

      <button 
         onClick={() => navigate('/book')}
         disabled={!isReady}
         style={{
            height: '56px', width: '100%', borderRadius: '12px', border: 'none',
            fontSize: '16px', fontWeight: 600, color: isReady ? 'white' : '#8892B0',
            background: isReady ? '#48BB78' : 'rgba(255,255,255,0.1)',
            cursor: isReady ? 'pointer' : 'not-allowed',
            transition: 'all 0.2s ease',
            boxShadow: isReady ? '0 4px 15px rgba(72, 187, 120, 0.4)' : 'none'
         }}
      >
         {isReady ? 'Book Now (1-Click)' : 'Wait for T=0 to book'}
      </button>

    </div>
  );
}
