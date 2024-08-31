import axios from 'axios';
import { useEffect, useState } from 'react';

export const useArticles = () => {
  const token = localStorage.getItem('token');
  const [articles, setArticles] = useState([]);
  const createArticle = async (title, labels, content) => {
    const body = {
      title: title,
      labels: labels.map((label) => ({ text: label })),
      content: content,
    };
    await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/articles`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const getArticles = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/articles`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    setArticles(response.data);
  };

  const getArticle = async (id) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/articles/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  };

  const getMyArticles = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/articles/user/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  };

  useEffect(() => {
    getArticles();
  }, []);
  return { createArticle, articles, getArticle, getMyArticles };
};
