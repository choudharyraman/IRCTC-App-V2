import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, SlidersHorizontal, X, Train } from 'lucide-react';
import Button from '../components/Button';

const TRAINS = [
  { id:'12951',name:'Mumbai Rajdhani',type:'Rajdhani',from:'MMCT',to:'NDLS',dep:'17:00',arr:'08:32',dur:'15h 32m',days:'Daily',
    classes:[{type:'3A',st:'AVL',s:42,p:2735,c:'var(--success)'},{type:'2A',st:'WL',s:-12,p:3825,c:'var(--warning)'},{type:'1A',st:'RAC',s:4,p:4765,c:'var(--accent)'}]},
  { id:'12903',name:'Golden Temple Mail',type:'SF Express',from:'MMCT',to:'NDLS',dep:'21:25',arr:'13:50',dur:'16h 25m',days:'Daily',
    classes:[{type:'SL',st:'AVL',s:104,p:670,c:'var(--success)'},{type:'3A',st:'AVL',s:18,p:1765,c:'var(--success)'},{type:'2A',st:'WL',s:-45,p:2530,c:'var(--warning)'}]},
  { id:'12953',name:'August Kranti Raj',type:'Rajdhani',from:'MMCT',to:'NDLS',dep:'17:35',arr:'10:55',dur:'17h 20m',days:'Mon,Wed,Fri',
    classes:[{type:'3A',st:'AVL',s:8,p:2735,c:'var(--success)'},{type:'2A',st:'AVL',s:3,p:3825,c:'var(--success)'}]},
  { id:'22209',name:'Duronto Express',type:'Duronto',from:'MMCT',to:'NDLS',dep:'23:05',arr:'16:20',dur:'17h 15m',days:'Tue,Thu,Sat',
    classes:[{type:'SL',st:'AVL',s:56,p:790,c:'var(--success)'},{type:'3A',st:'RAC',s:2,p:1990,c:'var(--accent)'}]},
];

const DATES = [{day:'Today',date:'29 Apr',k:'d0'},{day:'Tomorrow',date:'30 Apr',k:'d1'},{day:'Thu',date:'1 May',k:'d2'},{day:'Fri',date:'2 May',k:'d3'},{day:'Sat',date:'3 May',k:'d4'}];

export default function TrainListScreen() {
  const nav = useNavigate();
  const [filters, setFilters] = useState(false);
  const [dateKey, setDateKey] = useState('d1');
  const [sortBy, setSortBy] = useState('departure');

  return (
    <div className="screen-wrapper" style={{ paddingBottom: '24px', padding: 0 }}>
      <div style={{ position:'sticky',top:0,zIndex:50,background:'var(--bg-primary)',borderBottom:'1px solid var(--border-primary)',padding:'16px 16px 0' }}>
        <div className="flex-row items-center justify-between mb-4">
          <div className="flex-row items-center gap-3">
            <button onClick={()=>nav('/dashboard')} className="icon-btn"><ArrowLeft size={20}/></button>
            <div><h2 style={{fontSize:'16px',margin:0,fontWeight:700}}>Mumbai → New Delhi</h2><span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>3A • General Quota</span></div>
          </div>
          <button onClick={()=>setFilters(true)} className="icon-btn"><SlidersHorizontal size={18} color="var(--primary)"/></button>
        </div>
        <div className="flex-row gap-2 hide-scrollbar" style={{overflowX:'auto',paddingBottom:'12px'}}>
          {DATES.map(d=>(
            <div key={d.k} onClick={()=>setDateKey(d.k)} style={{minWidth:'72px',padding:'8px 12px',borderRadius:'var(--radius-md)',display:'flex',flexDirection:'column',alignItems:'center',gap:'2px',cursor:'pointer',flexShrink:0,background:dateKey===d.k?'var(--primary)':'transparent',color:dateKey===d.k?'#FFF':'var(--text-secondary)',transition:'all 150ms',border:dateKey===d.k?'none':'1px solid var(--border-subtle)'}}>
              <span style={{fontSize:'10px',fontWeight:600,opacity:0.8}}>{d.day}</span>
              <span style={{fontSize:'13px',fontWeight:700}}>{d.date}</span>
            </div>
          ))}
        </div>
        <div className="flex-row gap-2 hide-scrollbar" style={{overflowX:'auto',paddingBottom:'12px'}}>
          {['departure','duration','price','availability'].map(s=>(
            <div key={s} onClick={()=>setSortBy(s)} style={{padding:'6px 14px',borderRadius:'var(--radius-full)',fontSize:'11px',fontWeight:sortBy===s?650:500,cursor:'pointer',whiteSpace:'nowrap',flexShrink:0,background:sortBy===s?'var(--primary-glow)':'transparent',color:sortBy===s?'var(--primary)':'var(--text-tertiary)',border:`1px solid ${sortBy===s?'var(--primary)':'var(--border-subtle)'}`,textTransform:'capitalize'}}>{s}</div>
          ))}
        </div>
      </div>

      <div style={{padding:'12px 16px 0'}}><span style={{fontSize:'12px',color:'var(--text-tertiary)'}}>{TRAINS.length} trains found</span></div>

      <div className="flex-col gap-3 stagger" style={{padding:'12px 16px'}}>
        {TRAINS.map(t=><TCard key={t.id} t={t} nav={nav}/>)}
      </div>

      {filters&&(
        <div style={{position:'fixed',inset:0,background:'var(--bg-overlay)',zIndex:1000,display:'flex',flexDirection:'column',justifyContent:'flex-end',alignItems:'center',animation:'fadeIn 0.2s'}} onClick={()=>setFilters(false)}>
          <div onClick={e=>e.stopPropagation()} style={{width:'100%',maxWidth:'480px',background:'var(--bg-primary)',borderRadius:'var(--radius-2xl) var(--radius-2xl) 0 0',padding:'24px',maxHeight:'75vh',overflowY:'auto',animation:'slideUp 0.3s var(--ease-spring)'}}>
            <div className="flex-row items-center justify-between mb-6">
              <h3 style={{fontSize:'18px',fontWeight:700,margin:0}}>Filters</h3>
              <button onClick={()=>setFilters(false)} className="icon-btn"><X size={18}/></button>
            </div>
            {[{l:'Class',items:['1A','2A','3A','3E','SL','CC'],a:'3A'},{l:'Quota',items:['General','Tatkal','Ladies'],a:'General'},{l:'Departure',items:['Morning','Afternoon','Evening','Night'],a:'Evening'},{l:'Type',items:['Rajdhani','Shatabdi','Duronto','Superfast'],a:null}].map(section=>(
              <div key={section.l} className="mb-5">
                <span style={{fontSize:'13px',fontWeight:600,color:'var(--text-secondary)',marginBottom:'12px',display:'block'}}>{section.l}</span>
                <div className="flex-row flex-wrap gap-2">
                  {section.items.map(i=><div key={i} className={`chip ${i===section.a?'active':''}`}>{i}</div>)}
                </div>
              </div>
            ))}
            <Button variant="primary" onClick={()=>setFilters(false)}>Apply Filters</Button>
          </div>
        </div>
      )}
    </div>
  );
}

