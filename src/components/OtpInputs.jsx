import React, { useRef } from 'react';

export default function OtpInputs({ length = 6, value = Array(6).fill(''), onChange, error }) {
  const inputsRef = useRef([]);

  const handleChange = (index, e) => {
    const val = e.target.value;
    if (isNaN(val)) return;

    let newOtp = [...value];
    // Take only last character typed
    newOtp[index] = val.slice(-1);
    onChange(newOtp);

    // Auto advance
    if (val && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Backspace auto-retreat
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: '8px' }}>
      {value.map((digit, index) => {
        const isFilled = digit !== '';
        return (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            inputMode="numeric"
            value={digit}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            style={{
              width: '48px',
              height: '56px',
              borderRadius: '8px',
              background: 'var(--bg-page)',
              border: 'none',
              borderBottom: error ? '2px solid var(--error)' : isFilled ? '2px solid var(--accent-primary)' : 'none',
              boxShadow: 'var(--shadow-sunken)',
              textAlign: 'center',
              fontSize: '22px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              caretColor: 'var(--accent-primary)',
              animation: error ? 'shake 0.3s ease' : 'none',
              transition: 'border 0.1s ease',
              outline: 'none'
            }}
            maxLength={2}
          />
        );
      })}
    </div>
  );
}
