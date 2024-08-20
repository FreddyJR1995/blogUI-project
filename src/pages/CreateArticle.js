import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import Editor from '../modules/Editor/Editor';
import { Home } from '../modules/Home/Home';

export const CreateArticle = () => {
  return (
    <Home>
      <Box style={{ padding: '0px 163px' }}>
        <Typography
          style={{
            fontSize: '34px',
            fontWeight: 700,
            lineHeight: '123.5%',
            letterSpacing: '0.25px',
            marginBottom: '25px',
          }}
        >
          Create Article
        </Typography>
        <Divider style={{ marginBottom: '56px' }} />
        <Editor />
      </Box>
    </Home>
  );
};
