import React, { useState, Suspense, lazy, useMemo } from 'react';
import ErrorBoundary from './components/ErrorBoundary';

const EmmasPlaygroundHub = lazy(() => import('./components/EmmasPlaygroundHub'));
const ColorMatchingGame = lazy(() => import('./components/ColorMatchingGame'));
const ShapeMatchingGame = lazy(() => import('./components/ShapeMatchingGame'));
const AnimalMatchingGame = lazy(() => import('./components/AnimalMatchingGame'));
const EverydayObjectRecognitionGame = lazy(() => import('./components/EverydayObjectRecognitionGame'));
const PatternCompletionGame = lazy(() => import('./components/PatternCompletionGame'));
const PlanificateurVisuel = lazy(() => import('./components/PlanificateurVisuel'));
const ShapeSandboxGame = lazy(() => import('./components/ShapeSandboxGame'));

function App() {
  const [currentGame, setCurrentGame] = useState(null);

  const renderGame = useMemo(() => {
    switch (currentGame) {
      case 'colors':
        return <ColorMatchingGame onBack={() => setCurrentGame(null)} />;
      case 'shapes':
        return <ShapeMatchingGame onBack={() => setCurrentGame(null)} />;
      case 'animals':
        return <AnimalMatchingGame onBack={() => setCurrentGame(null)} />;
      case 'objects':
        return <EverydayObjectRecognitionGame onBack={() => setCurrentGame(null)} />;
      case 'patterns':
        return <PatternCompletionGame onBack={() => setCurrentGame(null)} />;
      case 'planificateur':
        return <PlanificateurVisuel onBack={() => setCurrentGame(null)} />;
      case 'shapeSandbox':
        return <ShapeSandboxGame onBack={() => setCurrentGame(null)} />;
      default:
        return <EmmasPlaygroundHub onGameSelect={setCurrentGame} />;
    }
  }, [currentGame]);

  return (
    <div className="App">
      <ErrorBoundary>
        <Suspense fallback={<div className="text-center p-4 text-xl">Chargement...</div>}>
          {renderGame}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
