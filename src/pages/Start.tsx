import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { StartButton } from '../components/Button'
import { useQuizDispatch } from '../context/QuizContext'
import { fetchQuiz } from '../helper/api'

const QUIZ_COUNT = 10

const StartPage = () => {
  const [loaded, setLoaded] = useState<boolean>(false)
  const dispatch = useQuizDispatch()
  const navigate = useNavigate()
  function handleButtonClick() {
    fetchQuiz(QUIZ_COUNT)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'SET_SCOREBOARD', count: QUIZ_COUNT })
        dispatch({ type: 'SET_QUIZ', quiz: data.results })
        setLoaded(true)
        navigate('/quiz/1')
      })
  }
  return (
    <div>
      <StartButton handleClick={handleButtonClick}>Start Quiz</StartButton>
    </div>
  )
}

export default StartPage
