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
import { RegularButton } from '../components/Button'
import * as S from './style'

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
        <S.Score>
          <div className="score-container">
            <div className="info-container">
              <table className="info-table">
                <tr>
                  <th className="report-title" colSpan={2}>
                    Report
                  </th>
                </tr>
                <tr>
                  <th>총 문제 수</th>
                  <td>{score.length}</td>
                </tr>
                <tr>
                  <th>정답 수</th>
                  <td>{counter}개</td>
                </tr>
                <tr>
                  <th>오답 수</th>
                  <td>{score.length - counter}개</td>
                </tr>
                <tr>
                  <th>시간</th>
                  <td>{numberToTime(finishTime)}</td>
                </tr>
              </table>
              <div className="graph-wrapper">
                <Graph correct={counter} incorrect={score.length - counter} />
              </div>
            </div>
            <div className="button-container">
              <RegularButton handleClick={handleRestart}>
                다시 풀기
              </RegularButton>
              <RegularButton handleClick={handleReview}>
                오답 노트
              </RegularButton>
            </div>
          </div>
          <Modal opened={isReview} setOpened={setIsReview}>
            <Table answer={score} quiz={quiz} />
          </Modal>
        </S.Score>
      ) : (
        // 만약 quiz 가 시작되지 않았더라면, 첫화면으로 이동시킨다.
        <Navigate to="/start" />
      )}
    </>
  )
}

export default ScorePage
