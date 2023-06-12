import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
  const [post, setPost] = useState('');
  const { id } = useParams();
  useEffect(() => {
    // Fetch openaccess API
    fetch(`https://openaccess-api.clevelandart.org/api/artworks/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data.data));
  }, []);

  // Return data fetched from the API
  return (
    <div className="post-details">
      {post && (
        <article>
          <h2 className='picTitle'>{post.title}</h2>
          <p>
            Artwork Technique:
            {' '}
            {post.technique}
          </p>
          <div>{post.collection}</div>
          <div class='funfact'>
            Fun fact:
            {post.fun_fact}
          </div>
          <img src={post.images.web.url} alt={post.title} />
        </article>
      )}
    </div>
  );
};

export default PostDetails;
