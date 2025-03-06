import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';  // For drag-and-drop image upload
import axios from 'axios';
import CaptionEditor from '../components/CaptionEditor';
import MemePreview from '../components/MemePreview';

const MemeUpload = () => {
  const [memeFile, setMemeFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [generatedCaption, setGeneratedCaption] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  // Handle file upload through drag-and-drop
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setMemeFile(file);
  };

  // react-dropzone hooks for drag-and-drop functionality
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*, .gif', // Accept image and GIF files
    onDrop,
  });

  // Handle manual caption change from the editor
  const handleCaptionChange = (newCaption) => {
    setCaption(newCaption);
  };

  // Generate a meme caption using an external API (example used)
  const handleGenerateCaption = async () => {
    try {
      if (!memeFile) {
        alert('Please upload a meme first!');
        return;
      }

      // Make a request to an AI meme caption generator API (replace with a real API)
      const response = await axios.post('https://api.imgflip.com/get_memes');
      
      // Pick a random meme name as the generated caption (for demo purposes)
      const randomMeme = response.data.data.memes[Math.floor(Math.random() * response.data.data.memes.length)];
      const generatedCaption = randomMeme.name;
      
      setGeneratedCaption(generatedCaption);
      setCaption(generatedCaption); // Auto-set generated caption in the editor
    } catch (error) {
      console.error('Error generating caption:', error);
      alert('Failed to generate caption. Please try again.');
    }
  };

  // Upload meme to the server (fake upload simulation here)
  const handleUploadMeme = () => {
    if (!memeFile || !caption) {
      alert('Please upload a meme and add a caption!');
      return;
    }

    setIsUploading(true);

    // Simulate uploading process (replace with actual upload logic)
    setTimeout(() => {
      setIsUploading(false);
      alert('Meme uploaded successfully!');
    }, 2000);
  };

  return (
    <div className="meme-upload">
      <h2>Upload Your Meme</h2>

      {/* Meme Upload Section */}
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        {memeFile ? (
          <p>{memeFile.name}</p> // Display the file name after being selected
        ) : (
          <p>Drag & Drop a Meme Image or GIF Here</p>
        )}
      </div>

      {/* Caption Editor Section */}
      <CaptionEditor caption={caption} setCaption={handleCaptionChange} />

      {/* AI Caption Generator */}
      <button onClick={handleGenerateCaption} disabled={!memeFile}>
        Generate Caption (AI)
      </button>

      {generatedCaption && <p><strong>Generated Caption:</strong> {generatedCaption}</p>}

      {/* Meme Preview Section */}
      <MemePreview memeFile={memeFile} caption={caption} />

      {/* Upload Meme Button */}
      <button
        onClick={handleUploadMeme}
        disabled={isUploading || !memeFile || !caption}
      >
        {isUploading ? 'Uploading...' : 'Upload Meme'}
      </button>
    </div>
  );
};

export default MemeUpload;
