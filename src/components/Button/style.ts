import styled from '@emotion/styled'

export const StartButton = styled.button`
  cursor: pointer;
  width: 120px;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.green[500]};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  border: none;
  border-radius: 50%;
  font-weight: 700;

  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green[700]};
  }
`

export const NextButton = styled.button`
  display: block;
  margin: auto;
  position: relative;
  width: 120px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.green[500]};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  font-size: 16px;
  border: none;
  font-weight: 600;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green[700]};
  }
`

export const RegularButton = styled.button`
  display: block;
  margin: auto;
  position: relative;
  width: 120px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.green[900]};
  border: 1px solid ${({ theme }) => theme.colors.green[500]};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.green[700]};
  }
`
