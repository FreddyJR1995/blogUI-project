import { useEffect, useState } from 'react';
import axios from 'axios';

export const useTags = () => {
  const [tags, setTags] = useState([]);
  const getTags = () => {
    const response = axios.get(`${process.env.REACT_APP_API_URL}/api/v1/tags`);
    setTags(response);
  };

  useEffect(() => {
    getTags();
  }, []);
  return { tags };
};
