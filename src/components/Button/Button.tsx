import React from 'react'
import * as S from './style'

interface ButtonProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
}

export const StartButton: React.FC<ButtonProps> = ({
  handleClick,
  children,
}) => {
  return <S.StartButton onClick={handleClick}>{children}</S.StartButton>
}
