import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { GlobalProvider } from './GlobalState';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </GlobalProvider>
    </ErrorBoundary>
  )
}

export default App;
