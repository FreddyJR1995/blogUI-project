import {
  Box,
  Chip,
  Divider,
  Fab,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { Home } from '../modules/Home/Home';
import { PrivateRoutes } from '../routes/private';
import { useTags } from '../hooks/useTags/useTags';

const HomePage = () => {
  const [tag, setTag] = useState([]);
  const { tags } = useTags();
  const navigate = useNavigate();

  const handleTagsToSearch = (event) => {
    const {
      target: { value },
    } = event;
    setTag(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Home>
      <Typography
        style={{
          fontSize: '34px',
          fontStyle: 'italic',
          fontWeight: 700,
          lineHeight: '123.5%',
          letterSpacing: '0.25px',
          marginBottom: '22px',
          textAlign: 'center',
        }}
      >
        “Stories and Knowledge that Transform You.”
      </Typography>
      <Divider style={{ color: '#00000', marginBottom: '56px' }} />
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
      <Grid container direction="column">
        <Grid item style={{ paddingLeft: '163px' }}>
          <Typography
            style={{
              fontSize: '48px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '64px',
              letterSpacing: '-0.25px',
            }}
          >
            Search
          </Typography>
        </Grid>
        <Grid item style={{ paddingLeft: '163px', paddingRight: '152px' }}>
          <Select
            style={{ width: '100%' }}
            multiple
            value={tag}
            onChange={handleTagsToSearch}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => {
              if (!Array.isArray(selected)) selected = [];
              return (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              );
            }}
          >
            {tags.map((item) => (
              <MenuItem key={item.id} value={item.text}>
                {item.text}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
    </Home>
  );
};

export default HomePage;
