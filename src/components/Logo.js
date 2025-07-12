import React from 'react';

const Logo = ({ className = "h-10 w-10", showText = true }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className={`${className} flex items-center justify-center bg-white rounded-lg p-1 shadow-sm`}>
        <img 
          src="/ScriptSchedule.jpg" 
          alt="ScriptSchedule Logo" 
          className="w-full h-full object-contain rounded-md"
        />
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-bold text-goodnotes-dark leading-tight">
            Script<span className="text-goodnotes-blue">Schedule</span>
          </span>
          <span className="text-xs text-goodnotes-light-gray -mt-1">
            AI-Powered Planning
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo; 