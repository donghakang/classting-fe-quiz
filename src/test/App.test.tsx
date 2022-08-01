import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from '../App'

test('Inital Page Test - 첫 화면 "퀴즈 풀기" 버튼', () => {
  const appElement = render(<App />)
  expect(appElement).toMatchSnapshot()

  const buttonElement = screen.getByText(/퀴즈 풀기/i)
  expect(buttonElement).toBeInTheDocument()
})
