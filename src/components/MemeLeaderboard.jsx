import React from 'react';

const MemeLeaderboard = ({ memes }) => {
  return (
    <div className="meme-leaderboard">
      {memes.length > 0 ? (
        memes.map((meme, index) => (
          <div key={meme.id} className="meme-card">
            <p>Rank #{index + 1}</p>
            <img src={meme.image} alt={`Meme ${index + 1}`} />
            <p>{meme.caption}</p>
            <p>{meme.likes} Likes</p>
          </div>
        ))
      ) : (
        <p>No memes available.</p>
      )}
    </div>
  );
};

export default MemeLeaderboard;
