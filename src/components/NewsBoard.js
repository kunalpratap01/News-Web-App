import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

const apiKey = 'eb3f5100e01e422b986764b2466419c8'; // Replace 'your_api_key_here' with your actual API key

const NewsBoard = ({cat}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=${apiKey}`;
        let response = await fetch(url);
        let data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, [cat]);

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news, index) => (
        <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      ))}
    </div>
  );
};

export default NewsBoard;
