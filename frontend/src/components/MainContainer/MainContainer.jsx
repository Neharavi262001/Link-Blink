import React, { useRef, useState } from 'react';
import { FaLink } from 'react-icons/fa';
import './mainContainer.css';
import { uploadFile } from '../../service/api';

const MainContainer = () => {
    const fileInputRef = useRef(null);
    const [fileUrl, setFileUrl] = useState('');
    const [copySuccess, setCopySuccess] = useState(false);

    const handleUpload = async () => {
        if (fileInputRef.current && fileInputRef.current.files.length > 0) {
            const formData = new FormData();
            formData.append('file', fileInputRef.current.files[0]);

            try {
                const response = await uploadFile(formData);
                setFileUrl(response.path); // Assuming the response contains the file path
            } catch (error) {
                console.error('Error uploading file:', error.message);
            }
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(fileUrl).then(() => {
            setCopySuccess(true);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    const handleDownload = () => {
        if (fileUrl) {
            window.open(fileUrl, '_blank');
        }
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
                    onChange={handleUpload}
                />
                <button onClick={() => fileInputRef.current.click()} className="upload-button">
                    Upload
                </button>
            </div>
            {fileUrl && (
                <div className="link-container">
                    <p>Your generated link:</p>
                    <input
                        type="text"
                        value={fileUrl}
                        readOnly
                        onClick={copyToClipboard}
                    />
                    <button onClick={handleDownload}>Download</button>
                    {copySuccess && <span className="copy-success">Copied!</span>}
                </div>
            )}
        </div>
    );
};

export default MainContainer;


