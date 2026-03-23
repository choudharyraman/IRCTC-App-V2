import React from 'react';
import Button from '../components/Button';
import { ArrowLeft, MapPin, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function UtsScreen() {
  const navigate = useNavigate();

  return (
    <div className="screen-wrapper">
      
      {/* Header */}
      <div className="flex-row items-center gap-4 mb-6">
        <button 
           className="neuro-icon-btn" 
           style={{ width: '40px', height: '40px', background: 'var(--bg-page)', boxShadow: 'var(--shadow-raised)', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
           onClick={() => navigate('/dashboard')}
        >
          <ArrowLeft size={20} color="var(--text-primary)" />
        </button>
        <h2 style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>UTS (Unreserved)</h2>
      </div>

      <div className="neuro-card flex-col items-center text-center" style={{ padding: '24px', marginBottom: '24px' }}>
         <div style={{ padding: '12px', background: 'rgba(72, 187, 120, 0.1)', borderRadius: '50%', marginBottom: '16px' }}>
            <MapPin size={32} color="var(--success)" />
         </div>
         <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Current Location</span>
         <h2 style={{ fontSize: '20px', fontWeight: 700, margin: '4px 0 16px 0' }}>New Delhi (NDLS)</h2>
         <span style={{ fontSize: '14px', color: 'var(--success)', background: 'rgba(72, 187, 120, 0.1)', padding: '6px 12px', borderRadius: '16px' }}>
            GPS Verified
         </span>
      </div>

      <div className="flex-col gap-4">
         <div className="neuro-raised" style={{ padding: '20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Smartphone size={32} color="var(--accent-primary)" />
            <div className="flex-col" style={{ flex: 1 }}>
               <span style={{ fontSize: '16px', fontWeight: 600 }}>Paperless Ticket</span>
               <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Travel without physical printout</span>
            </div>
            <button style={{ padding: '8px 16px', background: 'var(--accent-primary)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600 }}>Book</button>
         </div>

         <div className="neuro-raised" style={{ padding: '20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '32px', display: 'flex', justifyContent: 'center' }}><span style={{ fontSize: '24px' }}>🎫</span></div>
            <div className="flex-col" style={{ flex: 1 }}>
               <span style={{ fontSize: '16px', fontWeight: 600 }}>Platform Ticket</span>
               <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Valid for 2 hours</span>
            </div>
            <button style={{ padding: '8px 16px', background: 'var(--bg-page)', color: 'var(--accent-primary)', border: 'none', borderRadius: '8px', fontWeight: 600, boxShadow: 'var(--shadow-sunken)' }}>Book</button>
         </div>
      </div>

    </div>
  );
}
