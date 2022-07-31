import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { StartButton } from '../components/Button'
import { useQuizDispatch } from '../context/QuizContext'
import { fetchQuiz } from '../helper/api'
import * as S from './style'
const QUIZ_COUNT = 10

const StartPage = () => {
  const dispatch = useQuizDispatch()
  const navigate = useNavigate()
  function handleButtonClick() {
    fetchQuiz(QUIZ_COUNT)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'SET_SCOREBOARD', count: QUIZ_COUNT })
        dispatch({ type: 'SET_QUIZ', quiz: data.results })
        navigate('/quiz')
      })
  }
  return (
    <S.Start>
      <StartButton handleClick={handleButtonClick}>퀴즈 풀기</StartButton>
    </S.Start>
  )
}

export default StartPage
