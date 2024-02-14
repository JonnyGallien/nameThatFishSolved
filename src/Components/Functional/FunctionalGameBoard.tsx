import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { useState } from "react";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

interface FunctionalGameBoardProps {
  handleCorrectGuess: () => void;
  handleIncorrectGuess: () => void;
}

export function FunctionalGameBoard({ handleCorrectGuess, handleIncorrectGuess }: FunctionalGameBoardProps ) {
  const [userGuess, setUserGuess] = useState<string>('');
  const [fishIndex, setFishIndex] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userGuess === initialFishes[fishIndex].name
    ? handleCorrectGuess()
    : handleIncorrectGuess();
    setUserGuess('');
    setFishIndex(fishIndex + 1);
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={initialFishes[fishIndex].url} alt={initialFishes[fishIndex].name} />
      </div>
      <form id="fish-guess-form" onSubmit={(e: React.FormEvent<HTMLFormElement>) => {handleSubmit(e)}}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input type="text" name="fish-guess" value={userGuess} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUserGuess(e.target.value)
        } />
        <input type="submit" />
      </form>
    </div>
  );
}
