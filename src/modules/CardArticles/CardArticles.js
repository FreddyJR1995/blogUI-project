import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { TagsByArticle } from './TagsByArticle';
import { PrivateRoutes } from '../../routes/private';
import { useNavigate } from 'react-router-dom';

export const CardArticles = ({ articles }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`${PrivateRoutes.Article}/${id}`);
  };
  return articles
    ? articles?.map((article) => {
        return (
          <Grid item xs={6} key={article.id}>
            <Card>
              <CardContent>
                <Typography>{article.title}</Typography>
                <TagsByArticle tags={article.labels} />
              </CardContent>
              <CardActions>
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => {
                    handleClick(article.id);
                  }}
                >
                  <VisibilityIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        );
      })
    : '';
};
