import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { TagsByArticle } from './TagsByArticle';
import { PrivateRoutes } from '../../routes/private';
import { useNavigate } from 'react-router-dom';

export const CardArticles = ({ articles }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`${PrivateRoutes.Article}/${id}`);
  };
  console.log(articles);
  return articles
    ? articles?.map((article) => {
        return (
          <Grid item xs={6} key={article.id}>
            <Card sx={{ backgroundColor: '#FEF7FF' }}>
              <CardContent>
                <Typography
                  style={{
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    paddingBottom: '22px',
                  }}
                >
                  {article.title}
                </Typography>
                <Typography
                  style={{
                    textAlign: 'end',
                    color: '#996969',
                    fontSize: '16px',
                    fontWeight: 400,
                    paddingBottom: '20px',
                  }}
                >{`${article.author.name} ${article.author.last_name}`}</Typography>
                <TagsByArticle tags={article.labels} />
              </CardContent>
              <CardActions>
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => {
                    handleClick(article.id);
                  }}
                >
                  <OpenInNewIcon color="primary" />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        );
      })
    : '';
};
