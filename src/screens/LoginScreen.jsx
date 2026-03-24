import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import { Train, User, Lock, Mail, Moon, Sun } from 'lucide-react';

export default function LoginScreen() {
  const navigate = useNavigate();
  const [authType, setAuthType] = useState('phone');
  const [theme, setTheme] = useState(document.body.getAttribute('data-theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="flex-col" style={{ minHeight: '100vh', padding: '2rem', position: 'relative' }}>
      
      {/* Theme Toggle Absolute */}
      <button 
         onClick={toggleTheme} 
         className="neuro-card"
         style={{ position: 'absolute', top: '2rem', right: '2rem', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer', zIndex: 100 }}
      >
         {theme === 'light' ? <Moon size={20} color="var(--accent-navy)" /> : <Sun size={20} color="var(--accent-saffron)" />}
      </button>

      {/* Hero Section */}
      <div className="flex-col items-center" style={{ marginTop: '4rem', marginBottom: '3rem', animation: 'slideUp 0.6s ease-out' }}>
        <div className="neuro-card" style={{ width: '88px', height: '88px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '24px' }}>
          <Train size={44} className="text-navy" />
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>RailOne Pro</h1>
        <p className="text-light" style={{ textAlign: 'center', fontSize: '1rem', margin: 0, fontWeight: 500 }}>Next-Gen Railway Ecosystem</p>
      </div>

      {/* Login Glass Panel */}
      <div className="neuro-card" style={{ padding: '2rem', animation: 'slideUp 0.4s ease-out 0.1s both' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 700, textAlign: 'center' }}>Welcome Back</h2>
        
        {/* Toggle Login Type */}
        <div className="flex-row justify-between" style={{ background: 'rgba(0,0,0,0.05)', padding: '0.35rem', borderRadius: '14px', marginBottom: '1.5rem', border: '1px solid var(--glass-border)' }}>
          <button 
            style={{ 
               width: '50%', padding: '0.75rem', fontSize: '0.9rem', fontWeight: 600, border: 'none', borderRadius: '10px', transition: 'all 0.2s ease', cursor: 'pointer',
               background: authType === 'phone' ? 'var(--glass-bg)' : 'transparent', 
               color: authType === 'phone' ? 'var(--text-primary)' : 'var(--text-secondary)',
               boxShadow: authType === 'phone' ? 'var(--glass-shadow)' : 'none' 
            }}
            onClick={() => setAuthType('phone')}
          >
            Mobile No.
          </button>
          <button 
            style={{ 
               width: '50%', padding: '0.75rem', fontSize: '0.9rem', fontWeight: 600, border: 'none', borderRadius: '10px', transition: 'all 0.2s ease', cursor: 'pointer',
               background: authType === 'email' ? 'var(--glass-bg)' : 'transparent', 
               color: authType === 'email' ? 'var(--text-primary)' : 'var(--text-secondary)',
               boxShadow: authType === 'email' ? 'var(--glass-shadow)' : 'none' 
            }}
            onClick={() => setAuthType('email')}
          >
            Email ID
          </button>
        </div>

        <form onSubmit={handleLogin} className="flex-col gap-4">
          {authType === 'phone' ? (
            <Input type="tel" placeholder="Enter Mobile Number" icon={<User size={18} />} />
          ) : (
            <div style={{ animation: 'slideUp 0.3s ease-out' }}>
              <div className="flex-col gap-4">
                 <Input type="email" placeholder="Email Address" icon={<Mail size={18} />} />
                 <Input type="password" placeholder="Password" icon={<Lock size={18} />} />
              </div>
            </div>
          )}

          {authType === 'phone' && (
             <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center', margin: '0.5rem 0' }}>An OTP will be sent for secure verification.</p>
          )}

          <Button type="submit" variant="primary" className="w-full mt-2">
            {authType === 'phone' ? 'Get OTP' : 'Secure Login'}
          </Button>
        </form>
      </div>

    </div>
  );
}
