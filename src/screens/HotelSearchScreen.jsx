import React from 'react';
import { ArrowLeft, MapPin, Calendar, Users, Search, Star, Map } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HotelSearchScreen() {
  const nav = useNavigate();

  return (
    <div className="app-container">
      <div className="screen-wrapper" style={{ paddingBottom: '100px' }}>
        
        {/* Header */}
        <div className="flex-row items-center justify-between mb-8">
          <div className="flex-row items-center gap-4">
            <button onClick={() => nav(-1)} className="icon-btn">
              <ArrowLeft size={20} />
            </button>
            <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>Find Hotels</h2>
          </div>
          <button style={{
            display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px',
            borderRadius: 'var(--radius-full)', background: 'var(--bg-secondary)', border: 'none',
            fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--primary)'
          }}>
            <Map size={14} /> View Map
          </button>
        </div>

        {/* Search Card */}
        <div className="premium-card mb-8" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Destination */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '16px', padding: '16px',
            border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-lg)',
            background: 'var(--bg-secondary)'
          }}>
            <MapPin size={24} color="var(--primary)" />
            <div className="flex-col">
              <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>City, Property, or Location</span>
              <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', marginTop: '2px' }}>Mumbai, India</span>
            </div>
          </div>

          {/* Dates Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px', padding: '16px',
              border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-lg)',
              background: 'var(--bg-secondary)'
            }}>
              <Calendar size={20} color="var(--text-secondary)" />
              <div className="flex-col">
                <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>Check-In</span>
                <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>14 Oct 26</span>
              </div>
            </div>
            
            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px', padding: '16px',
              border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-lg)',
              background: 'var(--bg-secondary)'
            }}>
              <Calendar size={20} color="var(--text-secondary)" />
              <div className="flex-col">
                <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>Check-Out</span>
                <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>16 Oct 26</span>
              </div>
            </div>
          </div>

          {/* Guests & Rooms */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '16px', padding: '16px',
            border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-lg)',
            background: 'var(--bg-secondary)'
          }}>
            <Users size={24} color="var(--text-secondary)" />
            <div className="flex-col">
              <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase' }}>Guests & Rooms</span>
              <span style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-primary)', marginTop: '2px' }}>2 Guests • 1 Room</span>
            </div>
          </div>

          <button style={{
            width: '100%', padding: '18px', borderRadius: 'var(--radius-full)', border: 'none',
            background: 'var(--primary)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            fontSize: '16px', fontWeight: 800, cursor: 'pointer', boxShadow: '0 8px 24px var(--primary-glow)', letterSpacing: '0.5px'
          }}>
            <Search size={20} />
            SEARCH HOTELS
          </button>
        </div>

        {/* Popular Destinations */}
        <div>
          <h3 style={{ fontSize: 'var(--text-md)', fontWeight: 800, margin: '0 0 16px 0', color: 'var(--text-primary)' }}>Popular Destinations</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {['Goa', 'Udaipur', 'Jaipur', 'Shimla'].map(city => (
              <div key={city} style={{
                height: '120px', borderRadius: 'var(--radius-lg)', background: 'var(--border-primary)', position: 'relative', overflow: 'hidden'
              }}>
                <img src={`https://source.unsplash.com/random/400x300/?${city},india,architecture`} alt={city} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />
                <div style={{ position: 'absolute', bottom: '12px', left: '12px', color: '#FFF' }}>
                  <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 800 }}>{city}</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', marginTop: '2px' }}>
                    <Star size={10} fill="#FCD34D" color="#FCD34D" /> 4.5+ Rating
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
