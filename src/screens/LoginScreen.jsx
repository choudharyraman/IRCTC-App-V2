import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import { Train, User, Lock, Mail } from 'lucide-react';

export default function LoginScreen() {
  const navigate = useNavigate();
  const [authType, setAuthType] = useState('phone');

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="flex-col" style={{ minHeight: '100vh', padding: '2rem' }}>
      
      {/* Hero Section */}
      <div className="flex-col items-center" style={{ marginTop: '2rem', marginBottom: '3rem' }}>
        <div className="neu-icon-btn" style={{ width: '80px', height: '80px', marginBottom: '1rem', background: 'var(--bg-color)', boxShadow: 'var(--shadow-dark), var(--shadow-light)' }}>
          <Train size={40} className="text-navy" />
        </div>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 700, textAlign: 'center', marginBottom: '0.5rem' }}>RailOne</h1>
        <p className="text-light" style={{ textAlign: 'center', fontSize: '1rem', margin: 0 }}>The Kinetic Horizon of Indian Railways</p>
      </div>

      {/* Login Card */}
      <Card style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', fontWeight: '600' }}>Welcome Back</h2>
        
        {/* Toggle Login Type */}
        <div className="flex-row justify-between" style={{ background: 'var(--bg-color)', padding: '0.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-inset-dark), var(--shadow-inset-light)', marginBottom: '1.5rem' }}>
          <button 
            className={`neu-btn ${authType === 'phone' ? 'neu-btn-primary' : ''}`}
            style={{ width: '48%', padding: '0.75rem', fontSize: '0.9rem', boxShadow: authType === 'phone' ? '' : 'none', background: authType === 'phone' ? '' : 'transparent' }}
            onClick={() => setAuthType('phone')}
          >
            Mobile No.
          </button>
          <button 
            className={`neu-btn ${authType === 'email' ? 'neu-btn-primary' : ''}`}
            style={{ width: '48%', padding: '0.75rem', fontSize: '0.9rem', boxShadow: authType === 'email' ? '' : 'none', background: authType === 'email' ? '' : 'transparent' }}
            onClick={() => setAuthType('email')}
          >
            Email ID
          </button>
        </div>

        <form onSubmit={handleLogin} className="flex-col gap-4">
          {authType === 'phone' ? (
            <Input type="tel" placeholder="Enter Mobile Number" icon={<User size={18} />} />
          ) : (
            <>
              <Input type="email" placeholder="Email Address" icon={<Mail size={18} />} />
              <Input type="password" placeholder="Password" icon={<Lock size={18} />} />
            </>
          )}

          {authType === 'phone' && (
             <p className="text-light" style={{ fontSize: '0.8rem', textAlign: 'center', margin: '0 0 0.5rem 0' }}>An OTP will be sent to this number.</p>
          )}

          <Button type="submit" variant="primary" className="w-full mt-4">
            {authType === 'phone' ? 'Get OTP' : 'Login'}
          </Button>
        </form>
      </Card>

      {/* Footer / Alt Logic */}
      <div className="flex-col items-center mt-4">
         <p className="text-light" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Or continue with</p>
         <div className="flex-row gap-4">
            <button className="neu-icon-btn neu-btn">
               <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>G</span>
            </button>
            <button className="neu-icon-btn neu-btn">
               <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>A</span>
            </button>
         </div>
      </div>

    </div>
  );
}
