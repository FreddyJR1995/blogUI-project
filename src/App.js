import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { RouterApp } from './RouterApp';
import { AuthProvider } from './contexts/AuthProvider';

function App() {
  return (
    <Router>
      <AuthProvider>
        <RouterApp />
      </AuthProvider>
    </Router>
  );
}

export default App;
