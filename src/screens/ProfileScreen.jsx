import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, IdCard, Users, Settings, LogOut, FileText, ChevronRight, Shield, Bell, Moon, HelpCircle } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function ProfileScreen() {
  const nav = useNavigate();

  const sections = [
    { title: 'Account', items: [
      { icon: <IdCard size={20} color="var(--accent)"/>, title: 'Aadhaar Verification', status: 'Verified', statusColor: 'var(--success)' },
      { icon: <Users size={20} color="var(--primary)"/>, title: 'Master Passenger List', status: '4 Saved' },
      { icon: <Shield size={20} color="var(--success)"/>, title: 'Travel Insurance', status: 'Active' },
    ]},
    { title: 'Preferences', items: [
      { icon: <Bell size={20} color="#F43F5E"/>, title: 'Notifications' },
      { icon: <Moon size={20} color="#8B5CF6"/>, title: 'Appearance' },
      { icon: <Settings size={20} color="var(--text-secondary)"/>, title: 'App Settings' },
    ]},
    { title: 'Support', items: [
      { icon: <HelpCircle size={20} color="#06B6D4"/>, title: 'Help & FAQ' },
      { icon: <FileText size={20} color="var(--text-secondary)"/>, title: 'Terms & Conditions' },
    ]},
  ];

  return (
    <div className="has-sidebar">
    <div className="screen-wrapper" style={{paddingBottom:'90px'}}>
      <div className="flex-row items-center gap-3 mb-6">
        <button onClick={()=>nav('/dashboard')} className="icon-btn"><ArrowLeft size={20}/></button>
        <h2 style={{fontSize:'18px',fontWeight:700,margin:0}}>Profile</h2>
      </div>

      {/* Avatar */}
      <div className="flex-col items-center mb-8">
        <div style={{width:'80px',height:'80px',borderRadius:'50%',padding:'3px',background:'var(--gradient-primary)',marginBottom:'12px',boxShadow:'0 4px 20px var(--primary-glow)'}}>
          <img src="https://ui-avatars.com/api/?name=Arjun+K&background=6366F1&color=FFF&size=200" alt="Profile" style={{width:'100%',height:'100%',borderRadius:'50%',border:'3px solid var(--bg-primary)'}}/>
        </div>
        <h2 style={{fontSize:'20px',fontWeight:700,margin:'0 0 4px'}}>Arjun K.</h2>
        <span style={{fontSize:'13px',color:'var(--text-tertiary)'}}>+91 9876543210</span>
        <span className="badge badge-primary" style={{marginTop:'8px'}}>Premium Member</span>
      </div>

      {sections.map(section=>(
        <div key={section.title} className="mb-6">
          <span style={{fontSize:'12px',fontWeight:650,color:'var(--text-tertiary)',textTransform:'uppercase',letterSpacing:'0.5px',marginBottom:'12px',display:'block',paddingLeft:'4px'}}>{section.title}</span>
          <div className="glass-card" style={{padding:0,overflow:'hidden'}}>
            {section.items.map((item,i)=>(
              <div key={item.title} style={{padding:'14px 16px',display:'flex',alignItems:'center',gap:'14px',cursor:'pointer',borderBottom:i<section.items.length-1?'1px solid var(--border-subtle)':'none',transition:'background 150ms'}}
                onMouseOver={e=>e.currentTarget.style.background='var(--bg-input)'} onMouseOut={e=>e.currentTarget.style.background='transparent'}>
                <div style={{width:'40px',height:'40px',borderRadius:'var(--radius-md)',background:'var(--bg-input)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>{item.icon}</div>
                <span style={{flex:1,fontSize:'14px',fontWeight:600}}>{item.title}</span>
                <div className="flex-row items-center gap-2">
                  {item.status&&<span style={{fontSize:'11px',color:item.statusColor||'var(--text-tertiary)',fontWeight:600}}>{item.status}</span>}
                  <ChevronRight size={16} color="var(--text-tertiary)"/>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <button onClick={()=>nav('/login')} style={{width:'100%',padding:'14px',display:'flex',alignItems:'center',justifyContent:'center',gap:'8px',borderRadius:'var(--radius-lg)',background:'var(--error-bg)',border:'none',color:'var(--error)',fontWeight:650,fontSize:'14px',cursor:'pointer',fontFamily:"'Inter'"}}>
        <LogOut size={18}/>Logout
      </button>
      <BottomNav active="profile"/>
    </div>
    </div>
  );
}
