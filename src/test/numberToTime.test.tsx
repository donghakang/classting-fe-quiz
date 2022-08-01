// helper/score

import { numberToTime } from '../helper/score'

test('numberToTime Test - 숫자에서 시간으로 반환 1', () => {
  expect(numberToTime(3000)).toBe('3초')
})
test('numberToTime Test - 숫자에서 시간으로 반환 2', () => {
  expect(numberToTime(4000)).not.toBe('5초')
})
test('numberToTime Test - 숫자에서 시간으로 반환 3', () => {
  expect(numberToTime(60012)).toBe('1분 0초')
})
