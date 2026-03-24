import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { ArrowLeft, Smartphone, CheckCircle, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function RechargeScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState('input');

  const handleRecharge = () => {
     setStep('processing');
     setTimeout(() => setStep('success'), 2000);
  };

  return (
    <div className="screen-wrapper" style={{ paddingBottom: '90px' }}>
      
      <div className="flex-row items-center gap-4 mb-6">
        <button onClick={() => navigate('/dashboard')} className="neuro-icon-btn" style={{ width: '40px', height: '40px', background: 'var(--bg-page)', boxShadow: 'var(--shadow-raised)', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <ArrowLeft size={20} color="var(--text-primary)" />
        </button>
        <div className="flex-col">
           <h2 style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>Recharge & Bills</h2>
           <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Powered by Bharat BillPay</span>
        </div>
      </div>

      {step === 'input' && (
         <div style={{ animation: 'slideUp 0.3s ease-out' }}>
            <div className="neuro-card flex-col" style={{ padding: '24px', marginBottom: '24px' }}>
               <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                  <div style={{ padding: '16px', borderRadius: '24px', background: 'rgba(255, 153, 51, 0.1)' }}>
                     <Smartphone size={40} color="var(--accent-saffron)" />
                  </div>
               </div>
               
               <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>Mobile Recharge</h3>
               <Input placeholder="10-digit Mobile Number" />
               <div className="mt-4"></div>
               <Input placeholder="Amount (₹)" />
               <div className="mt-6"></div>
               <Button onClick={handleRecharge} icon={<Zap size={18} />}>Proceed to Recharge</Button>
            </div>

            <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: 'var(--text-secondary)' }}>Recent Recharges</h3>
            <div className="neuro-raised" style={{ padding: '16px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
               <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-page)', boxShadow: 'var(--shadow-sunken)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--accent-primary)' }}>JIO</span>
               </div>
               <div className="flex-col" style={{ flex: 1 }}>
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>98765 43210</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Last recharged: ₹299 on 15 Mar</span>
               </div>
               <button onClick={handleRecharge} style={{ padding: '6px 12px', background: 'transparent', border: '1px solid var(--accent-primary)', color: 'var(--accent-primary)', borderRadius: '12px', fontWeight: 600, fontSize: '12px', cursor: 'pointer' }}>Repeat</button>
            </div>
         </div>
      )}

      {step === 'processing' && (
         <div className="flex-col items-center justify-center p-8 gap-4 mt-8" style={{ animation: 'pulse 1.5s infinite' }}>
            <Zap size={48} color="var(--accent-saffron)" />
            <span style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-secondary)' }}>Connecting to Operator...</span>
         </div>
      )}

      {step === 'success' && (
         <div className="neuro-card flex-col items-center text-center mt-4" style={{ padding: '32px 24px', animation: 'slideUp 0.3s ease-out' }}>
            <CheckCircle size={56} color="var(--success)" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Recharge Successful!</h3>
            <span style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>Your mobile number has been recharged instantly.</span>
            
            <div className="neuro-sunken w-full" style={{ padding: '16px', borderRadius: '12px', marginBottom: '32px' }}>
               <div className="flex-row justify-between mb-2">
                  <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Reference ID</span>
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>BBPS-98745</span>
               </div>
               <div className="flex-row justify-between">
                  <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Total Paid</span>
                  <span style={{ fontSize: '16px', fontWeight: 700 }}>₹ 299.00</span>
               </div>
            </div>

            <Button className="w-full" onClick={() => navigate('/dashboard')}>Return Home</Button>
         </div>
      )}

    </div>
  );
}
