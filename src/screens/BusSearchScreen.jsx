import React from 'react';
import { ArrowLeft, ArrowUpDown, Calendar, Search, Shield, Wind, Coffee } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BusSearchScreen() {
  const nav = useNavigate();

  return (
    <div className="app-container">
      <div className="screen-wrapper" style={{ paddingBottom: '100px' }}>
        
        {/* Header */}
        <div className="flex-row items-center gap-4 mb-8">
          <button onClick={() => nav(-1)} className="icon-btn">
            <ArrowLeft size={20} />
          </button>
          <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>Book Bus Tickets</h2>
        </div>

        {/* Search Card */}
        <div className="premium-card mb-8" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* From / To */}
          <div style={{ position: 'relative' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '16px', padding: '16px',
              border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-lg)', marginBottom: '12px',
              background: 'var(--bg-secondary)'
            }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '3px solid var(--primary)', background: 'var(--bg-card)' }} />
              <div className="flex-col">
                <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>From</span>
                <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', marginTop: '2px' }}>Mumbai</span>
              </div>
            </div>

            <div style={{
              position: 'absolute', top: '50%', right: '24px', transform: 'translateY(-50%)', zIndex: 10,
              width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-card)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid var(--border-primary)', boxShadow: 'var(--shadow-sm)', cursor: 'pointer'
            }}>
              <ArrowUpDown size={18} color="var(--primary)" />
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', gap: '16px', padding: '16px',
              border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-lg)',
              background: 'var(--bg-secondary)'
            }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '2px', background: 'var(--accent)' }} />
              <div className="flex-col">
                <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>To</span>
                <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', marginTop: '2px' }}>Pune</span>
              </div>
            </div>
          </div>

          {/* Date */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '16px', padding: '16px',
            border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-lg)',
            background: 'var(--bg-secondary)'
          }}>
            <Calendar size={24} color="var(--text-secondary)" />
            <div className="flex-col">
              <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>Date of Journey</span>
              <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-primary)', marginTop: '2px' }}>Today, 10 Oct</span>
            </div>
          </div>

          {/* Quick Filters */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
            <span style={{ padding: '8px 16px', borderRadius: 'var(--radius-full)', border: '1px solid var(--primary)', color: 'var(--primary)', background: 'var(--primary-glow)', fontSize: '12px', fontWeight: 700, whiteSpace: 'nowrap' }}>AC Only</span>
            <span style={{ padding: '8px 16px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-primary)', color: 'var(--text-secondary)', fontSize: '12px', fontWeight: 600, whiteSpace: 'nowrap' }}>Sleeper</span>
            <span style={{ padding: '8px 16px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-primary)', color: 'var(--text-secondary)', fontSize: '12px', fontWeight: 600, whiteSpace: 'nowrap' }}>Volvo</span>
          </div>

          <button style={{
            width: '100%', padding: '18px', borderRadius: 'var(--radius-full)', border: 'none',
            background: 'var(--primary)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            fontSize: '16px', fontWeight: 800, cursor: 'pointer', boxShadow: '0 8px 24px var(--primary-glow)', letterSpacing: '0.5px'
          }}>
            <Search size={20} />
            SEARCH BUSES
          </button>
        </div>

        {/* Info Banners */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: 'var(--radius-lg)' }}>
            <Shield size={24} color="#10B981" />
            <div className="flex-col">
              <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>Safe & Hygienic</span>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Sanitized buses with verified drivers.</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: 'var(--radius-lg)' }}>
            <Wind size={24} color="#3B82F6" />
            <div className="flex-col">
              <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>Premium AC Travel</span>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Enjoy comfortable rides with top operators.</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
