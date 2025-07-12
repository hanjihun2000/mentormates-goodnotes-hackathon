import React, { useState, useRef } from 'react';
import { Upload, Camera, Image as ImageIcon } from 'lucide-react';

const UploadZone = ({ onImageUpload, isProcessing }) => {
  const [dragOver, setDragOver] = useState(false);
  const [showDemoPreview, setShowDemoPreview] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    const imageFile = files.find(file => file.type.startsWith('image/'));
    
    if (imageFile) {
      onImageUpload(imageFile);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      onImageUpload(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`upload-zone ${dragOver ? 'drag-over' : ''} ${isProcessing ? 'opacity-50' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <div className="flex flex-col items-center justify-center p-12 cursor-pointer">
          <div className="mb-6">
            {isProcessing ? (
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-goodnotes-blue border-t-transparent"></div>
            ) : (
              <div className="p-4 bg-goodnotes-blue/10 rounded-full">
                <Upload className="h-12 w-12 text-goodnotes-blue" />
              </div>
            )}
          </div>
          
          <h3 className="text-2xl font-bold text-goodnotes-dark mb-3">
            {isProcessing ? '🤖 Processing your image...' : '📝 Upload Your Handwritten To-Do List'}
          </h3>
          
          <p className="text-goodnotes-light-gray text-center mb-6 text-lg">
            {isProcessing 
              ? 'Our AI is extracting tasks from your image. This may take a moment.'
              : 'Drag and drop your screenshot here, or click to browse files'
            }
          </p>
          
          {!isProcessing && (
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <button className="flex items-center justify-center space-x-2 bg-goodnotes-blue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                <ImageIcon className="h-5 w-5" />
                <span>Choose File</span>
              </button>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDemoPreview(true);
                }}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-goodnotes-green to-goodnotes-blue text-white px-8 py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                <Camera className="h-5 w-5" />
                <span>✨ Try Demo</span>
              </button>
            </div>
          )}
          
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>
      </div>
      
      {!isProcessing && (
        <div className="mt-6 text-center">
          <p className="text-sm text-goodnotes-light-gray">
            Supported formats: PNG, JPG, JPEG, HEIC
          </p>
        </div>
      )}
      
      {/* Demo Preview Modal */}
      {showDemoPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-goodnotes-dark mb-4">Demo Preview</h3>
            <div className="mb-4">
              <img 
                src="/sample-todo.svg" 
                alt="Sample to-do list" 
                className="w-full h-48 object-contain border rounded-lg"
              />
            </div>
            <p className="text-goodnotes-light-gray text-sm mb-6">
              This sample handwritten to-do list contains 7 workplace tasks. Click "Process Demo" to extract and view them.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowDemoPreview(false)}
                className="flex-1 px-4 py-2 text-goodnotes-light-gray border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowDemoPreview(false);
                  // Load demo image
                  fetch('/sample-todo.svg')
                    .then(response => response.blob())
                    .then(blob => {
                      const file = new File([blob], 'sample-todo.svg', { type: 'image/svg+xml' });
                      onImageUpload(file);
                    });
                }}
                className="flex-1 px-4 py-2 bg-goodnotes-blue text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
              >
                Process Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadZone; 