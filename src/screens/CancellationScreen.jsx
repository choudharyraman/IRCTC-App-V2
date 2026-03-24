import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import Button from '../components/Button';

export default function CancellationScreen() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([true, false]);

  const toggleSelect = (index) => {
    const newSel = [...selected];
    newSel[index] = !newSel[index];
    setSelected(newSel);
  };

  const cancelCount = selected.filter(Boolean).length;
  const refundAmount = cancelCount * 1150;

  return (
    <div className="screen-wrapper" style={{ paddingBottom: '90px' }}>
      <div className="flex-row items-center gap-4 mb-6">
        <button onClick={() => navigate(-1)} className="neuro-icon-btn" style={{ width: '40px', height: '40px', background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', boxShadow: 'var(--glass-shadow)', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ArrowLeft size={20} color="var(--text-primary)" />
        </button>
        <div className="flex-col">
          <h2 style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>Cancel Ticket</h2>
          <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>PNR: 8234567890</span>
        </div>
      </div>

      <div style={{ padding: '16px', background: 'rgba(229, 62, 62, 0.1)', borderRadius: '16px', display: 'flex', gap: '12px', marginBottom: '24px' }}>
         <AlertTriangle size={20} color="var(--error)" />
         <span style={{ fontSize: '13px', color: 'var(--text-primary)' }}>Changes cannot be undone once confirmed. Refunds will be credited to original payment method in 3-5 days.</span>
      </div>

      <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>Select Passengers</h3>
      <div className="flex-col gap-4 mb-6">
         <PassengerCheckbox name="Arjun K." age="28 yrs" status="Confirmed" berth="B1-42" checked={selected[0]} onChange={() => toggleSelect(0)} />
         <PassengerCheckbox name="Neha K." age="26 yrs" status="Confirmed" berth="B1-43" checked={selected[1]} onChange={() => toggleSelect(1)} />
      </div>

      <div className="neuro-card flex-col" style={{ padding: '20px', marginBottom: '24px' }}>
         <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>Refund Estimate</h3>
         
         <div className="flex-row justify-between mb-2">
            <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Ticket Cost (x{cancelCount})</span>
            <span style={{ fontSize: '14px', fontWeight: 600 }}>₹ {cancelCount * 1250}.00</span>
         </div>
         <div className="flex-row justify-between mb-4 pb-4" style={{ borderBottom: '1px dashed rgba(184, 197, 214, 0.5)' }}>
            <span style={{ fontSize: '14px', color: 'var(--error)' }}>Cancellation Charges</span>
            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--error)' }}>- ₹ {cancelCount * 100}.00</span>
         </div>
         <div className="flex-row justify-between">
            <span style={{ fontSize: '16px', fontWeight: 600 }}>Total Refund</span>
            <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--success)' }}>₹ {refundAmount}.00</span>
         </div>
      </div>

      <Button variant="primary" onClick={() => { alert('Cancelled successfully! Refund initiated.'); navigate('/bookings'); }} style={{ background: 'var(--error)' }} disabled={cancelCount === 0}>
         Confirm Cancellation
      </Button>

    </div>
  );
}

function PassengerCheckbox({ name, age, status, berth, checked, onChange }) {
   return (
      <div onClick={onChange} className="neuro-raised" style={{ padding: '16px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer', border: checked ? '2px solid var(--error)' : '2px solid transparent' }}>
         <div style={{ width: '24px', height: '24px', borderRadius: '8px', border: checked ? 'none' : '2px solid var(--text-secondary)', background: checked ? 'var(--error)' : 'var(--bg-page)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: checked ? 'none' : 'inset 0 2px 8px rgba(0,0,0,0.05)' }}>
            {checked && <div style={{ width: '12px', height: '12px', background: 'white', borderRadius: '2px' }}></div>}
         </div>
         <div className="flex-col" style={{ flex: 1 }}>
            <span style={{ fontSize: '15px', fontWeight: 600 }}>{name}</span>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{age} • {berth} • {status}</span>
         </div>
      </div>
   );
}