function TCard({t,nav}){
  const stLabel=(cls)=>cls.st==='AVL'?`AVL ${cls.s}`:cls.st==='RAC'?`RAC ${cls.s}`:`WL ${Math.abs(cls.s)}`;
  return(
    <div className="glass-card" style={{padding:0,overflow:'hidden'}}>
      <div style={{padding:'16px 16px 12px'}}>
        <div className="flex-row items-center justify-between mb-1">
          <div className="flex-row items-center gap-2">
            <span style={{fontSize:'14px',fontWeight:700}}>{t.name}</span>
            <span className="badge badge-info" style={{fontSize:'9px'}}>{t.type}</span>
          </div>
          <span style={{fontSize:'11px',color:'var(--text-tertiary)',fontWeight:600}}>#{t.id}</span>
        </div>
        <span style={{fontSize:'10px',color:'var(--text-tertiary)'}}>Runs: {t.days}</span>
      </div>
      <div style={{padding:'0 16px 16px'}}>
        <div className="flex-row items-center">
          <div style={{minWidth:'60px'}}><span style={{fontSize:'20px',fontWeight:800,fontFamily:"'Outfit'"}}>{t.dep}</span><br/><span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>{t.from}</span></div>
          <div className="flex-col items-center flex-1" style={{padding:'0 8px'}}>
            <span style={{fontSize:'10px',color:'var(--text-tertiary)'}}>{t.dur}</span>
            <div style={{width:'100%',height:'1px',background:'var(--border-primary)',margin:'6px 0',position:'relative'}}>
              <div style={{position:'absolute',left:'50%',top:'-4px',transform:'translateX(-50%)',width:'8px',height:'8px',borderRadius:'50%',border:'2px solid var(--primary)',background:'var(--bg-primary)'}}/>
            </div>
          </div>
          <div style={{minWidth:'60px',textAlign:'right'}}><span style={{fontSize:'20px',fontWeight:800,fontFamily:"'Outfit'"}}>{t.arr}</span><br/><span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>{t.to}</span></div>
        </div>
      </div>
      <div style={{padding:'12px 16px',borderTop:'1px solid var(--border-subtle)',display:'flex',gap:'8px',overflowX:'auto'}} className="hide-scrollbar">
        {t.classes.map((cls,i)=>(
          <div key={i} onClick={()=>nav('/book')} style={{minWidth:'110px',padding:'10px 14px',borderRadius:'var(--radius-md)',background:'var(--bg-input)',border:'1px solid var(--border-subtle)',cursor:'pointer',flexShrink:0,transition:'all 150ms'}}
            onMouseOver={e=>{e.currentTarget.style.borderColor='var(--primary)';e.currentTarget.style.background='var(--primary-glow)'}}
            onMouseOut={e=>{e.currentTarget.style.borderColor='var(--border-subtle)';e.currentTarget.style.background='var(--bg-input)'}}>
            <div className="flex-row items-center justify-between mb-1">
              <span style={{fontSize:'14px',fontWeight:700}}>{cls.type}</span>
              <span style={{fontSize:'13px',fontWeight:700}}>₹{cls.p.toLocaleString()}</span>
            </div>
            <span style={{fontSize:'11px',fontWeight:650,color:cls.c}}>{stLabel(cls)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
