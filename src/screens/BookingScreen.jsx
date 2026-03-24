import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import { ArrowLeft, UserPlus, CreditCard, ChevronRight, Grid } from 'lucide-react';

export default function BookingScreen() {
  const navigate = useNavigate();
  const [passengers] = useState([{ name: 'Raman Choudhary', age: 28, gender: 'Male' }]);
  const [showSeatMap, setShowSeatMap] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState('B1-42');

  const handlePayment = () => {
    navigate('/payment');
  };

  return (
    <div className="screen-wrapper" style={{ paddingBottom: '100px' }}>
      
      {/* Header */}
      <div style={{ padding: '1.5rem 1rem 1rem 1rem', background: 'var(--glass-bg)', backdropFilter: 'blur(12px)' }}>
        <div className="flex-row items-center gap-4">
          <button className="neuro-card" style={{ width: '40px', height: '40px', background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', boxShadow: 'var(--glass-shadow)', border: 'none' }} onClick={() => navigate('/trains')}>
            <ArrowLeft size={20} className="text-navy" />
          </button>
          <div className="flex-col">
            <h2 style={{ fontSize: '1.1rem', margin: 0, fontWeight: 700 }}>Passenger Details</h2>
            <span className="text-light" style={{ fontSize: '0.8rem' }}>MUMBAI RAJDHANI (12951) • 3A</span>
          </div>
        </div>
      </div>

      <div className="flex-col gap-4" style={{ padding: '0 1rem' }}>
        
        {/* Journey Summary Card */}
        <Card style={{ padding: '1.25rem' }}>
           <div className="flex-row justify-between items-center mb-2">
             <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>Mumbai (MMCT)</span>
             <ArrowLeft size={16} style={{ transform: 'rotate(180deg)', color: 'var(--accent-saffron)' }} />
             <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>New Delhi (NDLS)</span>
           </div>
           <div className="flex-row justify-between text-light" style={{ fontSize: '0.85rem' }}>
             <span>24 Mar, 17:00</span>
             <span>15h 32m</span>
             <span>25 Mar, 08:32</span>
           </div>
           <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'rgba(19, 136, 8, 0.1)', borderRadius: 'var(--radius-sm)', color: 'var(--accent-green)', fontWeight: 600, fontSize: '0.85rem' }}>
              ✓ Availability: AVAILABLE 42
           </div>
        </Card>

        {/* Passengers */}
        <div className="flex-row justify-between items-center mt-2">
           <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>Passengers</h3>
           <span className="text-saffron" style={{ fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>Edit Master List</span>
        </div>

        {passengers.map((p, idx) => (
           <Card key={idx} style={{ padding: '1rem', display: 'flex', flexDirection: 'column' }}>
             <div className="flex-row justify-between items-center mb-2">
                <span style={{ fontWeight: 700, fontSize: '1.05rem' }}>{p.name}</span>
                <span className="text-light" style={{ fontSize: '0.85rem' }}>{p.age} yrs • {p.gender}</span>
             </div>
             <div className="flex-row justify-between items-center mt-2 pt-3" style={{ borderTop: '1px solid rgba(184, 197, 214, 0.4)' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Berth Preference</span>
                <div onClick={() => setShowSeatMap(true)} className="neuro-raised" style={{ padding: '8px 16px', background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', borderRadius: '16px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                   <Grid size={16} /> {selectedSeat}
                </div>
             </div>
           </Card>
        ))}

        <Button variant="default" icon={<UserPlus size={18} className="text-navy" />} className="w-full justify-center">
            Add New Passenger
        </Button>
      </div>

      {/* Floating Payment Bar */}
      <div style={{
         position: 'absolute', bottom: 0, left: 0, right: 0,
         background: 'rgba(230, 238, 245, 0.85)', backdropFilter: 'blur(12px)',
         padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.4)',
         display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100, borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'
      }}>
         <div className="flex-col">
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Total Fare</span>
            <span style={{ fontSize: '1.4rem', fontWeight: 700 }}>₹ 2,750.00</span>
         </div>
         <Button variant="primary" onClick={handlePayment} style={{ padding: '14px 24px', fontSize: '1.05rem' }}>
            Pay Securely
         </Button>
      </div>

      {/* Seat Map Modal */}
      {showSeatMap && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '16px' }}>
           <div className="neuro-card flex-col" style={{ width: '100%', maxWidth: '400px', background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', padding: '24px', borderRadius: '24px' }}>
             <div className="flex-row justify-between items-center mb-6">
               <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700 }}>Select Coach Berth</h3>
               <span style={{ fontWeight: 600, color: 'var(--accent-primary)', cursor: 'pointer', padding: '8px 16px', borderRadius: '16px', background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', boxShadow: 'var(--glass-shadow)' }} onClick={() => setShowSeatMap(false)}>Done</span>
             </div>
             
             <div className="neuro-sunken" style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '320px', overflowY: 'auto', padding: '16px', borderRadius: '16px' }}>
                <SeatRow num={1} selectedSeat={selectedSeat} onSelect={setSelectedSeat} />
                <SeatRow num={2} selectedSeat={selectedSeat} onSelect={setSelectedSeat} />
                <SeatRow num={3} selectedSeat={selectedSeat} onSelect={setSelectedSeat} />
                <SeatRow num={4} selectedSeat={selectedSeat} onSelect={setSelectedSeat} />
                <SeatRow num={5} selectedSeat={selectedSeat} onSelect={setSelectedSeat} />
             </div>

             <div className="flex-row justify-between mt-6 px-4 text-center">
                 <div className="flex-col items-center"><div style={{width: 20, height: 20, background: '#A0AEC0', borderRadius: 6, marginBottom: 8}}></div><span style={{fontSize: 11, fontWeight: 600}}>Booked</span></div>
                 <div className="flex-col items-center"><div style={{width: 20, height: 20, background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', boxShadow: 'var(--glass-shadow)', borderRadius: 6, marginBottom: 8}}></div><span style={{fontSize: 11, fontWeight: 600}}>Available</span></div>
                 <div className="flex-col items-center"><div style={{width: 20, height: 20, background: 'var(--success)', borderRadius: 6, marginBottom: 8, boxShadow: 'var(--glass-shadow)'}}></div><span style={{fontSize: 11, fontWeight: 600}}>Selected</span></div>
             </div>
           </div>
        </div>
      )}

    </div>
  );
}

function SeatRow({ num, selectedSeat, onSelect }) {
   const base = (num - 1) * 8;
   const seats = [
      { id: `B1-${base+1}`, label: 'L' }, { id: `B1-${base+2}`, label: 'M' }, { id: `B1-${base+3}`, label: 'U' },
      { id: `B1-${base+4}`, label: 'SL', isSide: true },
      { id: `B1-${base+5}`, label: 'L' }, { id: `B1-${base+6}`, label: 'M' }, { id: `B1-${base+7}`, label: 'U' },
      { id: `B1-${base+8}`, label: 'SU', isSide: true }
   ];

   return (
      <div className="flex-row justify-between mb-4">
         <div className="flex-col gap-2">
            <Seat box={seats[0]} selectedSeat={selectedSeat} onSelect={onSelect} />
            <Seat box={seats[1]} selectedSeat={selectedSeat} onSelect={onSelect} />
            <Seat box={seats[2]} selectedSeat={selectedSeat} onSelect={onSelect} />
         </div>
         <div className="flex-col gap-2 justify-end">
            <Seat box={seats[3]} selectedSeat={selectedSeat} onSelect={onSelect} />
         </div>
         <div style={{ width: '3rem' }}></div>
         <div className="flex-col gap-2">
            <Seat box={seats[4]} selectedSeat={selectedSeat} onSelect={onSelect} />
            <Seat box={seats[5]} selectedSeat={selectedSeat} onSelect={onSelect} />
            <Seat box={seats[6]} selectedSeat={selectedSeat} onSelect={onSelect} />
         </div>
         <div className="flex-col gap-2 justify-end">
            <Seat box={seats[7]} selectedSeat={selectedSeat} onSelect={onSelect} />
         </div>
      </div>
   );
}

function Seat({ box, selectedSeat, onSelect }) {
   const isSel = selectedSeat === box.id;
   return (
      <div onClick={() => onSelect(box.id)} style={{
         width: '40px', height: '40px', borderRadius: '8px',
         display: 'flex', alignItems: 'center', justifyContent: 'center',
         fontSize: '11px', fontWeight: 700, cursor: 'pointer',
         background: isSel ? 'var(--success)' : 'var(--bg-page)',
         color: isSel ? 'white' : 'var(--text-primary)',
         boxShadow: isSel ? 'inset 2px 2px 5px rgba(0,0,0,0.2)' : 'var(--shadow-raised)',
         border: isSel ? 'none' : '1px solid rgba(255,255,255,0.2)'
      }}>
         {box.label}
      </div>
   );
}
