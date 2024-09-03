import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Container } from '@mui/material';
import PropTypes from 'prop-types';
import './MarkDownViewer.css';

export const MarkdownViewer = ({ content }) => {
  return (
    <Container>
      <ReactMarkdown className="markdown-content" remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </Container>
  );
};

MarkdownViewer.propTypes = {
  content: PropTypes.string,
};
