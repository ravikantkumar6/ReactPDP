// src/components/Logout.js

import React from 'react';
import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
  const nav = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout(nav);
  };

  return <button onClick={handleLogout}>Logout</button>;
};
