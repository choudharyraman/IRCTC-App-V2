import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, UserPlus, Grid, X, Shield, ChevronDown } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';

export default function BookingScreen() {
  const nav = useNavigate();
  const [passengers, setPassengers] = useState([{name:'Raman Choudhary',age:'28',gender:'Male',berth:'No Preference'}]);
  const [showSeatMap, setShowSeatMap] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState('B1-42');
  const [insurance, setInsurance] = useState(false);

  const addPassenger = () => setPassengers([...passengers,{name:'',age:'',gender:'Male',berth:'No Preference'}]);
  const removePassenger = (i) => setPassengers(passengers.filter((_,idx)=>idx!==i));

  const baseFare = 2450;
  const tatkal = 200;
  const conv = 100;
  const insuranceFee = insurance ? 35 : 0;
  const total = baseFare + tatkal + conv + insuranceFee;

  return (
    <div className="screen-wrapper" style={{paddingBottom:'120px'}}>
      {/* Header */}
      <div className="flex-row items-center gap-3 mb-6">
        <button onClick={()=>nav('/trains')} className="icon-btn"><ArrowLeft size={20}/></button>
        <div><h2 style={{fontSize:'18px',margin:0,fontWeight:700}}>Passenger Details</h2><span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>Mumbai Rajdhani (12951) • 3A</span></div>
      </div>

      {/* Journey Summary */}
      <div className="glass-card mb-4" style={{padding:'16px'}}>
        <div className="flex-row items-center justify-between">
          <div className="flex-col items-start"><span style={{fontSize:'20px',fontWeight:800,fontFamily:"'Outfit'"}}>MMCT</span><span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>24 Mar, 17:00</span></div>
          <div className="flex-col items-center flex-1" style={{padding:'0 12px'}}>
            <span style={{fontSize:'10px',color:'var(--text-tertiary)'}}>15h 32m</span>
            <div style={{width:'100%',height:'2px',background:'var(--gradient-primary)',borderRadius:'1px',margin:'6px 0'}}/>
          </div>
          <div className="flex-col items-end"><span style={{fontSize:'20px',fontWeight:800,fontFamily:"'Outfit'"}}>NDLS</span><span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>25 Mar, 08:32</span></div>
        </div>
        <div style={{marginTop:'12px',padding:'8px 12px',background:'var(--success-bg)',borderRadius:'var(--radius-sm)',display:'flex',alignItems:'center',gap:'6px'}}>
          <div style={{width:'6px',height:'6px',borderRadius:'50%',background:'var(--success)'}}/>
          <span style={{fontSize:'12px',fontWeight:600,color:'var(--success)'}}>Available: 42 seats</span>
        </div>
      </div>

      {/* Passengers */}
      <div className="flex-row items-center justify-between mb-3">
        <h3 style={{fontSize:'16px',fontWeight:700,margin:0}}>Passengers ({passengers.length}/6)</h3>
      </div>

      <div className="flex-col gap-3 mb-4">
        {passengers.map((p,i) => (
          <div key={i} className="glass-card" style={{padding:'16px'}}>
            <div className="flex-row items-center justify-between mb-3">
              <span style={{fontSize:'13px',fontWeight:700,color:'var(--primary)'}}>Passenger {i+1}</span>
              {i > 0 && <button onClick={()=>removePassenger(i)} style={{background:'var(--error-bg)',border:'none',borderRadius:'var(--radius-sm)',padding:'4px 10px',cursor:'pointer',fontSize:'11px',fontWeight:600,color:'var(--error)'}}>Remove</button>}
            </div>
            <div className="flex-col gap-3">
              <Input placeholder="Full Name (as per ID)" value={p.name} onChange={e=>{const np=[...passengers];np[i].name=e.target.value;setPassengers(np)}} />
              <div className="flex-row gap-3">
                <Input placeholder="Age" value={p.age} style={{maxWidth:'80px'}} onChange={e=>{const np=[...passengers];np[i].age=e.target.value;setPassengers(np)}} />
                <div style={{flex:1,position:'relative'}}>
                  <select value={p.gender} onChange={e=>{const np=[...passengers];np[i].gender=e.target.value;setPassengers(np)}} style={{width:'100%',height:'52px',borderRadius:'var(--radius-md)',background:'var(--bg-input)',border:'1.5px solid var(--border-primary)',padding:'0 16px',fontSize:'15px',color:'var(--text-primary)',outline:'none',appearance:'none',fontFamily:"'Inter'",cursor:'pointer'}}>
                    <option>Male</option><option>Female</option><option>Other</option>
                  </select>
                  <ChevronDown size={16} style={{position:'absolute',right:'14px',top:'50%',transform:'translateY(-50%)',color:'var(--text-tertiary)',pointerEvents:'none'}} />
                </div>
              </div>
              <div className="flex-row items-center justify-between" style={{padding:'8px 12px',background:'var(--bg-input)',borderRadius:'var(--radius-md)',cursor:'pointer'}} onClick={()=>setShowSeatMap(true)}>
                <span style={{fontSize:'13px',color:'var(--text-secondary)'}}>Berth Preference</span>
                <div className="flex-row items-center gap-2">
                  <Grid size={14} color="var(--primary)" />
                  <span style={{fontSize:'13px',fontWeight:600,color:'var(--primary)'}}>{selectedSeat}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {passengers.length < 6 && (
        <Button variant="secondary" onClick={addPassenger} icon={<UserPlus size={18}/>} style={{marginBottom:'16px'}}>
          Add Passenger
        </Button>
      )}

      {/* Travel Insurance */}
      <div className="glass-card mb-4" style={{padding:'16px'}} onClick={()=>setInsurance(!insurance)}>
        <div className="flex-row items-center gap-3" style={{cursor:'pointer'}}>
          <div style={{width:'24px',height:'24px',borderRadius:'var(--radius-sm)',border:insurance?'none':'2px solid var(--text-tertiary)',background:insurance?'var(--primary)':'transparent',display:'flex',alignItems:'center',justifyContent:'center',transition:'all 150ms',flexShrink:0}}>
            {insurance&&<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
          </div>
          <div style={{flex:1}}>
            <div className="flex-row items-center gap-2"><Shield size={16} color="var(--success)"/><span style={{fontSize:'14px',fontWeight:600}}>Travel Insurance</span></div>
            <span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>Cover up to ₹10 lakh for ₹35/person</span>
          </div>
          <span style={{fontSize:'14px',fontWeight:700,color:'var(--success)'}}>₹35</span>
        </div>
      </div>

      {/* Fare Breakdown */}
      <div className="glass-card mb-4" style={{padding:'16px'}}>
        <h4 style={{fontSize:'14px',fontWeight:700,margin:'0 0 12px 0'}}>Fare Summary</h4>
        {[['Base Fare',baseFare],['Tatkal Charges',tatkal],['Convenience Fee',conv],insurance&&['Travel Insurance',insuranceFee]].filter(Boolean).map(([l,v])=>(
          <div key={l} className="flex-row justify-between mb-2"><span style={{fontSize:'13px',color:'var(--text-secondary)'}}>{l}</span><span style={{fontSize:'13px',fontWeight:600}}>₹{v.toLocaleString()}</span></div>
        ))}
        <div style={{borderTop:'1px dashed var(--border-primary)',marginTop:'8px',paddingTop:'8px'}} className="flex-row justify-between">
          <span style={{fontSize:'15px',fontWeight:700}}>Total</span>
          <span style={{fontSize:'18px',fontWeight:800,color:'var(--primary)',fontFamily:"'Outfit'"}}>₹{total.toLocaleString()}</span>
        </div>
      </div>

      {/* Bottom Pay Bar */}
      <div style={{position:'fixed',bottom:0,left:'50%',transform:'translateX(-50%)',width:'100%',maxWidth:'480px',background:'var(--bg-primary)',borderTop:'1px solid var(--border-primary)',padding:'16px',zIndex:100,backdropFilter:'blur(24px)'}}>
        <div className="flex-row items-center gap-4">
          <div className="flex-col"><span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>Total Fare</span><span style={{fontSize:'20px',fontWeight:800,fontFamily:"'Outfit'"}}>₹{total.toLocaleString()}</span></div>
          <div style={{flex:1}}><Button variant="primary" onClick={()=>nav('/payment')}>Continue to Pay</Button></div>
        </div>
      </div>

      {/* Seat Map Modal */}
      {showSeatMap&&(
        <div style={{position:'fixed',inset:0,background:'var(--bg-overlay)',zIndex:1000,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'16px',animation:'fadeIn 0.2s'}} onClick={()=>setShowSeatMap(false)}>
          <div className="glass-card" onClick={e=>e.stopPropagation()} style={{width:'100%',maxWidth:'400px',padding:'24px',animation:'scaleIn 0.3s var(--ease-spring)'}}>
            <div className="flex-row items-center justify-between mb-5">
              <h3 style={{fontSize:'18px',fontWeight:700,margin:0}}>Select Berth</h3>
              <button onClick={()=>setShowSeatMap(false)} className="icon-btn"><X size={18}/></button>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'8px',maxHeight:'320px',overflowY:'auto',padding:'8px'}}>
              {[1,2,3,4,5].map(n=><SeatRow key={n} num={n} sel={selectedSeat} onSel={setSelectedSeat}/>)}
            </div>
            <div className="flex-row justify-center gap-4 mt-4">
              {[{c:'var(--text-tertiary)',l:'Booked'},{c:'var(--bg-input)',l:'Available',border:true},{c:'var(--primary)',l:'Selected'}].map(x=>(
                <div key={x.l} className="flex-row items-center gap-2"><div style={{width:'16px',height:'16px',borderRadius:'4px',background:x.c,border:x.border?'1px solid var(--border-primary)':'none'}}/><span style={{fontSize:'11px',fontWeight:500,color:'var(--text-secondary)'}}>{x.l}</span></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SeatRow({num,sel,onSel}){
  const b=(num-1)*8;
  const seats=[{id:`B1-${b+1}`,l:'LB'},{id:`B1-${b+2}`,l:'MB'},{id:`B1-${b+3}`,l:'UB'},{id:`B1-${b+4}`,l:'SL'},{id:`B1-${b+5}`,l:'LB'},{id:`B1-${b+6}`,l:'MB'},{id:`B1-${b+7}`,l:'UB'},{id:`B1-${b+8}`,l:'SU'}];
  return(
    <div className="flex-row justify-between gap-2" style={{paddingBottom:'8px',borderBottom:'1px solid var(--border-subtle)'}}>
      <div className="flex-row gap-2">{seats.slice(0,3).map(s=><Seat key={s.id} s={s} sel={sel} onSel={onSel}/>)}</div>
      <Seat s={seats[3]} sel={sel} onSel={onSel}/>
      <div style={{width:'8px'}}/>
      <div className="flex-row gap-2">{seats.slice(4,7).map(s=><Seat key={s.id} s={s} sel={sel} onSel={onSel}/>)}</div>
      <Seat s={seats[7]} sel={sel} onSel={onSel}/>
    </div>
  );
}

function Seat({s,sel,onSel}){
  const isSel=sel===s.id;
  return(
    <div onClick={()=>onSel(s.id)} style={{width:'36px',height:'36px',borderRadius:'var(--radius-sm)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'10px',fontWeight:700,cursor:'pointer',background:isSel?'var(--primary)':'var(--bg-input)',color:isSel?'#FFF':'var(--text-secondary)',border:isSel?'none':'1px solid var(--border-subtle)',transition:'all 150ms',boxShadow:isSel?'0 2px 8px var(--primary-glow)':'none'}}>
      {s.l}
    </div>
  );
}
