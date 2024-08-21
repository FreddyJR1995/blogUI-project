import { useEffect, useState } from 'react';
import axios from 'axios';

export const useTags = () => {
  const [tags, setTags] = useState([]);
  const getTags = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/labels`,
    );
    console.log(response.data);
    setTags(response.data);
  };

  useEffect(() => {
    getTags();
  }, []);
  return { tags };
};
