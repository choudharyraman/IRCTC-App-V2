import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, RefreshCw, Info, AlertTriangle, Route, TrendingUp, ChevronRight } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';

export default function PNRStatusScreen() {
  const nav = useNavigate();
  const [status, setStatus] = useState('input');
  const [pnr, setPnr] = useState('');

  const check = () => { setStatus('loading'); setTimeout(() => setStatus('result'), 1500); };

  return (
    <div className="screen-wrapper" style={{paddingBottom:'24px'}}>
      <div className="flex-row items-center gap-3 mb-6">
        <button onClick={()=>nav('/dashboard')} className="icon-btn"><ArrowLeft size={20}/></button>
        <div><h2 style={{fontSize:'18px',fontWeight:700,margin:0}}>PNR Status</h2><span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>AI-powered prediction</span></div>
      </div>

      <div className="glass-card mb-6" style={{padding:'20px'}}>
        <p style={{fontSize:'14px',fontWeight:600,margin:'0 0 16px'}}>Check Your PNR</p>
        <Input placeholder="Enter 10-digit PNR Number" value={pnr} onChange={e=>setPnr(e.target.value)} style={{marginBottom:'16px'}}/>
        <Button variant="primary" onClick={check} loading={status==='loading'} icon={<RefreshCw size={18}/>}>
          {status==='loading'?'Checking...':'Check Status'}
        </Button>
      </div>

      {status==='result'&&(
        <div className="stagger">
          <div className="glass-card mb-4" style={{padding:'20px',position:'relative',overflow:'hidden'}}>
            <div style={{position:'absolute',left:0,top:0,bottom:0,width:'4px',background:'var(--gradient-success)'}}/>
            <div className="flex-row justify-between items-center mb-4">
              <span style={{fontSize:'15px',fontWeight:700}}>Chart Not Prepared</span>
              <span style={{fontSize:'12px',fontWeight:600,padding:'4px 10px',borderRadius:'var(--radius-full)',background:'var(--bg-input)'}}>2345678901</span>
            </div>
            <div className="flex-col gap-2 mb-4">
              {[['Train','12951 - RAJDHANI'],['Class','3A - Third AC'],['Date','24 Mar 2026'],['Current Status','WL 14']].map(([l,v])=>(
                <div key={l} className="flex-row justify-between"><span style={{fontSize:'13px',color:'var(--text-tertiary)'}}>{l}</span><span style={{fontSize:'13px',fontWeight:600,color:l==='Current Status'?'var(--warning)':'var(--text-primary)'}}>{v}</span></div>
              ))}
            </div>

            {/* ML Prediction */}
            <div style={{padding:'14px',borderRadius:'var(--radius-md)',background:'var(--success-bg)',display:'flex',alignItems:'center',gap:'12px'}}>
              <div style={{width:'44px',height:'44px',borderRadius:'var(--radius-md)',background:'var(--gradient-success)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                <TrendingUp size={22} color="#FFF"/>
              </div>
              <div><span style={{fontSize:'11px',color:'var(--success)',fontWeight:600}}>AI Prediction</span><br/><span style={{fontSize:'16px',fontWeight:700,color:'var(--success)'}}>92% Confirmation Chance</span></div>
            </div>
          </div>

          <h3 style={{fontSize:'16px',fontWeight:700,margin:'0 0 12px'}}>Smart Alternatives</h3>
          {[
            {icon:<AlertTriangle size={18} color="var(--accent)"/>,title:'Travel Guarantee',sub:'Add ₹120 for 3x voucher if unconfirmed',action:'+ Add',bg:'var(--accent-glow)'},
            {icon:<Route size={18} color="var(--info)"/>,title:'Break Journey',sub:'Available via Surat with 2h layover',action:'View',bg:'var(--info-bg)'},
          ].map(a=>(
            <div key={a.title} className="glass-card glass-card-interactive mb-3" style={{padding:'14px',display:'flex',alignItems:'center',gap:'12px'}}>
              <div style={{width:'40px',height:'40px',borderRadius:'var(--radius-md)',background:a.bg,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>{a.icon}</div>
              <div style={{flex:1}}><span style={{fontSize:'13px',fontWeight:600}}>{a.title}</span><br/><span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>{a.sub}</span></div>
              <span style={{fontSize:'12px',fontWeight:650,color:'var(--primary)',cursor:'pointer'}}>{a.action}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
