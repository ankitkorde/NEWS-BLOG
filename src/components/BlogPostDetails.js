// BlogPostDetails.js

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogPostDetails = ({ posts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((post) => post.title === id);

  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <img src={post.urlToImage} alt={post.title} style={{ width: '100%', height: 'auto' }} />
      <p>{post.content}</p>
      <button onClick={() => navigate(-1)}>Back to Posts</button>
    </div>
  );
};

export default BlogPostDetails;
