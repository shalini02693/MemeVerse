import React, { useState, useEffect } from 'react';

const CommentSection = ({ memeId }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  // Load comments from localStorage
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem(`meme-${memeId}-comments`)) || [];
    setComments(savedComments);
  }, [memeId]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      const updatedComments = [...comments, comment];
      setComments(updatedComments);
      localStorage.setItem(`meme-${memeId}-comments`, JSON.stringify(updatedComments));
      setComment('');
    }
  };

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Add a comment..."
      />
      <button onClick={handleCommentSubmit}>Post Comment</button>

      <div className="comments-list">
        {comments.length > 0 ? (
          comments.map((comment, index) => <p key={index}>{comment}</p>)
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
