import React from 'react';
import { useNavigate } from 'react-router-dom';
import TravelLogo from '../components/TravelLogo';

export default function WelcomeScreen() {
  const nav = useNavigate();

  return (
    <div style={{
      width: '100%', 
      minHeight: '100vh', 
      background: '#FFFFFF', 
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Inter', sans-serif"
    }}>
      
      {/* Faint background watermark TRAVEL */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-10%',
        fontSize: '120px',
        fontWeight: 900,
        color: 'rgba(0,0,0,0.02)',
        transform: 'rotate(-45deg)',
        fontFamily: "'Outfit', sans-serif",
        pointerEvents: 'none',
        zIndex: 0
      }}>
        TRAVEL
      </div>

      <div style={{
        position: 'absolute',
        bottom: '5%',
        right: '-10%',
        fontSize: '120px',
        fontWeight: 900,
        color: 'rgba(0,0,0,0.02)',
        fontFamily: "'Outfit', sans-serif",
        pointerEvents: 'none',
        zIndex: 0
      }}>
        TRAVEL
      </div>

      {/* Top Text */}
      <div style={{ 
        padding: '60px 32px 0', 
        textAlign: 'right',
        zIndex: 1
      }}>
        <h1 style={{ 
          fontSize: '36px', 
          fontWeight: 600, 
          color: '#1E1E1E', 
          margin: '0 0 8px',
          fontFamily: "'Outfit', sans-serif",
          fontStyle: 'italic'
        }}>
          Welcome
        </h1>
        <p style={{ 
          fontSize: '14px', 
          color: '#888', 
          margin: 0,
          fontStyle: 'italic'
        }}>
          Feel your journey
        </p>
      </div>

      {/* Middle Purple Shape with Logo */}
      <div style={{
        marginTop: '40px',
        width: '85%',
        background: 'linear-gradient(90deg, #1e0842 0%, #4c0bce 100%)',
        borderTopRightRadius: '100px',
        borderBottomRightRadius: '100px',
        padding: '40px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '10px 10px 30px rgba(76, 11, 206, 0.2)',
        zIndex: 1,
        position: 'relative'
      }}>
        <TravelLogo color="#FFFFFF" style={{ transform: 'scale(1.2)' }} />
      </div>

      {/* Join now text */}
      <div style={{ 
        padding: '30px 32px', 
        textAlign: 'right',
        zIndex: 1,
        marginTop: '20px'
      }}>
        <div style={{
          position: 'absolute',
          right: '0',
          width: '60%',
          height: '150px',
          background: '#F0F0F0',
          borderTopLeftRadius: '100px',
          borderBottomLeftRadius: '100px',
          zIndex: -1,
          marginTop: '-40px'
        }} />
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 500, 
          color: '#1E1E1E', 
          margin: 0,
          fontFamily: "'Outfit', sans-serif",
          fontStyle: 'italic'
        }}>
          Join now..
        </h2>
      </div>

      {/* Bottom Area */}
      <div style={{ 
        marginTop: 'auto', 
        padding: '0 40px 40px',
        display: 'flex',
        justifyContent: 'center',
        zIndex: 1
      }}>
        <button 
          onClick={() => nav('/login')}
          style={{
            background: 'linear-gradient(90deg, #1e0842 0%, #4c0bce 100%)',
            color: '#FFFFFF',
            fontSize: '16px',
            fontWeight: 700,
            padding: '16px 40px',
            borderRadius: '30px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 8px 20px rgba(76, 11, 206, 0.3)',
            width: '100%',
            maxWidth: '280px',
            letterSpacing: '1px'
          }}
        >
          GET STARTED
        </button>
      </div>

    </div>
  );
}
