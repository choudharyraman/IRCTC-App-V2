import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { ArrowLeft, Search, UtensilsCrossed, Plus, CheckCircle, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FoodScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState('pnr');
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item, price) => {
     setCart([...cart, { item, price }]);
  };

  const total = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="screen-wrapper" style={{ paddingBottom: '100px', position: 'relative', minHeight: '100vh' }}>
      
      {/* Header */}
      <div className="flex-row items-center gap-4 mb-6">
        <button 
           className="neuro-icon-btn" 
           style={{ width: '40px', height: '40px', background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', boxShadow: 'var(--glass-shadow)', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} 
           onClick={() => navigate('/dashboard')}
        >
          <ArrowLeft size={20} color="var(--text-primary)" />
        </button>
        <div className="flex-col">
           <h2 style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>E-Catering</h2>
           <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Food on Track</span>
        </div>
      </div>

      {step === 'pnr' && (
         <div style={{ animation: 'slideUp 0.3s ease-out' }}>
            <div className="neuro-card flex-col" style={{ padding: '24px', marginBottom: '32px' }}>
               <UtensilsCrossed size={48} color="var(--accent-saffron)" style={{ marginBottom: '16px' }} />
               <h1 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Get fresh food delivered to your berth</h1>
               <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>Enter your PNR details to browse restaurants along your upcoming journey.</p>
               
               <Input placeholder="Enter 10 digit PNR" icon={<Search size={18} />} />
               <div className="mt-4"></div>
               <Button onClick={() => setStep('menu')}>Find Food</Button>
            </div>

            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>Popular Partners</h3>
            <div className="flex-row gap-4" style={{ overflowX: 'auto', paddingBottom: '16px' }}>
               <PartnerCard name="Domino's Pizza" tag="Pizzas, Fast Food" />
               <PartnerCard name="Haldiram's" tag="North Indian, Thalis" />
               <PartnerCard name="Comesum" tag="Biryani, South Indian" />
            </div>
         </div>
      )}

      {step === 'menu' && (
         <div style={{ animation: 'slideUp 0.3s ease-out' }}>
            <div className="flex-row items-center gap-4 mb-4 pb-4" style={{ borderBottom: '1px solid rgba(184, 197, 214, 0.4)' }}>
               <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '20px', fontWeight: 700, margin: 0 }}>Domino's Pizza</h2>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Delivering at Surat (ST) • 19:42</span>
               </div>
               <div style={{ background: 'var(--success)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 700 }}>4.2 ★</div>
            </div>

            <div className="flex-col gap-4">
               <MenuItem name="Farmhouse Pizza" desc="Onion, Crisp Capsicum, Mushroom & Tomato" price={259} onAdd={() => handleAddToCart('Farmhouse Pizza', 259)} />
               <MenuItem name="Peppy Paneer" desc="Chunky Paneer, Crisp Capsicum & Red Pepper" price={299} onAdd={() => handleAddToCart('Peppy Paneer', 299)} />
               <MenuItem name="Garlic Breadsticks" desc="Baked to perfection." price={119} onAdd={() => handleAddToCart('Garlic Breadsticks', 119)} />
            </div>
         </div>
      )}

      {step === 'success' && (
         <div className="neuro-card flex-col items-center text-center mt-8" style={{ padding: '32px 24px', animation: 'slideUp 0.3s ease-out' }}>
            <CheckCircle size={56} color="var(--success)" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Order Placed!</h3>
            <span style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>Your meal will be delivered directly to your berth at Surat (ST).</span>
            
            <div className="neuro-sunken w-full" style={{ padding: '16px', borderRadius: '12px', marginBottom: '32px' }}>
               <div className="flex-row justify-between">
                  <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Total Paid</span>
                  <span style={{ fontSize: '16px', fontWeight: 700 }}>₹ {total}.00</span>
               </div>
            </div>

            <Button className="w-full" onClick={() => navigate('/dashboard')}>Return Home</Button>
         </div>
      )}

      {/* Floating Cart Bar */}
      {step === 'menu' && cart.length > 0 && (
         <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            background: 'rgba(230, 238, 245, 0.85)', backdropFilter: 'blur(12px)',
            padding: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.4)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100, borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'
         }}>
            <div className="flex-row items-center gap-3">
               <ShoppingBag size={24} color="var(--accent-primary)" />
               <div className="flex-col">
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 600 }}>{cart.length} Item(s)</span>
                  <span style={{ fontSize: '18px', fontWeight: 700 }}>₹ {total}.00</span>
               </div>
            </div>
            <button onClick={() => setStep('success')} style={{ padding: '12px 24px', background: 'var(--accent-primary)', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 700, fontSize: '1rem', boxShadow: '0 8px 32px rgba(75, 126, 255, 0.3)', cursor: 'pointer' }}>
               Pay Now
            </button>
         </div>
      )}

    </div>
  );
}

function PartnerCard({ name, tag }) {
   return (
      <div className="neuro-raised" style={{ minWidth: '140px', padding: '16px', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
         <div style={{ width: '48px', height: '48px', borderRadius: '24px', background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.05)', marginBottom: '12px' }}></div>
         <span style={{ fontSize: '14px', fontWeight: 600 }}>{name}</span>
         <span style={{ fontSize: '10px', color: 'var(--text-secondary)', marginTop: '4px' }}>{tag}</span>
      </div>
   );
}

function MenuItem({ name, desc, price, onAdd }) {
   return (
      <div className="neuro-raised" style={{ padding: '16px', borderRadius: '16px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
         <div className="flex-col" style={{ flex: 1, paddingRight: '16px' }}>
            <span style={{ fontSize: '14px', fontWeight: 700, marginBottom: '4px' }}>{name}</span>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{desc}</span>
            <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginTop: '8px' }}>₹ {price}</span>
         </div>
         <button onClick={onAdd} className="neuro-icon-btn" style={{ width: '40px', height: '40px', background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', boxShadow: 'var(--glass-shadow)', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
            <Plus size={20} color="var(--success)" />
         </button>
      </div>
   );
}
