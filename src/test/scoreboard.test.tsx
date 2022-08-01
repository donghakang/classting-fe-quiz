// helper/score.ts

import { scoreboard } from '../helper/score'

test('scoreboard Test - 맞춘 문제가 몇개인지 리턴 1', () => {
  expect(scoreboard([], [])).toBe(0)
})
test('scoreboard Test - 맞춘 문제가 몇개인지 리턴 2', () => {
  const myAnswer = [
    'True',
    'False',
    'True',
    'False',
    'True',
    'False',
    'True',
    'False',
    'True',
    'False',
  ]
  const realAnswer = [
    'True',
    'False',
    'True',
    'False',
    'True',
    'False',
    'True',
    'False',
    'True',
    'False',
  ]
  expect(scoreboard(myAnswer, realAnswer)).toBe(10)
})
test('scoreboard Test - 맞춘 문제가 몇개인지 리턴 3', () => {
  const myAnswer = [
    'True',
    'False',
    'True',
    'False',
    'True',
    'False',
    'True',
    'False',
    'True',
    'False',
  ]
  const realAnswer = [
    'True',
    'True',
    'True',
    'True',
    'True',
    'True',
    'True',
    'True',
    'True',
    'True',
  ]
  expect(scoreboard(myAnswer, realAnswer)).toBe(5)
})
