import React from 'react';

export default function SegmentedControl({ tabs, activeTab, onChange }) {
  return (
    <div style={{
      display: 'flex',
      background: 'var(--bg-page)',
      borderRadius: '28px',
      boxShadow: '4px 4px 8px var(--shadow-dark), -4px -4px 8px var(--shadow-light)',
      padding: '4px',
      position: 'relative'
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
              background: 'transparent',
              border: 'none',
              fontSize: '15px',
              cursor: 'pointer',
              color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
              fontWeight: isActive ? 600 : 500,
              boxShadow: isActive ? 'var(--shadow-active)' : 'none',
              transition: 'all 0.2s ease-in-out'
            }}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
