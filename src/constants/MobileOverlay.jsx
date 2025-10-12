import React from 'react';
import './MobileOverlay.css';
const MobileOverlay = () => {
  return (
    <div className="overlay-backdrop">
      <div className="overlay-content">
        <h2>Desktop View Required</h2>
        <p>For the best experience, please use this site on a desktop or tablet.</p>
      </div>
    </div>
  );
};

export default MobileOverlay;