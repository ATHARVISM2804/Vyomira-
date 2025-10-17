import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface CalendlyPopupProps {
  url: string;
  open: boolean;
  onClose: () => void;
  title?: string;
}

const CalendlyPopup: React.FC<CalendlyPopupProps> = ({ url, open, onClose, title }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  if (!open) return null;

  const modalContent = (
    <div 
      className="fixed inset-0 z-[10000]"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
    >
      <div 
        className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm" 
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      ></div>
      <div 
        className="relative bg-white rounded-2xl shadow-2xl flex flex-col z-10"
        style={{
          width: '100%',
          maxWidth: '800px',
          height: '90vh',
          maxHeight: '800px',
          position: 'relative'
        }}
      >
        <div className="flex justify-between items-center p-4 border-b bg-white rounded-t-2xl flex-shrink-0">
          <span className="font-bold text-lg text-gray-800">{title || 'Schedule a Meeting'}</span>
          <button 
            onClick={onClose} 
            className="text-2xl font-bold px-2 py-1 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors w-8 h-8 flex items-center justify-center flex-shrink-0"
          >
            ×
          </button>
        </div>
        <div className="relative flex-1 w-full bg-white rounded-b-2xl overflow-hidden min-h-0">
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-white z-20">
              <div className="flex flex-col items-center">
                <svg className="animate-spin h-8 w-8 text-blue-500 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                <span className="text-sm text-blue-500">Loading calendar...</span>
              </div>
            </div>
          )}
          <iframe
            src={url}
            title="Calendly Scheduling"
            className="w-full h-full border-0"
            allow="camera; microphone; fullscreen"
            onLoad={() => setLoaded(true)}
          ></iframe>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default CalendlyPopup;


// How to use it 
  // <CalendlyPopup
  //       url="https://calendly.com/careersparushapandey/30min"
  //       open={showCalendly}
  //       onClose={() => setShowCalendly(false)}
  //       title="Schedule a Meeting"
  //     />