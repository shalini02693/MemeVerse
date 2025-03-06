import React from 'react';

const CaptionEditor = ({ caption, setCaption }) => {
  return (
    <div className="caption-editor">
      <h3>Edit Caption</h3>
      <textarea
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Add a funny caption here..."
        rows="5"
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default CaptionEditor;
