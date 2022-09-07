import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { getFromStorage } from '../src/utils/helpers';
import { STORAGE_KEYS } from '../src/utils/constants';
import { GlobalProvider } from './GlobalState';


function App() {

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = getFromStorage(STORAGE_KEYS.IS_LOGGED_IN);

    if (isLoggedIn) {
      navigate("../dashboard", { replace: true });
    } else {
      navigate("../", { replace: true });
    }
  }, [navigate]);

  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </GlobalProvider>
  )
}

export default App;
