import React, { useState } from 'react';
import SegmentedControl from '../components/SegmentedControl';
import Input from '../components/Input';
import Button from '../components/Button';
import { ArrowLeft, AlertTriangle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function RailMadadScreen() {
  const navigate = useNavigate();
  const [type, setType] = useState(0); // 0=Medical, 1=Security, 2=Other
  const [status, setStatus] = useState('form');

  const handleSubmit = () => {
     setStatus('loading');
     setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="screen-wrapper">
      
      {/* Header */}
      <div className="flex-row items-center gap-4 mb-6">
        <button 
           className="neuro-icon-btn" 
           style={{ width: '40px', height: '40px', background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', boxShadow: 'var(--glass-shadow)', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
           onClick={() => navigate('/dashboard')}
        >
          <ArrowLeft size={20} color="var(--text-primary)" />
        </button>
        <div className="flex-col">
           <h2 style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>Rail Madad</h2>
           <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Grievance & Assistance</span>
        </div>
      </div>

      <div style={{ padding: '16px', background: 'rgba(229, 62, 62, 0.1)', borderRadius: '16px', borderLeft: '4px solid var(--error)', display: 'flex', gap: '12px', marginBottom: '24px' }}>
         <AlertTriangle size={24} color="var(--error)" />
         <span style={{ fontSize: '13px', color: 'var(--text-primary)' }}>For immediate emergency security assistance, dial <strong>139</strong>.</span>
      </div>

      {status === 'form' && (
         <div className="flex-col gap-4">
            <Input placeholder="PNR / Train Number" />
            
            <div className="flex-col gap-2 mt-2 mb-2">
               <span style={{ fontSize: '14px', fontWeight: 600 }}>Assistance Required</span>
               <SegmentedControl tabs={['Medical', 'Security', 'Cleanliness']} activeTab={type} onChange={setType} />
            </div>

            <div className="neuro-sunken" style={{ width: '100%', borderRadius: '12px', padding: '16px' }}>
               <textarea 
                  placeholder="Describe your issue in detail..." 
                  rows={5}
                  style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', color: 'var(--text-primary)', resize: 'none', fontSize: '14px' }}
               />
            </div>

            <Button variant="primary" onClick={handleSubmit} style={{ marginTop: '16px', background: 'var(--error)' }}>
               Submit Request
            </Button>
         </div>
      )}

      {status === 'loading' && (
         <div className="flex-col items-center justify-center p-8 gap-4 mt-8" style={{ animation: 'pulse 1.5s infinite' }}>
            <span style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-secondary)' }}>Registering Grievance...</span>
         </div>
      )}

      {status === 'success' && (
         <div className="neuro-card flex-col items-center text-center mt-4" style={{ padding: '32px 24px', animation: 'slideUp 0.3s ease-out' }}>
            <CheckCircle size={56} color="var(--success)" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Complaint Registered</h3>
            <span style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>Your request has been escalated to the relevant authorities.</span>
            
            <div className="neuro-sunken w-full" style={{ padding: '16px', borderRadius: '12px', marginBottom: '32px' }}>
               <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Reference ID</span>
               <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '4px 0 0 0', letterSpacing: '2px', color: 'var(--accent-primary)' }}>RM-1204892</h2>
            </div>

            <Button className="w-full" onClick={() => navigate('/dashboard')}>Return Home</Button>
         </div>
      )}

    </div>
  );
}
