import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Sparkles, MapPin, Calendar, Wand2, Train, Send, Sun, Sunset, Moon, Coffee, AlertCircle, Loader } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { generateItineraryStream, chatWithAgent } from '../services/geminiAgent';

const INTERESTS = ['Culture', 'Adventure', 'Food', 'Relaxation', 'Shopping', 'Nature'];

export default function AITravelPlannerScreen() {
  const nav = useNavigate();
  const [state, setState] = useState('form'); // 'form' | 'generating' | 'result'
  const [form, setForm] = useState({ destination: '', days: '', budget: 'Moderate', interests: [], origin: '' });
  const [streamText, setStreamText] = useState('');
  const [itinerary, setItinerary] = useState(null);
  const [error, setError] = useState('');
  const [activeDay, setActiveDay] = useState(0);
  const [chat, setChat] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [chat]);

  const toggleInterest = (i) => setForm(f => ({
    ...f, interests: f.interests.includes(i) ? f.interests.filter(x => x !== i) : [...f.interests, i]
  }));

  const handleGenerate = async () => {
    if (!form.destination || !form.days) { setError('Please fill in destination and duration.'); return; }
    setError(''); setState('generating'); setStreamText('');
    try {
      const result = await generateItineraryStream(form, (_, full) => setStreamText(full));
      setItinerary(result);
      setChat([{ role: 'model', content: `I've created your ${result.totalDays}-day ${result.destination} itinerary! Ask me anything to customize it.` }]);
      setState('result');
    } catch (e) {
      if (e.message === 'NO_API_KEY') {
        setError('Please add your Gemini API key to the .env file. Get one free at aistudio.google.com/app/apikey');
      } else if (e.message === 'PARSE_ERROR') {
        setError('AI returned an unexpected format. Please try again.');
      } else {
        setError(`Error: ${e.message}`);
      }
      setState('form');
    }
  };

  const handleChat = async () => {
    if (!chatInput.trim() || chatLoading) return;
    const userMsg = { role: 'user', content: chatInput };
    const context = { role: 'user', content: `Context: The user is planning a trip to ${itinerary?.destination}. Itinerary: ${JSON.stringify(itinerary?.days?.slice(0,2))}. Question: ${chatInput}` };
    setChat(c => [...c, userMsg]);
    setChatInput(''); setChatLoading(true);
    try {
      const reply = await chatWithAgent([...chat, context]);
      setChat(c => [...c, { role: 'model', content: reply }]);
    } catch { setChat(c => [...c, { role: 'model', content: 'Sorry, I had trouble with that. Please try again.' }]); }
    setChatLoading(false);
  };

  const slotIcons = { morning: <Sun size={14} color="#F59E0B" />, afternoon: <Sunset size={14} color="#F97316" />, evening: <Moon size={14} color="#8B5CF6" /> };

  // ── FORM STATE ───────────────────────────────────────────────
  if (state === 'form') return (
    <div className="app-container">
      <div className="screen-wrapper" style={{ paddingBottom: '40px' }}>
        <div className="aurora-orb" style={{ width: '280px', height: '280px', background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)', top: '-60px', right: '-60px' }} />

        <div className="flex-row items-center gap-4 mb-6">
          <button onClick={() => nav(-1)} className="icon-btn"><ArrowLeft size={20} /></button>
          <div className="flex-row items-center gap-2">
            <Sparkles size={20} color="var(--primary)" className="animate-aurora-pulse" />
            <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 800, margin: 0 }}>AI Planner</h2>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="gradient-text" style={{ fontSize: '30px', fontWeight: 900, marginBottom: '10px', fontFamily: "'Outfit'" }}>Where to next?</h1>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>Tell our Gemini AI agent your dream trip — it crafts the perfect itinerary instantly.</p>
        </div>

        <div className="premium-card mb-6" style={{ gap: '20px', display: 'flex', flexDirection: 'column' }}>
          {/* Destination */}
          <div className="flex-col gap-2">
            <label style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Destination *</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', border: '1.5px solid var(--border-primary)', borderRadius: 'var(--radius-lg)', background: 'var(--bg-input)', transition: 'border-color var(--dur-fast)' }}
              onFocusCapture={e => e.currentTarget.style.borderColor = 'var(--primary)'}
              onBlurCapture={e => e.currentTarget.style.borderColor = 'var(--border-primary)'}
            >
              <MapPin size={18} color="var(--primary)" />
              <input type="text" placeholder="e.g. Goa, Manali, Jaipur" value={form.destination}
                onChange={e => setForm(f => ({ ...f, destination: e.target.value }))}
                style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', width: '100%' }} />
            </div>
          </div>

          {/* Origin + Days */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div className="flex-col gap-2">
              <label style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.8px' }}>From City</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 16px', border: '1.5px solid var(--border-primary)', borderRadius: 'var(--radius-lg)', background: 'var(--bg-input)' }}>
                <Train size={16} color="var(--text-tertiary)" />
                <input type="text" placeholder="Delhi" value={form.origin}
                  onChange={e => setForm(f => ({ ...f, origin: e.target.value }))}
                  style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', width: '100%' }} />
              </div>
            </div>
            <div className="flex-col gap-2">
              <label style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Days *</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 16px', border: '1.5px solid var(--border-primary)', borderRadius: 'var(--radius-lg)', background: 'var(--bg-input)' }}>
                <Calendar size={16} color="var(--text-tertiary)" />
                <input type="number" placeholder="5" min="1" max="21" value={form.days}
                  onChange={e => setForm(f => ({ ...f, days: e.target.value }))}
                  style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', width: '100%' }} />
              </div>
            </div>
          </div>

          {/* Budget */}
          <div className="flex-col gap-2">
            <label style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Budget</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['Budget', 'Moderate', 'Luxury'].map(b => (
                <button key={b} onClick={() => setForm(f => ({ ...f, budget: b }))} style={{
                  flex: 1, padding: '11px', borderRadius: 'var(--radius-md)', border: `1.5px solid ${form.budget === b ? 'var(--primary)' : 'var(--border-primary)'}`,
                  background: form.budget === b ? 'var(--primary-glow)' : 'var(--bg-input)',
                  color: form.budget === b ? 'var(--primary)' : 'var(--text-secondary)',
                  fontWeight: 700, fontSize: '13px', cursor: 'pointer', transition: 'all var(--dur-fast)'
                }}>{b}</button>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="flex-col gap-2">
            <label style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Interests</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {INTERESTS.map(i => (
                <button key={i} onClick={() => toggleInterest(i)} style={{
                  padding: '8px 14px', borderRadius: 'var(--radius-full)', border: `1.5px solid ${form.interests.includes(i) ? 'var(--primary)' : 'var(--border-primary)'}`,
                  background: form.interests.includes(i) ? 'var(--primary-glow)' : 'var(--bg-input)',
                  color: form.interests.includes(i) ? 'var(--primary)' : 'var(--text-secondary)',
                  fontSize: '12px', fontWeight: 600, cursor: 'pointer', transition: 'all var(--dur-fast)'
                }}>{form.interests.includes(i) ? '✓ ' : ''}{i}</button>
              ))}
            </div>
          </div>
        </div>

        {error && (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '14px 16px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 'var(--radius-lg)', marginBottom: '16px' }}>
            <AlertCircle size={18} color="var(--error)" style={{ flexShrink: 0, marginTop: '1px' }} />
            <p style={{ fontSize: '13px', color: 'var(--error)', margin: 0, lineHeight: '1.5' }}>{error}</p>
          </div>
        )}

        <button onClick={handleGenerate} className="aurora-card press-scale" style={{
          width: '100%', padding: '18px', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
          fontSize: '15px', fontWeight: 800, color: '#FFF', cursor: 'pointer', boxShadow: 'var(--shadow-aurora)', letterSpacing: '0.8px'
        }}>
          <Wand2 size={20} /> GENERATE WITH AI
        </button>
      </div>
    </div>
  );

  // ── GENERATING STATE ─────────────────────────────────────────
  if (state === 'generating') return (
    <div className="app-container">
      <div className="screen-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div className="aurora-orb" style={{ width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)', top: '10%', right: '-100px' }} />
        <div className="aurora-orb" style={{ width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%)', bottom: '15%', left: '-60px', animationDelay: '4s' }} />

        <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '24px', background: 'var(--aurora-animated)', backgroundSize: '200% 200%', animation: 'aurora-flow 4s ease infinite', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', boxShadow: 'var(--shadow-aurora)' }}>
            <Sparkles size={36} color="#FFF" style={{ animation: 'aurora-pulse 2s ease-in-out infinite' }} />
          </div>
          <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 900, marginBottom: '8px', fontFamily: "'Outfit'" }}>
            Planning your trip<span style={{ animation: 'aurora-pulse 1s ease infinite' }}>...</span>
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '32px' }}>Gemini AI is crafting your perfect {form.days}-day {form.destination} itinerary</p>

          {streamText && (
            <div style={{ maxWidth: '340px', maxHeight: '180px', overflow: 'hidden', background: 'var(--bg-card)', border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-lg)', padding: '16px', textAlign: 'left', position: 'relative' }}>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px', background: 'linear-gradient(transparent, var(--bg-card))', borderRadius: '0 0 var(--radius-lg) var(--radius-lg)' }} />
              <code style={{ fontSize: '11px', color: 'var(--text-tertiary)', lineHeight: '1.6', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                {streamText.slice(-400)}
              </code>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // ── RESULT STATE ─────────────────────────────────────────────
  if (state === 'result' && itinerary) return (
    <div className="app-container">
      <div className="screen-wrapper" style={{ paddingBottom: '40px' }}>

        {/* Header */}
        <div className="flex-row items-center justify-between mb-6">
          <div className="flex-row items-center gap-3">
            <button onClick={() => setState('form')} className="icon-btn"><ArrowLeft size={20} /></button>
            <div>
              <h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 800, margin: 0 }}>{itinerary.destination}</h2>
              <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', margin: 0 }}>{itinerary.totalDays} days · {itinerary.budgetLevel} · {itinerary.estimatedCostPerDay}/day</p>
            </div>
          </div>
          <span className="badge badge-primary">{itinerary.bestTimeToVisit}</span>
        </div>

        {/* Train Info */}
        {itinerary.trainInfo?.recommendedTrain && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', background: 'var(--primary-glow)', border: '1px solid var(--primary)', borderRadius: 'var(--radius-lg)', marginBottom: '20px' }}
            onClick={() => nav('/search')} className="press-scale" style2={{ cursor: 'pointer' }}>
            <Train size={20} color="var(--primary)" />
            <div className="flex-col" style={{ flex: 1 }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary)' }}>{itinerary.trainInfo.recommendedTrain}</span>
              <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{itinerary.trainInfo.duration} · {itinerary.trainInfo.class}</span>
            </div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--primary)' }}>Book →</span>
          </div>
        )}

        {/* Day Tabs */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', scrollbarWidth: 'none', paddingBottom: '4px', marginBottom: '20px' }}>
          {itinerary.days.map((d, i) => (
            <button key={i} onClick={() => setActiveDay(i)} style={{
              padding: '8px 16px', borderRadius: 'var(--radius-full)', border: 'none', flexShrink: 0,
              background: activeDay === i ? 'var(--primary)' : 'var(--bg-card)',
              border: activeDay === i ? 'none' : '1px solid var(--border-primary)',
              color: activeDay === i ? '#FFF' : 'var(--text-secondary)',
              fontWeight: 700, fontSize: '13px', cursor: 'pointer',
              boxShadow: activeDay === i ? 'var(--shadow-aurora)' : 'var(--shadow-sm)',
              transition: 'all var(--dur-fast) var(--ease-spring)'
            }}>Day {d.day}</button>
          ))}
        </div>

        {/* Active Day Card */}
        {itinerary.days[activeDay] && (() => {
          const day = itinerary.days[activeDay];
          return (
            <div className="animate-slide-up">
              <div className="aurora-card mb-4" style={{ padding: '20px' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.8px', margin: '0 0 6px' }}>Day {day.day}</p>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 900, color: '#FFF', margin: '0 0 4px' }}>{day.theme}</h3>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>🏨 {day.stay}</p>
              </div>

              {['morning', 'afternoon', 'evening'].map(slot => day[slot] && (
                <div key={slot} className="premium-card mb-3">
                  <div className="flex-row items-center gap-2 mb-3">
                    {slotIcons[slot]}
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{slot}</span>
                    <span style={{ marginLeft: 'auto', fontSize: '11px', fontWeight: 600, color: 'var(--text-tertiary)' }}>{day[slot].duration}</span>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent)' }}>{day[slot].cost}</span>
                  </div>
                  <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 6px' }}>{day[slot].activity}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{day[slot].description}</p>
                </div>
              ))}

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '8px' }}>
                <div style={{ padding: '14px', background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 'var(--radius-lg)' }}>
                  <div className="flex-row items-center gap-2 mb-2"><Coffee size={14} color="var(--accent)" /><span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase' }}>Local Food</span></div>
                  <p style={{ fontSize: '13px', color: 'var(--text-primary)', margin: 0, fontWeight: 600 }}>{day.localFood}</p>
                </div>
                <div style={{ padding: '14px', background: 'var(--primary-glow)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: 'var(--radius-lg)' }}>
                  <div className="flex-row items-center gap-2 mb-2"><Sparkles size={14} color="var(--primary)" /><span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase' }}>Pro Tip</span></div>
                  <p style={{ fontSize: '13px', color: 'var(--text-primary)', margin: 0, fontWeight: 500 }}>{day.tip}</p>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Chat follow-up */}
        <div className="premium-card mt-4" style={{ padding: '20px' }}>
          <div className="flex-row items-center gap-2 mb-4">
            <Sparkles size={16} color="var(--primary)" />
            <h4 style={{ fontSize: '14px', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>Ask AI to customize</h4>
          </div>
          <div style={{ maxHeight: '200px', overflowY: 'auto', marginBottom: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {chat.map((msg, i) => (
              <div key={i} style={{
                padding: '10px 14px', borderRadius: '14px', maxWidth: '90%', fontSize: '13px', lineHeight: '1.5',
                background: msg.role === 'user' ? 'var(--primary)' : 'var(--bg-input)',
                color: msg.role === 'user' ? '#FFF' : 'var(--text-primary)',
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              }}>{msg.content}</div>
            ))}
            {chatLoading && <div style={{ padding: '10px 14px', borderRadius: '14px', background: 'var(--bg-input)', display: 'flex', gap: '4px', alignSelf: 'flex-start' }}>
              {[0,1,2].map(i => <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--text-tertiary)', animation: `ping-dot 1.2s ease-in-out ${i*0.2}s infinite` }} />)}
            </div>}
            <div ref={chatEndRef} />
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input type="text" value={chatInput} onChange={e => setChatInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleChat()}
              placeholder="Make Day 2 more adventurous..."
              style={{ flex: 1, padding: '12px 16px', borderRadius: 'var(--radius-full)', border: '1.5px solid var(--border-primary)', background: 'var(--bg-input)', color: 'var(--text-primary)', fontSize: '14px', outline: 'none' }} />
            <button onClick={handleChat} disabled={chatLoading} style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--primary)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
              {chatLoading ? <Loader size={18} color="#FFF" style={{ animation: 'spin 1s linear infinite' }} /> : <Send size={18} color="#FFF" />}
            </button>
          </div>
        </div>

      </div>
    </div>
  );

  return null;
}
