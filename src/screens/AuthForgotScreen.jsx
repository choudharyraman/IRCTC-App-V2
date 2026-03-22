import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SegmentedControl from '../components/SegmentedControl';
import Input from '../components/Input';
import Button from '../components/Button';
import { ArrowLeft } from 'lucide-react';

export default function AuthForgotScreen() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0); // 0 = Password, 1 = User ID
  const [successMsg, setSuccessMsg] = useState('');

  const handleRecover = () => {
    if (activeTab === 1) {
       setSuccessMsg('Your User ID has been sent to a****@gmail.com');
    } else {
       // In a real app this would go to an OTP screen, for prototype we show success
       setSuccessMsg('Password reset link sent to registered mobile.');
    }
  };

  return (
    <div style={{ padding: '2rem 1.5rem', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <div className="flex-row items-center gap-4 mb-6">
        <button 
           className="neuro-icon-btn" 
           style={{ width: '40px', height: '40px', background: 'var(--bg-page)', boxShadow: 'var(--shadow-raised)', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
           onClick={() => navigate('/login')}
        >
          <ArrowLeft size={20} color="var(--text-primary)" />
        </button>
        <h2 style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>Account Recovery</h2>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <SegmentedControl 
           tabs={['Password', 'User ID']} 
           activeTab={activeTab} 
           onChange={(idx) => { setActiveTab(idx); setSuccessMsg(''); }} 
        />
      </div>

      <div className="flex-col gap-4">
         <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
           {activeTab === 0 ? 'Enter your registered mobile number to reset your password via OTP.' : 'Enter your registered email or mobile to recover your User ID.'}
         </p>

         <Input label={activeTab === 0 ? "Mobile Number" : "Registered Email or Mobile"} placeholder="Enter details" />

         <Button onClick={handleRecover}>
           {activeTab === 0 ? 'Send OTP' : 'Recover User ID'}
         </Button>

         {successMsg && (
           <div className="neuro-card" style={{ padding: '16px', background: 'var(--bg-page)', borderLeft: '4px solid var(--success)', marginTop: '16px' }}>
              <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--success)' }}>✓ Success</span>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>{successMsg}</p>
           </div>
         )}
      </div>

    </div>
  );
}
