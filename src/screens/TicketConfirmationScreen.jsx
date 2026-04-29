import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Download, Share2, Home, Train } from 'lucide-react';
import Button from '../components/Button';

export default function TicketConfirmationScreen() {
  const nav = useNavigate();

  return (
    <div className="screen-wrapper" style={{paddingBottom:'24px'}}>
      {/* Success Header */}
      <div className="flex-col items-center text-center mb-6" style={{paddingTop:'16px',animation:'scaleIn 0.4s var(--ease-spring)'}}>
        <div style={{width:'72px',height:'72px',borderRadius:'50%',background:'var(--gradient-success)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'16px',boxShadow:'0 8px 32px rgba(16,185,129,0.3)',animation:'glow 2s infinite'}}>
          <CheckCircle size={36} color="#FFF"/>
        </div>
        <h1 style={{fontSize:'24px',fontWeight:800,margin:'0 0 6px 0',fontFamily:"'Outfit'"}}>Booking Confirmed!</h1>
        <span style={{fontSize:'13px',color:'var(--text-tertiary)'}}>E-ticket sent to your email & SMS</span>
      </div>

      {/* Ticket Card */}
      <div className="glass-card mb-6" style={{padding:0,overflow:'hidden',position:'relative'}}>
        {/* Top gradient strip */}
        <div style={{height:'4px',background:'var(--gradient-primary)'}}/>
        
        <div style={{padding:'20px'}}>
          <div className="flex-row justify-between mb-4">
            <div><span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>PNR Number</span><br/><span style={{fontSize:'20px',fontWeight:800,fontFamily:"'Outfit'",letterSpacing:'1px'}}>8234567890</span></div>
            <div style={{textAlign:'right'}}><span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>Train</span><br/><span style={{fontSize:'15px',fontWeight:700}}>12951 • 3A</span></div>
          </div>

          <div className="flex-row items-center justify-between mb-4">
            <div><h3 style={{fontSize:'24px',fontWeight:800,margin:0,fontFamily:"'Outfit'"}}>MMCT</h3><span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>17:00 • 24 Mar</span></div>
            <div className="flex-col items-center flex-1" style={{padding:'0 8px'}}>
              <Train size={16} color="var(--primary)"/>
              <div style={{width:'100%',height:'2px',background:'var(--gradient-primary)',borderRadius:'1px',margin:'4px 0'}}/>
              <span style={{fontSize:'9px',color:'var(--text-tertiary)'}}>15h 32m</span>
            </div>
            <div style={{textAlign:'right'}}><h3 style={{fontSize:'24px',fontWeight:800,margin:0,fontFamily:"'Outfit'"}}>NDLS</h3><span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>08:32 • 25 Mar</span></div>
          </div>
        </div>

        {/* Cutout divider */}
        <div style={{position:'relative',height:'1px'}}>
          <div style={{position:'absolute',left:0,right:0,borderTop:'2px dashed var(--border-primary)'}}/>
          <div style={{position:'absolute',left:'-12px',top:'-12px',width:'24px',height:'24px',borderRadius:'50%',background:'var(--bg-primary)'}}/>
          <div style={{position:'absolute',right:'-12px',top:'-12px',width:'24px',height:'24px',borderRadius:'50%',background:'var(--bg-primary)'}}/>
        </div>

        <div style={{padding:'20px'}}>
          <div className="flex-row justify-between items-center mb-4">
            <div><span style={{fontSize:'15px',fontWeight:600}}>Raman Choudhary</span><br/><span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>28 yrs • Male</span><br/><span style={{fontSize:'12px',fontWeight:700,color:'var(--success)'}}>Confirmed</span></div>
            <div style={{textAlign:'right'}}><span style={{fontSize:'11px',color:'var(--text-tertiary)'}}>Coach/Seat</span><br/><span style={{fontSize:'22px',fontWeight:800,color:'var(--primary)',fontFamily:"'Outfit'"}}>B1-42</span></div>
          </div>

          {/* QR Code */}
          <div className="flex-row justify-center">
            <div style={{width:'120px',height:'120px',background:'#FFF',padding:'12px',borderRadius:'var(--radius-md)',boxShadow:'var(--shadow-sm)'}}>
              <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:'2px',width:'100%',height:'100%'}}>
                {Array.from({length:49}).map((_,i)=><div key={i} style={{background:(i%2===0||i%3===0||i%5===0)?'#0F172A':'#FFF',borderRadius:'1px'}}/>)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex-row gap-3 mb-4">
        <Button variant="secondary" fullWidth icon={<Download size={18}/>}>Save Ticket</Button>
        <Button variant="secondary" fullWidth icon={<Share2 size={18}/>}>Share</Button>
      </div>

      <Button variant="ghost" onClick={()=>nav('/dashboard')} icon={<Home size={18}/>}>
        Return to Home
      </Button>
    </div>
  );
}
