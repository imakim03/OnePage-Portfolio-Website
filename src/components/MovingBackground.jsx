import React, { useState, useEffect } from 'react';
import '../styles/MovingBackground.css';

const MovingBackground = ({ children }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCursorPosition({
      x: event.clientX,
      y: event.pageY
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div id="gradient-bg">
        <div className="gradient-container">
          <div className="gradient1"></div>
          <div className="gradient2"></div>
          <div className="gradient3"></div>
          <div className="gradient4"></div>
          <div className="gradient5"></div>
        </div>
      </div>

      <div
        className="cursor-tracker"
        style={{
          left: `calc(${cursorPosition.x}px - 200px)`,
          top: `calc(${cursorPosition.y}px - 200px)`
        }}
      ></div>

      <div>
        {children}
      </div>
    </>
  );
};

export default MovingBackground;