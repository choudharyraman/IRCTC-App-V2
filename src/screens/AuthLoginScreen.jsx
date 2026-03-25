import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Facebook, Apple, ChevronLeft } from 'lucide-react';

export default function AuthLoginScreen() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #FDE3E9 0%, #E6C4FA 50%, #C4AEF2 100%)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Inter', sans-serif"
    }}>
      <style>{`
        .auth-input {
          width: 100%;
          padding: 16px 24px;
          border-radius: 99px;
          border: 1px solid #E5E7EB;
          background: #FFFFFF;
          color: #111827 !important;
          font-size: 15px;
          outline: none;
          transition: border 0.2s ease;
        }
        .auth-input:focus {
          border-color: #D8B4FE;
        }
        .auth-input::placeholder {
          color: #9CA3AF !important;
        }
        .auth-btn-gradient {
          width: 100%;
          padding: 16px;
          border-radius: 99px;
          background: linear-gradient(90deg, #F9A8D4, #D8B4FE);
          color: #FFFFFF !important;
          border: none;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(216, 180, 254, 0.4);
          transition: transform 0.1s ease;
        }
        .auth-btn-gradient:active {
          transform: scale(0.98);
        }
        .auth-social-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .auth-social-btn:hover {
          background: #F9FAFB;
        }
      `}</style>
      
      {/* Top Gradient Header Space */}
      <div style={{ padding: '32px 24px', flex: 0.35, display: 'flex', flexDirection: 'column' }}>
         <div 
           onClick={() => navigate('/tatkal')} 
           style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', opacity: 0.8, width: 'fit-content' }}
         >
            <ChevronLeft size={20} color="#111827" />
            <span style={{ fontSize: '15px', fontWeight: 600, color: '#111827' }}>Back</span>
         </div>
      </div>

      {/* Bottom Sheet Modal Container */}
      <div style={{
         flex: 1,
         background: '#FFFFFF',
         borderRadius: '40px 40px 0 0',
         padding: '40px 32px 32px 32px',
         display: 'flex',
         flexDirection: 'column',
         boxShadow: '0 -10px 40px rgba(0,0,0,0.05)'
      }}>
         <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#111827', textAlign: 'center', margin: '0 0 8px 0', fontFamily: "'Outfit', sans-serif" }}>
            Welcome Back
         </h1>
         <p style={{ fontSize: '14px', color: '#6B7280', textAlign: 'center', margin: '0 0 32px 0', lineHeight: 1.5 }}>
            Ready to continue your booking journey?<br/>Your track is right here.
         </p>

         {/* Form Fields Array */}
         <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
            <input type="text" className="auth-input" placeholder="Enter email or mobile" />
            
            <div style={{ position: 'relative' }}>
               <input 
                 type={showPassword ? 'text' : 'password'} 
                 className="auth-input" 
                 placeholder="Password" 
                 style={{ paddingRight: '56px' }}
               />
               <div 
                 onClick={() => setShowPassword(!showPassword)}
                 style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: '#9CA3AF' }}
               >
                 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
               </div>
            </div>
         </div>

         {/* Checkbox and Recovery Settings */}
         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
               <input 
                 type="checkbox" 
                 checked={rememberMe}
                 onChange={() => setRememberMe(!rememberMe)}
                 style={{ accentColor: '#D8B4FE', width: '16px', height: '16px', cursor: 'pointer' }} 
               />
               <span style={{ fontSize: '13px', color: '#4B5563', fontWeight: 500 }}>Remember me</span>
            </label>
            <span onClick={() => navigate('/forgot')} style={{ fontSize: '13px', color: '#9333EA', fontWeight: 600, cursor: 'pointer' }}>
               Forgot password?
            </span>
         </div>

         {/* Primary Sign In Interaction */}
         <button className="auth-btn-gradient" onClick={handleLogin}>
            Log In
         </button>

         {/* Alternative Credentials Divider */}
         <div style={{ display: 'flex', alignItems: 'center', margin: '32px 0 24px 0' }}>
            <div style={{ flex: 1, height: '1px', background: '#E5E7EB' }}></div>
            <span style={{ padding: '0 16px', fontSize: '12px', color: '#9CA3AF', fontWeight: 500 }}>Sign in with</span>
            <div style={{ flex: 1, height: '1px', background: '#E5E7EB' }}></div>
         </div>

         {/* Circular Social Buttons Matrix */}
         <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '32px' }}>
            <button className="auth-social-btn">
               <Facebook size={24} color="#1877F2" fill="#1877F2" strokeWidth={0} />
            </button>
            <button className="auth-social-btn">
               <span style={{ fontSize: '24px', fontWeight: 800, color: '#DB4437', fontFamily: "'Outfit', sans-serif" }}>G</span>
            </button>
            <button className="auth-social-btn">
               <Apple size={24} color="#000000" fill="#000000" />
            </button>
         </div>

         {/* Account Registration Router */}
         <div style={{ textAlign: 'center', marginTop: 'auto', paddingBottom: '16px' }}>
            <span style={{ fontSize: '14px', color: '#6B7280' }}>
               Don't have an account? <span onClick={() => navigate('/register')} style={{ color: '#9333EA', fontWeight: 700, cursor: 'pointer' }}>Sign Up</span>
            </span>
         </div>

      </div>
    </div>
  );
}
