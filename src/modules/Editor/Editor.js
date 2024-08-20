import React, { useState } from 'react';
import ReactMde from 'react-mde';
import Showdown from 'showdown';
import 'react-mde/lib/styles/css/react-mde-all.css';
import './Editor.css';
import {
  Box,
  Button,
  Chip,
  FormControl,
  FormLabel,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@mui/material';

const converter = new Showdown.Converter();

const Editor = () => {
  const [title, setTitle] = useState('');
  // const [tags, setTags] = useState('');
  const [selectedTab, setSelectedTab] = useState('write');
  const [content, setContent] = useState('');

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Grid>
          <FormControl style={{ width: '100%', marginBottom: '20px' }}>
            <FormLabel>Title</FormLabel>
            <TextField
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </FormControl>
        </Grid>
        <Grid>
          <FormControl style={{ width: '100%', marginBottom: '20px' }}>
            <FormLabel>Tags</FormLabel>
            <Select
              multiple
              value={[]}
              onChange={() => {}}
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
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <ReactMde
        value={content}
        onChange={setContent}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        classes={{
          textArea: 'custom-textarea',
        }}
        childProps={{
          writeButton: {
            tabIndex: -1,
          },
        }}
        minPreviewHeight={500}
      />
      <Box style={{ float: 'right', marginTop: '30px' }}>
        <Button style={{ marginRight: '20px' }}>Cancel</Button>
        <Button type="submit" variant="contained" color="primary">
          {' '}
          Save{' '}
        </Button>
      </Box>
    </form>
  );
};

export default Editor;
