import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UnauthorizedPage from './pages/UnauthorizedPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { useAuth } from './contexts/AuthProvider';
import { PublicRoutes } from './routes/public';
import { PrivateRoutes } from './routes/private';

export const RouterApp = () => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path={PrivateRoutes.Home} element={<HomePage />} />
          <Route
            path={PublicRoutes.Unauthorized}
            element={<UnauthorizedPage />}
          />
          <Route path="*" element={<Navigate to={PrivateRoutes.Home} />} />
        </>
      ) : (
        <>
          <Route path={PublicRoutes.Main} element={<LandingPage />} />
          <Route path={PublicRoutes.Login} element={<LoginPage />} />
          <Route path={PublicRoutes.Register} element={<RegisterPage />} />
          <Route path="*" element={<Navigate to={PublicRoutes.Main} />} />
        </>
      )}
    </Routes>
  );
};
