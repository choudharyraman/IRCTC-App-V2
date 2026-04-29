import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell, Navigation, Search, MapPin } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';

export default function LiveTrackingScreen() {
  const nav = useNavigate();
  const [status, setStatus] = useState('search');
  const [alarm, setAlarm] = useState(false);

  const track = () => { setStatus('loading'); setTimeout(() => setStatus('tracking'), 1500); };

  const stations = [
    { name: 'Mumbai Central (MMCT)', time: 'Dep: 17:00', pf: 'PF 1', state: 'past' },
    { name: 'Surat (ST)', time: 'Arriving 19:42', pf: 'PF 3', state: 'current' },
    { name: 'Vadodara (BRC)', time: 'Arr: 21:18', pf: 'PF 2', state: 'future' },
    { name: 'Kota (KOTA)', time: 'Arr: 01:45', pf: 'PF 1', state: 'future' },
    { name: 'New Delhi (NDLS)', time: 'Arr: 08:32', pf: 'PF 4', state: 'future' },
  ];

  return (
    <div className="screen-wrapper" style={{paddingBottom:'24px'}}>
      <div className="flex-row items-center justify-between mb-6">
        <div className="flex-row items-center gap-3">
          <button onClick={()=>nav('/dashboard')} className="icon-btn"><ArrowLeft size={20}/></button>
          <div><h2 style={{fontSize:'18px',fontWeight:700,margin:0}}>Live Tracking</h2><span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>GPS-powered real-time tracking</span></div>
        </div>
        <button className="icon-btn"><Navigation size={18} color="var(--primary)"/></button>
      </div>

      {status==='search'&&(
        <div className="glass-card" style={{padding:'20px',animation:'slideUp 0.3s var(--ease-spring)'}}>
          <span style={{fontSize:'14px',fontWeight:600,marginBottom:'12px',display:'block'}}>Find Your Train</span>
          <Input placeholder="Train Name or Number" icon={<Search size={18}/>} style={{marginBottom:'16px'}}/>
          <Button onClick={track}>Track Train</Button>
        </div>
      )}

      {status==='loading'&&(
        <div className="flex-col items-center justify-center" style={{padding:'60px 0'}}>
          <div style={{width:'48px',height:'48px',borderRadius:'50%',border:'3px solid var(--border-primary)',borderTopColor:'var(--primary)',animation:'spin 0.8s linear infinite',marginBottom:'16px'}}/>
          <span style={{fontSize:'14px',color:'var(--text-tertiary)',fontWeight:500}}>Acquiring satellite lock...</span>
        </div>
      )}

      {status==='tracking'&&(
        <div className="stagger">
          {/* Status Card */}
          <div className="glass-card mb-4" style={{padding:'16px',borderLeft:'4px solid var(--success)'}}>
            <div className="flex-row items-center justify-between mb-2">
              <span style={{fontSize:'12px',color:'var(--text-tertiary)',fontWeight:600}}>Mumbai Rajdhani (12951)</span>
              <span className="badge badge-success"><div style={{width:'6px',height:'6px',borderRadius:'50%',background:'var(--success)'}}/>On Time</span>
            </div>
            <div className="flex-row items-center gap-3">
              <span style={{fontSize:'24px',fontWeight:800,fontFamily:"'Outfit'",color:'var(--success)'}}>105 km/h</span>
              <span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>Last: Just now (GPS)</span>
            </div>
          </div>

          {/* Route Timeline */}
          <h3 style={{fontSize:'16px',fontWeight:700,margin:'0 0 16px'}}>Route Progress</h3>
          <div className="glass-card" style={{padding:'20px'}}>
            {stations.map((s,i)=>(
              <div key={i} className="flex-row" style={{position:'relative',marginBottom:i<stations.length-1?'24px':'0'}}>
                {i<stations.length-1&&(
                  <div style={{position:'absolute',left:'11px',top:'24px',bottom:'-24px',width:'2px',background:s.state==='past'?'var(--success)':'var(--border-primary)',zIndex:0}}/>
                )}
                <div style={{
                  width:'24px',height:'24px',borderRadius:'50%',
                  background:s.state==='past'?'var(--success)':s.state==='current'?'var(--bg-primary)':'var(--bg-input)',
                  border:s.state==='current'?'3px solid var(--primary)':s.state==='future'?'2px solid var(--border-primary)':'none',
                  zIndex:1,flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center',
                  boxShadow:s.state==='current'?'0 0 12px var(--primary-glow)':'none',
                }}>
                  {s.state==='current'&&<div style={{width:'8px',height:'8px',borderRadius:'50%',background:'var(--primary)'}}/>}
                </div>
                <div className="flex-col" style={{marginLeft:'14px',flex:1}}>
                  <span style={{fontSize:'14px',fontWeight:s.state==='current'?700:600,color:s.state==='future'?'var(--text-tertiary)':s.state==='current'?'var(--primary)':'var(--text-primary)'}}>{s.name}</span>
                  <div className="flex-row justify-between">
                    <span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>{s.time}</span>
                    <span style={{fontSize:'11px',fontWeight:600,color:s.state==='current'?'var(--success)':'var(--text-tertiary)'}}>{s.pf}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Alarm Card */}
          <div className="glass-card mt-4" style={{padding:'16px'}}>
            <div className="flex-row items-center gap-3 mb-3">
              <div style={{width:'44px',height:'44px',borderRadius:'var(--radius-md)',background:alarm?'var(--primary-glow)':'var(--bg-input)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Bell size={22} color={alarm?'var(--primary)':'var(--text-tertiary)'}/>
              </div>
              <div style={{flex:1}}>
                <span style={{fontSize:'14px',fontWeight:600}}>Smart Station Alarm</span><br/>
                <span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>Wake up 15 km before destination</span>
              </div>
            </div>
            <Button variant={alarm?'success':'primary'} onClick={()=>setAlarm(!alarm)}>
              {alarm?'Alarm Active ✓':'Activate Alarm'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
