"use client"
import { useEffect } from 'react';

const DevfolioButton = ({ hackathonSlug = "YOUR-HACKATHON-SLUG", theme = "light" }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      className="apply-button"
      data-hackathon-slug={hackathonSlug}
      data-button-theme={theme}
      style={{ height: '44px', width: '312px' }}
    />
  );
};

export default DevfolioButton;