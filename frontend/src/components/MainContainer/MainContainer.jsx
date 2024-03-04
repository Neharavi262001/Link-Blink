import React, { useRef, useState } from 'react';
import { FaLink } from 'react-icons/fa'
import './mainContainer.css'

const MainContainer = () => {
    
    const fileInputRef = useRef(null);
    const [fileUrl, setFileUrl] = useState('');
    const [copySuccess, setCopySuccess] = useState(false);

    const handleUpload = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(fileUrl).then(() => {
            console.log('Copied to clipboard successfully',copiedValue);
            setCopySuccess(true);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };
    
  return (
    <div className="main-container">
    <h1>
      Welcome to <span>LinkBlink <FaLink /></span> 
    </h1>
    <h2>Share in the Blink of an Eye with LinkBlink!</h2>
    <div className="instructions">
      <p>Instructions:</p>
      <ol>
        <li>Click the 'Upload' button.</li>
        <li>Select the file you want to share.</li>
        <li>Once uploaded, copy the generated link.</li>
        <li>Share the link with anyone you want to share the file with.</li>
        <li>Click the link to download the file directly.</li>
        <li>Enjoy seamless file sharing with LinkBlink!</li>
      </ol>
    </div>
    <div className="upload-container">
      <input
        type="file"
        id="file-input"
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <button onClick={handleUpload} className="upload-button">
        Upload
      </button>
    </div>
    <div className="link-container">
        <p>Your generated link:</p>
        <input
          type="text"
          value={fileUrl}
          readOnly
          onClick={copyToClipboard}
        />
        {copySuccess && <span className="copy-success">Copied!</span>}
      </div>
    
    {/* {fileUrl && (
      <div className="link-container">
        <p>Your generated link:</p>
        <input
          type="text"
          value={fileUrl}
          readOnly
          onClick={copyToClipboard}
        />
        {copySuccess && <span className="copy-success">Copied!</span>}
      </div>
    )} */}
  </div>
  )
}

export default MainContainer
