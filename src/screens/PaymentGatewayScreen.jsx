import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Building, Wallet, CheckCircle, Smartphone, ShieldCheck } from 'lucide-react';
import Button from '../components/Button';

export default function PaymentGatewayScreen() {
  const nav = useNavigate();
  const [method, setMethod] = useState('upi');
  const [processing, setProcessing] = useState(false);

  const handlePay = () => { setProcessing(true); setTimeout(() => nav('/ticket'), 2000); };

  const methods = [
    { id: 'wallet', icon: <Wallet size={20} color="#8B5CF6"/>, title: 'R-Wallet', sub: 'Balance: ₹4,500', badge: 'Instant' },
    { id: 'upi', icon: <Smartphone size={20} color="#10B981"/>, title: 'UPI Payment', sub: 'Google Pay / PhonePe / BHIM', badge: 'Fastest' },
    { id: 'card', icon: <CreditCard size={20} color="#6366F1"/>, title: 'Credit / Debit Card', sub: 'Visa, Mastercard, RuPay' },
    { id: 'netbanking', icon: <Building size={20} color="#64748B"/>, title: 'Net Banking', sub: 'All major banks supported' },
  ];

  return (
    <div className="screen-wrapper" style={{paddingBottom:'120px'}}>
      <div className="flex-row items-center gap-3 mb-6">
        <button onClick={()=>nav(-1)} className="icon-btn"><ArrowLeft size={20}/></button>
        <h2 style={{fontSize:'18px',fontWeight:700,margin:0}}>Payment</h2>
      </div>

      {/* Amount Card */}
      <div className="glass-card mb-6" style={{padding:'20px',background:'var(--gradient-primary)',border:'none',boxShadow:'0 8px 32px var(--primary-glow)',overflow:'hidden',position:'relative'}}>
        <div style={{position:'absolute',right:'-20px',top:'-20px',width:'100px',height:'100px',borderRadius:'50%',background:'rgba(255,255,255,0.08)'}}/>
        <span style={{fontSize:'12px',color:'rgba(255,255,255,0.75)',fontWeight:500}}>Total Payable</span>
        <h1 style={{fontSize:'36px',fontWeight:800,margin:'4px 0',color:'#FFF',fontFamily:"'Outfit'"}}>₹2,785</h1>
        <div style={{marginTop:'16px',paddingTop:'16px',borderTop:'1px solid rgba(255,255,255,0.15)'}}>
          {[['Base Fare','₹2,450'],['Tatkal','₹200'],['Convenience','₹100'],['Insurance','₹35']].map(([l,v])=>(
            <div key={l} className="flex-row justify-between mb-1"><span style={{fontSize:'12px',color:'rgba(255,255,255,0.65)'}}>{l}</span><span style={{fontSize:'12px',fontWeight:600,color:'rgba(255,255,255,0.9)'}}>{v}</span></div>
          ))}
        </div>
      </div>

      <h3 style={{fontSize:'16px',fontWeight:700,marginBottom:'16px'}}>Payment Method</h3>
      <div className="flex-col gap-3 mb-6">
        {methods.map(m => (
          <div key={m.id} onClick={()=>setMethod(m.id)} className="glass-card" style={{padding:'16px',cursor:'pointer',border:method===m.id?'1.5px solid var(--primary)':'1.5px solid transparent',transition:'all 150ms'}}>
            <div className="flex-row items-center gap-4">
              <div style={{width:'44px',height:'44px',borderRadius:'var(--radius-md)',background:'var(--bg-input)',display:'flex',alignItems:'center',justifyContent:'center'}}>{m.icon}</div>
              <div className="flex-col flex-1">
                <div className="flex-row items-center gap-2">
                  <span style={{fontSize:'14px',fontWeight:600}}>{m.title}</span>
                  {m.badge&&<span style={{fontSize:'9px',fontWeight:700,padding:'2px 8px',borderRadius:'var(--radius-full)',background:'var(--success-bg)',color:'var(--success)',textTransform:'uppercase',letterSpacing:'0.5px'}}>{m.badge}</span>}
                </div>
                <span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>{m.sub}</span>
              </div>
              <div style={{width:'22px',height:'22px',borderRadius:'50%',border:method===m.id?'none':'2px solid var(--text-tertiary)',background:method===m.id?'var(--primary)':'transparent',display:'flex',alignItems:'center',justifyContent:'center',transition:'all 150ms'}}>
                {method===m.id&&<CheckCircle size={14} color="#FFF"/>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Security Badge */}
      <div className="flex-row items-center justify-center gap-2 mb-4">
        <ShieldCheck size={16} color="var(--success)"/>
        <span style={{fontSize:'11px',color:'var(--text-tertiary)',fontWeight:500}}>256-bit SSL Encrypted • PCI DSS Compliant</span>
      </div>

      {/* Bottom Bar */}
      <div style={{position:'fixed',bottom:0,left:'50%',transform:'translateX(-50%)',width:'100%',maxWidth:'480px',background:'var(--bg-primary)',borderTop:'1px solid var(--border-primary)',padding:'16px',zIndex:100}}>
        <Button variant="primary" onClick={handlePay} loading={processing} size="lg">
          {processing ? 'Processing...' : 'Pay ₹2,785'}
        </Button>
      </div>
    </div>
  );
}
