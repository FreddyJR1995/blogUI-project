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
import { useTags } from '../../hooks/useTags/useTags';
import { useArticles } from '../../hooks/useArticles/useArticles';

const converter = new Showdown.Converter();

const Editor = () => {
  const [title, setTitle] = useState('');
  const [labels, setLabels] = useState([]);
  const [selectedTab, setSelectedTab] = useState('write');
  const [content, setContent] = useState('');
  const { tags } = useTags();
  const { createArticle } = useArticles();

  const handleAddTags = (event) => {
    const {
      target: { value },
    } = event;
    setLabels(typeof value === 'string' ? value.split(',') : value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createArticle(title, labels, content);
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
              value={labels}
              onChange={handleAddTags}
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
          preview: 'editor',
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
