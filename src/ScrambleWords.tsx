import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import confetti from 'canvas-confetti';
import { Play, SkipForward } from 'lucide-react';
import React, { useEffect, useReducer } from 'react';
import {
  getInitialState,
  scrambleWordsReducer,
} from './reducer/scrambleWordReducer';

export const ScrambleWords = () => {
  const [state, dispatch] = useReducer(scrambleWordsReducer, getInitialState());

  const {
    words,
    currentWord,
    errorCounter,
    guess,
    isGameOver,
    maxAllowErrors,
    maxSkips,
    points,
    scrambledWord,
    skipCounter,
    totalWords,
  } = state;

  useEffect(() => {
    if (points === 0) return;
    confetti({
      particleCount: 100,
      spread: 120,
      origin: { y: 0.6 },
    });
  }, [points]);

  const handleGuessSubmit = (e: React.FormEvent) => {
    // Previene el refresh de la página
    e.preventDefault();

    // Implementar lógica de juego
    dispatch({ type: 'CHECK_ANSWER' });
  };

  const handleSkip = () => {
    dispatch({ type: 'SKIP_WORD' });
  };

  const handlePlayAgain = () => {
    dispatch({ type: 'START_NEW_GAME', payload: getInitialState() });
  };

  //! Si ya no hay palabras para jugar, se muestra el mensaje de fin de juego
  if (words.length === 0) {
    return (
      <div className="p-4 min-h-screen bg-linear-to-br justify-center from-purple-100 via-blue-50 to-indigo-100 flex items-center">
        <div className="w-full max-w-md mx-auto">
          <h1 className="mb-2 text-4xl font-bold bg-linear-to-r bg-clip-text text-transparent from-purple-600 to-blue-600">
            Palabras desordenadas
          </h1>
          <p className="text-gray-600">No hay palabras para jugar</p>
          <br />
          <div>Puntaje: {points}</div>
          <br />
          <div>Errores: {errorCounter}</div>
          <br />
          <div>Saltos: {skipCounter}</div>
          <br />
          <Button onClick={handlePlayAgain}>Jugar de nuevo</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 min-h-screen bg-linear-to-br justify-center from-purple-100 via-blue-50 to-indigo-100 flex items-center">
      <div className="w-full max-w-md mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold bg-linear-to-r bg-clip-text text-transparent from-purple-600 to-blue-600">
            Palabras desordenadas
          </h1>
          <p className="text-gray-600">
            Ordena las letras para encontrar la palabra!
          </p>
        </div>

        {/* Main Game Card */}
        <Card className="bg-white/80 border-0 shadow-xl backdrop-blur-sm">
          <CardContent className="p-8">
            {/* Scrambled Word Display */}
            <div className="mb-8">
              <h2 className="mb-4 gap-2 text-center text-sm font-medium text-gray-500 justify-center uppercase tracking-wide flex items-center">
                Palabra Desordenada
                {isGameOver && (
                  <span className="text-red-500 text-xl"> {currentWord}</span>
                )}
              </h2>

              <div className="gap-2 mb-6 justify-center flex">
                {scrambledWord.split('').map((letter, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 bg-linear-to-br rounded-lg justify-center text-white font-bold text-xl shadow-lg from-indigo-500 to-purple-600 flex items-center transform hover:scale-105 transition-transform duration-200"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fadeInUp 0.6s ease-out forwards',
                    }}>
                    {letter}
                  </div>
                ))}
              </div>
            </div>

            {/* Guess Input */}
            <form onSubmit={handleGuessSubmit} className="mb-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="guess"
                    className="mb-2 text-sm font-medium text-gray-700 block">
                    Adivina la palabra
                  </label>
                  <Input
                    id="guess"
                    type="text"
                    value={guess}
                    onChange={(e) => {
                      dispatch({ type: 'SET_GUESS', payload: e.target.value });
                    }}
                    placeholder="Ingresa tu palabra..."
                    className="text-center text-lg font-semibold h-12 border-2 border-indigo-200 focus:border-indigo-500 transition-colors"
                    maxLength={scrambledWord.length}
                    disabled={isGameOver}
                  />
                </div>
                <Button
                  type="submit"
                  className="py-3 w-full bg-linear-to-r text-white font-semibold rounded-lg shadow-lg from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                  disabled={!guess.trim() || isGameOver}>
                  Enviar Adivinanza
                </Button>
              </div>
            </form>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-linear-to-br rounded-lg text-center border border-green-200 from-green-50 to-emerald-50">
                <div className="text-2xl font-bold text-green-600">
                  {points} / {totalWords}
                </div>
                <div className="text-sm text-green-700 font-medium">Puntos</div>
              </div>
              <div className="p-4 bg-linear-to-br rounded-lg text-center border border-red-200 from-red-50 to-rose-50">
                <div className="text-2xl font-bold text-red-600">
                  {errorCounter}/{maxAllowErrors}
                </div>
                <div className="text-sm text-red-700 font-medium">Errores</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={handleSkip}
                variant="outline"
                className="gap-2 border-2 border-gray-300 justify-center hover:border-gray-400 hover:bg-gray-50 transition-colors flex items-center"
                disabled={isGameOver || skipCounter >= maxSkips}>
                <SkipForward className="w-4 h-4" />
                Saltar ({skipCounter} / {maxSkips})
              </Button>
              <Button
                onClick={handlePlayAgain}
                variant="outline"
                className="gap-2 border-2 border-indigo-300 text-indigo-600 justify-center hover:border-indigo-400 hover:bg-indigo-50 transition-colors flex items-center">
                <Play className="w-4 h-4" />
                Jugar de nuevo
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Desafíate con palabras desordenadas!
            <br />
            <br />
            {words.join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};
