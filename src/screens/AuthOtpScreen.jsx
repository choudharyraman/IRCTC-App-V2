import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OtpInputs from '../components/OtpInputs';
import Button from '../components/Button';
import { ArrowLeft } from 'lucide-react';

export default function AuthOtpScreen() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [timeLeft, setTimeLeft] = useState(45);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const t = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft]);

  const handleVerify = () => {
    if (otp.join('').length === 6) {
      navigate('/dashboard');
    }
  };

  return (
    <div style={{ padding: '1.5rem', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <div className="flex-row items-center gap-4 mb-8">
        <button 
           className="neuro-icon-btn" 
           style={{ width: '40px', height: '40px', background: 'var(--bg-page)', boxShadow: 'var(--shadow-raised)', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
           onClick={() => navigate('/login')}
        >
          <ArrowLeft size={20} color="var(--text-primary)" />
        </button>
        <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500 }}>Back to login</span>
      </div>

      <h1 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px' }}>Verify your number</h1>
      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.5 }}>
        We sent a 6-digit code to<br/>
        <strong style={{ color: 'var(--text-primary)' }}>+91 XXXXXXX782</strong>
      </p>

      {/* OTP Inputs */}
      <div style={{ marginBottom: '32px' }}>
        <OtpInputs length={6} value={otp} onChange={setOtp} />
      </div>

      {/* Countdown */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        {timeLeft > 0 ? (
          <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
            Resend OTP in <strong style={{ color: 'var(--text-primary)' }}>00:{timeLeft.toString().padStart(2, '0')}</strong>
          </span>
        ) : (
          <span style={{ fontSize: '14px', color: 'var(--accent-primary)', fontWeight: 600, cursor: 'pointer' }} onClick={() => setTimeLeft(45)}>
            Resend OTP
          </span>
        )}
      </div>

      <Button onClick={handleVerify} disabled={otp.join('').length < 6}>
        Verify & Continue
      </Button>

      <div style={{ marginTop: 'auto', textAlign: 'center', paddingTop: '2rem' }}>
         <span style={{ fontSize: '14px', color: 'var(--text-secondary)', cursor: 'pointer' }} onClick={() => navigate('/login')}>
            Change mobile number
         </span>
      </div>
    </div>
  );
}
