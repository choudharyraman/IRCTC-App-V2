import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import OtpInputs from '../components/OtpInputs';
import SegmentedControl from '../components/SegmentedControl';
import { ArrowLeft } from 'lucide-react';

export default function AuthRegistrationScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [gender, setGender] = useState(0); // 0=Male, 1=Female, 2=Other

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="flex-col gap-4 w-full">
            <Input label="Mobile Number (+91)" placeholder="Enter mobile number" />
            <Button onClick={() => setStep(2)}>Send OTP</Button>
            <div className="flex-col items-center gap-2 mt-4">
               <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                 Already have an account? <strong style={{ color: 'var(--accent-primary)', cursor: 'pointer' }} onClick={() => navigate('/login')}>Sign in</strong>
               </span>
               <span style={{ fontSize: '13px', color: 'var(--accent-primary)', cursor: 'pointer' }}>
                 Import existing IRCTC credentials →
               </span>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex-col gap-4 w-full">
            <label style={{ fontSize: '14px', fontWeight: 500 }}>Enter 6-digit OTP</label>
            <OtpInputs length={6} value={otp} onChange={setOtp} />
            <div className="mt-4"></div>
            <Input type="password" label="Set Password" placeholder="Min 8 characters" />
            
            {/* Password strength bar */}
            <div className="flex-col gap-2 mb-2">
               <div style={{ display: 'flex', gap: '4px', height: '4px' }}>
                  <div style={{ flex: 1, background: 'var(--success)', borderRadius: '2px' }}></div>
                  <div style={{ flex: 1, background: 'var(--success)', borderRadius: '2px' }}></div>
                  <div style={{ flex: 1, background: 'var(--bg-page)', boxShadow: 'var(--shadow-sunken)', borderRadius: '2px' }}></div>
                  <div style={{ flex: 1, background: 'var(--bg-page)', boxShadow: 'var(--shadow-sunken)', borderRadius: '2px' }}></div>
               </div>
               <span style={{ fontSize: '12px', color: 'var(--success)' }}>✓ 8+ chars ✓ 1 Number</span>
            </div>

            <Input type="password" label="Confirm Password" placeholder="Repeat password" />
            <Button onClick={() => setStep(3)}>Continue</Button>
          </div>
        );
      case 3:
        return (
          <div className="flex-col gap-4 w-full">
            <Input label="Full Name" placeholder="As per govt ID" />
            <Input label="Email (Optional)" placeholder="For ticket alerts" />
            
            <div className="flex-col gap-2 mt-2">
               <label style={{ fontSize: '14px', fontWeight: 500 }}>Gender</label>
               <SegmentedControl tabs={['Male', 'Female', 'Transgender']} activeTab={gender} onChange={setGender} />
            </div>

            <div className="neuro-card" style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px' }}>
               <div className="flex-col">
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>Link Aadhaar</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>For higher ticket limits & Tatkal</span>
               </div>
               <span style={{ fontSize: '12px', color: 'var(--accent-primary)', fontWeight: 600, padding: '4px 12px', border: '1px solid var(--accent-primary)', borderRadius: '12px' }}>Link</span>
            </div>

            <Button onClick={() => navigate('/dashboard')} style={{ marginTop: '16px' }}>Start Booking</Button>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div style={{ padding: '2rem 1.5rem', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
       {/* Header */}
      <div className="flex-row items-center gap-4 mb-8">
        <button 
           className="neuro-icon-btn" 
           style={{ width: '40px', height: '40px', background: 'var(--bg-page)', boxShadow: 'var(--shadow-raised)', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
           onClick={() => step > 1 ? setStep(step - 1) : navigate('/login')}
        >
          <ArrowLeft size={20} color="var(--text-primary)" />
        </button>
        <div className="flex-col">
          <h2 style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>Create Account</h2>
          <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Step {step} of 3</span>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
        {renderStep()}
      </div>
    </div>
  );
}
