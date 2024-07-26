import React, { useState, useEffect, useCallback } from 'react';

// ... (emojis array remains the same)

const EverydayObjectRecognitionGame = () => {
  // ... (state declarations remain the same)

  const startNewRound = useCallback(() => {
    const newCurrentObject = emojis[Math.floor(Math.random() * emojis.length)];
    const newOptions = getRandomOptions(newCurrentObject);
    setCurrentObject(newCurrentObject);
    setOptions(newOptions);
    setMessage('');
    setShowCongrats(false);
  }, []);

  useEffect(() => {
    startNewRound();
  }, [startNewRound]);

  // ... (rest of the component remains the same)
};

export default EverydayObjectRecognitionGame;
