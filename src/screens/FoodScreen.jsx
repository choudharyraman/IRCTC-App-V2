import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Plus, CheckCircle, ShoppingBag, Star, Clock } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';

const RESTAURANTS = [
  { name: "Domino's Pizza", tag: 'Pizzas, Fast Food', rating: '4.2', time: '30 min', img: '🍕' },
  { name: "Haldiram's", tag: 'North Indian, Thalis', rating: '4.5', time: '25 min', img: '🍛' },
  { name: 'Comesum', tag: 'Biryani, South Indian', rating: '4.0', time: '20 min', img: '🍲' },
];

const MENU = [
  { name: 'Farmhouse Pizza', desc: 'Onion, Capsicum, Mushroom & Tomato', price: 259 },
  { name: 'Peppy Paneer', desc: 'Chunky Paneer, Capsicum & Red Pepper', price: 299 },
  { name: 'Garlic Breadsticks', desc: 'Baked with garlic butter', price: 119 },
  { name: 'Chicken Dominator', desc: 'Double cheese with chicken toppings', price: 399 },
];

export default function FoodScreen() {
  const nav = useNavigate();
  const [step, setStep] = useState('pnr');
  const [cart, setCart] = useState([]);
  const addToCart = (item, price) => setCart([...cart, { item, price }]);
  const total = cart.reduce((a, c) => a + c.price, 0);

  return (
    <div className="screen-wrapper" style={{paddingBottom:step==='menu'&&cart.length>0?'120px':'24px'}}>
      <div className="flex-row items-center gap-3 mb-6">
        <button onClick={()=>step==='menu'?setStep('pnr'):nav('/dashboard')} className="icon-btn"><ArrowLeft size={20}/></button>
        <div><h2 style={{fontSize:'18px',fontWeight:700,margin:0}}>E-Catering</h2><span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>Food delivered to your berth</span></div>
      </div>

      {step==='pnr'&&(
        <div className="stagger">
          <div className="glass-card mb-6" style={{padding:'24px',textAlign:'center'}}>
            <div style={{fontSize:'48px',marginBottom:'16px'}}>🍽️</div>
            <h3 style={{fontSize:'18px',fontWeight:700,margin:'0 0 8px'}}>Fresh food, right to your seat</h3>
            <p style={{fontSize:'13px',color:'var(--text-tertiary)',margin:'0 0 20px'}}>Enter your PNR to browse restaurants along your journey</p>
            <Input placeholder="Enter 10-digit PNR" icon={<Search size={18}/>} style={{marginBottom:'16px'}}/>
            <Button onClick={()=>setStep('menu')}>Find Restaurants</Button>
          </div>

          <h3 style={{fontSize:'16px',fontWeight:700,margin:'0 0 12px'}}>Popular Partners</h3>
          <div className="flex-row gap-3 hide-scrollbar" style={{overflowX:'auto',paddingBottom:'8px'}}>
            {RESTAURANTS.map(r=>(
              <div key={r.name} className="glass-card glass-card-interactive" style={{minWidth:'140px',padding:'16px',textAlign:'center',flexShrink:0}} onClick={()=>setStep('menu')}>
                <div style={{fontSize:'32px',marginBottom:'10px'}}>{r.img}</div>
                <span style={{fontSize:'13px',fontWeight:600,display:'block'}}>{r.name}</span>
                <span style={{fontSize:'10px',color:'var(--text-tertiary)'}}>{r.tag}</span>
                <div className="flex-row items-center justify-center gap-2 mt-2">
                  <Star size={12} color="var(--accent)" fill="var(--accent)"/>
                  <span style={{fontSize:'11px',fontWeight:600}}>{r.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {step==='menu'&&(
        <div className="stagger">
          <div className="flex-row items-center gap-3 mb-4 pb-4" style={{borderBottom:'1px solid var(--border-subtle)'}}>
            <div style={{flex:1}}>
              <h3 style={{fontSize:'18px',fontWeight:700,margin:0}}>Domino's Pizza</h3>
              <span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>Delivery at Surat (ST) • 19:42</span>
            </div>
            <span className="badge badge-success"><Star size={10} fill="currentColor"/>4.2</span>
          </div>
          <div className="flex-col gap-3">
            {MENU.map(item=>(
              <div key={item.name} className="glass-card" style={{padding:'14px',display:'flex',alignItems:'center',gap:'12px'}}>
                <div style={{flex:1}}>
                  <span style={{fontSize:'14px',fontWeight:600,display:'block',marginBottom:'4px'}}>{item.name}</span>
                  <span style={{fontSize:'11px',color:'var(--text-tertiary)',lineHeight:'1.4',display:'block',marginBottom:'6px'}}>{item.desc}</span>
                  <span style={{fontSize:'14px',fontWeight:700}}>₹{item.price}</span>
                </div>
                <button onClick={()=>addToCart(item.name,item.price)} style={{width:'40px',height:'40px',borderRadius:'var(--radius-md)',background:'var(--success-bg)',border:'none',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',flexShrink:0,transition:'all 150ms'}}
                  onMouseDown={e=>e.currentTarget.style.transform='scale(0.9)'} onMouseUp={e=>e.currentTarget.style.transform='scale(1)'}>
                  <Plus size={20} color="var(--success)"/>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {step==='success'&&(
        <div className="flex-col items-center text-center" style={{paddingTop:'40px',animation:'scaleIn 0.4s var(--ease-spring)'}}>
          <div style={{width:'72px',height:'72px',borderRadius:'50%',background:'var(--gradient-success)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'16px',boxShadow:'0 8px 32px rgba(16,185,129,0.3)'}}><CheckCircle size={36} color="#FFF"/></div>
          <h3 style={{fontSize:'20px',fontWeight:700,margin:'0 0 8px'}}>Order Placed!</h3>
          <p style={{fontSize:'13px',color:'var(--text-tertiary)',margin:'0 0 24px'}}>Your meal will be delivered to berth at Surat (ST)</p>
          <div className="glass-card w-full mb-6" style={{padding:'16px'}}>
            <div className="flex-row justify-between"><span style={{fontSize:'13px',color:'var(--text-tertiary)'}}>Total Paid</span><span style={{fontSize:'16px',fontWeight:700}}>₹{total}</span></div>
          </div>
          <Button onClick={()=>nav('/dashboard')}>Return Home</Button>
        </div>
      )}

      {step==='menu'&&cart.length>0&&(
        <div style={{position:'fixed',bottom:0,left:'50%',transform:'translateX(-50%)',width:'100%',maxWidth:'480px',background:'var(--bg-primary)',borderTop:'1px solid var(--border-primary)',padding:'16px',zIndex:100,backdropFilter:'blur(24px)'}}>
          <div className="flex-row items-center gap-4">
            <div className="flex-row items-center gap-3">
              <ShoppingBag size={22} color="var(--primary)"/>
              <div><span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>{cart.length} items</span><br/><span style={{fontSize:'18px',fontWeight:800,fontFamily:"'Outfit'"}}>₹{total}</span></div>
            </div>
            <div style={{flex:1}}><Button variant="primary" onClick={()=>setStep('success')}>Place Order</Button></div>
          </div>
        </div>
      )}
    </div>
  );
}
