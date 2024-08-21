import axios from 'axios';

export const useArticles = () => {
  const token = localStorage.getItem('token');
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
  return { createArticle };
};
