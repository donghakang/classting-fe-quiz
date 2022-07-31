import React from 'react'
import { QuizInterface } from '../../context/QuizContext'
import * as S from './style'

interface ReviewTableProps {
  answer: string[]
  quiz: QuizInterface[]
}

const ReviewTable: React.FC<ReviewTableProps> = ({ answer, quiz }) => {
  return (
    <S.Table>
      <tr>
        <th>퀴즈 번호</th>
        <th>답변</th>
        <th>정답</th>
        <th>정답 여부</th>
        <th>난이도</th>
        <th>카테고리</th>
      </tr>
      {quiz.map((question: QuizInterface, idx: number) => (
        <tr key={idx}>
          <td className="center">{idx + 1}</td>
          <td>{answer[idx]}</td>
          <td>{question.correct_answer}</td>
          <td className={`center`}>
            <span
              className={`is-correct ${
                answer[idx] === question.correct_answer ? 'O' : 'X'
              }`}
            >
              {answer[idx] === question.correct_answer ? 'O' : 'X'}
            </span>
          </td>
          <td className={`center`}>
            <span className={`level ${question.difficulty}`}>
              {question.difficulty}
            </span>
          </td>
          <td>{question.category}</td>
        </tr>
      ))}
      <tr></tr>
    </S.Table>
  )
}

export default ReviewTable
