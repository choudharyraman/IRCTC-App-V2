import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, ArrowUpDown, Search, MapPin, Calendar, Clock,
  ChevronRight, X, Train, Sparkles
} from 'lucide-react';
import Button from '../components/Button';

const STATIONS = [
  { code: 'NDLS', name: 'New Delhi', full: 'New Delhi Railway Station' },
  { code: 'MMCT', name: 'Mumbai Central', full: 'Mumbai Central Terminus' },
  { code: 'HWH', name: 'Howrah', full: 'Howrah Junction' },
  { code: 'MAS', name: 'Chennai', full: 'Chennai Central' },
  { code: 'SBC', name: 'Bengaluru', full: 'KSR Bengaluru City Junction' },
  { code: 'JP', name: 'Jaipur', full: 'Jaipur Junction' },
  { code: 'LKO', name: 'Lucknow', full: 'Lucknow Charbagh' },
  { code: 'ADI', name: 'Ahmedabad', full: 'Ahmedabad Junction' },
  { code: 'PNBE', name: 'Patna', full: 'Patna Junction' },
  { code: 'HYB', name: 'Hyderabad', full: 'Hyderabad Deccan' },
  { code: 'BPL', name: 'Bhopal', full: 'Bhopal Junction' },
  { code: 'ST', name: 'Surat', full: 'Surat Railway Station' },
  { code: 'PUNE', name: 'Pune', full: 'Pune Junction' },
  { code: 'CNB', name: 'Kanpur', full: 'Kanpur Central' },
  { code: 'BBS', name: 'Bhubaneswar', full: 'Bhubaneswar Railway Station' },
  { code: 'GKP', name: 'Gorakhpur', full: 'Gorakhpur Junction' },
  { code: 'CDG', name: 'Chandigarh', full: 'Chandigarh Junction' },
  { code: 'KGP', name: 'Kharagpur', full: 'Kharagpur Junction' },
];

const CLASSES = [
  { code: '1A', name: 'First AC', color: '#8B5CF6' },
  { code: '2A', name: 'Second AC', color: '#6366F1' },
  { code: '3A', name: 'Third AC', color: '#3B82F6' },
  { code: '3E', name: 'AC 3 Economy', color: '#06B6D4' },
  { code: 'SL', name: 'Sleeper', color: '#10B981' },
  { code: 'CC', name: 'Chair Car', color: '#F59E0B' },
  { code: '2S', name: 'Second Sitting', color: '#EF4444' },
];

const QUOTAS = [
  { code: 'GN', name: 'General' },
  { code: 'TQ', name: 'Tatkal' },
  { code: 'PT', name: 'Premium Tatkal' },
  { code: 'LD', name: 'Ladies' },
  { code: 'HP', name: 'Physically Handicapped' },
  { code: 'DP', name: 'Defence' },
];

