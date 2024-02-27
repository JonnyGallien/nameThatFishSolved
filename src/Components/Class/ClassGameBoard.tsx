import { Component } from 'react'
import './styles/game-board.css'
import { Images } from '../../assets/Images'

const initialFishes = [
  {
    name: 'trout',
    url: Images.trout,
  },
  {
    name: 'salmon',
    url: Images.salmon,
  },
  {
    name: 'tuna',
    url: Images.tuna,
  },
  {
    name: 'shark',
    url: Images.shark,
  },
]

type TClassGameBoard = {
  userGuess: string
  fishIndexCount: number
}

type TClassAppSetHandlers = {
  handleCorrectGuess: () => void
  handleIncorrectGuess: () => void
}

export class ClassGameBoard extends Component<
  TClassAppSetHandlers,
  TClassGameBoard
> {
  state = {
    userGuess: '',
    fishIndexCount: 0,
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { userGuess, fishIndexCount } = this.state
    const { handleCorrectGuess, handleIncorrectGuess } = this.props

    if (
      userGuess.toLowerCase() ===
      initialFishes[fishIndexCount].name.toLowerCase()
    ) {
      handleCorrectGuess()
    } else {
      handleIncorrectGuess()
    }
    this.setState((prevState) => ({
      userGuess: '',
      fishIndexCount: prevState.fishIndexCount + 1,
    }))
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ userGuess: e.target.value })
  }

  render() {
    const { userGuess } = this.state
    const currentFish = initialFishes[this.state.fishIndexCount]
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={currentFish.url} alt={currentFish.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            this.handleSubmit(e)
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={userGuess}
            onChange={this.handleInputChange}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
