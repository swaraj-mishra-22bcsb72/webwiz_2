// src/services/wikipediaApi.js
import axios from 'axios';

// Wikipedia API base URL
const BASE_URL = 'https://en.wikipedia.org/api/rest_v1';

export const getTrendingTopics = async () => {
    const res = await axios.get('https://en.wikipedia.org/api/rest_v1/feed/featured', {
      headers: { 'Accept': 'application/json' }
    });
    return res.data.tfa; // today's featured article
  };
  

export const getOnThisDay = async () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const res = await axios.get(`${BASE_URL}/feed/onthisday/events/${month}/${day}`);
  return res.data.events;
};

export const getNews = async () => {
  const res = await axios.get(`${BASE_URL}/feed/news`);
  return res.data;
};
