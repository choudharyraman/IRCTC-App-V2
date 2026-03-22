import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardScreen from './screens/DashboardScreen';
import TrainListScreen from './screens/TrainListScreen';
import BookingScreen from './screens/BookingScreen';
import PNRStatusScreen from './screens/PNRStatusScreen';
import LiveTrackingScreen from './screens/LiveTrackingScreen';

// New Advanced Login Ecosystem
import AuthLoginScreen from './screens/AuthLoginScreen';
import AuthOtpScreen from './screens/AuthOtpScreen';
import AuthBiometricScreen from './screens/AuthBiometricScreen';
import AuthMpinScreen from './screens/AuthMpinScreen';
import AuthRegistrationScreen from './screens/AuthRegistrationScreen';
import AuthForgotScreen from './screens/AuthForgotScreen';
import AuthTatkalScreen from './screens/AuthTatkalScreen';

function App() {
  return (
    <Router>
      <div style={{ maxWidth: '420px', margin: '0 auto', minHeight: '100vh', backgroundColor: 'var(--bg-page)', overflowX: 'hidden', position: 'relative', boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}>
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* Old routes kept for dashboard flow */}
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/trains" element={<TrainListScreen />} />
          <Route path="/book" element={<BookingScreen />} />
          <Route path="/pnr" element={<PNRStatusScreen />} />
          <Route path="/live" element={<LiveTrackingScreen />} />

          {/* New Auth Ecosystem */}
          <Route path="/login" element={<AuthLoginScreen />} />
          <Route path="/otp" element={<AuthOtpScreen />} />
          <Route path="/biometric" element={<AuthBiometricScreen />} />
          <Route path="/mpin" element={<AuthMpinScreen />} />
          <Route path="/register" element={<AuthRegistrationScreen />} />
          <Route path="/forgot" element={<AuthForgotScreen />} />
          <Route path="/tatkal" element={<AuthTatkalScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
