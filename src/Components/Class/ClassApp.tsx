import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { TClassApp } from "./types";

export class ClassApp extends Component<TClassApp> {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };

  handleCorrectGuess = () => {
    this.setState((prevState: TClassApp) => ({
      correctCount: prevState.correctCount + 1
    }));
  }

  handleIncorrectGuess = () => {
    this.setState((prevState: TClassApp) => ({
      incorrectCount: prevState.incorrectCount + 1
    }));
  }

  render() {
    const { incorrectCount, correctCount } = this.state;
    const gameOn = <>
    <ClassScoreBoard 
      incorrectCount={incorrectCount}
      correctCount={correctCount}
    />
    <ClassGameBoard 
    handleCorrectGuess={this.handleCorrectGuess}
    handleIncorrectGuess={this.handleIncorrectGuess}
    />
  </>;
  const finalScore = <ClassFinalScore 
  correctCount={correctCount} 
  incorrectCount={incorrectCount} 
  />;

    return (
      <>
        {
          correctCount + incorrectCount < 4 
          ? gameOn
          : finalScore
        }
      </>
    );
  }
}
