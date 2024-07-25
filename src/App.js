// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import BlogPostList from './components/BlogPostList';
import BlogPostDetails from './components/BlogPostDetails';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=technology&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
        setPosts(response.data.articles);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogPostList />} />
        <Route path="/post/:id" element={<BlogPostDetails posts={posts} />} />
      </Routes>
    </Router>
  );
};

export default App;
