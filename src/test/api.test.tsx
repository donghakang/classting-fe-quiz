import { fetchQuiz } from '../helper/api'

test('API Test - 퀴즈 불러오기 1', () => {
  fetchQuiz(10)
    .then((res) => res.json())
    .then((data) => {
      expect(data.length).toBe(10)
    })
    .catch((err) => {
      throw new Error(err.message)
    })
})

test('API Test - 퀴즈 불러오기 2', () => {
  fetchQuiz(20)
    .then((res) => res.json())
    .then((data) => {
      expect(data.length).not.toBe(10)
    })
    .catch((err) => {
      throw new Error(err.message)
    })
})
