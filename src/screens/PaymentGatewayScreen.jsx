import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Building, Wallet, CheckCircle } from 'lucide-react';

export default function PaymentGatewayScreen() {
  const navigate = useNavigate();
  const [method, setMethod] = useState('upi');

  return (
    <div className="screen-wrapper" style={{ paddingBottom: '90px' }}>
      <div className="flex-row items-center gap-4 mb-6">
        <button onClick={() => navigate(-1)} className="neuro-icon-btn" style={{ width: '40px', height: '40px', background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', boxShadow: 'var(--glass-shadow)', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ArrowLeft size={20} color="var(--text-primary)" />
        </button>
        <h2 style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>Payment</h2>
      </div>

      <div className="neuro-card flex-col" style={{ padding: '20px', marginBottom: '24px' }}>
          <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Total Payable Amount</span>
          <h1 style={{ fontSize: '32px', fontWeight: 700, margin: '4px 0', color: 'var(--text-primary)' }}>₹ 2,750.00</h1>
          
          <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px dashed rgba(184, 197, 214, 0.5)' }}>
             <div className="flex-row justify-between mb-2">
                <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Base Fare</span>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>₹ 2,450.00</span>
             </div>
             <div className="flex-row justify-between mb-2">
                <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Tatkal Charges</span>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>₹ 200.00</span>
             </div>
             <div className="flex-row justify-between mb-2">
                <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Convenience Fee</span>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>₹ 100.00</span>
             </div>
          </div>
      </div>

      <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>Select Payment Method</h3>
      <div className="flex-col gap-4">
         <PaymentOption id="wallet" icon={<Wallet size={20} color="var(--accent-saffron)" />} title="R-Wallet" subtitle="Balance: ₹4,500.00" active={method === 'wallet'} onSelect={() => setMethod('wallet')} />
         <PaymentOption id="upi" icon={<span style={{ fontWeight: 700, color: 'var(--success)' }}>UPI</span>} title="Google Pay / PhonePe" subtitle="Fastest option" active={method === 'upi'} onSelect={() => setMethod('upi')} />
         <PaymentOption id="card" icon={<CreditCard size={20} color="var(--accent-primary)" />} title="Credit / Debit Card" subtitle="Visa, Mastercard, RuPay" active={method === 'card'} onSelect={() => setMethod('card')} />
         <PaymentOption id="netbanking" icon={<Building size={20} color="var(--text-secondary)" />} title="Net Banking" subtitle="All major banks" active={method === 'netbanking'} onSelect={() => setMethod('netbanking')} />
      </div>

      <div style={{
         position: 'absolute', bottom: 0, left: 0, right: 0,
         background: 'rgba(230, 238, 245, 0.85)', backdropFilter: 'blur(12px)',
         padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.4)',
         display: 'flex', justifyContent: 'center', zIndex: 100, borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'
      }}>
         <button onClick={() => navigate('/ticket')} style={{ width: '100%', padding: '16px', background: 'var(--accent-primary)', color: 'white', border: 'none', borderRadius: '16px', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 8px 32px rgba(75, 126, 255, 0.3)', cursor: 'pointer' }}>
            Pay ₹2,750
         </button>
      </div>
    </div>
  );
}

function PaymentOption({ icon, title, subtitle, active, onSelect }) {
   return (
      <div onClick={onSelect} className="neuro-raised" style={{ padding: '16px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer', border: active ? '2px solid var(--accent-primary)' : '2px solid transparent' }}>
         <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {icon}
         </div>
         <div className="flex-col" style={{ flex: 1 }}>
            <span style={{ fontSize: '15px', fontWeight: 600 }}>{title}</span>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{subtitle}</span>
         </div>
         <div style={{ width: '24px', height: '24px', borderRadius: '12px', border: active ? 'none' : '2px solid var(--text-secondary)', background: active ? 'var(--success)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {active && <CheckCircle size={16} color="white" />}
         </div>
      </div>
   );
}
