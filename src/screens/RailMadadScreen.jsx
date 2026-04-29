import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, CheckCircle, Phone } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';
import SegmentedControl from '../components/SegmentedControl';

export default function RailMadadScreen() {
  const nav = useNavigate();
  const [type, setType] = useState(0);
  const [status, setStatus] = useState('form');
  const submit = () => { setStatus('loading'); setTimeout(() => setStatus('success'), 1500); };

  return (
    <div className="screen-wrapper" style={{paddingBottom:'24px'}}>
      <div className="flex-row items-center gap-3 mb-6">
        <button onClick={()=>nav('/dashboard')} className="icon-btn"><ArrowLeft size={20}/></button>
        <div><h2 style={{fontSize:'18px',fontWeight:700,margin:0}}>Rail Madad</h2><span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>Grievance & Assistance</span></div>
      </div>

      <div style={{padding:'14px',background:'var(--error-bg)',borderRadius:'var(--radius-md)',display:'flex',gap:'12px',marginBottom:'20px',borderLeft:'3px solid var(--error)'}}>
        <Phone size={18} color="var(--error)" style={{flexShrink:0,marginTop:'2px'}}/>
        <span style={{fontSize:'12px',color:'var(--text-primary)'}}>For immediate emergency, dial <strong>139</strong></span>
      </div>

      {status==='form'&&(
        <div className="flex-col gap-4">
          <Input placeholder="PNR / Train Number"/>
          <div><span style={{fontSize:'13px',fontWeight:600,marginBottom:'8px',display:'block'}}>Type of Assistance</span>
            <SegmentedControl tabs={['Medical','Security','Cleanliness']} activeTab={type} onChange={setType}/>
          </div>
          <div style={{background:'var(--bg-input)',borderRadius:'var(--radius-md)',padding:'16px',border:'1px solid var(--border-primary)'}}>
            <textarea placeholder="Describe your issue..." rows={5} style={{width:'100%',background:'transparent',border:'none',outline:'none',color:'var(--text-primary)',resize:'none',fontSize:'14px',fontFamily:"'Inter'"}}/>
          </div>
          <Button variant="danger" onClick={submit}>Submit Request</Button>
        </div>
      )}

      {status==='loading'&&(
        <div className="flex-col items-center justify-center" style={{padding:'60px 0'}}>
          <div style={{width:'48px',height:'48px',borderRadius:'50%',border:'3px solid var(--border-primary)',borderTopColor:'var(--error)',animation:'spin 0.8s linear infinite',marginBottom:'16px'}}/>
          <span style={{fontSize:'14px',color:'var(--text-tertiary)'}}>Registering Grievance...</span>
        </div>
      )}

      {status==='success'&&(
        <div className="flex-col items-center text-center" style={{paddingTop:'40px',animation:'scaleIn 0.4s var(--ease-spring)'}}>
          <div style={{width:'72px',height:'72px',borderRadius:'50%',background:'var(--gradient-success)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'16px',boxShadow:'0 8px 32px rgba(16,185,129,0.3)'}}><CheckCircle size={36} color="#FFF"/></div>
          <h3 style={{fontSize:'20px',fontWeight:700,margin:'0 0 8px'}}>Complaint Registered</h3>
          <p style={{fontSize:'13px',color:'var(--text-tertiary)',margin:'0 0 24px'}}>Your request has been escalated.</p>
          <div className="glass-card w-full mb-6" style={{padding:'16px',textAlign:'center'}}>
            <span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>Reference ID</span>
            <h2 style={{fontSize:'24px',fontWeight:800,margin:'4px 0 0',color:'var(--primary)',letterSpacing:'2px',fontFamily:"'Outfit'"}}>RM-1204892</h2>
          </div>
          <Button onClick={()=>nav('/dashboard')}>Return Home</Button>
        </div>
      )}
    </div>
  );
}
