import React, { useState } from 'react';

const LikeButton = ({ likes, onLike }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
    onLike();
  };

  return (
    <button
      className={`like-button ${liked ? 'liked' : ''}`}
      onClick={handleLikeClick}
    >
      ❤️ Like
    </button>
  );
};

export default LikeButton;
