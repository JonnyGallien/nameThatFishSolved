import { Component } from 'react'
import './styles/score-board.css'
import { TClassApp } from './types'

const initialAnswers = ['trout', 'salmon', 'tuna', 'shark']
type TClassScoreBoard = {
  answersLeft: string[]
}
export class ClassScoreBoard extends Component<TClassApp, TClassScoreBoard> {
  state = {
    answersLeft: initialAnswers,
  }

  componentDidUpdate(prevProps: TClassApp) {
    if (
      prevProps.incorrectCount !== this.props.incorrectCount ||
      prevProps.correctCount !== this.props.correctCount
    ) {
      this.updateAnswersLeft()
    }
  }

  updateAnswersLeft = () => {
    const { incorrectCount, correctCount } = this.props
    const totalAttempts = incorrectCount + correctCount
    const updatedAnswersLeft = initialAnswers.slice(totalAttempts)
    this.setState({ answersLeft: updatedAnswersLeft })
  }

  render() {
    const { answersLeft } = this.state
    const { incorrectCount, correctCount } = this.props
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    )
  }
}
