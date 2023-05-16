import { createContext, ReactNode, useState } from 'react';
import { playScoreSound } from './sounds';

type ScoreContextData = {
  score: number;
  minusScore(): void;
  plusScore(): void;
}

export const ScoreContext = createContext<ScoreContextData>({} as ScoreContextData);

type ScoreProviderProps = {
  children: ReactNode;
}

export function ScoreProvider({ children }: ScoreProviderProps) {
  const [score, setScore] = useState(0);

  function plusScore() {
    setScore(prevScore => prevScore + 1);
    playScoreSound();
  }

  function minusScore() {
    setScore(prevScore => prevScore - 1);
  }

  return (
    <ScoreContext.Provider value={{ score, minusScore, plusScore }}>
      {children}
    </ScoreContext.Provider>
  );
}
