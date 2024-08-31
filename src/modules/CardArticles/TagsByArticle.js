import { Chip, Stack } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

export const TagsByArticle = ({ tags }) => {
  return tags ? (
    <Stack direction="row" spacing={1} sx={{ paddingBottom: '10px' }}>
      {tags?.map((tag) => {
        return <Chip key={tag.id} label={tag.text} color="primary"></Chip>;
      })}
    </Stack>
  ) : (
    ''
  );
};

TagsByArticle.propTypes = {
  tags: PropTypes.array,
};
