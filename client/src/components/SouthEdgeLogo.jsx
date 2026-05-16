import React from 'react';

const SouthEdgeLogo = ({ colorMode = 'original', className = '', width = '200', height = 'auto' }) => {
  // Brand Colors
  const navy = '#1B2A4A';
  const olive = '#6B7A3E';
  
  // Logic for color mode
  const getPrimaryColor = () => colorMode === 'white' ? '#FAFAF7' : navy;
  const getSecondaryColor = () => colorMode === 'white' ? '#FAFAF7' : olive;

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 500 150" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Tasmania Outline (Simplified/Stylized) */}
      <path 
        d="M420 40C425 35 435 30 445 35C455 40 460 50 455 65C450 80 440 95 430 105C420 115 405 125 390 120C375 115 370 100 375 85C380 70 395 50 410 45C415 42 418 41 420 40Z" 
        stroke={getSecondaryColor()} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Leaf Icon */}
      <path 
        d="M30 110C30 110 20 90 25 70C30 50 50 30 70 25C90 20 110 30 115 50C120 70 110 90 90 105C70 120 50 115 30 110Z" 
        fill={getSecondaryColor()} 
        fillOpacity="0.8"
      />
      <path 
        d="M30 110L80 60" 
        stroke="#FAFAF7" 
        strokeWidth="2" 
        strokeLinecap="round"
      />

      {/* Main Text: South */}
      <text 
        x="120" 
        y="85" 
        fill={getPrimaryColor()} 
        style={{ font: 'italic 600 72px "Cormorant Garamond", serif' }}
      >
        South
      </text>
      
      {/* Main Text: Edge */}
      <text 
        x="295" 
        y="85" 
        fill={getSecondaryColor()} 
        style={{ font: '600 72px "Cormorant Garamond", serif' }}
      >
        Edge
      </text>
      
      {/* Subtext: PRODUCE */}
      <text 
        x="200" 
        y="125" 
        fill={getPrimaryColor()} 
        style={{ font: 'bold 22px "Inter", sans-serif', letterSpacing: '0.5em' }}
      >
        PRODUCE
      </text>
    </svg>
  );
};

export default SouthEdgeLogo;
