import React, { useEffect } from 'react';
import { useIsMobile } from './constants/useIsMoblie';
import MobileOverlay from './constants/MobileOverlay';

function Warning() {
  const isMobile = useIsMobile();

  useEffect(() => {
    const mainContent = document.getElementById('main-content-wrapper');
    if (mainContent) {
      if (isMobile) {
        mainContent.classList.add('content-blurred');
      } else {
        mainContent.classList.remove('content-blurred');
      }
    }
  }, [isMobile]);

  return (
    <>
      {isMobile && <MobileOverlay />}

      <div id="main-content-wrapper">
        
        <main>
         
          <p>
            {isMobile
              ? "The site is currently locked. Please switch to a larger screen."
              : ""}
          </p>
         
        </main>
      </div>
    </>
  );
}

export default Warning;