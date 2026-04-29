import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, Clock, Train, ChevronRight } from 'lucide-react';
import BottomNav from '../components/BottomNav';
import SegmentedControl from '../components/SegmentedControl';

const bookings = {
  upcoming: [
    { pnr: '8234567890', train: '12951', name: 'Mumbai Rajdhani', from: 'MMCT', to: 'NDLS', dep: '17:00', arr: '08:32', date: 'Today', status: 'Confirmed', cls: '3A', passenger: 'Arjun K. +1' },
    { pnr: '9876543210', train: '12301', name: 'Howrah Rajdhani', from: 'HWH', to: 'NDLS', dep: '16:50', arr: '10:00', date: 'Fri, 2 May', status: 'WL 3', cls: '2A', passenger: 'Arjun K.' },
  ],
  completed: [
    { pnr: '1122334455', train: '12259', name: 'Duronto Express', from: 'SBC', to: 'NDLS', dep: '20:00', arr: '06:30', date: '15 Apr', status: 'Completed', cls: 'SL', passenger: 'Arjun K.' },
  ],
  cancelled: [],
};

export default function MyBookingsScreen() {
  const nav = useNavigate();
  const [tab, setTab] = useState(0);
  const lists = [bookings.upcoming, bookings.completed, bookings.cancelled];

  return (
    <div className="has-sidebar">
    <div className="screen-wrapper" style={{paddingBottom:'90px'}}>
      <div className="flex-row items-center gap-3 mb-6">
        <button onClick={()=>nav('/dashboard')} className="icon-btn"><ArrowLeft size={20}/></button>
        <h2 style={{fontSize:'18px',fontWeight:700,margin:0}}>My Bookings</h2>
      </div>
      <SegmentedControl tabs={['Upcoming','Completed','Cancelled']} activeTab={tab} onChange={setTab} style={{marginBottom:'20px'}}/>

      <div className="flex-col gap-3 stagger">
        {lists[tab].length === 0 ? (
          <div className="flex-col items-center justify-center" style={{padding:'60px 0',color:'var(--text-tertiary)'}}>
            <Train size={48} strokeWidth={1} style={{marginBottom:'16px',opacity:0.3}}/>
            <span style={{fontSize:'14px',fontWeight:500}}>No {['upcoming','completed','cancelled'][tab]} bookings</span>
          </div>
        ) : lists[tab].map(b => (
          <div key={b.pnr} className="glass-card" style={{padding:'16px',overflow:'hidden',position:'relative'}}>
            <div style={{position:'absolute',left:0,top:0,bottom:0,width:'3px',background:b.status==='Confirmed'?'var(--success)':b.status==='Completed'?'var(--primary)':'var(--warning)',borderRadius:'0 3px 3px 0'}}/>
            <div className="flex-row items-center justify-between mb-3">
              <div className="flex-row items-center gap-2">
                <span style={{fontSize:'13px',fontWeight:700,color:'var(--primary)'}}>#{b.train}</span>
                <span style={{fontSize:'13px',fontWeight:600}}>{b.name}</span>
              </div>
              <span className={`badge ${b.status==='Confirmed'||b.status==='Completed'?'badge-success':'badge-warning'}`} style={{fontSize:'10px'}}>
                {b.status==='Confirmed'&&<CheckCircle size={10}/>}{b.status}
              </span>
            </div>

            <div className="flex-row items-center justify-between mb-3">
              <div><span style={{fontSize:'20px',fontWeight:800,fontFamily:"'Outfit'"}}>{b.from}</span><br/><span style={{fontSize:'10px',color:'var(--text-tertiary)'}}>{b.dep} • {b.date}</span></div>
              <div className="flex-1" style={{height:'1px',background:'var(--border-primary)',margin:'0 12px',position:'relative'}}>
                <div style={{position:'absolute',top:'-8px',left:'50%',transform:'translateX(-50%)',background:'var(--bg-card)',padding:'0 8px',fontSize:'9px',color:'var(--text-tertiary)',whiteSpace:'nowrap'}}>
                  {b.cls}
                </div>
              </div>
              <div style={{textAlign:'right'}}><span style={{fontSize:'20px',fontWeight:800,fontFamily:"'Outfit'"}}>{b.to}</span><br/><span style={{fontSize:'10px',color:'var(--text-tertiary)'}}>{b.arr}</span></div>
            </div>

            <div className="flex-row items-center justify-between" style={{paddingTop:'12px',borderTop:'1px solid var(--border-subtle)'}}>
              <div><span style={{fontSize:'10px',color:'var(--text-tertiary)'}}>PNR</span><br/><span style={{fontSize:'12px',fontWeight:600,letterSpacing:'0.5px'}}>{b.pnr}</span></div>
              <div style={{textAlign:'right'}}><span style={{fontSize:'10px',color:'var(--text-tertiary)'}}>Passenger</span><br/><span style={{fontSize:'12px',fontWeight:600}}>{b.passenger}</span></div>
            </div>

            {tab === 0 && (
              <div className="flex-row gap-3 mt-4">
                <button onClick={()=>nav('/live')} style={{flex:1,padding:'10px',borderRadius:'var(--radius-md)',border:'1.5px solid var(--primary)',background:'transparent',color:'var(--primary)',fontWeight:600,fontSize:'12px',cursor:'pointer',fontFamily:"'Inter'"}}>Track Live</button>
                <button onClick={()=>nav('/cancel')} style={{flex:1,padding:'10px',borderRadius:'var(--radius-md)',border:'none',background:'var(--error-bg)',color:'var(--error)',fontWeight:600,fontSize:'12px',cursor:'pointer',fontFamily:"'Inter'"}}>Cancel</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <BottomNav active="bookings"/>
    </div>
    </div>
  );
}
