import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import loginImage from '../assets/loginImage.png';
import { useAuth } from '../contexts/AuthProvider';

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <Grid container style={{ position: 'absolute', top: '192px' }}>
      <Grid
        item
        xs={6}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography sx={{ fontWeight: 'bold', fontSize: '32px' }}>
          LOGIN
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '475px',
            height: '411px',
            backgroundColor: '#D9D9D9',
            padding: '76px 45px 30px 45px',
            borderRadius: '10px',
            border: '1px solid #996969',
          }}
        >
          <FormControl>
            <FormLabel>Email</FormLabel>
            <TextField
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <TextField
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormControl>
          <Button
            type="submit"
            size="large"
            color="primary"
            sx={{ fontWeight: 500, letterSpacing: '0.46px', fontSize: '15px' }}
          >
            Login
          </Button>
          <Divider sx={{ fontWeight: 'bold' }}>
            <Typography
              style={{ color: '#996969', fontSize: '15px', fontWeight: 500 }}
            >
              OR
            </Typography>
          </Divider>
          <Button
            size="large"
            color="primary"
            sx={{ fontWeight: 500, letterSpacing: '0.46px', fontSize: '15px' }}
          >
            Sign up
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            flexDirection: 'column',
            width: '475px',
            height: '411px',
            flexShrink: 0,
          }}
        >
          <img src={loginImage} alt="login" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
