import React, { useState } from 'react';
import BottomNav from '../components/BottomNav';
import SegmentedControl from '../components/SegmentedControl';
import { ArrowLeft, Clock, MapPin, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MyBookingsScreen() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="screen-wrapper" style={{ paddingBottom: '90px' }}>
      
      {/* Header */}
      <div className="flex-row items-center gap-4 mb-6">
        <button 
           className="neuro-icon-btn" 
           style={{ width: '40px', height: '40px', background: 'var(--bg-page)', boxShadow: 'var(--shadow-raised)', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
           onClick={() => navigate('/dashboard')}
        >
          <ArrowLeft size={20} color="var(--text-primary)" />
        </button>
        <h2 style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>My Bookings</h2>
      </div>

      <SegmentedControl 
         tabs={['Upcoming', 'Completed', 'Cancelled']} 
         activeTab={activeTab} 
         onChange={setActiveTab} 
      />

      <div className="flex-col gap-4 mt-6">
        {activeTab === 0 && (
          <div className="neuro-card flex-col" style={{ padding: '16px', background: 'var(--bg-page)' }}>
             <div className="flex-row justify-between items-center mb-4">
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--accent-primary)' }}>12951 • MUMBAI RAJDHANI</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', background: 'var(--success)', color: 'white', padding: '4px 8px', borderRadius: '12px' }}>
                   <CheckCircle size={14} /> Confirmed
                </span>
             </div>

             <div className="flex-row justify-between items-center relative mb-4">
                <div className="flex-col">
                   <h3 style={{ fontSize: '20px', fontWeight: 700, margin: 0 }}>MMCT</h3>
                   <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>17:00 • Today</span>
                </div>
                <div style={{ flex: 1, height: '2px', background: 'var(--shadow-dark)', margin: '0 12px', position: 'relative' }}>
                   <div style={{ position: 'absolute', top: '-6px', left: '50%', transform: 'translateX(-50%)', background: 'var(--bg-page)', padding: '2px 8px', borderRadius: '12px', border: '1px solid var(--shadow-dark)', fontSize: '10px' }}>
                      15h 30m
                   </div>
                </div>
                <div className="flex-col" style={{ textAlign: 'right' }}>
                   <h3 style={{ fontSize: '20px', fontWeight: 700, margin: 0 }}>NDLS</h3>
                   <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>08:30 • Tomorrow</span>
                </div>
             </div>

             <div className="flex-row justify-between pt-4" style={{ borderTop: '1px solid rgba(184, 197, 214, 0.4)' }}>
                <div className="flex-col">
                   <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>PNR Number</span>
                   <span style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '1px' }}>8234567890</span>
                </div>
                <div className="flex-col text-right">
                   <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Passenger</span>
                   <span style={{ fontSize: '14px', fontWeight: 600 }}>Arjun K. +1</span>
                </div>
             </div>
             
             <div className="flex-row gap-4 mt-4">
                <button 
                   onClick={() => navigate('/pnr')}
                   style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid var(--accent-primary)', background: 'transparent', fontWeight: 600, color: 'var(--accent-primary)', cursor: 'pointer' }}
                >
                   Track Live
                </button>
                <button 
                   onClick={() => navigate('/cancel')}
                   style={{ flex: 1, padding: '12px', borderRadius: '8px', border: 'none', background: 'var(--error)', boxShadow: 'var(--shadow-raised)', fontWeight: 600, color: 'white', cursor: 'pointer' }}
                >
                   Cancel Ticket
                </button>
             </div>
          </div>
        )}

        {activeTab === 1 && (
           <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-secondary)' }}>
              No completed journeys yet.
           </div>
        )}

        {activeTab === 2 && (
           <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-secondary)' }}>
              No cancelled tickets.
           </div>
        )}
      </div>

      <BottomNav active="bookings" />
    </div>
  );
}
