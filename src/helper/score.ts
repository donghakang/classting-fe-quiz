export function scoreboard(users_answer: string[], real_answer: string[]) {
  let counter = 0
  for (let i = 0; i < real_answer.length; i++) {
    if (users_answer[i] === real_answer[i]) {
      // 정답:
      counter += 1
    }
  }

  return counter
}
