import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Smartphone, CheckCircle, Zap } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';

export default function RechargeScreen() {
  const nav = useNavigate();
  const [step, setStep] = useState('input');
  const recharge = () => { setStep('processing'); setTimeout(() => setStep('success'), 2000); };

  return (
    <div className="screen-wrapper" style={{paddingBottom:'24px'}}>
      <div className="flex-row items-center gap-3 mb-6">
        <button onClick={()=>nav('/dashboard')} className="icon-btn"><ArrowLeft size={20}/></button>
        <div><h2 style={{fontSize:'18px',fontWeight:700,margin:0}}>Recharge & Bills</h2><span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>Powered by Bharat BillPay</span></div>
      </div>

      {step==='input'&&(
        <div className="stagger">
          <div className="glass-card mb-5" style={{padding:'24px'}}>
            <div style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
              <div style={{width:'60px',height:'60px',borderRadius:'var(--radius-xl)',background:'var(--accent-glow)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Smartphone size={30} color="var(--accent)"/>
              </div>
            </div>
            <h3 style={{fontSize:'16px',fontWeight:700,margin:'0 0 16px',textAlign:'center'}}>Mobile Recharge</h3>
            <div className="flex-col gap-3">
              <Input placeholder="10-digit Mobile Number"/>
              <Input placeholder="Amount (₹)"/>
              <div className="flex-row gap-2 mt-1">
                {[149,199,299,499].map(a=>(
                  <div key={a} className="chip" style={{flex:1,justifyContent:'center'}}>₹{a}</div>
                ))}
              </div>
              <Button onClick={recharge} icon={<Zap size={18}/>} style={{marginTop:'8px'}}>Recharge Now</Button>
            </div>
          </div>

          <h3 style={{fontSize:'14px',fontWeight:600,margin:'0 0 12px',color:'var(--text-secondary)'}}>Recent Recharges</h3>
          <div className="glass-card" style={{padding:'14px',display:'flex',alignItems:'center',gap:'12px'}}>
            <div style={{width:'40px',height:'40px',borderRadius:'var(--radius-md)',background:'var(--info-bg)',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <span style={{fontSize:'10px',fontWeight:800,color:'var(--info)'}}>JIO</span>
            </div>
            <div style={{flex:1}}><span style={{fontSize:'14px',fontWeight:600}}>98765 43210</span><br/><span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>Last: ₹299 on 15 Apr</span></div>
            <button onClick={recharge} style={{padding:'6px 14px',background:'transparent',border:'1.5px solid var(--primary)',color:'var(--primary)',borderRadius:'var(--radius-full)',fontWeight:600,fontSize:'12px',cursor:'pointer',fontFamily:"'Inter'"}}>Repeat</button>
          </div>
        </div>
      )}

      {step==='processing'&&(
        <div className="flex-col items-center justify-center" style={{padding:'60px 0'}}>
          <div style={{width:'48px',height:'48px',borderRadius:'50%',border:'3px solid var(--border-primary)',borderTopColor:'var(--accent)',animation:'spin 0.8s linear infinite',marginBottom:'16px'}}/>
          <span style={{fontSize:'14px',color:'var(--text-tertiary)'}}>Connecting to Operator...</span>
        </div>
      )}

      {step==='success'&&(
        <div className="flex-col items-center text-center" style={{paddingTop:'40px',animation:'scaleIn 0.4s var(--ease-spring)'}}>
          <div style={{width:'72px',height:'72px',borderRadius:'50%',background:'var(--gradient-success)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'16px',boxShadow:'0 8px 32px rgba(16,185,129,0.3)'}}><CheckCircle size={36} color="#FFF"/></div>
          <h3 style={{fontSize:'20px',fontWeight:700,margin:'0 0 8px'}}>Recharge Successful!</h3>
          <p style={{fontSize:'13px',color:'var(--text-tertiary)',margin:'0 0 24px'}}>Your mobile has been recharged instantly.</p>
          <div className="glass-card w-full mb-6" style={{padding:'16px'}}>
            {[['Reference ID','BBPS-98745'],['Total Paid','₹299.00']].map(([l,v])=>(
              <div key={l} className="flex-row justify-between mb-2"><span style={{fontSize:'13px',color:'var(--text-tertiary)'}}>{l}</span><span style={{fontSize:'13px',fontWeight:600}}>{v}</span></div>
            ))}
          </div>
          <Button onClick={()=>nav('/dashboard')}>Return Home</Button>
        </div>
      )}
    </div>
  );
}
