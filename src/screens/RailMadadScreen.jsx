import React, { useState } from 'react';
import SegmentedControl from '../components/SegmentedControl';
import Input from '../components/Input';
import Button from '../components/Button';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function RailMadadScreen() {
  const navigate = useNavigate();
  const [type, setType] = useState(0); // 0=Medical, 1=Security, 2=Other

  return (
    <div className="screen-wrapper">
      
      {/* Header */}
      <div className="flex-row items-center gap-4 mb-6">
        <button 
           className="neuro-icon-btn" 
           style={{ width: '40px', height: '40px', background: 'var(--bg-page)', boxShadow: 'var(--shadow-raised)', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
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

         <Button variant="primary" style={{ marginTop: '16px', background: 'var(--error)' }}>
            Submit Request
         </Button>
      </div>

    </div>
  );
}
