import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import { ArrowLeft, UserPlus, CreditCard, ChevronRight } from 'lucide-react';

export default function BookingScreen() {
  const navigate = useNavigate();
  const [passengers, setPassengers] = useState([{ name: 'Raman Choudhary', age: 28, gender: 'Male', berth: 'Lower' }]);

  const handlePayment = () => {
    alert('Proceeding to Payment via R-Wallet');
  };

  return (
    <div style={{ paddingBottom: '100px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <div style={{ padding: '1.5rem 1rem 1rem 1rem', background: 'var(--bg-color)' }}>
        <div className="flex-row items-center gap-4">
          <button className="neu-icon-btn" style={{ width: '40px', height: '40px', background: 'var(--bg-color)', boxShadow: 'var(--shadow-dark), var(--shadow-light)', border: 'none' }} onClick={() => navigate('/trains')}>
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
             <div className="flex-row justify-between items-center">
                <span style={{ fontWeight: 700, fontSize: '1rem' }}>{p.name}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Seat: {p.berth}</span>
             </div>
             <span className="text-light" style={{ fontSize: '0.85rem' }}>{p.age} yrs • {p.gender}</span>
           </Card>
        ))}

        <Button variant="default" icon={<UserPlus size={18} className="text-navy" />} className="w-full justify-center">
            Add New Passenger
        </Button>
      </div>

      {/* Floating Payment Bar */}
      <div style={{
         position: 'fixed', bottom: 0, width: '100%', maxWidth: '420px',
         background: 'rgba(230, 238, 245, 0.85)', backdropFilter: 'blur(12px)',
         padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.4)',
         display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100
      }}>
         <div className="flex-col">
            <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: 600 }}>Total Fare</span>
            <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>₹ 2,750.00</span>
         </div>
         <Button variant="primary" onClick={handlePayment} style={{ padding: '0.75rem 1.5rem' }}>
            Pay Securely
         </Button>
      </div>

    </div>
  );
}
