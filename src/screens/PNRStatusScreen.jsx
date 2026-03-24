import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import { ArrowLeft, RefreshCw, Info, AlertTriangle, Route } from 'lucide-react';

export default function PNRStatusScreen() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('input');

  const checkStatus = () => {
     setStatus('loading');
     setTimeout(() => setStatus('result'), 1500);
  };

  return (
    <div className="screen-wrapper" style={{ paddingBottom: '2rem' }}>
      
      {/* Header */}
      <div className="flex-row items-center justify-between mb-6">
        <div className="flex-row items-center gap-4">
          <button className="neuro-icon-btn" style={{ width: '40px', height: '40px', background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', boxShadow: 'var(--glass-shadow)', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => navigate('/dashboard')}>
            <ArrowLeft size={20} className="text-navy" />
          </button>
          <h2 style={{ fontSize: '1.2rem', margin: 0, fontWeight: 700 }}>PNR Status</h2>
        </div>
      </div>

      {/* PNR Search Card */}
      <Card style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
         <p style={{ margin: '0 0 1rem 0', fontWeight: 600, fontSize: '0.9rem' }}>Check PNR Prediction</p>
         <div className="flex-row gap-4 mb-2">
            <Input type="text" placeholder="Enter 10-digit PNR" className="w-full" />
         </div>
         <Button variant="primary" className="w-full" icon={<RefreshCw size={18} />} onClick={checkStatus}>
            {status === 'loading' ? 'Checking...' : 'Check Status'}
         </Button>
      </Card>

      {status === 'result' && (
         <div style={{ animation: 'slideUp 0.3s ease-out' }}>
            {/* PNR Result Status */}
            <Card style={{ padding: '1.5rem', marginBottom: '1.5rem', border: '1px solid rgba(19, 136, 8, 0.3)' }}>
               <div className="flex-row justify-between items-center mb-4">
                  <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>Chart Not Prepared</span>
                  <span style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600, boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.05)' }}>2345678901</span>
               </div>

               <div className="flex-col gap-2 mb-4">
                  <div className="flex-row justify-between">
                     <span className="text-light" style={{ fontSize: '0.85rem' }}>Train</span>
                     <span style={{ fontWeight: 600 }}>12951 - RAJDHANI</span>
                  </div>
                  <div className="flex-row justify-between">
                     <span className="text-light" style={{ fontSize: '0.85rem' }}>Current Status</span>
                     <span className="text-saffron" style={{ fontWeight: 700 }}>WL 14</span>
                  </div>
               </div>

               {/* ML Prediction Widget */}
               <div style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', padding: '1rem', borderRadius: '12px', boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: 'var(--accent-green)', color: 'white', padding: '0.5rem', borderRadius: '50%', display: 'flex', boxShadow: 'var(--glass-shadow)' }}>
                     <Info size={24} />
                  </div>
                  <div className="flex-col">
                     <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Confirmation Probability</span>
                     <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-green)' }}>92% High Chance</span>
                  </div>
               </div>
            </Card>

            {/* Alternate Suggestions section */}
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 600 }}>Smart Alternatives</h3>
            
            <Card style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
               <div style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', padding: '0.5rem', borderRadius: '50%', boxShadow: 'var(--glass-shadow)', color: 'var(--accent-saffron)' }}>
                  <AlertTriangle size={20} />
               </div>
               <div className="flex-col" style={{ flex: 1 }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Travel Guarantee</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Add ₹120 to get 3x voucher if ticket unconfirmed.</span>
               </div>
               <Button style={{ padding: '0.5rem', fontSize: '0.75rem' }}>+ Add</Button>
            </Card>

            <Card style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <div style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', padding: '0.5rem', borderRadius: '50%', boxShadow: 'var(--glass-shadow)', color: 'var(--text-primary)' }}>
                  <Route size={20} />
               </div>
               <div className="flex-col" style={{ flex: 1 }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Alternate Routes</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Break-journey available via Surat.</span>
               </div>
            </Card>
         </div>
      )}

    </div>
  );
}
