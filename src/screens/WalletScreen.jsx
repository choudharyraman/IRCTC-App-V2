import React from 'react';
import BottomNav from '../components/BottomNav';
import Button from '../components/Button';
import { ArrowLeft, Plus, Download, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function WalletScreen() {
  const navigate = useNavigate();

  return (
    <div className="screen-wrapper" style={{ paddingBottom: '90px' }}>
      
      {/* Header */}
      <div className="flex-row items-center gap-4 mb-6">
        <button 
           className="neuro-icon-btn" 
           style={{ width: '40px', height: '40px', background: 'var(--bg-page)', boxShadow: 'var(--shadow-raised)', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
           onClick={() => navigate('/dashboard')}
        >
          <ArrowLeft size={20} color="var(--text-primary)" />
        </button>
        <h2 style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>R-Wallet</h2>
      </div>

      {/* Wallet Balance Card */}
      <div className="neuro-card" style={{ padding: '24px', background: 'var(--accent-primary-gradient)', color: 'white', borderRadius: '24px', position: 'relative', overflow: 'hidden', marginBottom: '32px' }}>
         <div style={{ position: 'absolute', right: '-20px', top: '-20px', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}></div>
         
         <span style={{ fontSize: '14px', opacity: 0.9, color: 'white' }}>Available Balance</span>
         <h1 style={{ fontSize: '36px', fontWeight: 700, margin: '8px 0', color: 'white' }}>₹ 4,500.00</h1>
         <span style={{ fontSize: '12px', opacity: 0.8, color: 'white' }}>RailOne Zero-Fee Wallet</span>
         
         <div className="flex-row gap-4 mt-6">
            <button style={{ flex: 1, padding: '12px', borderRadius: '12px', background: 'white', border: 'none', color: '#4B7EFF', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
               <Plus size={18} /> Add Money
            </button>
            <button style={{ flex: 1, padding: '12px', borderRadius: '12px', background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
               <Download size={18} /> Statement
            </button>
         </div>
      </div>

      <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>Recent Transactions</h3>
      
      <div className="flex-col gap-4">
         <Transaction title="Tatkal Booking (MMCT-NDLS)" date="Today, 10:02 AM" amount="- ₹1,450" isDebit />
         <Transaction title="Wallet Top-up via UPI" date="Yesterday, 04:30 PM" amount="+ ₹5,000" />
         <Transaction title="E-Catering (Domino's)" date="18 March, 01:15 PM" amount="- ₹450" isDebit />
      </div>

      <BottomNav active="wallet" />
    </div>
  );
}

function Transaction({ title, date, amount, isDebit }) {
   return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'var(--bg-page)', boxShadow: 'var(--shadow-raised)', borderRadius: '16px' }}>
         <div className="flex-row items-center gap-4">
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: isDebit ? 'rgba(229, 62, 62, 0.1)' : 'rgba(72, 187, 120, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <ArrowUpRight size={20} color={isDebit ? 'var(--error)' : 'var(--success)'} style={{ transform: isDebit ? 'none' : 'rotate(180deg)' }} />
            </div>
            <div className="flex-col">
               <span style={{ fontSize: '14px', fontWeight: 600 }}>{title}</span>
               <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{date}</span>
            </div>
         </div>
         <span style={{ fontSize: '15px', fontWeight: 700, color: isDebit ? 'var(--text-primary)' : 'var(--success)' }}>
            {amount}
         </span>
      </div>
   );
}
