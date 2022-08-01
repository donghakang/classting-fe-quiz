import React from 'react'
import * as S from './style'

interface ButtonProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
  className?: string
}

export const StartButton: React.FC<ButtonProps> = ({
  handleClick,
  className,
  children,
}) => {
  return (
    <S.StartButton className={className} onClick={handleClick}>
      {children}
    </S.StartButton>
  )
}

export const NextButton: React.FC<ButtonProps> = ({
  handleClick,
  className,
  children,
}) => {
  return (
    <S.NextButton className={className} onClick={handleClick}>
      {children}
    </S.NextButton>
  )
}

export const RegularButton: React.FC<ButtonProps> = ({
  handleClick,
  className,
  children,
}) => {
  return (
    <S.RegularButton className={className} onClick={handleClick}>
      {children}
    </S.RegularButton>
  )
}
