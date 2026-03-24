import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import BottomNav from '../components/BottomNav';
import ThemeToggle from '../components/ThemeToggle';
import { MapPin, Calendar, Clock, Utensils, AlertTriangle, CreditCard, Search } from 'lucide-react';

export default function DashboardScreen() {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/trains');
  };

  return (
    <div className="screen-wrapper" style={{ paddingBottom: '80px' }}>
      {/* Header */}
      <div className="flex-row justify-between items-center mb-4">
        <div>
          <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700 }}>Welcome, User</h1>
          <p className="text-light" style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Where are we traveling today?</p>
        </div>
        <div className="flex-row items-center gap-4">
          <ThemeToggle />
          <div className="neuro-raised" style={{ width: '40px', height: '40px', background: 'var(--bg-page)', borderRadius: '50%', overflow: 'hidden' }}>
            <img src="https://ui-avatars.com/api/?name=User&background=4B7EFF&color=FFF" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      {/* R-Wallet Mini Card */}
      <Card style={{ padding: '1rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="flex-row items-center gap-2">
          <CreditCard size={24} className="text-navy" />
          <div className="flex-col">
            <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: 600 }}>R-Wallet Balance</span>
            <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--accent-green)' }}>₹ 4,500.00</span>
          </div>
        </div>
        <button className="neu-btn" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Recharge</button>
      </Card>

      {/* Book Ticket Section */}
      <Card style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 600 }}>Book Ticket</h2>
        
        <div className="flex-col gap-4">
          <div style={{ position: 'relative' }}>
            <Input type="text" placeholder="From Station" icon={<MapPin size={18} className="text-saffron" />} />
            {/* Vertical line connector */}
            <div style={{ position: 'absolute', left: '25px', top: '40px', bottom: '-20px', width: '2px', background: 'rgba(0,0,128,0.2)', zIndex: 0 }}></div>
          </div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Input type="text" placeholder="To Station" icon={<MapPin size={18} className="text-green" />} />
            <div className="neu-icon-btn" style={{ position: 'absolute', right: '10px', top: '-25px', width: '36px', height: '36px', background: 'var(--bg-color)', boxShadow: 'var(--shadow-dark), var(--shadow-light)', zIndex: 2 }}>
               <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>↕</span>
            </div>
          </div>

          <div className="flex-row gap-2 mt-4">
            <Input type="date" className="w-full" icon={<Calendar size={18} />} />
            <Input type="text" placeholder="General" className="w-full" />
          </div>

          <Button variant="primary" className="w-full mt-4" onClick={handleSearch} icon={<Search size={18} />}>
            Search Trains
          </Button>
        </div>
      </Card>

      {/* Super App Services */}
      <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 600 }}>RailOne Ecosystem</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <ServiceTile icon={<Utensils className="text-saffron" size={28} />} label="E-Catering" onClick={() => navigate('/food')} />
        <ServiceTile icon={<Clock className="text-navy" size={28} />} label="UTS" onClick={() => navigate('/uts')} />
        <ServiceTile icon={<AlertTriangle className="text-green" size={28} />} label="Rail Madad" onClick={() => navigate('/madad')} />
        <ServiceTile icon={<Search className="text-navy" size={28} />} label="PNR Status" onClick={() => navigate('/pnr')} />
        <ServiceTile icon={<MapPin className="text-saffron" size={28} />} label="Live Train" onClick={() => navigate('/live')} />
        <ServiceTile icon={<CreditCard className="text-navy" size={28} />} label="Recharge" onClick={() => navigate('/recharge')} />
      </div>

      <BottomNav active="home" />
    </div>
  );
}

function ServiceTile({ icon, label, onClick }) {
  return (
    <div className="flex-col items-center gap-2" style={{ cursor: 'pointer' }} onClick={onClick}>
      <div className="neu-icon-btn" style={{ width: '64px', height: '64px', background: 'var(--bg-color)', boxShadow: 'var(--shadow-dark), var(--shadow-light)' }}>
        {icon}
      </div>
      <span style={{ fontSize: '0.75rem', fontWeight: 600, textAlign: 'center' }}>{label}</span>
    </div>
  );
}
