import React, { Fragment, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  QuizInterface,
  useQuizDispatch,
  useQuizState,
} from '../../context/QuizContext'

const Content: React.FC<{ number: number }> = ({ number }) => {
  const state = useQuizState()
  const dispatch = useQuizDispatch()

  const { quiz } = state
  const currentQuiz = quiz[number - 1]

  function handleRadioButton(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: 'SET_SCORE',
      quiz: { question: e.target.value, number: number },
    })
  }

  return (
    <div>
      <div
        className="quiz-title"
        dangerouslySetInnerHTML={{ __html: `${currentQuiz.question}` }}
      ></div>
      <div>
        {currentQuiz !== undefined &&
          currentQuiz.options?.map((option: string, idx: number) => (
            <Fragment key={idx}>
              <input
                type="radio"
                id={option}
                name="quiz"
                value={option}
                checked={state.score[number - 1] === option}
                onChange={handleRadioButton}
              />
              <span
                className="quiz-title"
                dangerouslySetInnerHTML={{ __html: `${option}` }}
              />
            </Fragment>
          ))}
      </div>
    </div>
  )
}

export default Content