export default function SearchScreen() {
  const navigate = useNavigate();
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [selectedClass, setSelectedClass] = useState('3A');
  const [selectedQuota, setSelectedQuota] = useState('GN');
  const [travelDate, setTravelDate] = useState(() => {
    const d = new Date(); d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [stationSearch, setStationSearch] = useState('');
  const [stationPickerFor, setStationPickerFor] = useState(null);

  const filteredStations = STATIONS.filter(s => 
    s.name.toLowerCase().includes(stationSearch.toLowerCase()) ||
    s.code.toLowerCase().includes(stationSearch.toLowerCase()) ||
    s.full.toLowerCase().includes(stationSearch.toLowerCase())
  );

  const swapStations = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const d = new Date(dateStr + 'T00:00:00');
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`;
  };

  const handleSearch = () => {
    if (from && to) {
      navigate('/trains');
    }
  };

  // Station Picker Modal
  if (stationPickerFor) {
    return (
      <div style={{
        position: 'fixed', inset: 0, background: 'var(--bg-primary)',
        zIndex: 1000, display: 'flex', flexDirection: 'column',
        maxWidth: '100%',
      }}>
        {/* Picker Header */}
        <div style={{ padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--border-primary)' }}>
          <button onClick={() => { setStationPickerFor(null); setStationSearch(''); }} className="icon-btn">
            <X size={20} />
          </button>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }} />
            <input
              autoFocus
              value={stationSearch}
              onChange={e => setStationSearch(e.target.value)}
              placeholder={`Search ${stationPickerFor === 'from' ? 'departure' : 'arrival'} station...`}
              style={{
                width: '100%', height: '48px', borderRadius: 'var(--radius-md)',
                background: 'var(--bg-input)', border: '1.5px solid var(--border-primary)',
                padding: '0 16px 0 44px', fontSize: '15px', outline: 'none',
                color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif",
              }}
            />
          </div>
        </div>

        {/* Station List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 16px' }}>
          {filteredStations.map(station => (
            <div
              key={station.code}
              onClick={() => {
                if (stationPickerFor === 'from') setFrom(station);
                else setTo(station);
                setStationPickerFor(null);
                setStationSearch('');
              }}
              style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                padding: '14px 12px', cursor: 'pointer',
                borderRadius: 'var(--radius-md)',
                transition: 'background var(--duration-fast)',
                borderBottom: '1px solid var(--border-subtle)',
              }}
              onMouseOver={e => e.currentTarget.style.background = 'var(--bg-input)'}
              onMouseOut={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{
                width: '40px', height: '40px', borderRadius: 'var(--radius-md)',
                background: 'var(--primary-glow)', display: 'flex',
                alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Train size={18} color="var(--primary)" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '15px', fontWeight: 600 }}>{station.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>{station.full}</div>
              </div>
              <span style={{
                fontSize: '13px', fontWeight: 700, color: 'var(--primary)',
                background: 'var(--primary-glow)', padding: '4px 10px',
                borderRadius: 'var(--radius-sm)', letterSpacing: '0.5px',
              }}>
                {station.code}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="screen-wrapper" style={{ paddingBottom: '100px' }}>
      {/* Header */}
      <div className="flex-row items-center gap-3 mb-6">
        <button onClick={() => navigate('/dashboard')} className="icon-btn">
          <ArrowLeft size={20} />
        </button>
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 700, margin: 0 }}>Search Trains</h2>
          <span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>Find & book your journey</span>
        </div>
      </div>

      {/* Station Selection Card */}
      <div className="glass-card" style={{ padding: '20px', marginBottom: '16px', position: 'relative' }}>
        {/* From Station */}
        <div 
          onClick={() => setStationPickerFor('from')}
          style={{ cursor: 'pointer', padding: '12px', borderRadius: 'var(--radius-md)', marginBottom: '8px', background: 'var(--bg-input)', border: '1px solid var(--border-subtle)' }}
        >
          <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
            <MapPin size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
            From
          </div>
          {from ? (
            <div>
              <span style={{ fontSize: '18px', fontWeight: 700 }}>{from.code}</span>
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)', marginLeft: '8px' }}>{from.name}</span>
            </div>
          ) : (
            <span style={{ fontSize: '15px', color: 'var(--text-tertiary)' }}>Select departure station</span>
          )}
        </div>

        {/* Swap Button */}
        <div 
          onClick={swapStations}
          style={{
            position: 'absolute', right: '28px', top: '50%', transform: 'translateY(-80%)',
            width: '40px', height: '40px', borderRadius: '50%',
            background: 'var(--gradient-primary)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            boxShadow: '0 4px 16px var(--primary-glow)', zIndex: 2,
            transition: 'transform var(--duration-fast)',
          }}
          onMouseDown={e => e.currentTarget.style.transform = 'translateY(-80%) rotate(180deg)'}
          onMouseUp={e => e.currentTarget.style.transform = 'translateY(-80%) rotate(0deg)'}
        >
          <ArrowUpDown size={18} color="#FFF" />
        </div>

        {/* To Station */}
        <div 
          onClick={() => setStationPickerFor('to')}
          style={{ cursor: 'pointer', padding: '12px', borderRadius: 'var(--radius-md)', background: 'var(--bg-input)', border: '1px solid var(--border-subtle)' }}
        >
          <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
            <MapPin size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
            To
          </div>
          {to ? (
            <div>
              <span style={{ fontSize: '18px', fontWeight: 700 }}>{to.code}</span>
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)', marginLeft: '8px' }}>{to.name}</span>
            </div>
          ) : (
            <span style={{ fontSize: '15px', color: 'var(--text-tertiary)' }}>Select arrival station</span>
          )}
        </div>
      </div>

      {/* Date Picker */}
      <div className="glass-card" style={{ padding: '16px', marginBottom: '16px' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
          <Calendar size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
          Travel Date
        </div>
        <div className="flex-row items-center justify-between">
          <div>
            <span style={{ fontSize: '20px', fontWeight: 700 }}>{formatDate(travelDate)}</span>
          </div>
          <input 
            type="date" 
            value={travelDate}
            onChange={e => setTravelDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            style={{
              background: 'var(--bg-input)', border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-sm)', padding: '8px 12px', fontSize: '13px',
              color: 'var(--text-primary)', outline: 'none', cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
            }}
          />
        </div>
      </div>

      {/* Class Selection */}
      <div className="glass-card" style={{ padding: '16px', marginBottom: '16px' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>
          Travel Class
        </div>
        <div className="flex-row flex-wrap gap-2">
          {CLASSES.map(cls => (
            <div
              key={cls.code}
              onClick={() => setSelectedClass(cls.code)}
              className={`chip ${selectedClass === cls.code ? 'active' : ''}`}
            >
              {cls.code}
            </div>
          ))}
        </div>
      </div>

      {/* Quota Selection */}
      <div className="glass-card" style={{ padding: '16px', marginBottom: '24px' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>
          Quota
        </div>
        <div className="flex-row flex-wrap gap-2">
          {QUOTAS.map(q => (
            <div
              key={q.code}
              onClick={() => setSelectedQuota(q.code)}
              className={`chip ${selectedQuota === q.code ? 'active' : ''}`}
            >
              {q.name}
            </div>
          ))}
        </div>
      </div>

      {/* Search Button */}
      <Button 
        variant="primary" 
        onClick={handleSearch}
        icon={<Search size={20} />}
        size="lg"
        style={{ marginBottom: '24px' }}
      >
        Search Trains
      </Button>

      {/* Recent Searches */}
      <div>
        <div className="flex-row items-center justify-between mb-3">
          <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-secondary)' }}>Recent Searches</span>
          <span style={{ fontSize: '12px', color: 'var(--primary)', cursor: 'pointer', fontWeight: 600 }}>Clear All</span>
        </div>
        
        <div className="flex-col gap-2 stagger">
          {[
            { from: 'NDLS', to: 'MMCT', date: 'Mon, 28 Apr', cls: '3A' },
            { from: 'HWH', to: 'NDLS', date: 'Tue, 29 Apr', cls: 'SL' },
          ].map((search, i) => (
            <div 
              key={i}
              onClick={() => navigate('/trains')}
              className="glass-card glass-card-interactive"
              style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}
            >
              <div style={{
                width: '36px', height: '36px', borderRadius: 'var(--radius-sm)',
                background: 'var(--accent-glow)', display: 'flex',
                alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Clock size={16} color="var(--accent)" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: 600 }}>{search.from} → {search.to}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>{search.date} • {search.cls}</div>
              </div>
              <ChevronRight size={16} color="var(--text-tertiary)" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
