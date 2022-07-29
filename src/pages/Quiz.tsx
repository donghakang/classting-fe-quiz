import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import Content from '../components/Content'
import { useQuizState } from '../context/QuizContext'

const QuizPage = () => {
  const [counter, setCounter] = useState(0)
  const state = useQuizState()

  const { id } = useParams()
  const navigate = useNavigate()

  function handleNextButton() {
    if (id) {
      navigate(`/quiz/${+id + 1}`)
    }
  }
  return (
    <>
      {id ? (
        <>
          {+id > state.quiz.length ? (
            // 퀴즈가 끝날 경우
            <Navigate to="/score" />
          ) : (
            // 퀴즈가 진행중인 경우
            <div>
              <Content quiz={state.quiz[+id - 1]} number={+id} />
              {/* <button onClick={handleNextButton}>Next</button> */}
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
