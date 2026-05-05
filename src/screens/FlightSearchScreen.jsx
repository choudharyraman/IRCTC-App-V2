import React, { useState } from 'react';
import { ArrowLeft, PlaneTakeoff, PlaneLanding, Calendar, Users, ArrowUpDown, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FlightSearchScreen() {
  const nav = useNavigate();
  const [tripType, setTripType] = useState('one-way'); // 'one-way' or 'round-trip'

  return (
    <div className="app-container">
      <div className="screen-wrapper" style={{ paddingBottom: '100px' }}>
        
        {/* Header */}
        <div className="flex-row items-center gap-4 mb-8">
          <button onClick={() => nav(-1)} className="icon-btn">
            <ArrowLeft size={20} />
          </button>
          <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>Book Flights</h2>
        </div>

        {/* Trip Type Toggle */}
        <div style={{
          display: 'flex', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)',
          padding: '4px', marginBottom: '24px'
        }}>
          <button 
            onClick={() => setTripType('one-way')}
            style={{
              flex: 1, padding: '10px 0', borderRadius: 'var(--radius-md)', border: 'none', cursor: 'pointer',
              background: tripType === 'one-way' ? 'var(--bg-card)' : 'transparent',
              color: tripType === 'one-way' ? 'var(--text-primary)' : 'var(--text-secondary)',
              fontWeight: tripType === 'one-way' ? 700 : 600,
              boxShadow: tripType === 'one-way' ? 'var(--shadow-sm)' : 'none',
              transition: 'all var(--duration-fast)'
            }}
          >
            One Way
          </button>
          <button 
            onClick={() => setTripType('round-trip')}
            style={{
              flex: 1, padding: '10px 0', borderRadius: 'var(--radius-md)', border: 'none', cursor: 'pointer',
              background: tripType === 'round-trip' ? 'var(--bg-card)' : 'transparent',
              color: tripType === 'round-trip' ? 'var(--text-primary)' : 'var(--text-secondary)',
              fontWeight: tripType === 'round-trip' ? 700 : 600,
              boxShadow: tripType === 'round-trip' ? 'var(--shadow-sm)' : 'none',
              transition: 'all var(--duration-fast)'
            }}
          >
            Round Trip
          </button>
        </div>

        {/* Search Form Card */}
        <div className="premium-card mb-8" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* From / To */}
          <div style={{ position: 'relative' }}>
            {/* From */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '16px', padding: '16px',
              border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-lg)', marginBottom: '12px',
              background: 'var(--bg-secondary)'
            }}>
              <PlaneTakeoff size={24} color="var(--primary)" />
              <div className="flex-col">
                <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>From</span>
                <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', marginTop: '2px' }}>New Delhi (DEL)</span>
              </div>
            </div>

            {/* Swap Button */}
            <div style={{
              position: 'absolute', top: '50%', right: '24px', transform: 'translateY(-50%)', zIndex: 10,
              width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-card)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid var(--border-primary)', boxShadow: 'var(--shadow-sm)', cursor: 'pointer'
            }}>
              <ArrowUpDown size={18} color="var(--primary)" />
            </div>

            {/* To */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '16px', padding: '16px',
              border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-lg)',
              background: 'var(--bg-secondary)'
            }}>
              <PlaneLanding size={24} color="var(--accent)" />
              <div className="flex-col">
                <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>To</span>
                <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', marginTop: '2px' }}>Mumbai (BOM)</span>
              </div>
            </div>
          </div>

          {/* Dates Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px', padding: '16px',
              border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-lg)',
              background: 'var(--bg-secondary)'
            }}>
              <Calendar size={20} color="var(--text-secondary)" />
              <div className="flex-col">
                <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>Departure</span>
                <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>12 Oct 26</span>
              </div>
            </div>
            
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px', padding: '16px',
              border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-lg)',
              background: 'var(--bg-secondary)', opacity: tripType === 'one-way' ? 0.5 : 1
            }}>
              <Calendar size={20} color="var(--text-secondary)" />
              <div className="flex-col">
                <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>Return</span>
                <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>{tripType === 'one-way' ? 'Add Date' : '18 Oct 26'}</span>
              </div>
            </div>
          </div>

          {/* Passengers & Class */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '16px', padding: '16px',
            border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-lg)',
            background: 'var(--bg-secondary)'
          }}>
            <Users size={24} color="var(--text-secondary)" />
            <div className="flex-col">
              <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>Travellers & Class</span>
              <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-primary)', marginTop: '2px' }}>1 Adult • Economy</span>
            </div>
          </div>

        </div>

        {/* Search Button */}
        <button style={{
          width: '100%', padding: '18px', borderRadius: 'var(--radius-full)', border: 'none',
          background: 'var(--primary)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          fontSize: '16px', fontWeight: 800, cursor: 'pointer', boxShadow: '0 8px 24px var(--primary-glow)', letterSpacing: '0.5px'
        }}>
          <Search size={20} />
          SEARCH FLIGHTS
        </button>

      </div>
    </div>
  );
}
