import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { ArrowLeft, SlidersHorizontal } from 'lucide-react';

export default function TrainListScreen() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dashboard');
  };

  const dummyTrains = [
    {
      id: "12951",
      name: "MUMBAI RAJDHANI",
      startsAt: "17:00",
      endsAt: "08:32",
      duration: "15h 32m",
      classes: [
        { type: "3A", status: "AVAILABLE 42", color: "var(--accent-green)", price: "₹2,735" },
        { type: "2A", status: "WL 12", color: "var(--accent-saffron)", price: "₹3,825" },
        { type: "1A", status: "RAC 4", color: "var(--accent-saffron)", price: "₹4,765" }
      ]
    },
    {
      id: "12903",
      name: "GOLDEN TEMPLE M",
      startsAt: "21:25",
      endsAt: "13:50",
      duration: "16h 25m",
      classes: [
        { type: "SL", status: "AVAILABLE 104", color: "var(--accent-green)", price: "₹670" },
        { type: "3A", status: "AVAILABLE 18", color: "var(--accent-green)", price: "₹1,765" },
        { type: "2A", status: "WL 45", color: "var(--accent-saffron)", price: "₹2,530" }
      ]
    }
  ];

  return (
    <div style={{ paddingBottom: '2rem', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Sticky Header */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'var(--bg-color)',
        padding: '1.5rem 1rem 1rem 1rem',
        boxShadow: '0 4px 12px rgba(184, 197, 214, 0.3)',
        borderBottom: '1px solid rgba(255,255,255,0.4)'
      }}>
        <div className="flex-row justify-between items-center mb-4">
          <div className="flex-row items-center gap-4">
            <button className="neu-icon-btn" style={{ width: '40px', height: '40px', background: 'var(--bg-color)', boxShadow: 'var(--shadow-dark), var(--shadow-light)', border: 'none' }} onClick={handleBack}>
              <ArrowLeft size={20} className="text-navy" />
            </button>
            <div className="flex-col">
              <h2 style={{ fontSize: '1.1rem', margin: 0, fontWeight: 700 }}>Mumbai ↔ New Delhi</h2>
              <span className="text-light" style={{ fontSize: '0.8rem' }}>24 Mar, Tomorrow</span>
            </div>
          </div>
          <button className="neu-icon-btn" style={{ width: '40px', height: '40px', background: 'var(--bg-color)', boxShadow: 'var(--shadow-dark), var(--shadow-light)', border: 'none' }}>
            <SlidersHorizontal size={20} className="text-navy" />
          </button>
        </div>

        {/* Date Scroller */}
        <div className="flex-row gap-4" style={{ overflowX: 'auto', paddingBottom: '0.5rem', whiteSpace: 'nowrap', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
           <DateChip day="Today" date="23 Mar" />
           <DateChip day="Tomorrow" date="24 Mar" active />
           <DateChip day="Monday" date="25 Mar" />
           <DateChip day="Tuesday" date="26 Mar" />
        </div>
      </div>

      {/* Train List */}
      <div className="flex-col gap-4" style={{ padding: '1rem' }}>
        {dummyTrains.map(train => (
          <TrainCard key={train.id} train={train} />
        ))}
      </div>
    </div>
  );
}

function DateChip({ day, date, active }) {
  return (
    <div className="flex-col items-center justify-center" style={{
      minWidth: '70px',
      padding: '0.5rem',
      borderRadius: 'var(--radius-sm)',
      boxShadow: active ? 'var(--shadow-inset-dark), var(--shadow-inset-light)' : 'var(--shadow-dark), var(--shadow-light)',
      background: active ? 'transparent' : 'var(--bg-color)',
      color: active ? 'var(--text-dark)' : 'var(--text-light)',
      border: '1px solid rgba(255,255,255,0.2)'
    }}>
      <span style={{ fontSize: '0.7rem', fontWeight: 600 }}>{day}</span>
      <span style={{ fontSize: '0.85rem', fontWeight: active ? 700 : 500 }}>{date}</span>
    </div>
  );
}

function TrainCard({ train }) {
  return (
    <Card style={{ padding: '1.25rem' }}>
      <div className="flex-row justify-between items-center mb-2">
        <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700 }}>{train.name}</h3>
        <span className="text-light" style={{ fontSize: '0.85rem', fontWeight: 600 }}>#{train.id}</span>
      </div>
      
      <div className="flex-row justify-between items-center mb-4">
        <div className="flex-col">
          <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>{train.startsAt}</span>
          <span className="text-light" style={{ fontSize: '0.75rem' }}>MMCT</span>
        </div>
        <div className="flex-col items-center">
           <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>{train.duration}</span>
           <div style={{ width: '60px', height: '2px', background: 'rgba(0,0,128,0.2)', margin: '4px 0' }}></div>
        </div>
        <div className="flex-col items-end">
          <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>{train.endsAt}</span>
          <span className="text-light" style={{ fontSize: '0.75rem' }}>NDLS</span>
        </div>
      </div>

      <div className="flex-row gap-2" style={{ overflowX: 'auto', paddingBottom: '0.5rem', scrollbarWidth: 'none' }}>
        {train.classes.map((cls, idx) => (
          <div key={idx} 
            onClick={() => window.location.href='/book'}
            style={{
            minWidth: '100px',
            padding: '0.75rem',
            borderRadius: 'var(--radius-sm)',
            boxShadow: 'var(--shadow-dark), var(--shadow-light)',
            background: 'var(--bg-color)',
            border: '1px solid rgba(255,255,255,0.2)',
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer'
          }}>
             <div className="flex-row justify-between mb-1">
               <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{cls.type}</span>
               <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>{cls.price}</span>
             </div>
             <span style={{ fontSize: '0.75rem', fontWeight: 700, color: cls.color }}>{cls.status}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
