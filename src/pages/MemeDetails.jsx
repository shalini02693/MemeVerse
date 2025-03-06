import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LikeButton from '../components/LikeButton';
import CommentSection from '../components/CommentSection';

const MemeDetails = () => {
  const { id } = useParams(); 
  const [meme, setMeme] = useState(null);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const memeDetails = {
      id,
      image: `https://placeimg.com/500/500/any?${id}`, 
      caption: `This is meme number ${id}`,
      comments: JSON.parse(localStorage.getItem(`meme-${id}-comments`)) || [],
      likes: JSON.parse(localStorage.getItem(`meme-${id}-likes`)) || 0,
    };
    setMeme(memeDetails);
    setLikes(memeDetails.likes);
  }, [id]);

  const handleLike = () => {
    const updatedLikes = likes + 1;
    setLikes(updatedLikes);
    localStorage.setItem(`meme-${id}-likes`, JSON.stringify(updatedLikes));
  };

  if (!meme) {
    return <p>Loading...</p>;
  }

  return (
    <div className="meme-details">
      <h2>Meme Details</h2>
      <div className="meme-image">
        <img src={meme.image} alt={`Meme ${meme.id}`} />
      </div>
      <h3>{meme.caption}</h3>
      <div className="meme-interactions">
        <LikeButton likes={likes} onLike={handleLike} />
        <p>{likes} Likes</p>
      </div>
      <CommentSection memeId={id} />
    </div>
  );
};

export default MemeDetails;
