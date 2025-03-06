import React from 'react';

const MemeCard = ({ meme }) => {
  return (
    <div className="meme-card">
      <img src={meme.url} alt={meme.title} className="meme-image" />
      <p>{meme.title}</p>
      <div className="meme-metadata">
        <span>{meme.likes} Likes</span>
        <span>{meme.comments} Comments</span>
      </div>
    </div>
  );
};

export default MemeCard;
