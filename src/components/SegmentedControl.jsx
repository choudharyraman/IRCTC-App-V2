import React from 'react';

export default function SegmentedControl({ tabs, activeTab, onChange }) {
  return (
    <div style={{
      display: 'flex',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '28px',
      boxShadow: 'var(--glass-shadow)',
      padding: '4px',
      position: 'relative',
      border: '1px solid var(--glass-border)'
    }}>
      {tabs.map((tab, idx) => {
        const isActive = activeTab === idx;
        return (
          <button
            key={idx}
            onClick={() => onChange(idx)}
            style={{
              flex: 1,
              padding: '12px',
              borderRadius: '24px',
              background: isActive ? 'var(--glass-bg)' : 'transparent',
              border: isActive ? '1px solid var(--glass-border)' : '1px solid transparent',
              fontSize: '15px',
              cursor: 'pointer',
              color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
              fontWeight: isActive ? 600 : 500,
              boxShadow: isActive ? '0 4px 12px rgba(0,0,0,0.05)' : 'none',
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              backdropFilter: isActive ? 'blur(12px)' : 'none'
            }}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
