import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import registerImage from '../assets/registerImage.png';
import { useAuth } from '../contexts/AuthProvider';

const RegisterPage = () => {
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ name, last_name: lastName, email, password });
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
          CREATE AN ACCOUNT
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
            <FormLabel>Name</FormLabel>
            <TextField
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <TextField
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <TextField
              variant="outlined"
              type="email"
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
            CREATE ACCOUNT
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
          <img src={registerImage} alt="register" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default RegisterPage;
