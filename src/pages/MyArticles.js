import React from 'react';
import { Home } from '../modules/Home/Home';
import { Fab, Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '../routes/private';

const MyArticles = () => {
  const navigate = useNavigate();
  return (
    <Home>
      <Grid style={{ paddingLeft: '163px' }}>
        <Typography
          style={{
            fontSize: '34px',
            fontWeight: 700,
            lineHeight: '123.5%',
            letterSpacing: '0.25px',
          }}
        >
          My Articles
        </Typography>
      </Grid>
      <Fab
        variant="extended"
        color="primary"
        style={{ float: 'right', marginRight: '163px' }}
        onClick={() => {
          navigate(`${PrivateRoutes.CreateArticle}`);
        }}
      >
        <AddIcon sx={{ mr: 1 }} />
        New Article
      </Fab>
    </Home>
  );
};

export default MyArticles;
