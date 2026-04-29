import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ChevronLeft, Train } from 'lucide-react';
import Button from '../components/Button';

export default function AuthLoginScreen() {
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => { e.preventDefault(); nav('/dashboard'); };

  return (
    <div style={{width:'100%',minHeight:'100vh',background:'linear-gradient(160deg, #312E81 0%, #4F46E5 40%, #6366F1 70%, #818CF8 100%)',display:'flex',flexDirection:'column',fontFamily:"'Inter', sans-serif"}}>
      
      {/* Top Header */}
      <div style={{padding:'32px 24px',flex:'0 0 auto'}}>
        <div onClick={()=>nav('/tatkal')} style={{display:'flex',alignItems:'center',gap:'8px',cursor:'pointer',opacity:0.8,width:'fit-content'}}>
          <ChevronLeft size={20} color="#FFF"/><span style={{fontSize:'14px',fontWeight:600,color:'#FFF'}}>Back</span>
        </div>
        <div style={{marginTop:'40px',display:'flex',alignItems:'center',gap:'12px'}}>
          <div style={{width:'48px',height:'48px',borderRadius:'var(--radius-lg)',background:'rgba(255,255,255,0.15)',backdropFilter:'blur(8px)',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Train size={24} color="#FFF"/>
          </div>
          <div><h1 style={{fontSize:'28px',fontWeight:800,color:'#FFF',margin:0,fontFamily:"'Outfit'"}}>RailOne</h1><span style={{fontSize:'12px',color:'rgba(255,255,255,0.7)'}}>Your SuperApp for Railways</span></div>
        </div>
      </div>

      {/* Bottom Sheet */}
      <div style={{flex:1,background:'var(--bg-primary)',borderRadius:'32px 32px 0 0',padding:'36px 24px 32px',display:'flex',flexDirection:'column',boxShadow:'0 -10px 40px rgba(0,0,0,0.15)',marginTop:'24px'}}>
        <h2 style={{fontSize:'24px',fontWeight:800,textAlign:'center',margin:'0 0 6px',fontFamily:"'Outfit'"}}>Welcome Back</h2>
        <p style={{fontSize:'13px',color:'var(--text-tertiary)',textAlign:'center',margin:'0 0 28px',lineHeight:1.5}}>Sign in to continue your journey</p>

        <div style={{display:'flex',flexDirection:'column',gap:'14px',marginBottom:'20px'}}>
          <input type="text" placeholder="Email or Mobile" style={{width:'100%',padding:'16px 20px',borderRadius:'var(--radius-lg)',border:'1.5px solid var(--border-primary)',background:'var(--bg-input)',color:'var(--text-primary)',fontSize:'15px',outline:'none',fontFamily:"'Inter'",transition:'border 150ms'}}
            onFocus={e=>e.target.style.borderColor='var(--primary)'} onBlur={e=>e.target.style.borderColor='var(--border-primary)'}/>
          <div style={{position:'relative'}}>
            <input type={showPassword?'text':'password'} placeholder="Password" style={{width:'100%',padding:'16px 52px 16px 20px',borderRadius:'var(--radius-lg)',border:'1.5px solid var(--border-primary)',background:'var(--bg-input)',color:'var(--text-primary)',fontSize:'15px',outline:'none',fontFamily:"'Inter'",transition:'border 150ms'}}
              onFocus={e=>e.target.style.borderColor='var(--primary)'} onBlur={e=>e.target.style.borderColor='var(--border-primary)'}/>
            <div onClick={()=>setShowPassword(!showPassword)} style={{position:'absolute',right:'16px',top:'50%',transform:'translateY(-50%)',cursor:'pointer',color:'var(--text-tertiary)',display:'flex'}}>
              {showPassword?<EyeOff size={20}/>:<Eye size={20}/>}
            </div>
          </div>
        </div>

        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'24px'}}>
          <label style={{display:'flex',alignItems:'center',gap:'8px',cursor:'pointer'}}>
            <div onClick={()=>setRememberMe(!rememberMe)} style={{width:'20px',height:'20px',borderRadius:'6px',border:rememberMe?'none':'2px solid var(--text-tertiary)',background:rememberMe?'var(--primary)':'transparent',display:'flex',alignItems:'center',justifyContent:'center',transition:'all 150ms',cursor:'pointer'}}>
              {rememberMe&&<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
            </div>
            <span style={{fontSize:'13px',color:'var(--text-secondary)',fontWeight:500}}>Remember me</span>
          </label>
          <span onClick={()=>nav('/forgot')} style={{fontSize:'13px',color:'var(--primary)',fontWeight:600,cursor:'pointer'}}>Forgot password?</span>
        </div>

        <Button variant="primary" onClick={handleLogin} size="lg" style={{marginBottom:'24px'}}>Log In</Button>

        <div style={{display:'flex',alignItems:'center',margin:'0 0 24px'}}>
          <div style={{flex:1,height:'1px',background:'var(--border-primary)'}}/>
          <span style={{padding:'0 16px',fontSize:'12px',color:'var(--text-tertiary)',fontWeight:500}}>or sign in with</span>
          <div style={{flex:1,height:'1px',background:'var(--border-primary)'}}/>
        </div>

        <div style={{display:'flex',justifyContent:'center',gap:'16px',marginBottom:'24px'}}>
          {[
            {label:'G',color:'#DB4437'},
            {label:'f',color:'#1877F2'},
            {label:'',color:'#000',svg:true},
          ].map((s,i)=>(
            <button key={i} style={{width:'56px',height:'56px',borderRadius:'var(--radius-lg)',background:'var(--bg-card)',border:'1.5px solid var(--border-primary)',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',transition:'all 150ms',boxShadow:'var(--shadow-sm)'}}
              onMouseOver={e=>e.currentTarget.style.borderColor='var(--primary)'} onMouseOut={e=>e.currentTarget.style.borderColor='var(--border-primary)'}>
              {s.svg?<svg width="22" height="22" viewBox="0 0 24 24" fill={s.color}><path d="M17.05 20.28c-1.15.69-2.53 1.09-4.05 1.09C8.58 21.37 5.15 18.83 3.91 15.25c-.37-1.06-.57-2.2-.57-3.38 0-1.18.2-2.32.57-3.38C5.15 5.04 8.58 2.5 13 2.5c2.4 0 4.36.83 5.84 2.15l-2.51 2.51C15.39 6.3 14.27 5.82 13 5.82c-2.69 0-4.95 1.81-5.76 4.24-.21.63-.33 1.3-.33 2-.93 0-.33-.63-.33-1.3-.21-.63.33-1.3.33-2-.93 0-4.95 1.81-5.76 4.24.21.63.33 1.3.33 2s-.12 1.37-.33 2c.81 2.44 3.07 4.24 5.76 4.24 1.08 0 2.02-.25 2.79-.68 1.01-.56 1.74-1.43 2.07-2.47H13v-3.21h8.35c.12.64.18 1.32.18 2.03 0 3.03-1.08 5.58-2.96 7.28z"/></svg>
              :<span style={{fontSize:'24px',fontWeight:800,color:s.color,fontFamily:"'Outfit'"}}>{s.label}</span>}
            </button>
          ))}
        </div>

        <div style={{textAlign:'center',marginTop:'auto'}}>
          <span style={{fontSize:'14px',color:'var(--text-secondary)'}}>Don't have an account? <span onClick={()=>nav('/register')} style={{color:'var(--primary)',fontWeight:700,cursor:'pointer'}}>Sign Up</span></span>
        </div>
      </div>
    </div>
  );
}
