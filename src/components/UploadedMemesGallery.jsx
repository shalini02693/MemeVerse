import React from 'react';

const UploadedMemesGallery = ({ memes }) => {
  return (
    <div className="memes-gallery">
      {memes.length > 0 ? (
        memes.map((meme, index) => (
          <div key={index} className="meme-card">
            <img src={meme.image} alt={`Uploaded Meme ${index + 1}`} />
            <p>{meme.caption}</p>
          </div>
        ))
      ) : (
        <p>No memes uploaded yet.</p>
      )}
    </div>
  );
};

export default UploadedMemesGallery;
