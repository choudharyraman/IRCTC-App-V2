import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Download, ArrowUpRight, ArrowDownLeft, CreditCard } from 'lucide-react';
import BottomNav from '../components/BottomNav';
import Button from '../components/Button';

export default function WalletScreen() {
  const nav = useNavigate();
  const txns = [
    { title: 'Tatkal Booking (MMCT-NDLS)', date: 'Today, 10:02 AM', amount: '- ₹1,450', debit: true },
    { title: 'Wallet Top-up via UPI', date: 'Yesterday, 04:30 PM', amount: '+ ₹5,000', debit: false },
    { title: 'E-Catering (Dominos)', date: '18 Apr, 01:15 PM', amount: '- ₹450', debit: true },
    { title: 'Refund: CNB-NDLS Cancelled', date: '15 Apr, 11:00 AM', amount: '+ ₹890', debit: false },
  ];

  return (
    <div className="screen-wrapper" style={{paddingBottom:'90px'}}>
      <div className="flex-row items-center gap-3 mb-6">
        <button onClick={()=>nav('/dashboard')} className="icon-btn"><ArrowLeft size={20}/></button>
        <h2 style={{fontSize:'18px',fontWeight:700,margin:0}}>R-Wallet</h2>
      </div>

      {/* Balance Card */}
      <div style={{background:'var(--gradient-primary)',borderRadius:'var(--radius-2xl)',padding:'24px',marginBottom:'24px',position:'relative',overflow:'hidden',boxShadow:'0 8px 32px var(--primary-glow)'}}>
        <div style={{position:'absolute',right:'-20px',top:'-20px',width:'120px',height:'120px',borderRadius:'50%',background:'rgba(255,255,255,0.08)'}}/>
        <div style={{position:'absolute',left:'-10px',bottom:'-30px',width:'80px',height:'80px',borderRadius:'50%',background:'rgba(255,255,255,0.05)'}}/>
        <span style={{fontSize:'13px',color:'rgba(255,255,255,0.7)'}}>Available Balance</span>
        <h1 style={{fontSize:'36px',fontWeight:800,margin:'6px 0',color:'#FFF',fontFamily:"'Outfit'"}}>₹ 4,500.00</h1>
        <span style={{fontSize:'11px',color:'rgba(255,255,255,0.6)'}}>RailOne Zero-Fee Wallet</span>
        <div className="flex-row gap-3 mt-5">
          <button style={{flex:1,padding:'12px',borderRadius:'var(--radius-md)',background:'rgba(255,255,255,0.95)',border:'none',color:'var(--primary)',fontWeight:650,display:'flex',alignItems:'center',justifyContent:'center',gap:'6px',cursor:'pointer',fontSize:'13px',fontFamily:"'Inter'"}}>
            <Plus size={16}/>Add Money
          </button>
          <button style={{flex:1,padding:'12px',borderRadius:'var(--radius-md)',background:'rgba(255,255,255,0.15)',border:'none',color:'#FFF',fontWeight:650,display:'flex',alignItems:'center',justifyContent:'center',gap:'6px',cursor:'pointer',fontSize:'13px',fontFamily:"'Inter'"}}>
            <Download size={16}/>Statement
          </button>
        </div>
      </div>

      <h3 style={{fontSize:'16px',fontWeight:700,margin:'0 0 16px'}}>Recent Transactions</h3>
      <div className="flex-col gap-3 stagger">
        {txns.map((t,i)=>(
          <div key={i} className="glass-card" style={{padding:'14px',display:'flex',alignItems:'center',gap:'12px'}}>
            <div style={{width:'40px',height:'40px',borderRadius:'var(--radius-md)',background:t.debit?'var(--error-bg)':'var(--success-bg)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
              {t.debit?<ArrowUpRight size={18} color="var(--error)"/>:<ArrowDownLeft size={18} color="var(--success)"/>}
            </div>
            <div style={{flex:1}}><span style={{fontSize:'13px',fontWeight:600}}>{t.title}</span><br/><span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>{t.date}</span></div>
            <span style={{fontSize:'14px',fontWeight:700,color:t.debit?'var(--text-primary)':'var(--success)'}}>{t.amount}</span>
          </div>
        ))}
      </div>
      <BottomNav active="wallet"/>
    </div>
  );
}
