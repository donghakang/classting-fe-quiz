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
          <td>{idx + 1}</td>
          <td>{answer[idx]}</td>
          <td>{question.correct_answer}</td>
          <td>{answer[idx] === question.correct_answer ? 'O' : 'X'}</td>
          <td>{question.difficulty}</td>
          <td>{question.category}</td>
        </tr>
      ))}
      <tr></tr>
    </S.Table>
  )
}

export default ReviewTable
