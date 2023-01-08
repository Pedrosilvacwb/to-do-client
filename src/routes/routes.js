import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import EditUser from '../pages/EditUser/EditUser';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="/cadastro" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/editar" element={<EditUser />} />
    </Routes>
  );
};

export default AppRoutes;
