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
import MyArticles from './pages/MyArticles';
import { CreateArticle } from './pages/CreateArticle';
import { ArticlePage } from './pages/ArticlePage';

export const RouterApp = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path={PrivateRoutes.Home} element={<HomePage />} />
          <Route path={PrivateRoutes.MyArticles} element={<MyArticles />} />
          <Route
            path={PrivateRoutes.CreateArticle}
            element={<CreateArticle />}
          />
          <Route
            path={PublicRoutes.Unauthorized}
            element={<UnauthorizedPage />}
          />
          <Route path="*" element={<Navigate to={PrivateRoutes.Home} />} />
          <Route
            path={`${PrivateRoutes.Article}/:articleId`}
            element={<ArticlePage />}
          />
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
