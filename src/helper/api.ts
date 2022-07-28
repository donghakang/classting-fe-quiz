const API_ENDPOINT = 'https://opentdb.com/api.php'

// nu
export const fetchQuiz = (numOfQuiz: number) => {
  return fetch(`${API_ENDPOINT}?amount=${numOfQuiz}`)
}
