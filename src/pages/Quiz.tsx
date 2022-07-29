import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import Content from '../components/Content'
import { useQuizState } from '../context/QuizContext'

const QuizPage = () => {
  const { id } = useParams()
  const { quiz, score } = useQuizState()
  const navigate = useNavigate()

  function handleNextButton() {
    if (id) {
      if (score[+id - 1] !== '') {
        // 답을 선택할 때에만 넘길 수 있도록 한다.
        navigate(`/quiz/${+id + 1}`)
      }
    }
  }
  return (
    <>
      {id ? (
        <>
          {+id > quiz.length ? (
            // 퀴즈가 끝날 경우
            <Navigate to="/score" />
          ) : (
            // 퀴즈가 진행중인 경우
            <div>
              <Content number={+id} />
              <button onClick={handleNextButton}>Next</button>
            </div>
          )}
        </>
      ) : (
        // 퀴즈 URL이 잘못된 경우
        <Navigate to="/quiz/1" />
      )}
    </>
  )
}

export default QuizPage
