import { Component } from 'react'
import { TClassApp } from './types'

export class ClassFinalScore extends Component<TClassApp> {
  render() {
    const { incorrectCount, correctCount } = this.props
    const totalCount = incorrectCount + correctCount

    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctCount}</p>
          <hr />
          <p>{totalCount}</p>
        </div>
      </div>
    )
  }
}
