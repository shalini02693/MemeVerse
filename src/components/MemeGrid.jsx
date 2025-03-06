import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MemeCard from './MemeCard';

const MemeGrid = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    axios.get('https://api.imgflip.com/get_memes')
      .then(response => setMemes(response.data.data.memes))
      .catch(error => console.log('Error fetching memes:', error));
  }, []);

  return (
    <div className="meme-grid">
      {memes.map((meme) => (
        <MemeCard key={meme.id} meme={meme} />
      ))}
    </div>
  );
};

export default MemeGrid;
