import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NotFoundPage = () => {
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    
    axios.get('https://api.imgflip.com/get_memes')
      .then((response) => {
        const memes = response.data.data.memes;
        
        const randomMeme = memes[Math.floor(Math.random() * memes.length)];
        setMeme(randomMeme);
      })
      .catch((error) => {
        console.error('Error fetching meme:', error);
      });
  }, []);

  return (
    <div className="notfound-page">
      <h1>Oops! Page Not Found</h1>
      <p>Looks like you're lost in the meme-verse!</p>
      
      {meme ? (
        <div className="meme-container">
          <img src={meme.url} alt="Random Meme" />
          <p>{meme.name}</p>
        </div>
      ) : (
        <p>Loading meme...</p>
      )}

      <p>Go back to the homepage or enjoy this random meme! 😄</p>
    </div>
  );
};

export default NotFoundPage;
