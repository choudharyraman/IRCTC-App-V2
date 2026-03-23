import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardScreen from './screens/DashboardScreen';
import TrainListScreen from './screens/TrainListScreen';
import BookingScreen from './screens/BookingScreen';
import PNRStatusScreen from './screens/PNRStatusScreen';
import LiveTrackingScreen from './screens/LiveTrackingScreen';

// Super App Modules
import ProfileScreen from './screens/ProfileScreen';
import WalletScreen from './screens/WalletScreen';
import MyBookingsScreen from './screens/MyBookingsScreen';
import FoodScreen from './screens/FoodScreen';
import UtsScreen from './screens/UtsScreen';
import RailMadadScreen from './screens/RailMadadScreen';

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
      <div className="app-container">
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

          {/* Super App Modules */}
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/wallet" element={<WalletScreen />} />
          <Route path="/bookings" element={<MyBookingsScreen />} />
          <Route path="/food" element={<FoodScreen />} />
          <Route path="/uts" element={<UtsScreen />} />
          <Route path="/madad" element={<RailMadadScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
