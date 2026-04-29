import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import Button from '../components/Button';

export default function CancellationScreen() {
  const nav = useNavigate();
  const [selected, setSelected] = useState([true, false]);
  const toggle = (i) => { const n=[...selected]; n[i]=!n[i]; setSelected(n); };
  const count = selected.filter(Boolean).length;
  const refund = count * 1150;

  return (
    <div className="screen-wrapper" style={{paddingBottom:'24px'}}>
      <div className="flex-row items-center gap-3 mb-6">
        <button onClick={()=>nav(-1)} className="icon-btn"><ArrowLeft size={20}/></button>
        <div><h2 style={{fontSize:'18px',fontWeight:700,margin:0}}>Cancel Ticket</h2><span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>PNR: 8234567890</span></div>
      </div>

      <div style={{padding:'14px',background:'var(--error-bg)',borderRadius:'var(--radius-md)',display:'flex',gap:'12px',marginBottom:'20px'}}>
        <AlertTriangle size={18} color="var(--error)" style={{flexShrink:0,marginTop:'2px'}}/>
        <span style={{fontSize:'12px'}}>Cancellations cannot be undone. Refunds credited in 3-5 business days.</span>
      </div>

      <h3 style={{fontSize:'16px',fontWeight:700,margin:'0 0 12px'}}>Select Passengers</h3>
      <div className="flex-col gap-3 mb-6">
        {[{name:'Arjun K.',age:'28 yrs',berth:'B1-42'},{name:'Neha K.',age:'26 yrs',berth:'B1-43'}].map((p,i)=>(
          <div key={i} onClick={()=>toggle(i)} className="glass-card" style={{padding:'14px',display:'flex',alignItems:'center',gap:'14px',cursor:'pointer',border:selected[i]?'1.5px solid var(--error)':'1.5px solid transparent',transition:'all 150ms'}}>
            <div style={{width:'24px',height:'24px',borderRadius:'var(--radius-sm)',border:selected[i]?'none':'2px solid var(--text-tertiary)',background:selected[i]?'var(--error)':'transparent',display:'flex',alignItems:'center',justifyContent:'center',transition:'all 150ms',flexShrink:0}}>
              {selected[i]&&<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
            </div>
            <div style={{flex:1}}><span style={{fontSize:'14px',fontWeight:600}}>{p.name}</span><br/><span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>{p.age} • {p.berth} • Confirmed</span></div>
          </div>
        ))}
      </div>

      <div className="glass-card mb-6" style={{padding:'16px'}}>
        <h4 style={{fontSize:'14px',fontWeight:700,margin:'0 0 12px'}}>Refund Estimate</h4>
        {[['Ticket Cost (×'+count+')',count*1250],['Cancellation Charges',-count*100]].map(([l,v])=>(
          <div key={l} className="flex-row justify-between mb-2"><span style={{fontSize:'13px',color:v<0?'var(--error)':'var(--text-secondary)'}}>{l}</span><span style={{fontSize:'13px',fontWeight:600,color:v<0?'var(--error)':'var(--text-primary)'}}>{v<0?'- ':''}₹{Math.abs(v)}</span></div>
        ))}
        <div style={{borderTop:'1px dashed var(--border-primary)',marginTop:'8px',paddingTop:'8px'}} className="flex-row justify-between">
          <span style={{fontSize:'15px',fontWeight:700}}>Refund Amount</span>
          <span style={{fontSize:'18px',fontWeight:800,color:'var(--success)',fontFamily:"'Outfit'"}}>₹{refund}</span>
        </div>
      </div>

      <Button variant="danger" onClick={()=>{alert('Cancelled! Refund initiated.');nav('/bookings')}} disabled={count===0}>
        Confirm Cancellation
      </Button>
    </div>
  );
}
