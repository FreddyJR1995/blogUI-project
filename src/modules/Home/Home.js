import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../../routes/public';
import './Home.css';
import PropTypes from 'prop-types';
import { useAuth } from '../../contexts/AuthProvider';
import { PrivateRoutes } from '../../routes/private';

export const Home = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  return (
    <Box className="layout-container">
      <AppBar position="relative" className="appbar-component">
        <Toolbar className="toolbar">
          <Typography variant="h6" component="div" className="logo-text">
            Blog.io
          </Typography>
          {!isAuthenticated ? (
            <Box className="buttons-container">
              <Button
                variant="outlined"
                className="toolbar-button"
                onClick={() => {
                  navigate(`${PublicRoutes.Register}`);
                }}
              >
                Start writing
              </Button>
              <Button
                variant="outlined"
                className="toolbar-button"
                onClick={() => {
                  navigate(`${PublicRoutes.Login}`);
                }}
              >
                Login
              </Button>
            </Box>
          ) : (
            <Box className="buttons-container">
              <Button
                variant="outlined"
                className="toolbar-button"
                onClick={() => {
                  navigate(`${PrivateRoutes.Home}`);
                }}
              >
                Home
              </Button>
              <Button
                variant="outlined"
                className="toolbar-button"
                onClick={() => {
                  navigate(`${PrivateRoutes.MyArticles}`);
                }}
              >
                My Articles
              </Button>
              <Button
                variant="outlined"
                className="toolbar-button"
                onClick={() => logout()}
              >
                Logout
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Box className="child-container">{children}</Box>
    </Box>
  );
};

Home.propTypes = {
  children: PropTypes.node.isRequired,
};
