import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { ArrowLeft, Navigation, Bell, Map as MapIcon, Compass } from 'lucide-react';

export default function LiveTrackingScreen() {
  const navigate = useNavigate();
  const [alarmActive, setAlarmActive] = useState(false);

  return (
    <div style={{ paddingBottom: '2rem', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <div style={{ padding: '1.5rem 1rem 1rem 1rem', background: 'var(--bg-color)' }}>
        <div className="flex-row items-center justify-between mb-4">
          <div className="flex-row items-center gap-4">
             <button className="neu-icon-btn" style={{ width: '40px', height: '40px', background: 'var(--bg-color)', boxShadow: 'var(--shadow-dark), var(--shadow-light)', border: 'none' }} onClick={() => navigate('/dashboard')}>
               <ArrowLeft size={20} className="text-navy" />
             </button>
             <h2 style={{ fontSize: '1.2rem', margin: 0, fontWeight: 700 }}>Live Tracking</h2>
          </div>
          <button className="neu-icon-btn" style={{ width: '40px', height: '40px', background: 'var(--bg-color)', boxShadow: 'var(--shadow-dark), var(--shadow-light)', border: 'none' }}>
             <MapIcon size={20} className="text-navy" />
          </button>
        </div>

        {/* Current Status Banner */}
        <div style={{ 
           background: 'var(--bg-color)', padding: '1rem', borderRadius: '12px', 
           boxShadow: 'var(--shadow-inset-dark), var(--shadow-inset-light)', 
           display: 'flex', flexDirection: 'column', gap: '0.5rem' 
        }}>
           <span style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 600 }}>MUMBAI RAJDHANI (12951)</span>
           <div className="flex-row items-center gap-2">
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-green)', display: 'inline-block' }}></span>
              <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-green)' }}>On Time • 105 km/h</span>
           </div>
           <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Last updated: Just now (via GPS)</span>
        </div>
      </div>

      <div style={{ padding: '1rem' }}>
         <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 600 }}>Route Progress</h3>

         {/* Timeline */}
         <Card style={{ padding: '1.5rem', marginBottom: '2rem' }}>
            
            {/* Station 1: Past */}
            <div className="flex-row" style={{ position: 'relative', marginBottom: '1.5rem' }}>
               {/* Line connecting nodes */}
               <div style={{ position: 'absolute', left: '11px', top: '24px', bottom: '-24px', width: '2px', background: 'var(--accent-green)', zIndex: 0 }}></div>
               <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--accent-green)', border: '4px solid var(--bg-color)', zIndex: 1, flexShrink: 0 }}></div>
               <div className="flex-col" style={{ marginLeft: '1rem', flex: 1 }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>Mumbai Central (MMCT)</span>
                  <div className="flex-row justify-between">
                     <span className="text-light" style={{ fontSize: '0.75rem' }}>Dep: 17:00</span>
                     <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>PF 1</span>
                  </div>
               </div>
            </div>

            {/* Station 2: Current */}
            <div className="flex-row" style={{ position: 'relative', marginBottom: '1.5rem' }}>
               <div style={{ position: 'absolute', left: '11px', top: '24px', bottom: '-24px', width: '2px', background: 'var(--text-light)', zIndex: 0, opacity: 0.3 }}></div>
               <div className="neu-icon-btn" style={{ width: '24px', height: '24px', background: 'var(--bg-color)', border: `2px solid var(--accent-saffron)`, zIndex: 1, flexShrink: 0, padding: 0 }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-saffron)' }}></div>
               </div>
               <div className="flex-col" style={{ marginLeft: '1rem', flex: 1 }}>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-saffron)' }}>Surat (ST)</span>
                  <div className="flex-row justify-between">
                     <span className="text-light" style={{ fontSize: '0.75rem' }}>Arriving at 19:42</span>
                     <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>PF 3 <span style={{color: 'var(--accent-green)'}}>(Expected)</span></span>
                  </div>
               </div>
            </div>

            {/* Station 3: Future */}
            <div className="flex-row" style={{ position: 'relative' }}>
               <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--bg-color)', border: '2px solid rgba(0,0,128,0.2)', zIndex: 1, flexShrink: 0 }}></div>
               <div className="flex-col" style={{ marginLeft: '1rem', flex: 1 }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-light)' }}>Vadodara (BRC)</span>
                  <div className="flex-row justify-between">
                     <span className="text-light" style={{ fontSize: '0.75rem' }}>Arr: 21:18</span>
                     <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-light)' }}>PF 2</span>
                  </div>
               </div>
            </div>

         </Card>

         {/* Smart Station Alarm Card */}
         <Card style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="flex-row items-center gap-4">
               <div className="neu-icon-btn" style={{ width: '48px', height: '48px', background: 'var(--bg-color)', boxShadow: 'var(--shadow-dark), var(--shadow-light)', color: alarmActive ? 'var(--accent-saffron)' : 'var(--text-dark)' }}>
                  <Bell size={24} />
               </div>
               <div className="flex-col" style={{ flex: 1 }}>
                  <span style={{ fontSize: '1rem', fontWeight: 700 }}>Smart Station Alarm</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Wake me up 15 km before destination</span>
               </div>
            </div>
            
            <Button 
               variant={alarmActive ? 'primary' : 'default'} 
               className="w-full"
               onClick={() => setAlarmActive(!alarmActive)}
            >
               {alarmActive ? 'Alarm Activated' : 'Activate Alarm'}
            </Button>
         </Card>

      </div>
    </div>
  );
}
