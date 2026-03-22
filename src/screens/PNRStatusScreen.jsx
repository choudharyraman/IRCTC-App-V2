import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import { ArrowLeft, RefreshCw, Info, AlertTriangle, Route } from 'lucide-react';

export default function PNRStatusScreen() {
  const navigate = useNavigate();

  return (
    <div className="screen-wrapper" style={{ paddingBottom: '2rem' }}>
      
      {/* Header */}
      <div className="flex-row items-center justify-between mb-6">
        <div className="flex-row items-center gap-4">
          <button className="neu-icon-btn" style={{ width: '40px', height: '40px', background: 'var(--bg-color)', boxShadow: 'var(--shadow-dark), var(--shadow-light)', border: 'none' }} onClick={() => navigate('/dashboard')}>
            <ArrowLeft size={20} className="text-navy" />
          </button>
          <h2 style={{ fontSize: '1.2rem', margin: 0, fontWeight: 700 }}>PNR Status</h2>
        </div>
      </div>

      {/* PNR Search Card */}
      <Card style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
         <p style={{ margin: '0 0 1rem 0', fontWeight: 600, fontSize: '0.9rem' }}>Check PNR Prediction</p>
         <div className="flex-row gap-4 mb-2">
            <Input type="text" placeholder="Enter 10-digit PNR" className="w-full" value="2345678901" readOnly />
         </div>
         <Button variant="primary" className="w-full" icon={<RefreshCw size={18} />}>
            Check Status
         </Button>
      </Card>

      {/* PNR Result Status */}
      <Card style={{ padding: '1.5rem', marginBottom: '1.5rem', border: '1px solid rgba(19, 136, 8, 0.3)' }}>
         <div className="flex-row justify-between items-center mb-4">
            <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>Chart Not Prepared</span>
            <span style={{ background: 'var(--bg-color)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600, boxShadow: 'var(--shadow-inset-dark), var(--shadow-inset-light)' }}>2345678901</span>
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
         <div style={{ background: 'var(--bg-color)', padding: '1rem', borderRadius: '12px', boxShadow: 'var(--shadow-inset-dark), var(--shadow-inset-light)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'var(--accent-green)', color: 'white', padding: '0.5rem', borderRadius: '50%', display: 'flex' }}>
               <Info size={24} />
            </div>
            <div className="flex-col">
               <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 600 }}>Confirmation Probability</span>
               <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-green)' }}>92% High Chance</span>
            </div>
         </div>
      </Card>

      {/* Alternate Suggestions section */}
      <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 600 }}>Smart Alternatives</h3>
      
      <Card style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
         <div style={{ background: 'var(--bg-color)', padding: '0.5rem', borderRadius: '50%', boxShadow: 'var(--shadow-dark), var(--shadow-light)', color: 'var(--accent-saffron)' }}>
            <AlertTriangle size={20} />
         </div>
         <div className="flex-col" style={{ flex: 1 }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Travel Guarantee</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Add ₹120 to get 3x voucher if ticket unconfirmed.</span>
         </div>
         <Button style={{ padding: '0.5rem', fontSize: '0.75rem' }}>+ Add</Button>
      </Card>

      <Card style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
         <div style={{ background: 'var(--bg-color)', padding: '0.5rem', borderRadius: '50%', boxShadow: 'var(--shadow-dark), var(--shadow-light)', color: 'var(--text-dark)' }}>
            <Route size={20} />
         </div>
         <div className="flex-col" style={{ flex: 1 }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Alternate Routes</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Break-journey available via Surat.</span>
         </div>
         <ChevronRight size={18} className="text-light" />
      </Card>

    </div>
  );
}
