import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";


export function FunctionalApp() {
  const [correct, setCorrect] = useState<number>(0);
  const [incorrect, setIncorrect] = useState<number>(0);

  const handleCorrectGuess = () => {
    setCorrect(prevCorrect => prevCorrect + 1);
  };

  const handleIncorrectGuess = () => {
    setIncorrect(prevIncorrect => prevIncorrect + 1);
  };

  const gameOn = 
    <>
      <FunctionalScoreBoard 
        correct={correct} 
        incorrect={incorrect}
      />
      <FunctionalGameBoard
        handleCorrectGuess={handleCorrectGuess}
        handleIncorrectGuess={handleIncorrectGuess}
      />
    </>;
    
  const finalScores = 
    <FunctionalFinalScore 
      correct={correct}
      incorrect={incorrect}
    />;

  return (
    <>
      {
        correct + incorrect < 4
        ? gameOn
        : finalScores
      }
    </>
  );
}
