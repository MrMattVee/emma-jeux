import React, { useState, useEffect, useCallback } from 'react';

// ... (colors array remains the same)

const ColorMatchingGame = () => {
  // ... (state declarations remain the same)

  const startNewRound = useCallback(() => {
    const newTargetColor = colors[Math.floor(Math.random() * colors.length)];
    const newOptions = shuffleArray([...colors]).slice(0, 4);
    if (!newOptions.includes(newTargetColor)) {
      newOptions[Math.floor(Math.random() * 4)] = newTargetColor;
    }
    setTargetColor(newTargetColor);
    setOptions(newOptions);
    setMessage('');
    setShowCongrats(false);
  }, []);

  useEffect(() => {
    startNewRound();
  }, [startNewRound]);

  // ... (rest of the component remains the same)
};

export default ColorMatchingGame;
