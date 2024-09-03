import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useArticles } from '../hooks/useArticles/useArticles';
import { Home } from '../modules/Home/Home';
import { Box, Divider, Typography } from '@mui/material';
import { MarkdownViewer } from '../modules/MarkDownViewer/MarkDownViewer';
import { TagsByArticle } from '../modules/CardArticles/TagsByArticle';

export const ArticlePage = () => {
  const { articleId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState(null);
  const { getArticle } = useArticles();

  useEffect(() => {
    const getArticleData = async () => {
      try {
        const articleData = await getArticle(articleId);
        setArticle(articleData);
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getArticleData();
  }, [articleId]);

  return (
    <Home>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            minWidth: '780px',
          }}
        >
          {isLoading ? (
            <Typography>Loading...</Typography>
          ) : article ? (
            <>
              <Typography
                sx={{
                  fontSize: '42px',
                  lineHeight: '52px',
                  letterSpacing: '-0.011em',
                  fontWeight: 700,
                  paddingBottom: '20px',
                }}
              >
                {article.title}
              </Typography>
              <Typography
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  paddingBottom: '20px',
                }}
              >{`Author: ${article.author.name} ${article.author.last_name}`}</Typography>
              <TagsByArticle tags={article.labels} />
              <Divider />
              <MarkdownViewer content={article.content} />
            </>
          ) : (
            <Typography>No article found</Typography>
          )}
        </Box>
      </Box>
    </Home>
  );
};
