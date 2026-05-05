import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Core Screens
import DashboardScreen from './screens/DashboardScreen';
import SearchScreen from './screens/SearchScreen';
import TrainListScreen from './screens/TrainListScreen';
import BookingScreen from './screens/BookingScreen';
import PNRStatusScreen from './screens/PNRStatusScreen';
import LiveTrackingScreen from './screens/LiveTrackingScreen';

// Auth Screens
import WelcomeScreen from './screens/WelcomeScreen';
import AuthLoginScreen from './screens/AuthLoginScreen';
import AuthOtpScreen from './screens/AuthOtpScreen';
import AuthBiometricScreen from './screens/AuthBiometricScreen';
import AuthMpinScreen from './screens/AuthMpinScreen';
import AuthRegistrationScreen from './screens/AuthRegistrationScreen';
import AuthForgotScreen from './screens/AuthForgotScreen';
import AuthTatkalScreen from './screens/AuthTatkalScreen';

// Super App Modules
import ProfileScreen from './screens/ProfileScreen';
import WalletScreen from './screens/WalletScreen';
import MyBookingsScreen from './screens/MyBookingsScreen';
import FoodScreen from './screens/FoodScreen';
import UtsScreen from './screens/UtsScreen';
import RailMadadScreen from './screens/RailMadadScreen';
import RechargeScreen from './screens/RechargeScreen';
import FlightSearchScreen from './screens/FlightSearchScreen';
import HotelSearchScreen from './screens/HotelSearchScreen';
import BusSearchScreen from './screens/BusSearchScreen';
import AITravelPlannerScreen from './screens/AITravelPlannerScreen';

// Checkout & Tickets
import PaymentGatewayScreen from './screens/PaymentGatewayScreen';
import TicketConfirmationScreen from './screens/TicketConfirmationScreen';
import CancellationScreen from './screens/CancellationScreen';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* Auth Ecosystem */}
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/login" element={<AuthLoginScreen />} />
          <Route path="/otp" element={<AuthOtpScreen />} />
          <Route path="/biometric" element={<AuthBiometricScreen />} />
          <Route path="/mpin" element={<AuthMpinScreen />} />
          <Route path="/register" element={<AuthRegistrationScreen />} />
          <Route path="/forgot" element={<AuthForgotScreen />} />
          <Route path="/tatkal" element={<AuthTatkalScreen />} />

          {/* Core Booking Flow */}
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/trains" element={<TrainListScreen />} />
          <Route path="/book" element={<BookingScreen />} />
          <Route path="/pnr" element={<PNRStatusScreen />} />
          <Route path="/live" element={<LiveTrackingScreen />} />

          {/* Super App Modules */}
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/wallet" element={<WalletScreen />} />
          <Route path="/bookings" element={<MyBookingsScreen />} />
          <Route path="/food" element={<FoodScreen />} />
          <Route path="/uts" element={<UtsScreen />} />
          <Route path="/madad" element={<RailMadadScreen />} />
          <Route path="/recharge" element={<RechargeScreen />} />
          <Route path="/flights" element={<FlightSearchScreen />} />
          <Route path="/hotels" element={<HotelSearchScreen />} />
          <Route path="/buses" element={<BusSearchScreen />} />
          <Route path="/ai-planner" element={<AITravelPlannerScreen />} />

          {/* Checkout & Tickets */}
          <Route path="/payment" element={<PaymentGatewayScreen />} />
          <Route path="/ticket" element={<TicketConfirmationScreen />} />
          <Route path="/cancel" element={<CancellationScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
