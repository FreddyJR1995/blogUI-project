import React, { useEffect, useState } from 'react';
import { Home } from '../modules/Home/Home';
import { Box, Fab, Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '../routes/private';
import { useArticles } from '../hooks/useArticles/useArticles';
import { CardArticles } from '../modules/CardArticles/CardArticles';

const MyArticles = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const { getMyArticles } = useArticles();

  useEffect(() => {
    const getArticleData = async () => {
      try {
        const articleData = await getMyArticles();
        setArticles(articleData);
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getArticleData();
  }, []);
  return (
    <Home>
      <Box style={{ paddingLeft: '163px' }}>
        <Grid>
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
        <Grid sx={{ paddingBottom: '20px' }}>
          <Fab
            variant="extended"
            color="primary"
            style={{
              float: 'right',
              marginRight: '163px',
            }}
            onClick={() => {
              navigate(`${PrivateRoutes.CreateArticle}`);
            }}
          >
            <AddIcon sx={{ mr: 1 }} />
            New Article
          </Fab>
        </Grid>
        <Grid container>
          {isLoading ? (
            <Typography>Loading...</Typography>
          ) : articles ? (
            <CardArticles articles={articles} />
          ) : (
            <Typography>No articles found</Typography>
          )}
        </Grid>
      </Box>
    </Home>
  );
};

export default MyArticles;
