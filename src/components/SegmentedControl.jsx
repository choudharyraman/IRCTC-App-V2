import React from 'react';

export default function SegmentedControl({ tabs, activeTab, onChange, style = {} }) {
  return (
    <div style={{
      display: 'flex',
      background: 'var(--bg-input)',
      borderRadius: 'var(--radius-lg)',
      padding: '4px',
      position: 'relative',
      border: '1px solid var(--border-primary)',
      ...style,
    }}>
      {tabs.map((tab, idx) => {
        const isActive = activeTab === idx;
        return (
          <button
            key={idx}
            onClick={() => onChange(idx)}
            style={{
              flex: 1,
              padding: '10px 8px',
              borderRadius: 'var(--radius-md)',
              background: isActive ? 'var(--primary)' : 'transparent',
              border: 'none',
              fontSize: '13px',
              cursor: 'pointer',
              color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
              fontWeight: isActive ? 650 : 500,
              fontFamily: "'Inter', sans-serif",
              boxShadow: isActive ? '0 2px 12px var(--primary-glow)' : 'none',
              transition: 'all var(--duration-normal) var(--ease-spring)',
              letterSpacing: '0.01em',
            }}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
