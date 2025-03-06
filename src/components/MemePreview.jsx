import React from 'react';

const MemePreview = ({ memeFile, caption }) => {
  return (
    <div className="meme-preview">
      <h3>Preview Your Meme</h3>
      {memeFile && (
        <div className="meme-image">
          <img src={URL.createObjectURL(memeFile)} alt="Preview" />
        </div>
      )}
      <div className="caption-preview">
        <p>{caption}</p>
      </div>
    </div>
  );
};

export default MemePreview;

// import React from 'react';

// const MemePreview = ({ memeFile, caption }) => {
//   if (!memeFile) return null; // Don't render anything if there's no meme file

//   const previewUrl = URL.createObjectURL(memeFile);

//   return (
//     <div className="meme-preview">
//       <h3>Preview</h3>
//       <div>
//         <img src={previewUrl} alt="Meme Preview" style={{ maxWidth: '100%' }} />
//         <p>{caption}</p>
//       </div>
//     </div>
//   );
// };

// export default MemePreview;

