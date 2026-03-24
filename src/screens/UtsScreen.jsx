import React, { useState } from 'react';
import Button from '../components/Button';
import { ArrowLeft, MapPin, Smartphone, CreditCard, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function UtsScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState('select'); // select, paying, ticket

  const handleBook = () => {
     setStep('paying');
     setTimeout(() => setStep('ticket'), 2000);
  };

  return (
    <div className="screen-wrapper" style={{ paddingBottom: '90px' }}>
      
      {/* Header */}
      <div className="flex-row items-center gap-4 mb-6">
        <button 
           className="neuro-icon-btn" 
           style={{ width: '40px', height: '40px', background: 'var(--bg-page)', boxShadow: 'var(--shadow-raised)', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} 
           onClick={() => navigate('/dashboard')}
        >
          <ArrowLeft size={20} color="var(--text-primary)" />
        </button>
        <h2 style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>UTS (Unreserved)</h2>
      </div>

      {step === 'select' && (
         <div style={{ animation: 'slideUp 0.3s ease-out' }}>
            <div className="neuro-card flex-col items-center text-center" style={{ padding: '24px', marginBottom: '24px' }}>
               <div style={{ padding: '12px', background: 'rgba(72, 187, 120, 0.1)', borderRadius: '50%', marginBottom: '16px' }}>
                  <MapPin size={32} color="var(--success)" />
               </div>
               <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Current Location</span>
               <h2 style={{ fontSize: '20px', fontWeight: 700, margin: '4px 0 16px 0' }}>New Delhi (NDLS)</h2>
               <span style={{ fontSize: '14px', color: 'var(--success)', background: 'rgba(72, 187, 120, 0.1)', padding: '6px 12px', borderRadius: '16px', fontWeight: 600 }}>
                  GPS Verified (15m from tracks)
               </span>
            </div>

            <div className="flex-col gap-4">
               <div className="neuro-raised" style={{ padding: '20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <Smartphone size={32} color="var(--accent-primary)" />
                  <div className="flex-col" style={{ flex: 1 }}>
                     <span style={{ fontSize: '16px', fontWeight: 600 }}>Paperless Journey</span>
                     <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>NDLS to NZM • ₹15</span>
                  </div>
                  <button onClick={handleBook} style={{ padding: '8px 16px', background: 'var(--accent-primary)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>Book</button>
               </div>

               <div className="neuro-raised" style={{ padding: '20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '32px', display: 'flex', justifyContent: 'center' }}><span style={{ fontSize: '24px' }}>🎫</span></div>
                  <div className="flex-col" style={{ flex: 1 }}>
                     <span style={{ fontSize: '16px', fontWeight: 600 }}>Platform Ticket</span>
                     <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Valid for 2 hours • ₹10</span>
                  </div>
                  <button onClick={handleBook} style={{ padding: '8px 16px', background: 'var(--bg-page)', color: 'var(--accent-primary)', border: 'none', borderRadius: '8px', fontWeight: 600, boxShadow: 'var(--shadow-raised)', cursor: 'pointer' }}>Book</button>
               </div>
            </div>
         </div>
      )}

      {step === 'paying' && (
         <div className="flex-col items-center justify-center p-8 gap-4 mt-8" style={{ animation: 'pulse 1.5s infinite' }}>
            <CreditCard size={48} color="var(--accent-saffron)" />
            <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-secondary)' }}>Deducting from R-Wallet...</span>
         </div>
      )}

      {step === 'ticket' && (
         <div className="neuro-card flex-col items-center mt-4" style={{ padding: '32px 24px', animation: 'slideUp 0.3s ease-out', borderTop: '8px solid var(--accent-saffron)' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Paperless Ticket</span>
            <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 24px 0', letterSpacing: '1px' }}>NDLS ↔ NZM</h2>
            
            <div className="w-full flex-col gap-4 mb-6">
               <div className="flex-row justify-between pb-2" style={{ borderBottom: '1px dashed rgba(184, 197, 214, 0.5)' }}>
                  <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Adult · Child</span>
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>1 · 0</span>
               </div>
               <div className="flex-row justify-between pb-2" style={{ borderBottom: '1px dashed rgba(184, 197, 214, 0.5)' }}>
                  <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Class</span>
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>Second (II)</span>
               </div>
               <div className="flex-row justify-between pb-2" style={{ borderBottom: '1px dashed rgba(184, 197, 214, 0.5)' }}>
                  <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Fare Paid</span>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--success)' }}>₹15.00</span>
               </div>
            </div>

            <div style={{ padding: '12px', background: 'var(--bg-page)', boxShadow: 'var(--shadow-sunken)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
               <CheckCircle size={20} color="var(--success)" />
               <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--success)' }}>Valid until 23:45 Today</span>
            </div>

            <Button className="w-full" onClick={() => navigate('/dashboard')}>Return to Hub</Button>
         </div>
      )}

    </div>
  );
}
