import React, { createContext, Dispatch, useContext, useReducer } from 'react'

export interface QuizInterface {
  category: string
  correct_answer: string
  incorrect_answers: string[] // [string, string, string]
  options?: string[] // [string, string, string, string]
  difficulty: string
  question: string
  type: string
}

type QuizState = {
  score: string[]
  quiz: QuizInterface[]
}

type QuizAction =
  | { type: 'SET_SCOREBOARD'; count: number }
  | {
      type: 'SET_SCORE'
      quiz: { number: number; question: string }
    }
  | {
      type: 'SET_QUIZ'
      quiz: QuizInterface[]
    }

const initialState = {
  score: [],
  quiz: [],
}

function reducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'SET_SCOREBOARD':
      return {
        ...state,
        score: Array(action.count).fill(''),
      }
    case 'SET_SCORE':
      state.score[action.quiz.number - 1] = action.quiz.question
      console.log(state)
      return {
        ...state,
        score: state.score,
      }
    case 'SET_QUIZ':
      return {
        ...state,
        quiz: action.quiz.map((quiz) => {
          return {
            ...quiz,
            options: [quiz.correct_answer, ...quiz.incorrect_answers].sort(
              () => Math.random() - 0.5
            ),
          }
        }),
      }
    default:
      throw new Error('Unhandled action')
  }
}

type QuizDispatch = Dispatch<QuizAction>

// Context
const QuizStateContext = createContext<QuizState | null>(null)
const QuizDispatchContext = createContext<QuizDispatch | null>(null)

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <QuizStateContext.Provider value={state}>
      <QuizDispatchContext.Provider value={dispatch}>
        {children}
      </QuizDispatchContext.Provider>
    </QuizStateContext.Provider>
  )
}

// Context Hook
export function useQuizState() {
  const state = useContext(QuizStateContext)
  if (!state) throw new Error('Cannot find QuizProvider')
  return state
}

export function useQuizDispatch() {
  const dispatch = useContext(QuizDispatchContext)
  if (!dispatch) throw new Error('Cannot find QuizProvider')
  return dispatch
}
