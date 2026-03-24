import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Download, Share2, Home } from 'lucide-react';

export default function TicketConfirmationScreen() {
  const navigate = useNavigate();

  return (
    <div className="screen-wrapper" style={{ paddingBottom: '90px' }}>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginTop: '24px', marginBottom: '24px' }}>
         <div style={{ width: '64px', height: '64px', borderRadius: '32px', background: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', boxShadow: '0 8px 32px rgba(16, 185, 129, 0.3)' }}>
            <CheckCircle size={32} color="white" />
         </div>
         <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>Booking Confirmed!</h1>
         <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Your e-ticket has been sent to your email and SMS.</span>
      </div>

      <div className="neuro-card flex-col" style={{ padding: '24px', marginBottom: '24px', position: 'relative' }}>
         {/* Ticket Cutout Effects */}
         <div style={{ position: 'absolute', left: '-12px', top: '55%', width: '24px', height: '24px', borderRadius: '50%', background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', boxShadow: 'var(--glass-shadow)' }}></div>
         <div style={{ position: 'absolute', right: '-12px', top: '55%', width: '24px', height: '24px', borderRadius: '50%', background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', boxShadow: 'var(--glass-shadow)' }}></div>

         <div className="flex-row justify-between mb-4">
            <div className="flex-col">
               <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>PNR Number</span>
               <span style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '1px' }}>8234567890</span>
            </div>
            <div className="flex-col" style={{ textAlign: 'right' }}>
               <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Train</span>
               <span style={{ fontSize: '16px', fontWeight: 600 }}>12951 • 3A</span>
            </div>
         </div>

         <div className="flex-row justify-between items-center mb-6">
             <div className="flex-col">
               <h3 style={{ fontSize: '20px', fontWeight: 700, margin: 0 }}>MMCT</h3>
               <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>17:00 • 24 Mar</span>
             </div>
             <div style={{ flex: 1, height: '2px', background: 'var(--shadow-dark)', margin: '0 12px' }}></div>
             <div className="flex-col" style={{ textAlign: 'right' }}>
               <h3 style={{ fontSize: '20px', fontWeight: 700, margin: 0 }}>NDLS</h3>
               <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>08:32 • 25 Mar</span>
             </div>
         </div>

         <div style={{ borderTop: '1px dashed rgba(184, 197, 214, 0.6)', margin: '16px 0' }}></div>

         <div className="flex-row justify-between items-center mb-6 mt-4">
            <div className="flex-col gap-1">
               <span style={{ fontSize: '14px', fontWeight: 600 }}>Raman Choudhary</span>
               <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>28 yrs • Male</span>
               <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--success)' }}>Confirmed</span>
            </div>
            <div className="flex-col" style={{ alignItems: 'flex-end' }}>
               <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Coach/Seat</span>
               <span style={{ fontSize: '20px', fontWeight: 700, color: 'var(--accent-primary)' }}>B1 - 42</span>
            </div>
         </div>

         <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
            <div style={{ width: '160px', height: '160px', background: 'white', padding: '16px', borderRadius: '16px', boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               {/* Mock QR Code Pattern via CSS grid */}
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '4px', width: '100%', height: '100%' }}>
                  {Array.from({length: 25}).map((_, i) => (
                     <div key={i} style={{ background: (i % 2 === 0 || i % 3 === 0) ? 'black' : 'white', borderRadius: '2px' }}></div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      <div className="flex-row gap-4 mb-4">
         <button className="neuro-raised" style={{ flex: 1, padding: '16px', border: 'none', background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', color: 'var(--accent-primary)', fontWeight: 600, borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <Download size={20} /> Save E-Ticket
         </button>
         <button className="neuro-raised" style={{ flex: 1, padding: '16px', border: 'none', background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', color: 'var(--text-primary)', fontWeight: 600, borderRadius: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <Share2 size={20} /> Share
         </button>
      </div>

      <button onClick={() => navigate('/dashboard')} style={{ width: '100%', padding: '16px', background: 'transparent', color: 'var(--text-secondary)', border: 'none', fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
         <Home size={20} /> Return to Home
      </button>

    </div>
  );
}
