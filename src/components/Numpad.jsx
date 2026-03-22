import React, { useState } from 'react';
import { Delete, Fingerprint } from 'lucide-react';

export default function Numpad({ onKey, onBiometric }) {
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'bio', '0', 'delete'];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', justifyContent: 'center', width: 'fit-content', margin: '0 auto' }}>
      {keys.map((k, idx) => (
        <NumpadKey 
           key={idx} 
           val={k} 
           onClick={() => {
              if (k === 'delete') onKey('delete');
              else if (k === 'bio') { if(onBiometric) onBiometric(); }
              else onKey(k);
           }} 
        />
      ))}
    </div>
  );
}

function NumpadKey({ val, onClick }) {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      onClick={onClick}
      style={{
        width: '72px',
        height: '72px',
        borderRadius: '12px',
        background: 'var(--bg-page)',
        border: 'none',
        cursor: 'pointer',
        fontSize: '24px',
        fontWeight: 500,
        color: 'var(--text-primary)',
        boxShadow: pressed ? 'var(--shadow-active)' : '5px 5px 10px var(--shadow-dark), -5px -5px 10px var(--shadow-light)',
        transform: pressed ? 'scale(0.95)' : 'scale(1)',
        transition: 'box-shadow 0.1s ease, transform 0.1s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {val === 'delete' ? <Delete size={28} /> : 
       val === 'bio' ? <Fingerprint size={28} color="var(--accent-primary)" /> : 
       val}
    </button>
  );
}
