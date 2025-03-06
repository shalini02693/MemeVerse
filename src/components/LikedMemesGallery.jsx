import React from 'react';

const LikedMemesGallery = ({ memes }) => {
  return (
    <div className="memes-gallery">
      {memes.length > 0 ? (
        memes.map((meme, index) => (
          <div key={index} className="meme-card">
            <img src={meme.image} alt={`Liked Meme ${index + 1}`} />
            <p>{meme.caption}</p>
          </div>
        ))
      ) : (
        <p>No liked memes yet.</p>
      )}
    </div>
  );
};

export default LikedMemesGallery;
