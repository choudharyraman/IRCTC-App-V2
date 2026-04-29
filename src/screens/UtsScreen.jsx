import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Smartphone, CheckCircle, Ticket } from 'lucide-react';
import Button from '../components/Button';

export default function UtsScreen() {
  const nav = useNavigate();
  const [step, setStep] = useState('select');
  const book = () => { setStep('paying'); setTimeout(() => setStep('ticket'), 2000); };

  return (
    <div className="screen-wrapper" style={{paddingBottom:'24px'}}>
      <div className="flex-row items-center gap-3 mb-6">
        <button onClick={()=>nav('/dashboard')} className="icon-btn"><ArrowLeft size={20}/></button>
        <h2 style={{fontSize:'18px',fontWeight:700,margin:0}}>UTS (Unreserved)</h2>
      </div>

      {step==='select'&&(
        <div className="stagger">
          <div className="glass-card mb-5" style={{padding:'24px',textAlign:'center'}}>
            <div style={{width:'56px',height:'56px',borderRadius:'50%',background:'var(--success-bg)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 12px'}}>
              <MapPin size={28} color="var(--success)"/>
            </div>
            <span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>Current Location</span>
            <h3 style={{fontSize:'20px',fontWeight:700,margin:'4px 0 12px'}}>New Delhi (NDLS)</h3>
            <span className="badge badge-success">GPS Verified (15m from tracks)</span>
          </div>

          <div className="flex-col gap-3">
            {[
              {icon:<Smartphone size={22} color="var(--primary)"/>,title:'Paperless Journey',sub:'NDLS to NZM • ₹15',primary:true},
              {icon:<Ticket size={22} color="var(--accent)"/>,title:'Platform Ticket',sub:'Valid for 2 hours • ₹10',primary:false},
            ].map(opt=>(
              <div key={opt.title} className="glass-card" style={{padding:'16px',display:'flex',alignItems:'center',gap:'14px'}}>
                <div style={{width:'48px',height:'48px',borderRadius:'var(--radius-lg)',background:opt.primary?'var(--primary-glow)':'var(--accent-glow)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>{opt.icon}</div>
                <div style={{flex:1}}><span style={{fontSize:'15px',fontWeight:600}}>{opt.title}</span><br/><span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>{opt.sub}</span></div>
                <Button variant={opt.primary?'primary':'secondary'} fullWidth={false} size="sm" onClick={book}>Book</Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {step==='paying'&&(
        <div className="flex-col items-center justify-center" style={{padding:'60px 0'}}>
          <div style={{width:'48px',height:'48px',borderRadius:'50%',border:'3px solid var(--border-primary)',borderTopColor:'var(--accent)',animation:'spin 0.8s linear infinite',marginBottom:'16px'}}/>
          <span style={{fontSize:'14px',color:'var(--text-tertiary)'}}>Deducting from R-Wallet...</span>
        </div>
      )}

      {step==='ticket'&&(
        <div className="glass-card" style={{padding:'24px',borderTop:'4px solid var(--primary)',animation:'scaleIn 0.3s var(--ease-spring)',textAlign:'center'}}>
          <span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>Paperless Ticket</span>
          <h2 style={{fontSize:'24px',fontWeight:800,margin:'4px 0 20px',fontFamily:"'Outfit'"}}>NDLS ↔ NZM</h2>
          {[['Passengers','1 Adult, 0 Child'],['Class','Second (II)'],['Fare Paid','₹15.00']].map(([l,v])=>(
            <div key={l} className="flex-row justify-between mb-3 pb-3" style={{borderBottom:'1px dashed var(--border-primary)'}}>
              <span style={{fontSize:'13px',color:'var(--text-tertiary)'}}>{l}</span>
              <span style={{fontSize:'13px',fontWeight:600,color:l==='Fare Paid'?'var(--success)':'var(--text-primary)'}}>{v}</span>
            </div>
          ))}
          <div style={{padding:'10px',background:'var(--success-bg)',borderRadius:'var(--radius-md)',display:'flex',alignItems:'center',justifyContent:'center',gap:'6px',margin:'16px 0 24px'}}>
            <CheckCircle size={16} color="var(--success)"/><span style={{fontSize:'12px',fontWeight:600,color:'var(--success)'}}>Valid until 23:45 Today</span>
          </div>
          <Button onClick={()=>nav('/dashboard')}>Return to Home</Button>
        </div>
      )}
    </div>
  );
}
