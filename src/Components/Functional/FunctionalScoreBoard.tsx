import { useEffect, useState } from "react";
import "./styles/score-board.css";
//  Where the score is presented


const initialAnswers = ["trout", "salmon", "tuna", "shark"];

interface TCorrectIncorrectCount  {
  correct: number,
  incorrect: number,
}

export function FunctionalScoreBoard(props: TCorrectIncorrectCount) {
  const [answersLeft, setAnswersLeft] = useState<string[]>(initialAnswers)
  const { correct, incorrect } = props;
  
  useEffect(() => {
    const totalToRemove = correct + incorrect;
    if (totalToRemove > 0) {
      setAnswersLeft(prevAnswersLeft => prevAnswersLeft.slice(1));
    }
  }, [correct, incorrect]);

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrect}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correct}</div>
    </div>
  );
}
