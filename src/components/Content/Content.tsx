import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { QuizInterface, useQuizDispatch } from '../../context/QuizContext'

const Content: React.FC<{ number: number; quiz: QuizInterface }> = ({
  quiz,
  number,
}) => {
  const [answer, setAnswer] = useState<string>('')
  const navigate = useNavigate()
  const dispatch = useQuizDispatch()
  console.log(quiz)
  function handleRadioButton(e: React.ChangeEvent<HTMLInputElement>) {
    setAnswer(e.target.value)
  }

  function handleNextButton() {
    if (answer === quiz.correct_answer) {
      // 정답입니다!
      dispatch({ type: 'SET_SCORE', question: number })
    }
    navigate(`/quiz/${number + 1}`)
  }

  // 매번 리스트가 변하지 않도록
  const quizlist = useMemo(
    () =>
      [quiz.correct_answer, ...quiz.incorrect_answers].sort(
        () => Math.random() - 0.5
      ),
    [quiz]
  )

  return (
    <div>
      <div
        className="quiz-title"
        dangerouslySetInnerHTML={{ __html: `${quiz.question}` }}
      ></div>
      <div>
        {quizlist.map((option: string, idx: number) => (
          <>
            <input
              key={`option-${idx}`}
              type="radio"
              id={option}
              name="quiz"
              value={option}
              checked={answer === option}
              onChange={handleRadioButton}
            />
            <span
              className="quiz-title"
              dangerouslySetInnerHTML={{ __html: `${option}` }}
            />
          </>
        ))}
      </div>
      <button onClick={handleNextButton}>Next</button>
    </div>
  )
}

export default Content
