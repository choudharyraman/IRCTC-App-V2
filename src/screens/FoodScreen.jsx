import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { ArrowLeft, Search, UtensilsCrossed } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FoodScreen() {
  const navigate = useNavigate();

  return (
    <div className="screen-wrapper">
      
      {/* Header */}
      <div className="flex-row items-center gap-4 mb-6">
        <button 
           className="neuro-icon-btn" 
           style={{ width: '40px', height: '40px', background: 'var(--bg-page)', boxShadow: 'var(--shadow-raised)', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
           onClick={() => navigate('/dashboard')}
        >
          <ArrowLeft size={20} color="var(--text-primary)" />
        </button>
        <div className="flex-col">
           <h2 style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>E-Catering</h2>
           <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Food on Track</span>
        </div>
      </div>

      <div className="neuro-card flex-col" style={{ padding: '24px', marginBottom: '32px' }}>
         <UtensilsCrossed size={48} color="var(--accent-saffron)" style={{ marginBottom: '16px' }} />
         <h1 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Get fresh food delivered to your berth</h1>
         <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>Enter your PNR details to browse restaurants along your upcoming journey.</p>
         
         <Input placeholder="Enter 10 digit PNR" icon={<Search size={18} />} />
         <div className="mt-4"></div>
         <Button>Find Food</Button>
      </div>

      <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>Popular Partners</h3>
      <div className="flex-row gap-4" style={{ overflowX: 'auto', paddingBottom: '16px' }}>
         <PartnerCard name="Domino's Pizza" tag="Pizzas, Fast Food" />
         <PartnerCard name="Haldiram's" tag="North Indian, Thalis" />
         <PartnerCard name="Comesum" tag="Biryani, South Indian" />
      </div>

    </div>
  );
}

function PartnerCard({ name, tag }) {
   return (
      <div className="neuro-raised" style={{ minWidth: '140px', padding: '16px', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
         <div style={{ width: '48px', height: '48px', borderRadius: '24px', background: 'var(--bg-page)', boxShadow: 'var(--shadow-sunken)', marginBottom: '12px' }}></div>
         <span style={{ fontSize: '14px', fontWeight: 600 }}>{name}</span>
         <span style={{ fontSize: '10px', color: 'var(--text-secondary)', marginTop: '4px' }}>{tag}</span>
      </div>
   );
}
