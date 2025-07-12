import React, { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

const SuccessNotification = ({ message, isVisible, onClose, type = 'success' }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const getIcon = () => {
    switch (type) {
      case 'success': return <CheckCircle className="h-5 w-5 text-goodnotes-green" />;
      default: return <CheckCircle className="h-5 w-5 text-goodnotes-green" />;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'success': return 'bg-goodnotes-green/10 border-goodnotes-green/30';
      default: return 'bg-goodnotes-green/10 border-goodnotes-green/30';
    }
  };

  return (
    <div className="fixed top-20 right-4 z-50 animate-slide-in">
      <div className={`floating-card rounded-xl p-4 border ${getBgColor()} max-w-sm`}>
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            {getIcon()}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-goodnotes-dark">
              {message}
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 p-1 hover:bg-goodnotes-gray/50 rounded-lg transition-colors"
          >
            <X className="h-4 w-4 text-goodnotes-light-gray" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessNotification; 