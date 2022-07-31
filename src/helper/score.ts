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

// millisecond로 표시 되어있는 숫자를, M분 S초로 보여준다.
export function numberToTime(number: number) {
  const time = Math.floor(number / 1000)
  const minutes = Math.floor(time / 60)
  const seconds = time - minutes * 60

  return `${minutes}분 ${seconds}초`
}
