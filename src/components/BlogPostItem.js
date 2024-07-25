import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostItem = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
      <Link to={`/post/${post.title}`}>Read more</Link>
    </div>
  );
};

export default BlogPostItem;
