import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPostItem from './BlogPostItem';

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=technology&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${page}`);
      setPosts(response.data.articles);
    };
    fetchPosts();
  }, [page]);

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePreviousPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post, index) => (
        <BlogPostItem key={index} post={post} />
      ))}
      <div>
        <button onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default BlogPostList;
