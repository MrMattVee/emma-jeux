import React, { useState, useEffect, useCallback } from 'react';

// ... (animals array remains the same)

const AnimalMatchingGame = () => {
  // ... (state declarations remain the same)

  const startNewRound = useCallback(() => {
    const newTargetAnimal = animals[Math.floor(Math.random() * animals.length)];
    const newOptions = shuffleArray([...animals]).slice(0, 4);
    if (!newOptions.includes(newTargetAnimal)) {
      newOptions[Math.floor(Math.random() * 4)] = newTargetAnimal;
    }
    setTargetAnimal(newTargetAnimal);
    setOptions(newOptions);
    setMessage('');
    setShowCongrats(false);
  }, []);

  useEffect(() => {
    startNewRound();
  }, [startNewRound]);

  // ... (rest of the component remains the same)
};

export default AnimalMatchingGame;
