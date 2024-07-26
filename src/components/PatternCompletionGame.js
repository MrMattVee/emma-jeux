import React, { useState, useEffect, useCallback } from 'react';

// ... (emojis array remains the same)

const PatternCompletionGame = () => {
  // ... (state declarations remain the same)

  const startNewRound = useCallback(() => {
    const newPattern = generatePattern();
    setPattern(newPattern.slice(0, -1));
    setCorrectAnswer(newPattern[newPattern.length - 1]);
    setOptions(generateOptions(newPattern[newPattern.length - 1]));
    setMessage('');
    setShowCongrats(false);
  }, []);

  useEffect(() => {
    startNewRound();
  }, [startNewRound]);

  // ... (rest of the component remains the same)
};

export default PatternCompletionGame;
