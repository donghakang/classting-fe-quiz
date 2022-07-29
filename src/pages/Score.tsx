import React from 'react'
import { useParams } from 'react-router-dom'
import { QuizInterface, useQuizState } from '../context/QuizContext'
import { scoreboard } from '../helper/score'

const ScorePage = () => {
  const { quiz, score } = useQuizState()
  const counter = scoreboard(
    quiz.map((answer: QuizInterface) => answer.correct_answer),
    score
  )

  return (
    <div>
      {counter}/{score.length}
    </div>
  )
}

export default ScorePage
