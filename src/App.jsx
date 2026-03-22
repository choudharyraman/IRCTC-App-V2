import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import TrainListScreen from './screens/TrainListScreen';

function App() {
  return (
    <Router>
      <div style={{ maxWidth: '420px', margin: '0 auto', minHeight: '100vh', backgroundColor: 'var(--bg-color)', overflowX: 'hidden', position: 'relative', boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/trains" element={<TrainListScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
