import React, { Fragment, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { useQuizDispatch, useQuizState } from '../context/QuizContext'

const QuizPage = () => {
  // const { id } = useParams()
  const { quiz, score } = useQuizState()
  const dispatch = useQuizDispatch()

  // 답지를 고르게 되면 false가 true로 변환된다.
  // 1. 다음으로 버튼이 보인다
  // 2. 정답인지 오답인지 보여준다.
  // 3. 오답일 경우 진짜 답을 보여준다.
  const [selected, setSelected] = useState<boolean>(false)
  // 퀴즈 넘버
  const [counter, setCounter] = useState<number>(1)
  // 현재 퀴즈
  const currentQuiz = quiz[counter - 1]
  console.log('!@#', currentQuiz)

  function handleRadioButton(e: React.ChangeEvent<HTMLInputElement>) {
    setSelected(true)
    dispatch({
      type: 'SET_SCORE',
      quiz: { question: e.target.value, number: counter },
    })
  }

  function handleNextButton() {
    setSelected(false)
    setCounter((counter) => counter + 1)
  }

  // 그 문제의 정답을 골랐는지 아닌지를 판단한다.
  function isCorrect(
    option: string,
    correct_answer: string,
    my_answer: string
  ) {
    return (
      option === correct_answer &&
      correct_answer === my_answer &&
      option === my_answer
    )
  }

  return (
    <>
      {counter > quiz.length ? (
        // 퀴즈가 끝날 경우
        <Navigate to="/score" />
      ) : (
        // 퀴즈가 진행중인 경우
        <div>
          <div>
            <div
              className="quiz-title"
              dangerouslySetInnerHTML={{ __html: `${currentQuiz.question}` }}
            ></div>
            <div>
              {currentQuiz !== undefined &&
                currentQuiz.options?.map((option: string, idx: number) => (
                  <label key={idx}>
                    <input
                      type="radio"
                      id={option}
                      name="quiz"
                      value={option}
                      checked={score[counter - 1] === option}
                      // 한 번 선택하면 답안지를 보여주기 때문에 conditional
                      onChange={!selected ? handleRadioButton : undefined}
                    />
                    <span
                      className={`quiz-title ${
                        isCorrect(
                          option,
                          currentQuiz.correct_answer,
                          score[counter - 1]
                        ) && 'correct'
                      } ${
                        !isCorrect(
                          option,
                          currentQuiz.correct_answer,
                          score[counter - 1]
                        ) &&
                        option === currentQuiz.correct_answer &&
                        'real-answer'
                      }`}
                      dangerouslySetInnerHTML={{ __html: `${option}` }}
                    />
                    <br />
                  </label>
                ))}
            </div>
          </div>
          {selected && <button onClick={handleNextButton}>Next</button>}
        </div>
      )}
    </>
  )
}

export default QuizPage
