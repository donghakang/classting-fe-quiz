import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Graph from '../components/Graph'
import Modal from '../components/Modal'
import {
  QuizInterface,
  useQuizDispatch,
  useQuizState,
} from '../context/QuizContext'
import { numberToTime, scoreboard } from '../helper/score'
import Table from '../components/Table'

const ScorePage = () => {
  const { quiz, score, time } = useQuizState()
  const dispatch = useQuizDispatch()
  const navigate = useNavigate()

  const [isReview, setIsReview] = useState<boolean>(false)

  const counter = scoreboard(
    quiz.map((answer: QuizInterface) => answer.correct_answer),
    score
  )

  function handleRestart(e: React.MouseEvent<HTMLButtonElement>) {
    // 다시 풀기
    dispatch({ type: 'RESET_QUIZ' })
    navigate('/')
  }

  function handleReview(e: React.MouseEvent<HTMLButtonElement>) {
    // 오답 노트
    setIsReview(true)
  }

  const finishTime = Date.now() - time

  return (
    <>
      {quiz.length > 0 ? (
        <div>
          {counter}/{score.length}
          <div>{numberToTime(finishTime)}</div>
          <Graph correct={counter} incorrect={score.length - counter} />
          <div>정답: {counter}개</div>
          <div>오답: {score.length - counter}개</div>
          <button onClick={handleRestart}>다시 풀기</button>
          <button onClick={handleReview}>오답 노트</button>
          <Modal opened={isReview} setOpened={setIsReview}>
            <Table answer={score} quiz={quiz} />
          </Modal>
        </div>
      ) : (
        // 만약 quiz 가 시작되지 않았더라면, 첫화면으로 이동시킨다.
        <Navigate to="/start" />
      )}
    </>
  )
}

export default ScorePage
