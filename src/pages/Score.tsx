import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuizState } from '../context/QuizContext'

const ScorePage = () => {
  const state = useQuizState()

  console.log(state)
  return <div>ScorePage</div>
}

export default ScorePage
